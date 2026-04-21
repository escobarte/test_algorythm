"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#141413" }} className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="Transnatur Inc"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span
                className="font-serif text-lg font-medium"
                style={{ color: "#faf9f5" }}
              >
                TRANSNATUR INC
              </span>
            </div>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "#87867f", lineHeight: "1.60" }}
            >
              Your trusted partner on the road. Professional, reliable, and
              dedicated to driver success.
            </p>
          </div>

          {/* Company Details */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "#5e5d59", letterSpacing: "0.5px" }}
            >
              Company Info
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "16305 S Wheatgrass St",
                "Lockport, IL 60441",
                "MC# 1592651",
                "USDOT# 4149516",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm"
                  style={{ color: "#87867f", lineHeight: "1.43" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "#5e5d59", letterSpacing: "0.5px" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="tel:+13129094861"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#b0aea5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#faf9f5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#b0aea5")
                  }
                >
                  (312) 909-4861
                </a>
              </li>
              <li>
                <a
                  href="mailto:Transnaturinc@gmail.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#b0aea5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#faf9f5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#b0aea5")
                  }
                >
                  Transnaturinc@gmail.com
                </a>
              </li>
              <li
                className="text-sm"
                style={{ color: "#87867f" }}
              >
                President: Vasilii Iurcu
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 border-t pt-8"
          style={{ borderColor: "#30302e" }}
        >
          <p className="text-sm" style={{ color: "#5e5d59" }}>
            © {new Date().getFullYear()} Transnatur Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
