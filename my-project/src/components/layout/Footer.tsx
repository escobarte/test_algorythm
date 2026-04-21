import Link from "next/link"

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FreightCo. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {FOOTER_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
