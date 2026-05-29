import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Droplets,
  FileText,
  Home,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  User,
  Wind,
  X,
} from "lucide-react";
import logo from "@/assets/jt-logo.png";
import heroImg from "@/assets/hero-house.jpg";
import baDriveway from "@/assets/ba-driveway.jpg";
import baHouse from "@/assets/ba-house.jpg";
import baDeck from "@/assets/ba-deck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JT Cleaning | Pressure Washing, Window Cleaning & Lawn Mowing" },
      {
        name: "description",
        content:
          "JT Cleaning provides pressure washing, window cleaning, gutter cleaning, and lawn mowing for local homes. Call (920) 691-2356 for a free quote.",
      },
      {
        property: "og:title",
        content: "JT Cleaning | Pressure Washing, Window Cleaning & Lawn Mowing",
      },
      {
        property: "og:description",
        content:
          "Simple, reliable exterior cleaning and lawn care for local homes. Free quotes at (920) 691-2356.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JT Cleaning",
          telephone: "+19206912356",
          description:
            "Pressure washing, window cleaning, gutter cleaning, driveway cleaning, and lawn mowing for local homes.",
          areaServed: "Local",
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE_TEL = "tel:9206912356";
const PHONE_DISPLAY = "(920) 691-2356";
const PRIVACY_CONSENT_KEY = "jt-cleaning-privacy-choice";

const services = [
  {
    icon: Droplets,
    title: "Pressure Washing",
    desc: "A strong surface clean for siding, concrete, patios, and built-up grime.",
  },
  {
    icon: Sparkles,
    title: "Window Cleaning",
    desc: "Cleaner glass, brighter rooms, and a sharper-looking home from the curb.",
  },
  {
    icon: Trees,
    title: "Lawn Mowing",
    desc: "Routine lawn cuts that keep the whole property looking tidy and cared for.",
  },
  {
    icon: Wind,
    title: "Driveway Cleaning",
    desc: "Lift dirt, stains, and weather marks from concrete and asphalt.",
  },
  {
    icon: Home,
    title: "Sidewalk Cleaning",
    desc: "Safer, brighter walkways with less grime and buildup underfoot.",
  },
  {
    icon: Sparkles,
    title: "Deck & Patio Cleaning",
    desc: "Freshen outdoor gathering spaces before summer weekends and family events.",
  },
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    desc: "Clear gutters and downspouts to help water move away from your home.",
  },
  {
    icon: ShieldCheck,
    title: "Exterior Surface Cleaning",
    desc: "Fence lines, garage doors, and other outdoor surfaces cleaned with care.",
  },
];

const benefits = [
  "Free quotes with straightforward pricing",
  "Fast communication and dependable arrival times",
  "Careful work that respects your property",
  "A cleaner-looking home without the hassle",
];

const results = [
  {
    img: baDriveway,
    alt: "Before and after driveway cleaning",
    title: "Driveway refresh",
  },
  {
    img: baHouse,
    alt: "Before and after exterior house cleaning",
    title: "Exterior cleanup",
  },
  {
    img: baDeck,
    alt: "Before and after deck cleaning",
    title: "Deck reset",
  },
];

const privacySections = [
  {
    title: "Overview",
    body: [
      "JT Cleaning LLC (the “Company”) is committed to maintaining robust privacy protections for its users. Our Privacy Policy is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.",
      "For purposes of this Agreement, “Site” refers to the Company’s website, which can be accessed at jtcleaners.com. “Service” refers to the Company’s services accessed via the Site, in which users can book cleaning services. The terms “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of our Site or our Service.",
      "By accessing our Site or our Service, you accept our Privacy Policy and Terms of Use found on the website, and you consent to our collection, storage, use and disclosure of your Personal Information as described in this Privacy Policy.",
    ],
  },
  {
    title: "I. Information We Collect",
    body: [
      "We collect Non-Personal Information and Personal Information. Non-Personal Information includes anonymous usage data, general demographic information, referring and exit pages and URLs, platform types, submitted preferences and click totals. Personal Information includes your email, name, physical address and IP address, which you may submit through the Site.",
      "To improve the quality of the Service, we may track browser and device information such as the referring URL, browser type, device used, and time and date of access. We use cookies to collect general website-viewer area information. We may use both persistent and session cookies, and we do not store cookies for over 30 days.",
      "In addition to information collected automatically, users who register may provide information such as an email address, user name and password. The Site and Service are not directed to anyone under the age of 13, and if we learn that we collected information from someone under 13 without proper consent, we will delete it as soon as possible.",
    ],
  },
  {
    title: "II. How We Use and Share Information",
    body: [
      "We do not sell, trade, rent or otherwise share Personal Information for marketing purposes without your consent. We may share it with vendors performing services for the Company, such as email communication providers, and only as directed by us and in accordance with this policy.",
      "Personal Information is generally used to communicate with you, respond to questions, request feedback, provide support and send promotional offers. We may also disclose information when reasonably necessary to comply with legal obligations, enforce our Terms of Service, investigate fraud or security issues, or protect users and the public.",
      "We use Non-Personal Information to improve the Service, customize user experience, track trends and analyze usage patterns. In the event of a business transaction such as a merger, acquisition or asset sale, your information may be transferred as part of that transaction.",
    ],
  },
  {
    title: "III. How We Protect Information",
    body: [
      "We implement security measures designed to protect your information from unauthorized access, including encryption, firewalls and secure socket layer technology. However, no security measure is perfect, and by using our Service, you acknowledge and accept these risks.",
    ],
  },
  {
    title: "IV. Your Rights Regarding the Use of Your Personal Information",
    body: [
      "You have the right at any time to prevent us from contacting you for marketing purposes. You can opt out by following unsubscribe instructions in promotional emails or by indicating your preferences in the settings of the Site. Even if you opt out of promotions, we may still send administrative communications such as policy updates.",
    ],
  },
  {
    title: "V. Links to Other Websites",
    body: [
      "Our Service may contain links to other websites or applications. This Privacy Policy applies only to information collected by us through the Site and Service, and we encourage users to read the privacy statements of any third-party sites they visit.",
    ],
  },
  {
    title: "VI. Changes to Our Privacy Policy",
    body: [
      "We may change this Privacy Policy and our Terms of Service at any time. Significant changes will go into effect 30 days after notification by email or prominent notice on the Site. Non-material changes or clarifications will take effect immediately.",
    ],
  },
  {
    title: "VII. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or the practices of this Site, please contact us at services@jtcleaners.com.",
      "Last Updated: 5/28/2026.",
    ],
  },
];

function Index() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [consentChoice, setConsentChoice] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setConsentChoice(window.localStorage.getItem(PRIVACY_CONSENT_KEY));
  }, []);

  const saveConsentChoice = (value: "accepted" | "opted_out") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(PRIVACY_CONSENT_KEY, value);
    }
    setConsentChoice(value);
    setIsPrivacyOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Results />
        <AboutAndContact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyConsentBanner
        hidden={consentChoice !== null}
        onAccept={() => saveConsentChoice("accepted")}
        onOptOut={() => saveConsentChoice("opted_out")}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        onAccept={() => saveConsentChoice("accepted")}
        onOptOut={() => saveConsentChoice("opted_out")}
      />
    </div>
  );
}

function Header({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Free Quote" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center">
          <img src={logo} alt="JT Cleaning logo" className="h-14 w-auto object-contain sm:h-16" />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/74 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-sm font-semibold text-foreground/58 transition-colors hover:text-primary"
          >
            Privacy
          </button>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_TEL}
            className="hidden text-sm font-semibold text-foreground/78 transition-colors hover:text-primary sm:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_rgba(9,66,127,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Free Quote
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 bg-white/72 lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/62 sm:px-6 lg:px-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="shrink-0 transition-colors hover:text-primary"
          >
            Privacy
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(84,167,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(9,66,127,0.12),transparent_38%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
        <div className="relative">
          <div className="inline-flex items-center rounded-full border border-primary/15 bg-white/82 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            Local exterior cleaning and lawn care
          </div>
          <h1 className="mt-5 max-w-xl font-[Outfit] text-4xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            A cleaner-looking home without overcomplicating the job.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            JT Cleaning handles pressure washing, window cleaning, gutter cleaning, driveway
            cleanup, and lawn mowing with simple scheduling and clear pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-22px_rgba(9,66,127,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-border bg-white/82 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              See Services
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/78 px-4 py-4 shadow-[0_20px_45px_-35px_rgba(8,43,92,0.45)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-6 text-foreground/86">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] border border-border/70 bg-white/88 p-6 shadow-[0_30px_80px_-40px_rgba(8,43,92,0.45)]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(236,245,255,0.96))] p-6">
              <img
                src={logo}
                alt="JT Cleaning"
                className="mx-auto h-28 w-auto object-contain drop-shadow-[0_18px_38px_rgba(7,53,112,0.2)] sm:h-32"
              />
              <div className="mt-5 grid gap-3 text-sm text-foreground/82 sm:grid-cols-3">
                <div className="rounded-2xl bg-background/82 px-4 py-3 text-center">
                  Pressure washing
                </div>
                <div className="rounded-2xl bg-background/82 px-4 py-3 text-center">
                  Window cleaning
                </div>
                <div className="rounded-2xl bg-background/82 px-4 py-3 text-center">
                  Lawn mowing
                </div>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-border/70">
              <img
                src={heroImg}
                alt="Clean home exterior after service"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "left" ? "max-w-xl" : "mx-auto max-w-2xl text-center"}>
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-[Outfit] text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base leading-7 text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-border/70 bg-white/55 py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="The work we handle most often"
          sub="Straightforward services that help the whole property look cleaner, brighter, and more maintained."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.6rem] border border-border/70 bg-background/90 p-6 shadow-[0_24px_60px_-44px_rgba(8,43,92,0.5)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-[Outfit] text-xl font-bold tracking-[-0.02em] text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before and After"
          title="Proof in the final look"
          sub="A few examples of the difference a focused cleanup can make."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.title}
              className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-white shadow-[0_26px_65px_-44px_rgba(8,43,92,0.48)]"
            >
              <img
                src={result.img}
                alt={result.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="font-[Outfit] text-lg font-bold tracking-[-0.02em] text-foreground">
                  {result.title}
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  JT Cleaning
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutAndContact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const nextErrors: Record<string, string> = {};

    if (!data.name?.trim()) nextErrors.name = "Please enter your name.";
    if (!data.phone?.trim() && !data.email?.trim()) {
      nextErrors.phone = "Please enter a phone number or email address.";
      nextErrors.email = "Please enter a phone number or email address.";
    } else if (data.email?.trim() && !/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.message?.trim()) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name?.trim() ?? "",
          phone: data.phone?.trim() ?? "",
          email: data.email?.trim() ?? "",
          service: data.service?.trim() ?? "",
          message: data.message?.trim() ?? "",
          company: data.company?.trim() ?? "",
        }),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !result.success) {
        setSubmitError(result.error || "Could not send message. Please call JT Cleaning directly.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Could not send message. Please call JT Cleaning directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(233,243,255,0.72))] py-18 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div id="about">
          <SectionHeader
            eyebrow="About JT Cleaning"
            title="Simple service, clear communication, and a cleaner property."
            sub="We focus on the work most homeowners actually need: strong exterior cleaning, bright windows, tidy walkways, and regular lawn mowing."
            align="left"
          />
          <div className="mt-8 rounded-[1.8rem] border border-border/70 bg-white/90 p-6 shadow-[0_26px_60px_-42px_rgba(8,43,92,0.42)]">
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Reach out directly
            </div>
            <a
              href={PHONE_TEL}
              className="mt-3 block font-[Outfit] text-3xl font-extrabold tracking-[-0.04em] text-foreground transition-colors hover:text-primary sm:text-4xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Free quotes, quick replies, and a clear scope before work starts.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.slice(0, 3).map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground/84"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border/70 bg-white/92 p-6 shadow-[0_30px_80px_-46px_rgba(8,43,92,0.5)] sm:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-[Outfit] text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                Request received.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                We&rsquo;ll reach out shortly. If you want a faster response, call{" "}
                <a href={PHONE_TEL} className="font-semibold text-primary">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <SectionHeader
                eyebrow="Free Quote"
                title="Tell us what you need."
                sub="Share the service, the property, and anything you want us to know."
                align="left"
              />
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
                <fieldset disabled={isSubmitting} className="space-y-4">
                  <Field label="Name" name="name" icon={User} error={errors.name} />
                  <Field label="Phone" name="phone" type="tel" icon={Phone} error={errors.phone} />
                  <Field label="Email" name="email" type="email" icon={Mail} error={errors.email} />
                  <div
                    aria-hidden="true"
                    className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                  >
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-semibold text-foreground"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Describe the job, location, and timing."
                        className="w-full rounded-2xl border border-input bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                      />
                    </div>
                    {errors.message ? (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    ) : null}
                  </div>
                  {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-22px_rgba(9,66,127,0.9)] transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending Request..." : "Request Free Quote"}
                  </button>
                </fieldset>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function PrivacyConsentBanner({
  hidden,
  onAccept,
  onOptOut,
  onOpenPrivacy,
}: {
  hidden: boolean;
  onAccept: () => void;
  onOptOut: () => void;
  onOpenPrivacy: () => void;
}) {
  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-[rgba(255,255,255,0.22)] bg-[linear-gradient(135deg,rgba(9,66,127,0.98),rgba(40,110,189,0.95))] p-5 text-white shadow-[0_28px_65px_-28px_rgba(7,53,112,0.65)] backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/76">
              Privacy Notice
            </div>
            <h3 className="mt-2 font-[Outfit] text-2xl font-extrabold tracking-[-0.03em] text-white">
              We use only limited site data and short-lived cookies.
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/82">
              JT Cleaning uses cookies and browser data to keep the site working, improve
              experience, and respond to quote requests. You can accept or opt out of non-essential
              tracking choices and review the full policy any time.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/16"
            >
              <FileText className="h-4 w-4" />
              View Policy
            </button>
            <button
              type="button"
              onClick={onOptOut}
              className="inline-flex items-center rounded-full border border-white/28 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Opt Out
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivacyModal({
  isOpen,
  onClose,
  onAccept,
  onOptOut,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onOptOut: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(8,26,53,0.56)] px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[0_38px_100px_-42px_rgba(8,43,92,0.55)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/92 text-foreground/74 transition-colors hover:text-primary"
          aria-label="Close privacy policy"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-y-auto px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
          <div className="max-w-3xl">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Privacy Policy
            </div>
            <h3 className="mt-3 font-[Outfit] text-3xl font-extrabold tracking-[-0.03em] text-foreground">
              JT Cleaning LLC Privacy Policy
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              This policy explains how JT Cleaning LLC collects, uses, shares, and protects
              information from visitors and customers using the website and quote-request service.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {privacySections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.5rem] border border-border/70 bg-[rgba(248,251,255,0.82)] p-5"
              >
                <h4 className="font-[Outfit] text-xl font-bold tracking-[-0.02em] text-foreground">
                  {section.title}
                </h4>
                <div className="mt-3 space-y-3 text-sm leading-7 text-foreground/82">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border/70 pt-6">
            <button
              type="button"
              onClick={onOptOut}
              className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              Opt Out
            </button>
            <button
              type="button"
              onClick={onAccept}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  icon: Icon,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id={name}
          name={name}
          type={type}
          className="w-full rounded-2xl border border-input bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
        />
      </div>
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

function Footer({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[oklch(0.2_0.045_253)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="JT Cleaning logo" className="h-14 w-auto object-contain" />
          <p className="max-w-md text-sm leading-6 text-white/72">
            Pressure washing, window cleaning, and lawn mowing for homes that need a cleaner finish.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/72 sm:items-end">
          <a
            href={PHONE_TEL}
            className="font-semibold text-white transition-colors hover:text-white/84"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-xs font-medium text-white/58 transition-colors hover:text-white/86"
          >
            View privacy policy
          </button>
          <span>© {new Date().getFullYear()} JT Cleaning. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
