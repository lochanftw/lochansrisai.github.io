import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const contactLinks = [
  {
    label: "Email",
    value: "lochanftw@gmail.com",
    href: "mailto:lochanftw@gmail.com",
    color: "#D42B2B",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lochansrisai",
    href: "https://linkedin.com/in/lochansrisai",
    color: "#1B4FD8",
  },
  {
    label: "GitHub",
    value: "github.com/lochanftw",
    href: "https://github.com/lochanftw",
    color: "#111111",
  },
  {
    label: "Location",
    value: "Chennai, India",
    href: null,
    color: "#F0C225",
  },
];

const openTo = [
  "Full-Time Roles",
  "Internships",
  "Research Opportunities",
  "Technical Collaborations",
  "Freelance Projects",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lochanftw@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#FAFAF7" }}
    >
      {/* Suprematist decorations */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#111111" }} />
      <div className="absolute top-0 right-0 w-40 h-3" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute bottom-20 left-0 w-3 h-40" style={{ backgroundColor: "#1B4FD8" }} />
      <div className="absolute bottom-0 left-20 w-80 h-3" style={{ backgroundColor: "#F0C225" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-[3px]" style={{ backgroundColor: "#D42B2B" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#6B6B6B",
              textTransform: "uppercase",
            }}
          >
            07 / Contact
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 0.95,
              color: "#111111",
              letterSpacing: "0.01em",
              maxWidth: "800px",
            }}
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ type: "spring", damping: 24, delay: 0.1 }}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span style={{ color: "#D42B2B" }}>MEANINGFUL.</span>
          </motion.h2>
        </div>

        <motion.p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#666666",
            maxWidth: 480,
            marginBottom: "60px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          Whether it's IoT, AI, Embedded Systems, Data Analytics, or innovative technology solutions,
          I am always excited to collaborate on impactful projects.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, type: "spring", damping: 24 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-5 no-underline"
                    style={{ border: "1.5px solid #E8E8E0" }}
                  >
                    <ContactCardContent link={link} />
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-5"
                    style={{ border: "1.5px solid #E8E8E0" }}
                  >
                    <ContactCardContent link={link} />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Copy email button */}
            <motion.button
              onClick={copyEmail}
              className="w-full py-4 relative overflow-hidden group"
              style={{
                backgroundColor: "#111111",
                border: "none",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ backgroundColor: "#D42B2B" }}
              whileTap={{ scale: 0.98 }}
            >
              {copied ? "Email Copied!" : "Copy Email Address"}
            </motion.button>
          </div>

          {/* Open to + Geometric composition */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  color: "#6B6B6B",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Open To
              </p>

              <div className="space-y-2 mb-12">
                {openTo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 py-3"
                    style={{ borderBottom: "1px solid #E8E8E0" }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08 }}
                  >
                    <motion.div
                      className="w-3 h-3"
                      style={{ backgroundColor: ["#D42B2B", "#1B4FD8", "#F0C225", "#111111", "#D42B2B"][i] }}
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#333333",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Suprematist decoration */}
              <div className="relative h-32 overflow-hidden">
                {[
                  { x: "0%", y: "50%", w: 80, h: 80, color: "#D42B2B", shape: "circle" },
                  { x: "25%", y: "0%", w: 60, h: 8, color: "#111111", shape: "rect" },
                  { x: "45%", y: "30%", w: 8, h: 60, color: "#1B4FD8", shape: "rect" },
                  { x: "65%", y: "10%", w: 48, h: 48, color: "#F0C225", shape: "rect" },
                  { x: "85%", y: "50%", w: 32, h: 32, color: "#D42B2B", shape: "circle" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: s.x,
                      top: s.y,
                      width: s.w,
                      height: s.h,
                      backgroundColor: s.color,
                      borderRadius: s.shape === "circle" ? "50%" : 0,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", damping: 20 }}
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCardContent({ link }: { link: { label: string; value: string; color: string } }) {
  return (
    <>
      <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: link.color }} />
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#888888",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {link.label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 500,
            color: "#111111",
          }}
        >
          {link.value}
        </p>
      </div>
    </>
  );
}
