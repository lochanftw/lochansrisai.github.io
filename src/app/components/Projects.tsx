import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    num: "01",
    title: "Smart Parking System",
    subtitle: "RFID · IoT · Cloud Dashboard",
    description:
      "An IoT-powered parking management platform that automates vehicle identification and slot monitoring using RFID and ESP32. Features a live cloud dashboard for real-time availability tracking.",
    tech: ["ESP32", "RFID RC522", "WiFi", "Cloud Server", "SQL DB", "Dashboard"],
    color: "#D42B2B",
    highlights: [
      "RFID-based vehicle authentication system",
      "Real-time parking slot occupancy tracking",
      "Live web dashboard for availability monitoring",
      "Scalable low-cost smart city solution",
    ],
  },
  {
    num: "02",
    title: "Health Anomaly Detection",
    subtitle: "ML · Time Series · Wearables",
    description:
      "A machine learning project identifying unusual health patterns from wearable fitness device data using advanced feature extraction, forecasting, and clustering algorithms.",
    tech: ["Python", "TSFresh", "Facebook Prophet", "Scikit-Learn", "K-Means", "DBSCAN"],
    color: "#1B4FD8",
    highlights: [
      "Advanced time-series feature extraction with TSFresh",
      "Forecasting with Facebook Prophet",
      "Clustering: K-Means & DBSCAN with Silhouette Score",
      "Proactive health anomaly identification",
    ],
  },
  {
    num: "03",
    title: "AquaDot",
    subtitle: "AI · Aquaculture · Edge Computing",
    description:
      "An AI-driven aquaculture fish health monitoring system running on Raspberry Pi at the edge, tracking water quality, generating health scores, and enabling real-time alerts for fish farmers.",
    tech: ["Python", "Raspberry Pi OS", "PostgreSQL", "Docker", "MQTT", "FastAPI", "PyTest"],
    color: "#F0C225",
    highlights: [
      "Edge-first solution on Raspberry Pi",
      "Real-time water quality monitoring",
      "AI health scoring from sensor data",
      "Scalable cloud-sync architecture",
    ],
  },
  {
    num: "04",
    title: "L.A.D.A",
    subtitle: "AI Assistant · Multi-Platform · Remote Control",
    description:
      "Language Agnostic Digital Assistant — a multi-platform AI assistant with Desktop, Web, CLI, REST API, and WebSocket interfaces, featuring a secure remote-control bridge architecture.",
    tech: ["Python", "TypeScript", "Swift 6.2", "Ollama", "Docker", "PyQT5", "Next.js", "FastAPI"],
    color: "#D42B2B",
    highlights: [
      "5 interaction modes: Desktop, Web, CLI, API, WebSocket",
      "Remote-control bridge architecture",
      "Modular multi-provider AI framework",
      "Plugin-based extensible architecture",
    ],
  },
  {
    num: "05",
    title: "Smart Medicine Monitor",
    subtitle: "IoT · OCR · Healthcare",
    description:
      "An IoT healthcare platform using Raspberry Pi, camera module, OCR, and temperature/humidity sensors to track medicine expiry dates and storage conditions with automated alerts.",
    tech: ["Raspberry Pi", "OCR", "Computer Vision", "Temperature Sensors", "SMS Alerts"],
    color: "#C8C8BE",
    highlights: [
      "Automatic medicine identification via OCR",
      "Expiry date tracking and monitoring",
      "SMS, notification & alarm alert system",
      "Suitable for homes, pharmacies & hospitals",
    ],
  },
];

function ProjectRow({
  p,
  i,
  active,
  onToggle,
}: {
  p: (typeof projects)[0];
  i: number;
  active: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.08, type: "spring", damping: 22 }}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Row trigger */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "24px 32px",
          backgroundColor: hovered ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0)",
          transition: "background-color 0.2s ease",
          outline: "none",
        }}
      >
        {/* Left accent bar */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            backgroundColor: p.color,
            originY: 0,
          }}
          animate={{ scaleY: hovered || active ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Project info */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: p.color,
              lineHeight: 1,
              minWidth: "56px",
              opacity: hovered || active ? 1 : 0.5,
              transition: "opacity 0.2s ease",
            }}
          >
            {p.num}
          </span>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2.5vw, 30px)",
                color: "#FFFFFF",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                marginBottom: "4px",
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: p.color,
                textTransform: "uppercase",
              }}
            >
              {p.subtitle}
            </p>
          </div>
        </div>

        {/* Toggle icon */}
        <motion.span
          style={{
            display: "block",
            fontSize: "28px",
            lineHeight: 1,
            color: hovered ? p.color : "rgba(255,255,255,0.35)",
            transition: "color 0.2s ease",
            userSelect: "none",
            flexShrink: 0,
          }}
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </div>

      {/* Expanded panel */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 32px 32px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "24px",
              }}
              className="md:grid-cols-2"
            >
              {/* Description + highlights */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.65)",
                    marginBottom: "20px",
                  }}
                >
                  {p.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {p.highlights.map((h, hi) => (
                    <div key={hi} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div
                        style={{
                          marginTop: "8px",
                          width: "12px",
                          height: "2px",
                          flexShrink: 0,
                          backgroundColor: p.color,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Technologies
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {p.tech.map((t, ti) => (
                    <motion.span
                      key={ti}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        padding: "5px 12px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: `${p.color}55`,
                        color: "rgba(255,255,255,0.65)",
                        letterSpacing: "0.08em",
                        display: "inline-block",
                      }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: ti * 0.04 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Suprematist decorations */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute top-12 left-0 w-6 h-32" style={{ backgroundColor: "#1B4FD8", opacity: 0.4 }} />
      <div className="absolute bottom-20 right-0 w-24 h-6" style={{ backgroundColor: "#F0C225", opacity: 0.3 }} />
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,43,43,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-[2px]" style={{ backgroundColor: "#D42B2B" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            04 / Projects
          </span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <motion.h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 9vw, 100px)",
              lineHeight: 0.9,
              color: "#FFFFFF",
              letterSpacing: "0.01em",
            }}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 24 }}
          >
            SELECTED
            <br />
            <span style={{ color: "#D42B2B" }}>WORKS</span>
          </motion.h2>
        </div>

        {/* Projects list */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow
              key={i}
              p={p}
              i={i}
              active={active === i}
              onToggle={() => setActive(active === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
