"use client"

const REQUIREMENTS = [
  {
    required: true,
    text: "Valid Class A Commercial Driver's License (CDL-A)",
  },
  { required: true, text: "Minimum 1 year of verifiable OTR experience" },
  { required: true, text: "Clean MVR — no major violations in last 3 years" },
  { required: true, text: "No DUI / DWI convictions" },
  { required: true, text: "Must pass DOT physical and drug screen" },
  { required: false, text: "Hazmat endorsement (preferred, not required)" },
  { required: false, text: "Doubles / Triples endorsement (a plus)" },
  { required: false, text: "Experience with refrigerated freight (a plus)" },
]

export function RequirementsSection() {
  return (
    <section
      id="requirements"
      className="w-full"
      style={{ backgroundColor: "#faf9f5" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Header */}
          <div className="sticky top-24">
            <p
              className="mb-4 font-sans text-xs font-medium uppercase tracking-widest"
              style={{ color: "#e35336", letterSpacing: "0.5px" }}
            >
              Qualifications
            </p>
            <h2
              className="font-serif font-medium"
              style={{
                color: "#141413",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: "1.20",
              }}
            >
              Driver
              <br />
              Requirements.
            </h2>
            <p
              className="mt-6 font-sans text-base"
              style={{ color: "#5e5d59", lineHeight: "1.60" }}
            >
              We maintain high standards because our clients trust us to deliver.
              If you meet these requirements, we want to hear from you.
            </p>
            <a
              href="#final-cta"
              className="mt-8 inline-block rounded-xl px-6 py-3 font-sans text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "#e35336",
                color: "#faf9f5",
                boxShadow: "#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "rgba(227,83,54,0.4) 0px 0px 0px 4px"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  "#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 1px"
              }}
            >
              Apply Now →
            </a>
          </div>

          {/* Right: Checklist */}
          <ul className="flex flex-col gap-0">
            {REQUIREMENTS.map((req, i) => (
              <li
                key={req.text}
                className="flex items-start gap-4 py-5"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid #e8e6dc",
                }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: req.required ? "#e35336" : "#f5f4ed",
                    color: req.required ? "#faf9f5" : "#87867f",
                    border: req.required ? "none" : "1px solid #e8e6dc",
                    fontSize: "10px",
                  }}
                >
                  {req.required ? "✓" : "○"}
                </span>
                <span
                  className="font-sans text-sm"
                  style={{
                    color: req.required ? "#141413" : "#87867f",
                    lineHeight: "1.60",
                  }}
                >
                  {req.text}
                  {!req.required && (
                    <span
                      className="ml-2 font-sans text-xs"
                      style={{ color: "#b0aea5" }}
                    >
                      — optional
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
