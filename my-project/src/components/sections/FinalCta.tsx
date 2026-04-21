import Link from "next/link"

export function FinalCta() {
  return (
    <section id="quote" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-4xl bg-near-black px-8 py-20 text-center md:px-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-coral">
            Get Started Today
          </p>
          <h2 className="mb-6 font-serif text-4xl font-medium leading-heading text-ivory md:text-5xl">
            Ready to Move With Us?
          </h2>
          <p className="mx-auto mb-10 max-w-md leading-body text-warm-silver">
            Whether you need freight moved tomorrow or a long-term carrier partner,
            we&apos;re ready to talk. No obligation, no pressure.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-ring-brand transition-opacity hover:opacity-90"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}
