const STATS = [
  { value: "250,000+", label: "Loads Delivered" },
  { value: "12 Years", label: "Industry Experience" },
  { value: "97%", label: "Driver Satisfaction" },
]

export function StatsBar() {
  return (
    <section className="bg-near-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="mb-2 font-serif text-5xl font-medium leading-display text-ivory">
                {value}
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-warm-silver">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
