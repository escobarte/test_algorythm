"use client"

import { useEffect, useRef, useState } from "react"

const REASONS = [
  {
    icon: "🛣️",
    title: "Home Time That Counts",
    description:
      "We respect your life outside the cab. Structured routes mean predictable home time — not promises that evaporate.",
  },
  {
    icon: "📞",
    title: "24/7 Dispatch Support",
    description:
      "Real humans answer the phone. Our dispatch team is always available, day or night, when you need guidance on the road.",
  },
  {
    icon: "📈",
    title: "Growth Opportunities",
    description:
      "Drive with us long enough and you'll see your pay increase. We promote from within and reward loyalty.",
  },
  {
    icon: "🔧",
    title: "Maintenance Handled",
    description:
      "If your truck needs service, we handle it. No out-of-pocket expenses, no waiting around — we keep you moving.",
  },
  {
    icon: "🤝",
    title: "Transparent Contracts",
    description:
      "No surprises in the fine print. Every agreement is clear, fair, and explained before you sign anything.",
  },
  {
    icon: "🌎",
    title: "Nationwide Lanes",
    description:
      "Run 48 states with established freight partners. Consistent loads, consistent miles, consistent income.",
  },
]

function Card({ icon, title, description, delay }: (typeof REASONS)[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 rounded-2xl p-8"
      style={{
        backgroundColor: "#faf9f5",
        border: "1px solid #f0eee6",
        boxShadow: "rgba(0,0,0,0.05) 0px 4px 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, transform 0.6s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
      }}
    >
      <span className="text-2xl" role="img" aria-hidden>
        {icon}
      </span>
      <h3
        className="font-serif font-medium"
        style={{ color: "#141413", fontSize: "1.25rem", lineHeight: "1.30" }}
      >
        {title}
      </h3>
      <p
        className="font-sans text-sm"
        style={{ color: "#5e5d59", lineHeight: "1.60" }}
      >
        {description}
      </p>
    </div>
  )
}

export function WhyDriveSection() {
  return (
    <section
      id="why-us"
      className="w-full"
      style={{ backgroundColor: "#f5f4ed" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p
            className="mb-4 font-sans text-xs font-medium uppercase tracking-widest"
            style={{ color: "#e35336", letterSpacing: "0.5px" }}
          >
            The Transnatur Difference
          </p>
          <h2
            className="font-serif font-medium"
            style={{
              color: "#141413",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "1.20",
            }}
          >
            Why Drivers Choose
            <br />
            Transnatur.
          </h2>
          <p
            className="mt-6 font-sans text-lg"
            style={{ color: "#5e5d59", lineHeight: "1.60" }}
          >
            We&apos;ve built a company around what drivers actually want &mdash; not what
            sounds good in a job listing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Card key={reason.title} {...reason} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
