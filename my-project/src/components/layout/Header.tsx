"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const NAV_LINKS = [
  { href: "#pay-benefits", label: "Pay & Benefits" },
  { href: "#fleet", label: "Our Fleet" },
  { href: "#why-us", label: "Why Drive With Us" },
  { href: "#requirements", label: "Requirements" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className="fixed top-0 z-50 w-full transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "#141413" : "transparent",
        borderBottom: scrolled ? "1px solid #30302e" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-white.png"
            alt="Transnatur Inc"
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
          />
          <span
            className="font-serif text-base font-medium tracking-tight"
            style={{ color: "#faf9f5" }}
          >
            TRANSNATUR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{ color: "#b0aea5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#faf9f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#b0aea5")}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="#final-cta"
          className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: "#e35336",
            color: "#faf9f5",
            boxShadow: "#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.boxShadow =
              "rgba(227,83,54,0.4) 0px 0px 0px 4px"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.boxShadow =
              "#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px"
          }}
        >
          Apply Now
        </Link>
      </div>
    </header>
  )
}
