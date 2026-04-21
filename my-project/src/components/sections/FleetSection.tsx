"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const FLEET_FEATURES = [
  { title: "2020–2025 Models", description: "Late-model trucks — no breakdowns, no headaches." },
  { title: "ELD Compliant", description: "Modern ELD systems ensure you stay compliant, always." },
  { title: "Full APU", description: "Auxiliary power so you sleep comfortably without idling." },
  { title: "Satellite Tracking", description: "Real-time dispatch support whenever you need it." },
]

export function FleetSection() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="fleet"
      className="w-full"
      style={{ backgroundColor: "#30302e" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div
          ref={ref}
          className="grid items-center gap-12 lg:grid-cols-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.2,0.8,0.2,1), transform 0.8s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          {/* Text side */}
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="mb-4 font-sans text-xs font-medium uppercase tracking-widest"
                style={{ color: "#d97757", letterSpacing: "0.5px" }}
              >
                Equipment
              </p>
              <h2
                className="font-serif font-medium"
                style={{
                  color: "#faf9f5",
                  fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                  lineHeight: "1.20",
                }}
              >
                Modern Fleet.
                <br />
                Zero Compromises.
              </h2>
              <p
                className="mt-6 font-sans text-base"
                style={{ color: "#b0aea5", lineHeight: "1.60" }}
              >
                We keep our trucks new so you can focus on the road — not the
                repair shop. Every vehicle is maintained to the highest
                standard.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {FLEET_FEATURES.map((feat, i) => (
                <li
                  key={feat.title}
                  className="flex gap-4"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 0.6s cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms, transform 0.6s cubic-bezier(0.2,0.8,0.2,1) ${i * 80}ms`,
                  }}
                >
                  <div
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "#e35336" }}
                  />
                  <div>
                    <p
                      className="font-serif font-medium"
                      style={{ color: "#faf9f5", fontSize: "1rem", lineHeight: "1.30" }}
                    >
                      {feat.title}
                    </p>
                    <p
                      className="mt-1 font-sans text-sm"
                      style={{ color: "#87867f", lineHeight: "1.60" }}
                    >
                      {feat.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <Image
                src="/truck.png"
                alt="Transnatur Fleet"
                width={720}
                height={480}
                className="h-auto w-full object-cover"
                style={{ borderRadius: "24px" }}
              />
            </div>
            {/* Decorative ring */}
            <div
              className="pointer-events-none absolute -right-3 -bottom-3 -z-0 h-full w-full"
              style={{
                borderRadius: "28px",
                border: "1px solid #5e5d59",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
