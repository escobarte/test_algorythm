const SERVICES = [
  {
    title: "Full Truckload (FTL)",
    description:
      "Dedicated trailer for your shipment — maximum capacity, fastest transit, direct point-to-point delivery.",
  },
  {
    title: "Partial Load (LTL)",
    description:
      "Share trailer space with other shippers and pay only for the capacity you use. Cost-effective for smaller loads.",
  },
  {
    title: "Express Delivery",
    description:
      "Time-critical freight moved with priority handling and guaranteed delivery windows. Same-day and next-day options available.",
  },
  {
    title: "24/7 Dispatch Support",
    description:
      "Our operations team is always on. Real-time updates, live tracking, and a live agent whenever you need one.",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl font-medium leading-heading text-foreground md:text-5xl">
            Our Freight Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-cream bg-card p-8 shadow-whisper transition-shadow hover:shadow-whisper-ring"
            >
              <h3 className="mb-3 font-serif text-2xl font-medium leading-subhead text-foreground">
                {title}
              </h3>
              <p className="leading-body text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
