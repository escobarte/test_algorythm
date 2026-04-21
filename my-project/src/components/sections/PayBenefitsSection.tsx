"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  {
    value: "$0.65",
    unit: "/ mile",
    label: "Competitive CPM",
    description:
      "Industry-leading cents-per-mile rate that rewards your experience and dedication.",
  },
  {
    value: "100%",
    unit: "",
    label: "Health Benefits",
    description:
      "Full medical, dental, and vision coverage for you and your family from day one.",
  },
  {
    value: "2,500+",
    unit: "mi/wk",
    label: "Avg Weekly Miles",
    description:
      "Consistent freight keeps your wheels turning and your income steady.",
  },
  {
    value: "$1,500",
    unit: "+",
    label: "Sign-On Bonus",
    description:
      "We invest in you from the start. Bonus paid after your first 90 days.",
  },
]

function StatCard({
  value,
  unit,
  label,
  description,
}: (typeof STATS)[0]) {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 rounded-2xl p-8 transition-all duration-700"
      style={{
        backgroundColor: "#faf9f5",
        border: "1px solid #f0eee6",
        boxShadow: "rgba(0,0,0,0.05) 0px 4px 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      <div className="flex items-baseline gap-1">
        <span
          className="font-serif font-medium"
          style={{ color: "#141413", fontSize: "2.5rem", lineHeight: "1.10" }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="font-sans text-lg font-medium"
            style={{ color: "#e35336" }}
          >
            {unit}
          </span>
        )}
      </div>
      <div>
        <p
          className="mb-2 font-serif font-medium"
          style={{ color: "#141413", fontSize: "1.15rem", lineHeight: "1.30" }}
        >
          {label}
        </p>
        <p
          className="font-sans text-sm"
          style={{ color: "#5e5d59", lineHeight: "1.60" }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export function PayBenefitsSection() {
  return (
    <section
      id="pay-benefits"
      className="w-full"
      style={{ backgroundColor: "#f5f4ed" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="mb-4 font-sans text-xs font-medium uppercase tracking-widest"
            style={{ color: "#e35336", letterSpacing: "0.5px" }}
          >
            Compensation
          </p>
          <h2
            className="font-serif font-medium"
            style={{
              color: "#141413",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "1.20",
            }}
          >
            Pay &amp; Benefits
            <br />
            Built for Drivers.
          </h2>
          <p
            className="mt-6 font-sans text-lg"
            style={{ color: "#5e5d59", lineHeight: "1.60" }}
          >
            We believe drivers deserve exceptional compensation. Here&apos;s what
            you&apos;ll earn when you join the Transnatur team.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Additional perks */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Paid time off & holidays",
            "401(k) with company match",
            "Referral bonus program",
            "Fuel card provided",
            "Direct deposit every Friday",
            "Flexible home time",
          ].map((perk) => (
            <div
              key={perk}
              className="flex items-center gap-3 rounded-xl px-5 py-4"
              style={{
                backgroundColor: "#f5f4ed",
                border: "1px solid #e8e6dc",
              }}
            >
              <span
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: "#e35336" }}
              />
              <span
                className="font-sans text-sm font-medium"
                style={{ color: "#4d4c48" }}
              >
                {perk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
