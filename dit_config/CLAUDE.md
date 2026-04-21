# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands must be run from the `my-project/` directory.

```bash
cd my-project

npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
my-project/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout (fonts, global styles)
│   │   ├── page.tsx       # Home route
│   │   └── globals.css    # CSS variables + Tailwind base
│   ├── components/
│   │   └── ui/            # shadcn/ui components (auto-generated, do not hand-edit)
│   ├── lib/
│   │   └── utils.ts       # cn() helper (clsx + tailwind-merge)
│   └── hooks/             # Custom React hooks
```

**Path aliases:** `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

## Stack

- **Next.js 14** — App Router, React Server Components (RSC) by default
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first, 8pt spacing system
- **shadcn/ui** — style: `radix-nova`, base color: `neutral`, CSS variables via `oklch()`
- **Lucide React** — icon library
- **Framer Motion** — animations
- **react-hook-form** — form state

## UI Rules (Non-Negotiable)

These rules apply to every UI change. Violations will be rejected.

### Power Lines & Grid
- All spacing must follow the **8pt system** (`p-2`, `p-4`, `p-8`, `gap-4`, etc.)
- Every element aligns to an invisible grid — no floating or arbitrarily placed elements
- Do not mix text alignments (center vs. left) within the same logical block
- Max content width: `max-w-7xl`

### Visual Hierarchy
- H1 / Primary CTA must be immediately dominant — use `font-bold` or `font-semibold` for headings
- Use `text-muted-foreground` for secondary/supporting content
- High contrast required — no low-contrast text on similarly-toned backgrounds

### Whitespace & Zoning
- **Micro-whitespace:** Group logically related elements tightly
- **Macro-whitespace:** Separate distinct sections with generous `py-16` / `py-24` or larger
- When in doubt, add more "air"

### Component Strategy
- **Always use shadcn/ui first.** Do not create custom buttons, inputs, cards, dialogs, or modals if a shadcn component exists
- Custom components must use the same shadcn CSS variable system (`--primary`, `--muted`, `--border`, etc.)
- Add shadcn components: `npx shadcn@latest add <component>` (from `my-project/`)

## Architecture Rules (Vercel Best Practices)

### Server vs. Client Components
- **Default to RSC** (no `"use client"`). Add `"use client"` only when needed: event handlers, hooks, browser APIs
- Keep `"use client"` boundaries as deep (leaf) as possible — push them down to the smallest interactive unit
- Never pass non-serializable values (functions, class instances) from Server to Client components

### Data Fetching
- **Eliminate waterfalls:** use `Promise.all()` for independent async operations
- **Deduplicate:** wrap shared fetches in `React.cache()` for per-request deduplication
- Start promises early in API routes, `await` late
- Use `after()` for non-blocking post-response work (logging, analytics)

### Bundle Size
- Import directly from source, not from barrel files (`import { Button } from "@/components/ui/button"` not from an index re-export)
- Use `next/dynamic` with `{ ssr: false }` for heavy client-only components
- Load analytics/third-party scripts after hydration, not in `<head>`

### Re-renders
- Hoist non-primitive default prop values outside the component to avoid reference churn
- Use `useRef` for transient high-frequency values (e.g., scroll position)
- Never define components inside other components
- Derive state during render instead of syncing via `useEffect`
