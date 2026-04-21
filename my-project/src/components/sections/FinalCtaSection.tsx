"use client"

import { useState } from "react"

export function FinalCtaSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="final-cta"
      className="w-full"
      style={{ backgroundColor: "#141413" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-4 font-sans text-xs font-medium uppercase tracking-widest"
            style={{ color: "#d97757", letterSpacing: "0.5px" }}
          >
            Ready to Roll?
          </p>
          <h2
            className="mb-6 font-serif font-medium"
            style={{
              color: "#faf9f5",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "1.20",
            }}
          >
            Start Your Journey
            <br />
            With Transnatur.
          </h2>
          <p
            className="mb-12 font-sans text-lg"
            style={{ color: "#b0aea5", lineHeight: "1.60" }}
          >
            Fill out the form below and our team will reach out within 24 hours.
            No pressure, no games &mdash; just a conversation.
          </p>

          {submitted ? (
            <div
              className="rounded-2xl px-8 py-12"
              style={{
                backgroundColor: "#30302e",
                border: "1px solid #5e5d59",
              }}
            >
              <p
                className="font-serif font-medium"
                style={{ color: "#faf9f5", fontSize: "1.5rem", lineHeight: "1.30" }}
              >
                Application Received.
              </p>
              <p
                className="mt-3 font-sans text-base"
                style={{ color: "#87867f", lineHeight: "1.60" }}
              >
                We&apos;ll be in touch within 24 hours. Thank you for your interest
                in Transnatur.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: "#30302e",
                  border: "1px solid #3d3d3a",
                  color: "#faf9f5",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3898ec")}
                onBlur={(e) => (e.target.style.borderColor = "#3d3d3a")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: "#30302e",
                  border: "1px solid #3d3d3a",
                  color: "#faf9f5",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3898ec")}
                onBlur={(e) => (e.target.style.borderColor = "#3d3d3a")}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl px-4 py-3 font-sans text-sm outline-none transition-all duration-200"
                style={{
                  backgroundColor: "#30302e",
                  border: "1px solid #3d3d3a",
                  color: "#faf9f5",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3898ec")}
                onBlur={(e) => (e.target.style.borderColor = "#3d3d3a")}
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-xl py-4 font-sans text-base font-medium transition-all duration-200"
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
                Submit Application
              </button>
            </form>
          )}

          <p
            className="mt-8 font-sans text-sm"
            style={{ color: "#5e5d59", lineHeight: "1.60" }}
          >
            Or call us directly:{" "}
            <a
              href="tel:+13129094861"
              className="transition-colors duration-200"
              style={{ color: "#b0aea5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#faf9f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#b0aea5")}
            >
              (312) 909-4861
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
