import { useRef } from "react";
import { motion, useInView } from "motion/react";

const milestones = [
  {
    year: "2024",
    title: "The Spark",
    subtitle: "SRM Institute of Science & Technology",
    description: "Began B.Tech in Electronics & Communication Engineering with Data Science specialization. Started mastering Python, C, Arduino, and hardware fundamentals. The foundation of everything.",
    color: "#D42B2B",
    shape: "circle",
    tags: ["Python", "C", "Arduino", "Electronics"],
  },
  {
    year: "2024",
    title: "First Build",
    subtitle: "Smart Parking System",
    description: "Built my first major IoT project — an RFID-based smart parking system with ESP32, cloud infrastructure, SQL database, and a real-time web dashboard. Hardware meets software for the first time.",
    color: "#1B4FD8",
    shape: "square",
    tags: ["ESP32", "RFID", "SQL", "IoT", "Cloud"],
  },
  {
    year: "2025",
    title: "Data Chapter",
    subtitle: "Beau Roi Technologies Pvt. Ltd.",
    description: "Completed a 4-week data analytics internship. Cleaned and preprocessed 4000+ datasets, built Power BI dashboards, and delivered actionable business insights from complex data.",
    color: "#F0C225",
    shape: "circle",
    tags: ["Power BI", "Data Analytics", "Python", "EDA"],
  },
  {
    year: "2025",
    title: "Virtual Growth",
    subtitle: "Infosys Springboard",
    description: "Completed an 8-week virtual Python internship, contributing to 4 project milestones and building automation scripts that delivered 87% efficiency improvements in task execution.",
    color: "#AAAAAA",
    shape: "square",
    tags: ["Python", "Automation", "Problem Solving"],
  },
  {
    year: "2025",
    title: "Industrial Exposure",
    subtitle: "Hyundai Motor India Limited",
    description: "2-week in-plant training at one of India's largest automotive manufacturers. Observed quality control, production workflows, and engineering operations at industrial scale.",
    color: "#D42B2B",
    shape: "circle",
    tags: ["Manufacturing", "Quality Control", "Industrial Engineering"],
  },
  {
    year: "2026",
    title: "Vision & The Deep",
    subtitle: "Research Intern · NIT Puducherry",
    description: "1-month offline research internship at NIT Puducherry exploring Image Processing and Object Detection. Studied Image Restoration, Morphological Processing, Image Segmentation, and Feature Extraction & Classification. Core project: detecting diseases in fish and monitoring marine life health through computer vision.",
    color: "#1B4FD8",
    shape: "circle",
    tags: ["Image Processing", "Object Detection", "OpenCV", "Marine Life", "Computer Vision", "Python"],
  },
  {
    year: "2026",
    title: "The AI Leap",
    subtitle: "L.A.D.A — Language Agnostic Digital Assistant",
    description: "Contributed to a multi-platform AI assistant supporting Desktop, Web, CLI, REST API, and WebSocket interfaces. Implemented a remote-control bridge architecture using Python, TypeScript, Swift, and Docker.",
    color: "#1B4FD8",
    shape: "square",
    tags: ["Python", "TypeScript", "Swift", "Docker", "FastAPI", "Ollama"],
  },
  {
    year: "2026",
    title: "The Ocean",
    subtitle: "AquaDot — Aquaculture Fish Health Monitoring",
    description: "Built an AI-driven edge computing system on Raspberry Pi for fish farm monitoring — tracking water quality, health scores, and environmental alerts in real time using MQTT and PostgreSQL.",
    color: "#F0C225",
    shape: "circle",
    tags: ["Raspberry Pi", "MQTT", "PostgreSQL", "Docker", "FastAPI"],
  },
  {
    year: "2026",
    title: "Health Tech",
    subtitle: "Smart Medicine Monitoring System",
    description: "Developed an IoT healthcare platform using Raspberry Pi, OCR, and computer vision to track medicine expiry dates and storage conditions. Sends SMS and alarm alerts to prevent expired medicine use.",
    color: "#D42B2B",
    shape: "square",
    tags: ["Raspberry Pi", "OCR", "Computer Vision", "IoT", "Healthcare"],
  },
];

function ShapeMarker({ color, shape }: { color: string; shape: string }) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        backgroundColor: color,
        borderRadius: shape === "circle" ? "50%" : 0,
        border: "4px solid #0A0A08",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          backgroundColor: "rgba(0,0,0,0.35)",
          borderRadius: shape === "circle" ? "50%" : 0,
        }}
      />
    </div>
  );
}

function YearLabel({ item }: { item: (typeof milestones)[0] }) {
  return (
    <div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "80px",
          lineHeight: 1,
          color: "rgba(255,255,255,0.07)",
          display: "block",
        }}
      >
        {item.year}
      </span>
    </div>
  );
}

function ContentCard({ item, rightAlign }: { item: (typeof milestones)[0]; rightAlign?: boolean }) {
  return (
    <motion.div
      className="relative p-6"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 bottom-0 w-1"
        style={{
          backgroundColor: item.color,
          left: rightAlign ? "auto" : 0,
          right: rightAlign ? 0 : "auto",
        }}
      />

      <div className={rightAlign ? "text-right" : "text-left"}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: item.color,
            textTransform: "uppercase",
            display: "block",
            marginBottom: "6px",
          }}
        >
          {item.year}
        </span>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "26px",
            color: "#FFFFFF",
            letterSpacing: "0.03em",
            marginBottom: "4px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 500,
            color: item.color,
            marginBottom: "10px",
            letterSpacing: "0.06em",
          }}
        >
          {item.subtitle}
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.58)",
            marginBottom: "12px",
          }}
        >
          {item.description}
        </p>

        <div
          className="flex flex-wrap gap-1.5"
          style={{ justifyContent: rightAlign ? "flex-end" : "flex-start" }}
        >
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.15em",
                padding: "2px 8px",
                border: `1px solid ${item.color}50`,
                color: "rgba(255,255,255,0.45)",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MilestoneCard({ item, index }: { item: (typeof milestones)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center mb-12 md:mb-20">
      {/* Timeline center marker */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", damping: 18 }}
      >
        <motion.div
          animate={{ rotate: item.shape === "square" ? [0, 4, -4, 0] : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShapeMarker color={item.color} shape={item.shape} />
        </motion.div>
      </motion.div>

      {/* Content card grid */}
      <div className="w-full grid grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className={isLeft ? "pr-16 text-right" : "order-2 pl-16 text-left"}>
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, type: "spring", damping: 24 }}
            >
              <ContentCard item={item} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <YearLabel item={item} />
            </motion.div>
          )}
        </div>

        {/* Right column */}
        <div className={isLeft ? "order-2 pl-16" : "pr-16 text-right"}>
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, type: "spring", damping: 24 }}
            >
              <ContentCard item={item} rightAlign />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <YearLabel item={item} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Journey() {
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-10%" });

  return (
    <section
      id="journey"
      className="py-32 overflow-hidden"
      style={{ position: "relative", backgroundColor: "#0A0A08" }}
    >
      {/* Suprematist bg shapes */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ backgroundColor: "#D42B2B" }} />
      <div className="absolute top-16 right-0 w-48 h-6 opacity-25" style={{ backgroundColor: "#1B4FD8" }} />
      <div className="absolute bottom-20 left-0 w-32 h-3 opacity-15" style={{ backgroundColor: "#F0C225" }} />
      <div className="absolute bottom-0 right-32 w-6 h-48 opacity-15" style={{ backgroundColor: "#D42B2B" }} />
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,43,43,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-24">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
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
              02 / Journey
            </span>
            <div className="w-12 h-[2px]" style={{ backgroundColor: "#D42B2B" }} />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 10vw, 110px)",
                lineHeight: 0.9,
                color: "#FFFFFF",
                letterSpacing: "0.02em",
              }}
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ type: "spring", damping: 24, delay: 0.1 }}
            >
              MY STORY
            </motion.h2>
          </div>

          <motion.p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 480,
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            From curiosity to creation — a timeline of milestones that shaped who I am.
          </motion.p>
        </div>

        {/* Desktop timeline */}
        <div ref={lineRef} className="relative hidden md:block">
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            {/* Animated red fill — needs h-full to be visible */}
            <motion.div
              className="w-full h-full absolute top-0"
              style={{ backgroundColor: "#D42B2B", originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {milestones.map((item, i) => (
            <MilestoneCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-8">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-8"
              style={{ borderLeft: `2px solid ${item.color}` }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1, type: "spring", damping: 20 }}
            >
              <div
                className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4"
                style={{
                  backgroundColor: item.color,
                  borderRadius: item.shape === "circle" ? "50%" : 0,
                }}
              />
              <div
                className="p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: item.color,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.year}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    color: "#FFFFFF",
                    margin: "4px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: item.color,
                    marginBottom: "8px",
                  }}
                >
                  {item.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
