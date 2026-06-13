import { useRef } from "react";
import { motion, useInView } from "motion/react";

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Beau Roi Technologies Pvt. Ltd.",
    location: "Chennai, Tamil Nadu",
    duration: "4 Weeks",
    period: "2025",
    color: "#D42B2B",
    shape: "circle",
    bullets: [
      "Performed data cleaning, preprocessing, and EDA on 4000+ structured datasets using Python.",
      "Supported decision-making by identifying patterns, trends, and data inconsistencies.",
      "Built Power BI dashboards for data visualization and business insights.",
    ],
    skills: ["Python", "Power BI", "Data Analytics", "EDA"],
  },
  {
    role: "Virtual Intern",
    company: "Infosys Springboard",
    location: "Remote · Chennai, Tamil Nadu",
    duration: "8 Weeks",
    period: "2025",
    color: "#1B4FD8",
    shape: "square",
    bullets: [
      "Completed Python-focused virtual internship applying core programming and data handling concepts.",
      "Achieved 87% efficiency improvement in task execution through automation scripts.",
      "Contributed to 4 project milestones, strengthening analytical thinking and problem-solving.",
    ],
    skills: ["Python", "Automation", "Problem Solving"],
  },
  {
    role: "In-Plant Trainee",
    company: "Hyundai Motor India Limited",
    location: "Chennai, Tamil Nadu",
    duration: "2 Weeks",
    period: "2025",
    color: "#F0C225",
    shape: "circle",
    bullets: [
      "Observed large-scale industrial manufacturing operations and engineering workflows.",
      "Studied quality control procedures and workplace safety standards in depth.",
      "Gained exposure to production processes across multiple operational departments.",
    ],
    skills: ["Manufacturing", "Quality Control", "Industrial Operations"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden" style={{ backgroundColor: "#FAFAF7" }}>
      {/* Suprematist accents */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#111111" }} />
      <div className="absolute top-8 right-0 w-3 h-60" style={{ backgroundColor: "#F0C225" }} />
      <div className="absolute bottom-10 left-10 w-40 h-3 opacity-20" style={{ backgroundColor: "#D42B2B" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref}>
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
              05 / Experience
            </span>
          </motion.div>

          <div className="overflow-hidden mb-20">
            <motion.h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 8vw, 90px)",
                lineHeight: 0.9,
                color: "#111111",
                letterSpacing: "0.01em",
              }}
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ type: "spring", damping: 24, delay: 0.1 }}
            >
              WHERE I'VE
              <br />
              <span style={{ color: "#D42B2B" }}>WORKED</span>
            </motion.h2>
          </div>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, type: "spring", damping: 24 }}
            >
              <div
                className="relative overflow-hidden"
                style={{ border: "1.5px solid #E8E8E0" }}
              >
                {/* Hover fill */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: exp.color, opacity: 0 }}
                  whileHover={{ opacity: 0.03 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: exp.color, scaleY: 0, originY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Left: Role + Company */}
                    <div className="flex gap-6">
                      {/* Shape marker */}
                      <div
                        className="mt-1 flex-shrink-0"
                        style={{
                          width: 36,
                          height: 36,
                          backgroundColor: exp.color,
                          borderRadius: exp.shape === "circle" ? "50%" : 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            borderRadius: exp.shape === "circle" ? "50%" : 0,
                          }}
                        />
                      </div>

                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(22px, 3vw, 32px)",
                            color: "#111111",
                            letterSpacing: "0.02em",
                            marginBottom: "4px",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: exp.color,
                            marginBottom: "2px",
                          }}
                        >
                          {exp.company}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "#888888",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Right: Duration */}
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div
                        className="px-4 py-2"
                        style={{ backgroundColor: exp.color, color: "#FFFFFF" }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "#888888",
                          letterSpacing: "0.15em",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-[1px]" style={{ backgroundColor: "#E8E8E0" }} />

                  {/* Bullets */}
                  <div className="space-y-3">
                    {exp.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-3">
                        <div className="mt-2 w-3 h-[2px] flex-shrink-0" style={{ backgroundColor: exp.color }} />
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            lineHeight: 1.7,
                            color: "#555555",
                          }}
                        >
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((s, si) => (
                      <span
                        key={si}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          padding: "3px 8px",
                          border: `1px solid ${exp.color}60`,
                          color: exp.color,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
