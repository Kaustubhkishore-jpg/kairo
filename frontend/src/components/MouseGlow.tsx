import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 200,
        y: pos.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
      }}
      className="fixed w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none -z-10"
    />
  );
}