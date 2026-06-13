import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 9.80, suffix: "", label: "CGPA", sublabel: "Out of 10.00", color: "#D42B2B" },
  { value: 5, suffix: "+", label: "Hackathons", sublabel: "National Level", color: "#1B4FD8" },
  { value: 3, suffix: "", label: "Tech Wins", sublabel: "Technical Events", color: "#F0C225" },
  { value: 5, suffix: "", label: "Projects", sublabel: "Real-World Solutions", color: "#AAAAAA" },
];

const hackathons = [
  { name: "Smart India Hackathon 2024", year: "2024", color: "#D42B2B" },
  { name: "Smart India Hackathon 2025", year: "2025", color: "#D42B2B" },
  { name: "Bharat Build Hackathon", year: "2025", color: "#1B4FD8" },
  { name: "IBM Z Datathon", year: "2025", color: "#F0C225" },
  { name: "SA-HACKATHON '26", year: "2026", color: "#AAAAAA" },
];

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = to / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setVal(to);
        clearInterval(timer);
      } else {
        setVal(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}
    </span>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#0A0A08" }}
    >
      {/* Suprematist decorations */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#F0C225" }} />
      <div className="absolute top-16 right-0 w-3 h-48" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#1B4FD8" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-[2px]" style={{ backgroundColor: "#F0C225" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
              }}
            >
              06 / Achievements
            </span>
          </motion.div>

          <div className="overflow-hidden mb-20">
            <motion.h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 8vw, 90px)",
                lineHeight: 0.9,
                color: "#FFFFFF",
                letterSpacing: "0.01em",
              }}
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ type: "spring", damping: 24, delay: 0.1 }}
            >
              MILESTONES
              <br />
              <span style={{ color: "#F0C225" }}>&amp; RECORDS</span>
            </motion.h2>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden"
              style={{ borderWidth: "1.5px", borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, type: "spring", damping: 22 }}
              whileHover={{ borderColor: stat.color }}
            >
              {/* Color top bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: stat.color, scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="p-8">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    lineHeight: 1,
                    color: stat.color,
                    marginBottom: "4px",
                  }}
                >
                  <CountUp
                    to={stat.value}
                    decimals={stat.value % 1 !== 0 ? 2 : 0}
                  />
                  {stat.suffix}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Hackathon Participations
          </p>

          <div className="flex flex-wrap gap-3">
            {hackathons.map((h, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderWidth: "1.5px", borderStyle: "solid", borderColor: `${h.color}40` }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.07 }}
                whileHover={{ borderColor: h.color, backgroundColor: `${h.color}18` }}
              >
                <div
                  className="w-2 h-2"
                  style={{ backgroundColor: h.color }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {h.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: h.color,
                    letterSpacing: "0.1em",
                  }}
                >
                  {h.year}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Additional achievements */}
          <div className="mt-8 flex flex-wrap gap-4">
            {["Winner of 3 Technical Events", "Winner of 1 Non-Technical Event", "Multiple Real-World IoT & AI Solutions"].map((a, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-6 py-3"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <div className="w-2 h-2" style={{ backgroundColor: "#F0C225" }} />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {a}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
