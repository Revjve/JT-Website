import { createFileRoute } from "@tanstack/react-router";
import { CarFront, CheckCircle2, Phone, ShieldCheck, Sparkles } from "lucide-react";

import { DetailingPackagesSection } from "@/components/detailing-packages";
import logo from "@/assets/jt-logo.png";

const PHONE_TEL = "tel:+12627313479";
const PHONE_DISPLAY = "(262) 731-3479";

export const Route = createFileRoute("/detailing")({
  head: () => ({
    meta: [
      { title: "Car Detailing Packages | JT Cleaning" },
      {
        name: "description",
        content:
          "Compare JT Cleaning car detailing packages and request the right option for your vehicle. Choose the package that fits your vehicle and budget.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Car Detailing Packages | JT Cleaning" },
      {
        property: "og:description",
        content:
          "Choose the JT Cleaning detailing package that fits your vehicle and budget, from a simple refresh to a full showroom finish.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jtcleaners.com/detailing" },
      { property: "og:site_name", content: "JT Cleaning" },
      { property: "og:image", content: "https://jtcleaners.com/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Car Detailing Packages | JT Cleaning" },
      {
        name: "twitter:description",
        content:
          "Choose the JT Cleaning detailing package that fits your vehicle and budget, from a simple refresh to a full showroom finish.",
      },
      { name: "twitter:image", content: "https://jtcleaners.com/favicon.png" },
    ],
    links: [{ rel: "canonical", href: "https://jtcleaners.com/detailing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "JT Cleaning",
          url: "https://jtcleaners.com",
          logo: "https://jtcleaners.com/favicon.png",
          telephone: "+12627313479",
          description:
            "Professional pressure washing, exterior cleaning, and vehicle detailing packages for homes, businesses, and personal vehicles.",
          areaServed: "Wisconsin",
          serviceType: [
            "Car Detailing",
            "Interior Car Detailing",
            "Exterior Car Detailing",
            "Vehicle Detailing Packages",
          ],
        }),
      },
    ],
  }),
  component: DetailingPage,
});

function DetailingPage() {
  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/detailing", label: "Detailing" },
    { href: "/#results", label: "Results" },
    { href: "/#contact", label: "Free Quote" },
  ];

  const trustPoints = [
    "Package pricing that stays easy to compare",
    "Interior and exterior detailing options",
    "Fast route back to the same JT Cleaning quote form",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center">
            <img src={logo} alt="JT Cleaning logo" className="h-14 w-auto object-contain sm:h-16" />
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/74 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_TEL}
              className="hidden text-sm font-semibold text-foreground/78 transition-colors hover:text-primary sm:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_rgba(9,66,127,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Free Quote
            </a>
          </div>
        </div>
        <div className="border-t border-border/60 bg-white/72 lg:hidden">
          <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/62 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(84,167,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(9,66,127,0.12),transparent_38%)]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-22">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/82 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                <CarFront className="h-3.5 w-3.5" />
                Vehicle Detailing Packages
              </div>
              <h1 className="mt-5 max-w-xl font-[Outfit] text-4xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                Choose the package that fits your vehicle and budget.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Clean, straightforward detailing packages built to match how much attention your
                vehicle needs right now, from a basic reset to a full showroom finish.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-22px_rgba(9,66,127,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Request a Quote
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center rounded-full border border-border bg-white/82 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/78 px-4 py-4 shadow-[0_20px_45px_-35px_rgba(8,43,92,0.45)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-foreground/86">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-white/90 p-6 shadow-[0_30px_80px_-40px_rgba(8,43,92,0.45)]">
              <div className="rounded-[1.7rem] bg-[linear-gradient(155deg,rgba(255,255,255,0.98),rgba(231,242,255,0.96))] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Detailing at a glance
                    </div>
                    <h2 className="mt-3 font-[Outfit] text-3xl font-extrabold tracking-[-0.03em] text-foreground">
                      Three levels, one clean booking path.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Basic", price: "$145" },
                    { label: "Pro", price: "$195" },
                    { label: "Plus", price: "$245" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-border/70 bg-white/90 px-4 py-4 text-center shadow-[0_20px_50px_-38px_rgba(8,43,92,0.42)]"
                    >
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary/78">
                        {item.label}
                      </div>
                      <div className="mt-2 font-[Outfit] text-3xl font-extrabold tracking-[-0.04em] text-foreground">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-[1.4rem] border border-primary/14 bg-white/82 px-4 py-4 text-sm leading-6 text-foreground/82">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    Pick a package, head back to the quote form, and JT Cleaning can follow up with
                    timing, vehicle details, and availability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-white/55 py-18 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Detailing Packages
              </div>
              <h2 className="mt-3 font-[Outfit] text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl">
                Clean pricing without guesswork.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Compare the package levels, choose what fits your vehicle, and use the matching
                request button to send the package choice into the existing quote form.
              </p>
            </div>

            <DetailingPackagesSection />
          </div>
        </section>

        <section className="py-16 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(9,66,127,0.97),rgba(34,104,183,0.95))] p-7 text-white shadow-[0_30px_80px_-42px_rgba(7,53,112,0.68)] sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/72">
                    Ready to book
                  </div>
                  <h2 className="mt-3 font-[Outfit] text-3xl font-extrabold tracking-[-0.03em] text-white">
                    Need help choosing between Basic, Pro, and Plus?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/82 sm:text-base">
                    Use the quote form and mention the vehicle type, current condition, and any
                    detail priorities. JT Cleaning can help narrow the right package quickly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Go to Free Quote
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center rounded-full border border-white/24 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/16"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[oklch(0.2_0.045_253)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="JT Cleaning logo" className="h-14 w-auto object-contain" />
            <p className="max-w-md text-sm leading-6 text-white/72">
              Pressure washing, exterior cleaning, and vehicle detailing packages from the same JT
              Cleaning team.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/72 sm:items-end">
            <a
              href={PHONE_TEL}
              className="font-semibold text-white transition-colors hover:text-white/84"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="/#contact"
              className="text-xs font-medium text-white/58 transition-colors hover:text-white/86"
            >
              Request a free quote
            </a>
            <span>© {new Date().getFullYear()} JT Cleaning. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
