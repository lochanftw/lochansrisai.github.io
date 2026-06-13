import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function smoothScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 60) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    smoothScroll(href);
  };

  return (
    <>
      {/* Top red accent bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{ height: "3px", backgroundColor: "#D42B2B" }}
      />

      <motion.nav
        className="fixed left-0 right-0 z-[99] flex items-center justify-between px-8 md:px-16 py-4"
        style={{ top: "3px" }}
        animate={{
          backgroundColor: scrolled ? "rgba(250,250,247,0.97)" : "rgba(250,250,247,0)",
          boxShadow: scrolled ? "0 1px 0 rgba(17,17,17,0.1)" : "0 0px 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 p-0"
          style={{ border: "none", background: "none", outline: "none" }}
        >
          <div
            className="w-9 h-9 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#D42B2B" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              L
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.18em",
              color: "#111111",
              textTransform: "uppercase",
            }}
          >
            Lochan
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            const isHovered = hoveredLink === link.href;
            const highlighted = isActive || isHovered;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative p-0 pb-1"
                style={{
                  border: "none",
                  background: "none",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: highlighted ? "#D42B2B" : "#111111",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ backgroundColor: "#D42B2B" }}
                  animate={{ width: highlighted ? "100%" : "0%" }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[6px] p-2"
          style={{ border: "none", background: "none", outline: "none", width: 40, height: 40 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#111111",
                width: "22px",
                transformOrigin: "center",
              }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 2
                    ? { rotate: -45, y: -8 }
                    : { opacity: 0, scaleX: 0 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.22 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Full-width black bottom border line — Suprematism reference */}
      <div
        className="fixed left-0 right-0 z-[97]"
        style={{
          top: "71px",
          height: "2px",
          backgroundColor: "#111111",
        }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[98] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#FAFAF7" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Suprematist bg shapes */}
            <div className="absolute top-16 right-16 w-28 h-6 opacity-20" style={{ backgroundColor: "#D42B2B" }} />
            <div className="absolute bottom-32 left-12 w-12 h-12 rounded-full opacity-15" style={{ backgroundColor: "#1B4FD8" }} />
            <div className="absolute top-1/3 left-8 w-6 h-32 opacity-10" style={{ backgroundColor: "#F0C225" }} />

            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link, i) => (
                <MobileNavLink
                  key={link.href}
                  link={link}
                  index={i}
                  onClick={() => handleNav(link.href)}
                />
              ))}
            </div>

            {/* Close hint */}
            <motion.button
              className="absolute top-6 right-8 p-2"
              style={{ border: "none", background: "none", outline: "none" }}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div style={{ width: 24, height: 24, position: "relative" }}>
                <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, backgroundColor: "#111111", transform: "rotate(45deg)" }} />
                <span style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, backgroundColor: "#111111", transform: "rotate(-45deg)" }} />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavLink({
  link,
  index,
  onClick,
}: {
  link: { label: string; href: string };
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-2 px-6"
      style={{
        border: "none",
        background: "none",
        outline: "none",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(36px, 8vw, 52px)",
        letterSpacing: "0.04em",
        color: hovered ? "#D42B2B" : "#111111",
        transition: "color 0.18s ease",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
    >
      {link.label}
    </motion.button>
  );
}
