"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return
    let frame: number
    let growing = true
    let size = 0

    const animate = () => {
      if (growing) {
        size += 0.06
        if (size >= 4) growing = false
      } else {
        size -= 0.06
        if (size <= 0) growing = true
      }
      btn.style.boxShadow = `rgba(227,83,54,0.35) 0px 0px 0px ${size}px`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(20,20,19,0.65), rgba(20,20,19,0.88))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        <p
          className="mb-6 font-sans text-xs font-medium uppercase tracking-widest"
          style={{ color: "#d97757", letterSpacing: "0.5px" }}
        >
          Trucking Careers — Illinois &amp; Nationwide
        </p>

        <h1
          className="mx-auto mb-6 max-w-4xl font-serif font-medium"
          style={{
            color: "#faf9f5",
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            lineHeight: "1.10",
          }}
        >
          Drive With Transnatur.
          <br />
          <span style={{ color: "#d97757" }}>Build Your Future</span> on the
          Road.
        </h1>

        <p
          className="mx-auto mb-10 max-w-xl font-sans"
          style={{
            color: "#b0aea5",
            fontSize: "1.25rem",
            lineHeight: "1.60",
          }}
        >
          Competitive pay, modern equipment, and a team that has your back —
          every mile, every day.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            ref={btnRef}
            href="#final-cta"
            className="inline-block rounded-xl px-8 py-3 font-sans text-base font-medium transition-all duration-200"
            style={{
              backgroundColor: "#e35336",
              color: "#faf9f5",
            }}
          >
            Apply Now
          </Link>

          <Link
            href="#pay-benefits"
            className="inline-block rounded-xl border px-8 py-3 font-sans text-base font-medium transition-colors duration-200"
            style={{
              borderColor: "#30302e",
              color: "#b0aea5",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#faf9f5"
              ;(e.currentTarget as HTMLElement).style.borderColor = "#5e5d59"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#b0aea5"
              ;(e.currentTarget as HTMLElement).style.borderColor = "#30302e"
            }}
          >
            See Pay &amp; Benefits
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="h-8 w-px"
          style={{ backgroundColor: "#5e5d59" }}
        />
      </div>
    </section>
  )
}
