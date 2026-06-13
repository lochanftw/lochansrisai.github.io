import { useRef } from "react";
import { motion } from "motion/react";

const floatingShapes = [
  { type: "rect", color: "#D42B2B", w: 120, h: 14, top: "15%", left: "58%", rotate: 0, delay: 0 },
  { type: "circle", color: "#1B4FD8", w: 80, h: 80, top: "25%", left: "80%", rotate: 0, delay: 0.3 },
  { type: "rect", color: "#111111", w: 14, h: 160, top: "38%", left: "65%", rotate: 0, delay: 0.6 },
  { type: "rect", color: "#F0C225", w: 60, h: 60, top: "58%", left: "72%", rotate: 12, delay: 0.2 },
  { type: "rect", color: "#D42B2B", w: 8, h: 180, top: "12%", left: "90%", rotate: -12, delay: 0.8 },
  { type: "circle", color: "#F0C225", w: 24, h: 24, top: "72%", left: "60%", rotate: 0, delay: 1 },
  { type: "rect", color: "#1B4FD8", w: 200, h: 8, top: "82%", left: "58%", rotate: 0, delay: 0.4 },
  { type: "rect", color: "#333333", w: 48, h: 48, top: "67%", left: "88%", rotate: 20, delay: 0.9 },
];

const heroLines = ["HEY,", "I'M", "LOCHAN."];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#FAFAF7", paddingTop: "92px" }}
    >
      {/* Background grid dots */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#111 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle red ambient glow behind the heading */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: "5%",
          top: "30%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,43,43,0.12) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Suprematist floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: s.w,
              height: s.h,
              top: s.top,
              left: s.left,
              backgroundColor: s.color,
              borderRadius: s.type === "circle" ? "50%" : 0,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
              rotate: [s.rotate, s.rotate + 2, s.rotate],
            }}
            transition={{
              opacity: { delay: s.delay + 0.6, duration: 0.5 },
              scale: { delay: s.delay + 0.6, duration: 0.5 },
              y: { delay: s.delay + 1, duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
              rotate: { delay: s.delay + 1, duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Left: Text Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl w-full">
        {/* Pre-title */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-8 h-[2px]" style={{ backgroundColor: "#D42B2B" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.25em",
              color: "#555555",
              textTransform: "uppercase",
            }}
          >
            ECE Engineer · IoT Developer · AI Builder
          </span>
        </motion.div>

        {/* Big Name */}
        <div className="mb-6">
          {heroLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(72px, 14vw, 160px)",
                  lineHeight: 0.9,
                  color: i === 2 ? "#D42B2B" : "#111111",
                  letterSpacing: "-0.01em",
                }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", damping: 24, stiffness: 180 }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(14px, 1.6vw, 17px)",
            color: "#555555",
            maxWidth: 520,
            lineHeight: 1.75,
            fontWeight: 400,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Electronics &amp; Communication Engineering Student specializing in Data Science at{" "}
          <span style={{ color: "#111111", fontWeight: 600 }}>SRM Institute of Science &amp; Technology</span>.
          Building scalable solutions at the intersection of IoT, AI &amp; Embedded Systems.
        </motion.p>

        {/* Location Badge */}
        <motion.div
          className="inline-flex items-center gap-3 mt-6 px-4 py-2"
          style={{ border: "1.5px solid #CCCCCC" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.05, type: "spring", damping: 20 }}
        >
          <div className="w-2 h-2" style={{ backgroundColor: "#D42B2B" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#333333",
              textTransform: "uppercase",
            }}
          >
            Chennai, India
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.5 }}
        >
          <motion.button
            onClick={() => scrollTo("#projects")}
            className="relative overflow-hidden px-8 py-4"
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
            whileHover={{
              backgroundColor: "#D42B2B",
              boxShadow: "0 0 24px rgba(212,43,43,0.5), 0 0 48px rgba(212,43,43,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 relative"
            style={{
              border: "2px solid #111111",
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.15em",
              color: "#111111",
              textTransform: "uppercase",
            }}
            whileHover={{
              backgroundColor: "#111111",
              color: "#FFFFFF",
              boxShadow: "0 0 20px rgba(17,17,17,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-16 lg:left-24 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-[1px] h-12"
          style={{ backgroundColor: "#AAAAAA", originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "#AAAAAA",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
