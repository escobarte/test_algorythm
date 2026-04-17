import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Button — Claude / Anthropic design system.
 *
 * Variants mirror DESIGN.md section 4:
 *   default   → Terracotta Brand (primary CTA)
 *   secondary → Warm Sand (secondary workhorse)
 *   outline   → White Surface (elevated, on light canvas)
 *   dark      → Dark Charcoal (inverted emphasis)
 *   ghost     → Transparent (minimal, contextual)
 *   destructive → Error state
 *   link      → Text-only
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-sans font-medium whitespace-nowrap",
    "cursor-pointer select-none",
    "transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // Focus — Focus Blue ring (the only cool color in Claude palette)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-blue focus-visible:ring-offset-2",
  ].join(" "),
  {
    variants: {
      variant: {
        // Terracotta Brand — primary CTA
        default:
          "bg-terracotta text-ivory rounded-xl text-[15px] shadow-ring-brand hover:brightness-95 active:brightness-90",

        // Warm Sand — secondary workhorse
        secondary:
          "bg-warm-sand text-charcoal-warm rounded-lg text-[15px] shadow-ring-warm hover:bg-[#e0ddd2] active:bg-[#d8d5cb]",

        // White Surface — for light backgrounds with border containment
        outline:
          "bg-white text-near-black border border-cream rounded-xl text-[15px] hover:bg-warm-sand active:bg-[#e0ddd2]",

        // Dark Charcoal — inverted (dark on light)
        dark:
          "bg-dark-surface text-ivory rounded-lg text-[15px] shadow-ring-dark hover:bg-dark-warm active:bg-near-black",

        // Ghost — transparent, low-emphasis
        ghost:
          "bg-transparent text-charcoal-warm rounded-lg text-[15px] hover:bg-warm-sand active:bg-[#e0ddd2]",

        // Destructive — error state
        destructive:
          "bg-error/10 text-error border border-error/20 rounded-lg text-[15px] hover:bg-error/20",

        // Link — inline text action
        link: "text-terracotta underline-offset-4 hover:underline p-0 h-auto text-[15px]",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 px-4 py-1.5 text-[14px]",
        lg: "h-12 px-6 py-3 text-[16px]",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
