import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Shadcn semantic tokens (via CSS variables) ──────────────────
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: { DEFAULT: "var(--destructive)" },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },

        // ─── Claude / Anthropic hardcoded design tokens ───────────────────
        // Support opacity modifiers (bg-terracotta/80, etc.)

        // Surfaces
        parchment: "#f5f4ed",
        ivory: "#faf9f5",
        "warm-sand": "#e8e6dc",
        "dark-surface": "#30302e",

        // Brand
        terracotta: "#c96442",
        coral: "#d97757",

        // Text
        "near-black": "#141413",
        "charcoal-warm": "#4d4c48",
        "olive-gray": "#5e5d59",
        "stone-gray": "#87867f",
        "dark-warm": "#3d3d3a",
        "warm-silver": "#b0aea5",

        // Borders (hardcoded for use in border-{name} utilities)
        cream: "#f0eee6",

        // Rings & Focus
        "focus-blue": "#3898ec",
        "ring-warm-halo": "#d1cfc5",
        "ring-deep-halo": "#c2c0b6",

        // State
        error: "#b53333",
      },

      // ─── Border Radius ── Claude scale ─────────────────────────────────
      borderRadius: {
        none: "0",
        sm: "4px",      // Sharp/minimal inline elements
        DEFAULT: "8px", // Comfortably rounded — standard buttons, cards
        md: "8px",
        lg: "8px",      // Alias for DEFAULT (shadcn compat)
        xl: "12px",     // Generously rounded — primary buttons, inputs, nav
        "2xl": "16px",  // Very rounded — featured containers
        "3xl": "24px",  // Tag-like elements
        "4xl": "32px",  // Hero containers, large media
        full: "9999px",
      },

      // ─── Font Families ──────────────────────────────────────────────────
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "Times", "serif"],
        sans: [
          "var(--font-geist-sans)",
          "Arial",
          "system-ui",
          "-apple-system",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Courier New'",
          "monospace",
        ],
      },

      // ─── Box Shadows ── Claude ring system ──────────────────────────────
      boxShadow: {
        // Ring shadows (border-like halos — the signature Claude pattern)
        "ring-warm": "#e8e6dc 0px 0px 0px 0px, #d1cfc5 0px 0px 0px 1px",
        "ring-brand": "#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px",
        "ring-dark": "#30302e 0px 0px 0px 0px, #3d3d3a 0px 0px 0px 1px",
        "ring-halo": "0px 0px 0px 1px #d1cfc5",
        // Drop shadows
        whisper: "rgba(0,0,0,0.05) 0px 4px 24px",
        "whisper-ring": "rgba(0,0,0,0.05) 0px 4px 24px, 0px 0px 0px 1px #f0eee6",
      },

      // ─── Line Heights ── Claude editorial scale ──────────────────────────
      lineHeight: {
        display: "1.10", // H1 / hero
        heading: "1.20", // Section headings
        subhead: "1.30", // Sub-headings
        body: "1.60",    // Body text — editorial (default for Claude prose)
      },
    },
  },
  plugins: [],
}

export default config
