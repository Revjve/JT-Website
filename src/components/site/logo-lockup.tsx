import Image from "next/image"

import { cn } from "@/lib/utils"

type LogoLockupProps = {
  className?: string
  compact?: boolean
}

export function LogoLockup({ className, compact = false }: LogoLockupProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative overflow-hidden rounded-[1.35rem] border border-[var(--brand-blue-border)] bg-white shadow-[0_18px_40px_-28px_rgba(7,38,88,0.48)]">
        <Image
          src="/jt-cleaning-logo.png"
          alt="JT Cleaning pressure washing logo"
          width={compact ? 64 : 88}
          height={compact ? 64 : 88}
          className={cn(
            "h-auto w-auto object-contain",
            compact ? "size-14 p-1.5" : "size-[4.5rem] p-2"
          )}
          priority={!compact}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-3xl leading-none font-semibold tracking-[0.03em] text-[var(--brand-blue-deep)] sm:text-4xl">
          JT Cleaning
        </span>
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Pressure washing
        </span>
      </div>
    </div>
  )
}
