"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "What states and regions do you serve?",
    answer:
      "We operate across the contiguous 48 states, with primary freight lanes running along the I-80, I-90, and I-10 corridors. Cross-border Canada service is available for select destinations — contact us for routing details.",
  },
  {
    question: "What types of equipment do you run?",
    answer:
      "Our fleet includes 53-foot dry vans, flatbeds, step-decks, and refrigerated trailers (reefers). We partner with carriers running late-model Kenworth, Peterbilt, and Freightliner equipment to ensure reliability and load security.",
  },
  {
    question: "How does the driver application process work?",
    answer:
      "Click 'Apply as a Driver' on our homepage and complete the short form. Our recruiting team will reach out within 24 hours to discuss lane preferences, home time, and compensation. CDL-A required; 6+ months verifiable OTR experience preferred.",
  },
  {
    question: "How are freight rates calculated?",
    answer:
      "Rates are based on lane (origin/destination), weight, distance, equipment type, and current market conditions. We always provide a binding quote before your load moves — no spot-market surprises.",
  },
  {
    question: "Do you offer freight insurance?",
    answer:
      "All loads are covered under our standard cargo liability policy (up to $100,000 per load). For high-value shipments, we can arrange additional coverage through our insurance partners at competitive rates.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-near-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-coral">
            Common Questions
          </p>
          <h2 className="font-serif text-4xl font-medium leading-heading text-ivory md:text-5xl">
            Frequently Asked
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-dark-surface bg-dark-surface px-6"
              >
                <AccordionTrigger className="py-5 text-left font-medium text-ivory hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-body text-warm-silver">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
