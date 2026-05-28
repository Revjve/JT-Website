import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Droplets,
  Home,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  User,
  Wind,
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <AboutAndContact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center">
          <img src={logo} alt="JT Cleaning logo" className="h-14 w-auto object-contain sm:h-16" />
        </a>
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
                className="mx-auto h-28 w-auto object-contain sm:h-32"
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const nextErrors: Record<string, string> = {};

    if (!data.name?.trim()) nextErrors.name = "Please enter your name.";
    if (!data.phone?.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!data.email?.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.service?.trim()) nextErrors.service = "Please select a service.";
    if (!data.message?.trim()) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(233,243,255,0.72))] py-18 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div>
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
                We’ll reach out shortly. If you want a faster response, call{" "}
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
                <Field label="Name" name="name" icon={User} error={errors.name} />
                <Field label="Phone" name="phone" type="tel" icon={Phone} error={errors.phone} />
                <Field label="Email" name="email" type="email" icon={Mail} error={errors.email} />
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
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errors.service ? (
                    <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                  ) : null}
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
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-22px_rgba(9,66,127,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request Free Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
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

function Footer() {
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
          <span>© {new Date().getFullYear()} JT Cleaning. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
