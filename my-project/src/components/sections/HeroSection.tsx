import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
            Trusted Freight Partners
          </p>

          <h1 className="mb-6 font-serif text-5xl font-medium leading-display text-foreground md:text-7xl">
            Reliable Freight,{" "}
            <span className="text-primary">On Time,</span>{" "}
            Every Time
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-body text-muted-foreground">
            We connect shippers with trusted carriers across the country —
            transparent pricing, real-time tracking, and no hidden fees.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#apply"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-ring-brand transition-opacity hover:opacity-90"
            >
              Apply as a Driver
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-xl border border-border bg-secondary px-6 py-3 text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              View Shipping Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
