import { useRef } from "react";
import { motion, useInView } from "motion/react";

const details = [
  { label: "Location", value: "Chennai, India" },
  { label: "Status", value: "B.Tech ECE · SRM Ramapuram" },
  { label: "Batch", value: "2024 – 2028" },
  { label: "CGPA", value: "9.80 / 10.00" },
  { label: "Spec.", value: "Data Science" },
  { label: "Email", value: "lochanftw@gmail.com" },
];

const openTo = ["Internships", "Research Opportunities", "Full-Time Roles", "Technical Collaborations", "Freelance Projects"];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden" style={{ backgroundColor: "#FAFAF7" }}>
      {/* Suprematist background elements */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#111111" }} />
      <div className="absolute top-8 right-0 w-64 h-3" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute bottom-16 left-0 w-32 h-32 opacity-5" style={{ backgroundColor: "#1B4FD8" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            01 / About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div>
            <motion.div
              className="overflow-hidden mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 7vw, 80px)",
                  lineHeight: 0.95,
                  color: "#111111",
                  letterSpacing: "0.01em",
                }}
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ type: "spring", damping: 24, delay: 0.1 }}
              >
                WHO AM I
              </motion.h2>
            </motion.div>

            {[
              "My journey into technology began with curiosity about how software and hardware work together to solve real-world problems.",
              "I started with Python, C programming, Arduino, and electronics fundamentals — building my first major project: a Smart Parking System integrating RFID, IoT, cloud infrastructure, and real-time dashboards.",
              "As my interest grew, I expanded into Data Analytics, Machine Learning, Embedded Systems, and AI-powered applications. Through internships at Beau Roi Technologies, Infosys Springboard, and Hyundai Motor India, I gained practical exposure to data-driven decision-making and industrial engineering.",
              "Today, my goal is to become a technology professional creating impactful products at the intersection of IoT, AI, and Embedded Engineering.",
            ].map((para, i) => (
              <motion.p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#444444",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Open to */}
            <motion.div
              className="mt-10 pt-8"
              style={{ borderTop: "1.5px solid #E8E8E0" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.25em",
                  color: "#6B6B6B",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Open To
              </p>
              <div className="flex flex-wrap gap-2">
                {openTo.map((item, i) => (
                  <motion.span
                    key={i}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 500,
                      padding: "4px 12px",
                      border: "1.5px solid #111111",
                      color: "#111111",
                      letterSpacing: "0.05em",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + i * 0.06 }}
                    whileHover={{ backgroundColor: "#111111", color: "#FFFFFF" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Info + Geometric composition */}
          <div className="relative">
            {/* Geometric portrait block */}
            <motion.div
              className="relative mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", damping: 20 }}
            >
              {/* Main block */}
              <div className="relative w-full max-w-sm">
                {/* Background geometric shapes */}
                <div className="absolute -top-4 -right-4 w-full h-full" style={{ backgroundColor: "#D42B2B" }} />
                <div className="absolute -bottom-4 -left-4 w-24 h-24" style={{ backgroundColor: "#F0C225" }} />

                {/* Central block with info */}
                <div
                  className="relative z-10 p-8"
                  style={{ backgroundColor: "#111111" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "80px",
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.06)",
                      position: "absolute",
                      top: 8,
                      right: 16,
                    }}
                  >
                    ECE
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8" style={{ backgroundColor: "#D42B2B" }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                        Currently At
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "#FFFFFF" }}>
                        SRM Institute · Ramapuram
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] mb-6" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

                  <div className="grid grid-cols-2 gap-4">
                    {details.map((d, i) => (
                      <div key={i}>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 2 }}>
                          {d.label}
                        </p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, color: "#FFFFFF" }}>
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.25em",
                  color: "#6B6B6B",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Languages Known
              </p>
              <div className="flex gap-4">
                {["English", "Tamil", "Telugu", "Hindi"].map((lang, i) => (
                  <motion.div
                    key={lang}
                    className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.08 }}
                  >
                    <div className="w-2 h-2 mb-1" style={{ backgroundColor: ["#D42B2B", "#1B4FD8", "#F0C225", "#111111"][i] }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "#333" }}>
                      {lang}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
