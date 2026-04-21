const TESTIMONIALS = [
  {
    quote:
      "FreightCo handled our entire Midwest distribution run without a single missed window. Their team is responsive, their pricing is fair, and the tracking portal is genuinely useful.",
    author: "Maria K.",
    role: "Logistics Manager, BuildRight Inc.",
    type: "Shipper",
  },
  {
    quote:
      "I've leased with three carriers over ten years. FreightCo's dispatch actually picks up the phone. The miles are consistent and the pay is exactly what they promised.",
    author: "Ray T.",
    role: "Owner-Operator, 8 years OTR",
    type: "Driver",
  },
  {
    quote:
      "We moved our seasonal inventory on time and under budget. No surprises on the invoice, no damaged freight. We'll be back for Q4.",
    author: "Dana L.",
    role: "Supply Chain Director, NorthShore Retail",
    type: "Shipper",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Partners & Drivers
          </p>
          <h2 className="font-serif text-4xl font-medium leading-heading text-foreground md:text-5xl">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author, role, type }) => (
            <div
              key={author}
              className="flex flex-col justify-between rounded-2xl border border-cream bg-card p-8 shadow-whisper"
            >
              <p className="mb-8 text-base leading-body text-muted-foreground">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {type}
                  </span>
                </div>
                <p className="font-medium text-foreground">{author}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
