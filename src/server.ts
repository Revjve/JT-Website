import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type WorkerEnv = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
};

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function normalizeField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseRecipientList(value: string): string[] {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getContactValidationError(payload: ContactPayload): string | null {
  const name = normalizeField(payload.name);
  const phone = normalizeField(payload.phone);
  const email = normalizeField(payload.email);
  const message = normalizeField(payload.message);

  if (!name || !message || (!phone && !email)) {
    return "Missing required fields.";
  }

  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return "Missing required fields.";
  }

  return null;
}

async function parseContactPayload(request: Request): Promise<ContactPayload | null> {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") return null;
    return body as ContactPayload;
  } catch {
    return null;
  }
}

async function sendContactEmail(
  env: WorkerEnv,
  payload: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
  },
) {
  const submittedAt = new Date().toISOString();
  const service = payload.service || "Not provided";
  const phone = payload.phone || "Not provided";
  const email = payload.email || "Not provided";
  const recipients = parseRecipientList(env.CONTACT_TO_EMAIL ?? "");

  const text = [
    "New JT Cleaning Quote Request",
    "",
    `Name: ${payload.name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service Needed: ${service}`,
    `Message: ${payload.message}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const html = `
    <h2>New JT Cleaning Quote Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: recipients,
      subject: "New JT Cleaning Quote Request",
      reply_to: payload.email || undefined,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const resendBody = await response.text();
    console.error("Resend send failed", response.status, resendBody);
    throw new Error("Resend send failed");
  }
}

async function handleContactRequest(request: Request, env: WorkerEnv): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed." }, 405);
  }

  const payload = await parseContactPayload(request);
  if (!payload) {
    return jsonResponse({ success: false, error: "Missing required fields." }, 400);
  }

  if (normalizeField(payload.company)) {
    return jsonResponse({ success: true });
  }

  const validationError = getContactValidationError(payload);
  if (validationError) {
    return jsonResponse({ success: false, error: validationError }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    console.error("Missing contact email environment variables.");
    return jsonResponse(
      { success: false, error: "Could not send message. Please call JT Cleaning directly." },
      500,
    );
  }

  try {
    await sendContactEmail(env, {
      name: normalizeField(payload.name),
      phone: normalizeField(payload.phone),
      email: normalizeField(payload.email),
      service: normalizeField(payload.service),
      message: normalizeField(payload.message),
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse(
      { success: false, error: "Could not send message. Please call JT Cleaning directly." },
      500,
    );
  }
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} - try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const workerEnv = env as WorkerEnv;

    try {
      const { pathname } = new URL(request.url);
      if (pathname === "/api/contact") {
        return await handleContactRequest(request, workerEnv);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, workerEnv, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
