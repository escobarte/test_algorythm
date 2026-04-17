import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input — Claude / Anthropic design system.
 *
 * Specs from DESIGN.md section 4 (Inputs & Forms):
 * - Radius: 12px (generously rounded)
 * - Border: Border Warm (#e8e6dc) at rest
 * - Focus: Focus Blue (#3898ec) — the only cool color in the palette
 * - Text: Near Black (#141413)
 * - Background: White (#ffffff) for maximum contrast on parchment canvas
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout
        "flex h-10 w-full",
        // Shape & surface
        "rounded-xl bg-white px-3 py-2",
        // Border — Border Warm at rest
        "border border-warm-sand",
        // Typography
        "font-sans text-[15px] text-near-black",
        "placeholder:text-stone-gray",
        // Focus — Focus Blue (the only cool color: accessibility moment)
        "focus-visible:outline-none focus-visible:border-focus-blue focus-visible:ring-2 focus-visible:ring-focus-blue/20",
        // States
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors duration-150",
        className
      )}
      {...props}
    />
  )
}

export { Input }
