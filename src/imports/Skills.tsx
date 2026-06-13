import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skillGroups = [
  {
    category: "Programming",
    color: "#D42B2B",
    skills: [
      { name: "Python", level: 75 },
      { name: "SQL", level: 70 },
      { name: "C", level: 40 },
    ],
  },
  {
    category: "AI & Data Science",
    color: "#1B4FD8",
    skills: [
      { name: "Machine Learning", level: 65 },
      { name: "Power BI", level: 70 },
      { name: "Data Analytics", level: 75 },
      { name: "TSFresh", level: 60 },
      { name: "Scikit-learn", level: 65 },
      { name: "Facebook Prophet", level: 60 },
    ],
  },
  {
    category: "IoT & Embedded",
    color: "#F0C225",
    skills: [
      { name: "IoT Systems", level: 85 },
      { name: "Arduino", level: 70 },
      { name: "ESP32", level: 72 },
      { name: "Raspberry Pi", level: 68 },
      { name: "MQTT", level: 65 },
      { name: "RFID Systems", level: 70 },
    ],
  },
  {
    category: "Cloud & Databases",
    color: "#D42B2B",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Docker", level: 60 },
      { name: "FastAPI", level: 62 },
    ],
  },
  {
    category: "Dev Tools",
    color: "#111111",
    skills: [
      { name: "GitHub", level: 78 },
      { name: "VS Code", level: 85 },
      { name: "Figma", level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#222222",
            letterSpacing: "0.03em",
          }}
        >
          {name}
        </span>
        <motion.span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: color,
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full h-[3px]" style={{ backgroundColor: "#E8E8E0" }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: color, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : {}}
          transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden" style={{ backgroundColor: "#FAFAF7" }}>
      {/* Suprematist decorations */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#111111" }} />
      <div className="absolute top-0 right-0 w-3 h-40" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute bottom-0 left-20 w-64 h-3" style={{ backgroundColor: "#1B4FD8" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-20">
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
              03 / Skills
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 9vw, 100px)",
                lineHeight: 0.9,
                color: "#111111",
                letterSpacing: "0.01em",
              }}
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ type: "spring", damping: 24, delay: 0.1 }}
            >
              TECHNICAL
              <br />
              <span style={{ color: "#D42B2B" }}>ARSENAL</span>
            </motion.h2>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: gi * 0.1, type: "spring", damping: 24 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4" style={{ backgroundColor: group.color }} />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#111111",
                    textTransform: "uppercase",
                  }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skill bars */}
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={gi * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Suprematist composition at bottom */}
        <motion.div
          className="mt-24 flex items-end gap-3 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { w: 160, h: 8, color: "#D42B2B" },
            { w: 8, h: 48, color: "#111111" },
            { w: 80, h: 8, color: "#1B4FD8" },
            { w: 8, h: 32, color: "#F0C225" },
            { w: 120, h: 8, color: "#111111" },
          ].map((s, i) => (
            <motion.div
              key={i}
              style={{ width: s.w, height: s.h, backgroundColor: s.color, flexShrink: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
