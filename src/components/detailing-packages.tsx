import { CheckCircle2, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export type DetailingPackage = {
  name: string;
  price: number;
  features: string[];
  blurb: string;
  popular?: boolean;
};

export const detailingPackages: DetailingPackage[] = [
  {
    name: "Basic",
    price: 145,
    blurb: "A clean reset for vehicles that need the essentials handled well.",
    features: [
      "Exterior Hand Wash",
      "Tire Shine",
      "Interior Vacuum",
      "Window Cleaning",
      "Dashboard Wipe Down",
    ],
  },
  {
    name: "Pro",
    price: 195,
    blurb: "A fuller interior and exterior detail for everyday vehicles that need extra care.",
    features: [
      "Everything in Basic",
      "Deep Interior Cleaning",
      "Carpet Extraction",
      "Leather Conditioning",
      "Spray Wax Protection",
      "Door Jamb Cleaning",
    ],
  },
  {
    name: "Plus",
    price: 245,
    blurb:
      "The most complete finish for vehicles that need deep correction and a sharper final look.",
    features: [
      "Everything in Pro",
      "Paint Decontamination",
      "Clay Bar Treatment",
      "Premium Sealant",
      "Engine Bay Cleaning",
      "Showroom Finish",
    ],
    popular: true,
  },
];

export function getDetailingPackageServiceLabel(packageName: string) {
  return `${packageName} Detailing Package`;
}

export function getDetailingPackageQuoteHref(packageName: string) {
  return `/?service=${encodeURIComponent(getDetailingPackageServiceLabel(packageName))}#contact`;
}

function DetailingPackageCard({
  pkg,
  compact = false,
}: {
  pkg: DetailingPackage;
  compact?: boolean;
}) {
  const visibleFeatures = compact ? pkg.features.slice(0, 3) : pkg.features;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border bg-white/96 p-6 shadow-[0_26px_70px_-46px_rgba(8,43,92,0.45)]",
        pkg.popular
          ? "border-primary/35 ring-1 ring-primary/18 shadow-[0_34px_85px_-44px_rgba(16,81,153,0.42)]"
          : "border-border/75",
        compact ? "p-5" : "p-6 sm:p-7",
      )}
    >
      {pkg.popular ? (
        <div className="absolute inset-x-5 top-5">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,oklch(0.78_0.12_86),oklch(0.71_0.15_81))] px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[oklch(0.25_0.03_253)] shadow-[0_14px_30px_-18px_rgba(181,138,21,0.8)]">
            <Sparkles className="h-3.5 w-3.5" />
            Most Popular
          </div>
        </div>
      ) : null}

      <div className={cn("flex flex-col gap-4", pkg.popular ? "pt-12" : "")}>
        <div>
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary/70">
            {pkg.name} Package
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-[Outfit] text-4xl font-extrabold tracking-[-0.05em] text-foreground">
              ${pkg.price}
            </span>
            <span className="pb-1 text-sm font-medium text-muted-foreground">per vehicle</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{pkg.blurb}</p>
        </div>

        <ul className="space-y-3">
          {visibleFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-foreground/84"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {compact && pkg.features.length > visibleFeatures.length ? (
          <p className="text-sm font-medium text-primary/82">+ more included in the full package</p>
        ) : null}
      </div>

      <div className="mt-6 pt-2">
        <a
          href={getDetailingPackageQuoteHref(pkg.name)}
          className={cn(
            "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
            pkg.popular
              ? "bg-primary text-primary-foreground shadow-[0_18px_40px_-22px_rgba(9,66,127,0.9)]"
              : "border border-primary/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(233,243,255,0.92))] text-primary hover:border-primary/35",
          )}
        >
          {`Request ${pkg.name}`}
        </a>
      </div>
    </article>
  );
}

export function DetailingPackagesSection({ variant = "full" }: { variant?: "full" | "preview" }) {
  const isPreview = variant === "preview";

  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", isPreview ? "mt-8" : "mt-12")}>
      {detailingPackages.map((pkg) => (
        <DetailingPackageCard key={pkg.name} pkg={pkg} compact={isPreview} />
      ))}
    </div>
  );
}
