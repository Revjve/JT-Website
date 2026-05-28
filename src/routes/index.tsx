import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  CheckCircle2,
  Home,
  Droplets,
  Building2,
  Trees,
  Wind,
  Sparkles,
  ShieldCheck,
  DollarSign,
  Heart,
  ClipboardCheck,
  Star,
  Mail,
  User,
  MessageSquare,
  Menu,
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
      { title: "JT Cleaning | Pressure Washing & Cleaning Services" },
      {
        name: "description",
        content:
          "JT Cleaning provides professional pressure washing and exterior cleaning services for homes and businesses. Call (920) 691-2356 for a free quote.",
      },
      { property: "og:title", content: "JT Cleaning | Pressure Washing & Cleaning Services" },
      {
        property: "og:description",
        content:
          "Professional pressure washing for homes and businesses. Free quotes. Call (920) 691-2356.",
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
            "Professional pressure washing and exterior cleaning services for homes and businesses.",
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
  { icon: Droplets, title: "Pressure Washing", desc: "Powerful, safe cleaning for all exterior surfaces." },
  { icon: Home, title: "House Washing", desc: "Soft wash to restore your siding without damage." },
  { icon: Wind, title: "Driveway Cleaning", desc: "Lift dirt, oil, and grime from concrete and asphalt." },
  { icon: Sparkles, title: "Sidewalk Cleaning", desc: "Bright, clean walkways that boost curb appeal." },
  { icon: Trees, title: "Deck & Patio Cleaning", desc: "Revive wood and stone surfaces back to like-new." },
  { icon: Droplets, title: "Gutter Cleaning", desc: "Clear gutters to protect your home from water damage." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Keep your storefront and property looking sharp." },
  { icon: Sparkles, title: "Exterior Surface Cleaning", desc: "Fences, garages, and more — fully cleaned." },
];

const reasons = [
  { icon: ShieldCheck, title: "Reliable Service", desc: "On time, every time. We show up and get the job done." },
  { icon: CheckCircle2, title: "Professional Results", desc: "Quality work you can see — and be proud of." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Fair, upfront pricing with no surprises." },
  { icon: Heart, title: "Local & Friendly", desc: "A local team that treats you like a neighbor." },
  { icon: ClipboardCheck, title: "Free Quotes", desc: "Get a no-pressure estimate before we start." },
  { icon: ShieldCheck, title: "Careful With Your Property", desc: "We respect your home like it's our own." },
];

const results = [
  { img: baDriveway, alt: "Before and after of a driveway cleaning" },
  { img: baHouse, alt: "Before and after of a house siding wash" },
  { img: baDeck, alt: "Before and after of a wood deck cleaning" },
];

const testimonials = [
  {
    name: "Mark R.",
    text: "JT did a great job on our driveway and sidewalk. Showed up on time and the price was exactly what they quoted.",
  },
  {
    name: "Sarah L.",
    text: "Our house siding looks brand new. Easy to work with and very thorough. Would hire again.",
  },
  {
    name: "Dan K.",
    text: "Cleaned the deck and patio before a family party. Friendly crew, solid work, fair price.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Results />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Choose Us" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="JT Cleaning logo" className="h-10 w-10 object-contain" />
          <span className="font-extrabold text-lg tracking-tight">JT Cleaning</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="sm:hidden inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Local • Trusted • Insured
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Professional Pressure Washing &{" "}
            <span className="text-primary">Cleaning Services</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Helping homes and businesses look clean, fresh, and cared for.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:opacity-90 transition-opacity"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Request a Free Quote
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <a href={PHONE_TEL} className="font-semibold text-foreground hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
            <img
              src={heroImg}
              alt="Freshly pressure washed home exterior"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-xl bg-background border border-border shadow-lg px-4 py-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <div>
              <div className="text-sm font-bold">JT Cleaning</div>
              <div className="text-xs text-muted-foreground">Pressure Washing Pros</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <div className="text-xs font-bold tracking-widest text-primary uppercase">{eyebrow}</div>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Cleaning Services"
          sub="From driveways to storefronts, we clean it all — carefully and thoroughly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="Why Homeowners Pick JT Cleaning" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 rounded-xl bg-card border border-border p-6">
              <div className="shrink-0 h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real Results"
          title="Before & After"
          sub="See the difference a professional cleaning makes."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <img
                src={r.img}
                alt={r.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[3/2]"
              />
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Before / After</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  JT Cleaning
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader eyebrow="About" title="Built on Quality and Dependability" />
        <p className="text-lg text-muted-foreground leading-relaxed">
          JT Cleaning is a local pressure washing company focused on quality work, strong curb
          appeal, and dependable service. We take pride in making homes and businesses look their
          best — whether it's a driveway, a full house wash, or a storefront. When you call us,
          you get straightforward pricing, careful work, and a team that actually shows up.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title="What Customers Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-card border border-border p-6 shadow-sm">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-4 text-sm font-bold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Please enter your name.";
    if (!data.phone?.trim()) errs.phone = "Please enter your phone number.";
    if (!data.email?.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Enter a valid email.";
    if (!data.service?.trim()) errs.service = "Please select a service.";
    if (!data.message?.trim()) errs.message = "Please add a short message.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader eyebrow="Get In Touch" title="Request Your Free Quote" />
          <div className="rounded-2xl bg-primary text-primary-foreground p-6 shadow-md">
            <div className="text-sm uppercase font-bold tracking-widest opacity-90">Call us today</div>
            <a href={PHONE_TEL} className="mt-1 block text-3xl sm:text-4xl font-extrabold hover:underline">
              {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE_TEL}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <ul className="mt-6 space-y-3">
            {["Free, no-pressure quotes", "Honest, upfront pricing", "Quick response — usually same day"].map(
              (i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> {i}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Thanks — we got your request!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll reach out shortly. For faster service, call{" "}
                <a href={PHONE_TEL} className="font-semibold text-primary">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Field label="Name" name="name" icon={User} error={errors.name} />
              <Field label="Phone" name="phone" type="tel" icon={Phone} error={errors.phone} />
              <Field label="Email" name="email" type="email" icon={Mail} error={errors.email} />
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us about the job..."
                  />
                </div>
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Request Free Quote
              </button>
            </form>
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
      <label htmlFor={name} className="block text-sm font-semibold mb-1.5">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          id={name}
          name={name}
          type={type}
          className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.06_250)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="JT Cleaning logo" className="h-12 w-12 object-contain" />
            <span className="text-xl font-extrabold">JT Cleaning</span>
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Professional pressure washing and exterior cleaning for homes and businesses.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#why" className="hover:text-primary">Why Choose Us</a></li>
            <li><a href="#results" className="hover:text-primary">Results</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-primary">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} JT Cleaning. All rights reserved.</span>
          <span>
            Call us:{" "}
            <a href={PHONE_TEL} className="text-white hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
