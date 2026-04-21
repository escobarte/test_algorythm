import Link from "next/link"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          FreightCo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#login"
            className="rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            Client Login
          </Link>
          <Link
            href="#quote"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-ring-brand transition-opacity hover:opacity-90"
          >
            Get a Freight Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
