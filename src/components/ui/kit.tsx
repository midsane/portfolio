import * as React from "react"

import { cn } from "@/lib/utils"

// Bracketed, letter-spaced mono eyebrow used above every section heading.
function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground",
        className
      )}
    >
      [ {children} ]
    </p>
  )
}

// Full-bleed hairline rule between sections.
function Divider({ className }: { className?: string }) {
  return <div className={cn("border-t border-border/60", className)} />
}

export { SectionLabel, Divider }
