import { Button } from "@/components/ui/button"
import { CardLabel } from "@/components/ui/card"

const features = [
  "Adaptive learning",
  "Real-time processing",
  "Scalable infrastructure",
  "Explainable AI",
  "Enterprise security",
  "Timeless precision",
]

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────────────────── */}
      <section className="border-b border-cream py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Eyebrow row — tagline left, circle badge right */}
          <div className="mb-12 flex items-start justify-between">
            <p className="max-w-sm font-sans text-[13px] font-medium uppercase leading-snug tracking-[0.65px] text-olive-gray">
              Intelligent automation, unmatched precision since 2024.{" "}
              Experience the power of Algorythm on every workflow.
            </p>

            {/* Circle "VIEW DEMO" badge */}
            <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border border-cream bg-ivory">
              <span className="text-center font-sans text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-stone-gray">
                VIEW
                <br />
                DEMO
              </span>
            </div>
          </div>

          {/* Display heading */}
          <h1 className="mb-8 font-serif text-[112px] font-bold uppercase leading-[0.92] tracking-[-3px] text-near-black">
            Algorythm
          </h1>

          {/* Hero image placeholder */}
          <div className="aspect-[21/8] w-full overflow-hidden rounded-2xl bg-warm-sand" />

          {/* CTA — right-aligned below image */}
          <div className="mt-6 flex justify-end">
            <Button
              variant="outline"
              size="lg"
              className="font-sans text-[13px] uppercase tracking-[0.08em]"
            >
              Book a Demo
            </Button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          2. ABOUT / PRODUCT
      ───────────────────────────────────────────────────── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 items-start gap-16">

            {/* Left: large portrait image */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-warm-sand" />

            {/* Right: secondary image + content grid */}
            <div className="flex flex-col gap-8 pt-4">

              {/* Secondary landscape image */}
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-warm-sand/60" />

              {/* Two-col text: description + features */}
              <div className="grid grid-cols-2 gap-8 pt-2">
                <div>
                  <CardLabel className="mb-3">The Iconic Algorythm</CardLabel>
                  <p className="font-sans text-[14px] leading-body text-olive-gray">
                    Algorythm is an enterprise-grade intelligent automation
                    platform that has forever changed how organisations process
                    and understand complex data at scale. With its adaptive
                    design and extraordinary performance, it has cemented its
                    place as one of the most trusted platforms in the industry.
                  </p>
                </div>
                <div>
                  <CardLabel className="mb-3">Key Features</CardLabel>
                  <ul className="space-y-2 font-sans text-[14px] leading-body text-olive-gray">
                    {features.map((f) => (
                      <li key={f}>– {f}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          3. STATS / NUMBERS
      ───────────────────────────────────────────────────── */}
      <section className="border-y border-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 items-start gap-16">

            {/* Left: editorial statement */}
            <h2 className="font-serif text-[80px] font-bold uppercase leading-[0.92] tracking-[-2px] text-near-black">
              Nothing
              <br />
              Compares
            </h2>

            {/* Right: three stat rows */}
            <div className="flex flex-col">

              {/* Stat 1 */}
              <div className="flex items-baseline gap-6 border-b border-t border-cream py-7">
                <span className="shrink-0 font-serif text-[56px] font-bold leading-none text-near-black">
                  99%
                </span>
                <p className="font-sans text-[14px] leading-body text-olive-gray">
                  accuracy on enterprise benchmark datasets, highlighting
                  Algorythm&apos;s unmatched precision and power.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex items-baseline gap-6 border-b border-cream py-7">
                <span className="shrink-0 font-serif text-[56px] font-bold leading-none text-near-black">
                  10×
                </span>
                <p className="font-sans text-[14px] leading-body text-olive-gray">
                  faster than traditional data pipelines, engineered for
                  real-time and mission-critical workloads at any scale.
                </p>
              </div>

              {/* Stat 3 — terracotta highlight */}
              <div className="mt-2 flex items-baseline gap-6 rounded-xl bg-terracotta px-6 py-7">
                <span className="shrink-0 font-serif text-[56px] font-bold leading-none text-ivory">
                  500+
                </span>
                <p className="font-sans text-[14px] leading-body text-ivory/80">
                  enterprise deployments worldwide guarantee unmatched
                  performance and reliability of Algorythm at scale.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          4. COMPANY + TECHNICAL PERFORMANCE
      ───────────────────────────────────────────────────── */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 items-start gap-16">

            {/* Left: Company */}
            <div>
              <CardLabel className="mb-8">Company</CardLabel>
              <div className="mb-8 aspect-[4/3] w-full overflow-hidden rounded-xl bg-warm-sand" />
              <p className="max-w-xs font-sans text-[14px] leading-body text-olive-gray">
                Every component, from the model architecture to the inference
                pipeline, has been engineered to meet the highest standards of
                quality and performance.
              </p>
            </div>

            {/* Right: Technical Performance */}
            <div>
              <CardLabel className="mb-8">Technical Performance</CardLabel>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-warm-sand" />
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-gray/20" />
              </div>
              <p className="mb-4 font-sans text-[14px] leading-body text-olive-gray">
                Algorythm reaches peak throughput of 1M+ events per second and
                processes complex queries in under 50ms — from raw input to
                actionable insight.
              </p>
              <p className="font-sans text-[14px] leading-body text-olive-gray">
                The distributed inference engine scales from 40 to 512 nodes,
                maintaining exceptional efficiency. It delivers extraordinary
                agility on every deployment.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
