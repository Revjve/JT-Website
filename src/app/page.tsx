import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  MapPin,
  PhoneCall,
  Quote,
  Sparkles,
  Star,
} from "lucide-react"

import { LogoLockup } from "@/components/site/logo-lockup"
import { QuoteForm } from "@/components/site/quote-form"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ABOUT_BLURB,
  BENEFITS,
  LOCAL_BUSINESS_SCHEMA,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  RESULT_PREVIEWS,
  SERVICE_AREA_BLURB,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/site"

const primaryButtonClass = cn(
  buttonVariants({ size: "lg" }),
  "h-12 px-5 text-sm font-semibold uppercase tracking-[0.18em]"
)

const secondaryButtonClass = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-12 border-[var(--brand-blue-border)] bg-white/90 px-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-deep)] hover:bg-[var(--brand-gold-soft)]"
)

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />

      <header className="sticky top-0 z-30 border-b border-[var(--brand-blue-border)] bg-background/95 backdrop-blur">
        <div className="border-b border-[var(--brand-blue-border)] bg-[var(--brand-blue-deep)] text-white">
          <div className="site-shell flex flex-col gap-2 py-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-[var(--brand-gold)]" />
              Serving local homes and businesses in the surrounding Wisconsin
              area
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white transition hover:bg-white/16 sm:self-auto"
            >
              <PhoneCall className="size-4 text-[var(--brand-gold)]" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="site-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#home" aria-label="Go to JT Cleaning home section">
            <LogoLockup compact />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--brand-blue-main)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <a href={PHONE_HREF} className={secondaryButtonClass}>
              <PhoneCall data-icon="inline-start" />
              Call Now
            </a>
            <a href="#contact" className={primaryButtonClass}>
              <ArrowRight data-icon="inline-end" />
              Free Quote
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="flex flex-1 flex-col">
        <section className="section-anchor relative overflow-hidden py-16 sm:py-20">
          <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <p className="inline-flex w-fit items-center rounded-full border border-[var(--brand-gold-edge)] bg-[var(--brand-gold-soft)] px-3 py-1 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-deep)]">
                  Local exterior cleaning with dependable service
                </p>
                <div className="flex flex-col gap-4">
                  <h1 className="max-w-3xl font-heading text-5xl leading-[0.94] font-semibold tracking-[0.01em] text-[var(--brand-blue-deep)] sm:text-6xl lg:text-7xl">
                    Professional pressure washing and cleaning services
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    JT Cleaning helps homes and businesses look clean again
                    with straightforward service, quality results, and strong
                    curb appeal from the first call to the final rinse.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={PHONE_HREF} className={primaryButtonClass}>
                  <PhoneCall data-icon="inline-start" />
                  Call Now
                </a>
                <a href="#contact" className={secondaryButtonClass}>
                  <ArrowRight data-icon="inline-end" />
                  Request a Free Quote
                </a>
              </div>

              <div className="grid gap-4 rounded-[1.75rem] border border-[var(--brand-blue-border)] bg-white/88 p-5 shadow-[0_28px_60px_-44px_rgba(7,38,88,0.36)] sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-main)]">
                    Easy contact
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Call directly or send a quote request in a few quick steps.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-main)]">
                    Exterior focus
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Homes, walkways, patios, storefronts, and more.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-main)]">
                    Local service
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Serving nearby Wisconsin properties with friendly,
                    dependable scheduling.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 text-white shadow-[0_36px_85px_-42px_rgba(11,47,103,0.68)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[var(--brand-gold)]" />
                <div className="absolute inset-y-0 right-0 w-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />

                <div className="relative flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                        JT Cleaning
                      </p>
                      <h2 className="font-heading text-4xl leading-none font-semibold tracking-[0.01em] sm:text-5xl">
                        A clean, bold local presence
                      </h2>
                    </div>
                    <Sparkles className="mt-1 size-8 text-[var(--brand-gold)]" />
                  </div>

                  <div className="surface-panel rounded-[1.85rem] border border-white/25 p-4 sm:p-5">
                    <Image
                      src="/jt-cleaning-logo.png"
                      alt="JT Cleaning mascot logo"
                      width={1280}
                      height={1280}
                      priority
                      className="mx-auto h-auto w-full max-w-sm object-contain"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/18 bg-white/10 p-4 backdrop-blur">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                        What clients need
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/86">
                        Prompt communication, careful work, and results that
                        make a property look more cared for.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/18 bg-white/10 p-4 backdrop-blur">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                        Fastest next step
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="mt-2 inline-flex text-lg font-semibold text-white transition hover:text-[var(--brand-gold)]"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[var(--brand-blue-border)] bg-white/80 py-5">
          <div className="site-shell flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue-deep)]">
            <span className="text-muted-foreground">Common jobs</span>
            <span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1">
              House washing
            </span>
            <span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1">
              Driveway cleaning
            </span>
            <span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1">
              Patios and decks
            </span>
            <span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1">
              Gutter cleanup
            </span>
            <span className="rounded-full bg-[var(--brand-gold-soft)] px-3 py-1">
              Commercial exteriors
            </span>
          </div>
        </section>

        <section id="services" className="section-anchor py-20 sm:py-24">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading
              eyebrow="Services"
              title="Cleaning services built around curb appeal and clean first impressions"
              description="Each service is presented in plain language so customers know exactly what JT Cleaning can help with. Update the descriptions later as the business refines its specialty work."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {SERVICES.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.04}>
                  <Card className="service-card h-full rounded-[1.65rem] border border-[var(--brand-blue-border)]">
                    <CardHeader className="gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex rounded-full border border-[var(--brand-gold-edge)] bg-[var(--brand-gold-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-deep)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          JT Cleaning
                        </span>
                      </div>
                      <CardTitle className="font-heading text-3xl leading-none font-semibold text-[var(--brand-blue-deep)]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-7 text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="border-t border-[var(--brand-blue-border)] bg-[var(--brand-gold-soft)]/55 text-sm font-medium text-[var(--brand-blue-deep)]">
                      Free quote available
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="surface-panel rounded-[2rem] border border-[var(--brand-blue-border)] p-6 sm:p-8">
                <SectionHeading
                  eyebrow="Why choose JT Cleaning"
                  title="A dependable local company should feel easy to trust"
                  description="The design and copy here lean into professionalism without sounding overproduced. It should feel like a real service company that values its reputation."
                />

                <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-gold-edge)] bg-[var(--brand-gold-soft)] p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-deep)]">
                    About JT Cleaning
                  </p>
                  <p className="mt-3 max-w-[62ch] text-base leading-7 text-[var(--brand-blue-deep)]/88">
                    {ABOUT_BLURB}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="surface-panel rounded-[1.65rem] border border-[var(--brand-blue-border)] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 inline-flex size-11 items-center justify-center rounded-2xl bg-[var(--brand-blue-main)] text-white shadow-[0_16px_28px_-20px_rgba(7,38,88,0.6)]">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <p className="text-base leading-7 text-foreground">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="results" className="section-anchor py-20 sm:py-24">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading
              eyebrow="Before and after"
              title="A results section ready for your project photos"
              description="These preview cards are designed to be replaced with real before-and-after images later. Swap the placeholder panes for customer job photos when they are available."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {RESULT_PREVIEWS.map((result, index) => (
                <Reveal key={result.title} delay={index * 0.06}>
                  <Card className="overflow-hidden rounded-[1.8rem] border border-[var(--brand-blue-border)] bg-white">
                    <CardHeader className="gap-2">
                      <CardTitle className="font-heading text-3xl leading-none font-semibold text-[var(--brand-blue-deep)]">
                        {result.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-7 text-muted-foreground">
                        Easy to replace with real project imagery from recent
                        jobs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div
                          data-state="before"
                          className="photo-tile p-4 text-white"
                        >
                          <div className="relative flex h-full flex-col justify-between">
                            <span className="inline-flex w-fit rounded-full bg-black/22 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                              Before
                            </span>
                            <div className="flex flex-col gap-2">
                              <ImageIcon className="size-6 text-white/80" />
                              <p className="max-w-[18ch] text-base leading-6 text-white/86">
                                {result.before}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-state="after"
                          className="photo-tile p-4 text-white"
                        >
                          <div className="relative flex h-full flex-col justify-between">
                            <span className="inline-flex w-fit rounded-full bg-white/18 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                              After
                            </span>
                            <div className="flex flex-col gap-2">
                              <Sparkles className="size-6 text-[var(--brand-gold)]" />
                              <p className="max-w-[18ch] text-base leading-6 text-white/92">
                                {result.after}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-[var(--brand-blue-border)] bg-[var(--brand-gold-soft)]/50 text-sm leading-6 text-[var(--brand-blue-deep)]">
                      Replace both tiles with actual job photos to make this
                      section even stronger.
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="site-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="hero-panel rounded-[2rem] border border-white/10 p-6 text-white shadow-[0_36px_85px_-50px_rgba(11,47,103,0.7)] sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Service area
                </p>
                <h2 className="mt-3 font-heading text-4xl leading-none font-semibold tracking-[0.01em] sm:text-5xl">
                  Local homes and businesses, surrounding Wisconsin area
                </h2>
                <p className="mt-5 max-w-[56ch] text-base leading-8 text-white/82 sm:text-lg">
                  {SERVICE_AREA_BLURB}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-panel flex h-full flex-col justify-between rounded-[2rem] border border-[var(--brand-blue-border)] p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-main)]">
                    Need a quick answer?
                  </p>
                  <p className="max-w-[58ch] text-lg leading-8 text-muted-foreground">
                    A direct phone call is often the fastest way to talk through
                    the job, confirm the service, and schedule a quote.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a href={PHONE_HREF} className={primaryButtonClass}>
                    <PhoneCall data-icon="inline-start" />
                    {PHONE_DISPLAY}
                  </a>
                  <a href="#contact" className={secondaryButtonClass}>
                    <ArrowRight data-icon="inline-end" />
                    Request Quote
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="site-shell flex flex-col gap-10">
            <SectionHeading
              eyebrow="Reviews"
              title="Placeholder testimonials that feel natural and grounded"
              description="These stand in until JT Cleaning has real customer reviews to publish. The tone stays realistic on purpose, so the page does not feel inflated or overhyped."
              align="center"
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {TESTIMONIALS.map((review, index) => (
                <Reveal key={review.name} delay={index * 0.05}>
                  <Card className="h-full rounded-[1.75rem] border border-[var(--brand-blue-border)] bg-white">
                    <CardHeader className="gap-3">
                      <div className="flex items-center gap-1 text-[var(--brand-gold)]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={`${review.name}-${starIndex}`}
                            className="size-4 fill-current"
                          />
                        ))}
                      </div>
                      <CardTitle className="font-heading text-3xl leading-none font-semibold text-[var(--brand-blue-deep)]">
                        {review.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3">
                        <Quote className="mt-1 size-5 shrink-0 text-[var(--brand-blue-main)]" />
                        <p className="text-base leading-7 text-muted-foreground">
                          {review.quote}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-anchor py-20 sm:py-24">
          <div className="site-shell">
            <Reveal>
              <div className="surface-panel rounded-[2rem] border border-[var(--brand-blue-border)] p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                  <SectionHeading
                    eyebrow="About JT Cleaning"
                    title="Simple, careful, professional exterior cleaning"
                    description={ABOUT_BLURB}
                  />
                  <div className="rounded-[1.75rem] border border-[var(--brand-gold-edge)] bg-[var(--brand-gold-soft)] p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-deep)]">
                      What this site is built to do
                    </p>
                    <ul className="mt-4 flex flex-col gap-3 text-base leading-7 text-[var(--brand-blue-deep)]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 size-5 shrink-0" />
                        Make JT Cleaning feel dependable from the first screen.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 size-5 shrink-0" />
                        Give visitors a direct path to call or request a quote.
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 size-5 shrink-0" />
                        Stay easy to update as real photos, towns, and reviews
                        are added later.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-anchor py-20 sm:py-24">
          <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="hero-panel rounded-[2rem] border border-white/10 p-6 text-white shadow-[0_36px_85px_-50px_rgba(11,47,103,0.7)] sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Contact and free quote
                </p>
                <h2 className="mt-3 font-heading text-4xl leading-none font-semibold tracking-[0.01em] sm:text-5xl">
                  Ready to talk through the job?
                </h2>
                <p className="mt-5 max-w-[56ch] text-base leading-8 text-white/82 sm:text-lg">
                  Call directly for the fastest response, or send a quote
                  request with a few details about the property and service
                  needed.
                </p>

                <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-white/16 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/12 text-[var(--brand-gold)]">
                      <PhoneCall className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Phone
                      </span>
                      <a
                        href={PHONE_HREF}
                        className="text-2xl font-semibold tracking-[0.02em] text-white transition hover:text-[var(--brand-gold)]"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <a href={PHONE_HREF} className={secondaryButtonClass}>
                    <PhoneCall data-icon="inline-start" />
                    Call Now
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-panel rounded-[2rem] border border-[var(--brand-blue-border)] p-6 sm:p-8">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--brand-blue-border)] bg-[var(--brand-blue-deep)] py-12 text-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div className="flex flex-col gap-5">
            <LogoLockup className="[&_span:last-child]:text-white/72 [&_span:first-child]:text-white" />
            <p className="max-w-[42ch] text-sm leading-7 text-white/72">
              Professional pressure washing and exterior cleaning services for
              nearby Wisconsin homes and businesses.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white/16"
            >
              <PhoneCall className="size-4 text-[var(--brand-gold)]" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl leading-none font-semibold tracking-[0.01em]">
              Quick links
            </h2>
            <div className="flex flex-col gap-2 text-sm text-white/72">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl leading-none font-semibold tracking-[0.01em]">
              Services
            </h2>
            <div className="flex flex-col gap-2 text-sm text-white/72">
              {SERVICES.slice(0, 5).map((service) => (
                <span key={service.title}>{service.title}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="site-shell mt-10 border-t border-white/10 pt-6 text-sm text-white/58">
          <p>{new Date().getFullYear()} JT Cleaning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
