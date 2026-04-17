import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card — Claude / Anthropic design system.
 *
 * Three elevation variants from DESIGN.md section 6:
 *   standard  → Contained (1px border, no shadow)
 *   whisper   → Elevated (border + soft drop shadow)
 *   ring      → Interactive (warm ring halo, no border)
 *
 * Sub-components:
 *   CardLabel   — uppercase overline in terracotta
 *   CardHeader  — spacing container for label + title
 *   CardTitle   — serif heading (Georgia, weight 500)
 *   CardContent — body text area
 *   CardFooter  — action row
 */

type CardVariant = "standard" | "whisper" | "ring"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  standard: "border border-cream",
  whisper:  "border border-cream shadow-whisper",
  ring:     "shadow-ring-halo",
}

function Card({ className, variant = "standard", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        "bg-card rounded-xl p-7 transition-shadow duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("mb-4 flex flex-col gap-1", className)}
      {...props}
    />
  )
}

/** Uppercase overline — terracotta accent, sans-serif label */
function CardLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-label"
      className={cn(
        "font-sans text-[11px] font-medium uppercase tracking-[0.55px] text-terracotta",
        className
      )}
      {...props}
    />
  )
}

/** Serif heading — Georgia weight 500, line-height heading */
function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "font-serif text-[25px] font-medium leading-heading text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "font-sans text-[15px] leading-body text-olive-gray",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("mt-6 flex items-center gap-3", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardLabel, CardTitle, CardContent, CardFooter }
