import { useState } from "react";
import { motion } from "motion/react";

function SocialLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="no-underline flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      <motion.div
        className="w-2 h-2 flex-shrink-0"
        style={{ backgroundColor: "#D42B2B" }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.15 }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </span>
    </a>
  );
}

function FooterNavLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={() => {
        document.querySelector(`#${label.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.2em",
        color: hovered ? "#D42B2B" : "rgba(255,255,255,0.4)",
        textTransform: "uppercase",
        background: "none",
        border: "none",
        outline: "none",
        padding: "4px 0",
        textAlign: "left",
        transition: "color 0.2s ease",
      }}
    >
      {label}
    </button>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
      <div className="w-full h-[3px]" style={{ backgroundColor: "#D42B2B" }} />

      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]" style={{ backgroundColor: "#D42B2B" }} />
        <div className="absolute bottom-0 left-0 w-64 h-16 opacity-[0.04]" style={{ backgroundColor: "#1B4FD8" }} />
        <div className="absolute top-8 left-1/3 w-8 h-8 opacity-[0.08]" style={{ backgroundColor: "#F0C225" }} />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Logo + tagline */}
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3 mb-4"
                style={{ border: "none", background: "none", outline: "none", padding: 0 }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "#D42B2B" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "#FFFFFF" }}>L</span>
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "#FFFFFF", letterSpacing: "0.05em" }}>
                  LOCHAN
                </span>
              </button>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 240,
                }}
              >
                Engineering Intelligent Systems Through IoT, AI, and Innovation.
              </p>
            </div>

            {/* Nav links */}
            <div className="grid grid-cols-2 gap-1">
              {["About", "Journey", "Skills", "Projects", "Experience", "Contact"].map((label) => (
                <FooterNavLink key={label} label={label} />
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4 md:items-end">
              <SocialLink label="GitHub" href="https://github.com/lochanftw" />
              <SocialLink label="LinkedIn" href="https://linkedin.com/in/lochansrisai" />
              <SocialLink label="Email" href="mailto:lochanftw@gmail.com" />
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
              }}
            >
              {year} Perisetla Lochan Sri Sai · Designed & Developed by Lochan
            </p>

            <div className="flex items-center gap-3">
              {["#D42B2B", "#1B4FD8", "#F0C225", "#FAFAF7"].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3"
                  style={{ backgroundColor: c }}
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
