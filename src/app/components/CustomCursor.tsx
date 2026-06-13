import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 700 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 700 });
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const isHoveringRef = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [role='button'], input, select, textarea, label");
      if (interactive && !isHoveringRef.current) {
        isHoveringRef.current = true;
        setIsHovering(true);
      } else if (!interactive && isHoveringRef.current) {
        isHoveringRef.current = false;
        setIsHovering(false);
      }
    };

    const onLeave = () => {
      setVisible(false);
      isHoveringRef.current = false;
      setIsHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: isClicking ? 24 : isHovering ? 48 : 32,
            height: isClicking ? 24 : isHovering ? 48 : 32,
            borderRadius: isHovering ? "50%" : "0%",
            borderColor: isHovering ? "#D42B2B" : "#111111",
            opacity: 1,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#111111",
            backgroundColor: "rgba(0,0,0,0)",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: isClicking ? 4 : isHovering ? 6 : 8,
            height: isClicking ? 4 : isHovering ? 6 : 8,
            borderRadius: isHovering ? "50%" : "0%",
            backgroundColor: "#D42B2B",
          }}
          transition={{ type: "spring", damping: 30, stiffness: 700 }}
        />
      </motion.div>
    </>
  );
}
