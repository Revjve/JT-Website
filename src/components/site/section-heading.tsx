import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <p className="inline-flex w-fit items-center rounded-full border border-[var(--brand-gold-edge)] bg-[var(--brand-gold-soft)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-deep)]">
        {eyebrow}
      </p>
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-4xl leading-none font-semibold tracking-[0.01em] text-foreground sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-[65ch] text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
