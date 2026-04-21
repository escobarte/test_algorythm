const TRUST_ITEMS = [
  {
    icon: "📍",
    title: "Live GPS Tracking",
    description: "Monitor every shipment in real time from pickup to delivery.",
  },
  {
    icon: "🏛️",
    title: "DOT Certified",
    description:
      "Fully compliant with all federal DOT and FMCSA regulations. Safety is never negotiable.",
  },
  {
    icon: "💰",
    title: "No Hidden Fees",
    description:
      "The quote you receive is the price you pay. Transparent billing, always.",
  },
  {
    icon: "✓",
    title: "On-Time Guarantee",
    description:
      "We stand behind our delivery windows. If we're late, we make it right.",
  },
]

export function TrustCompliance() {
  return (
    <section className="bg-near-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-coral">
            Our Standards
          </p>
          <h2 className="font-serif text-4xl font-medium leading-heading text-ivory md:text-5xl">
            Transparency & Safety First
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-body text-warm-silver">
            Every load we move is backed by rigorous compliance, real-time visibility,
            and an unwavering commitment to doing things right.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-dark-surface bg-dark-surface p-8"
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="mb-2 font-serif text-xl font-medium text-ivory">
                {title}
              </h3>
              <p className="text-sm leading-body text-warm-silver">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
