import { motion } from "framer-motion";
import BackgroundPattern from "./BackgroundPattern";
import DotPattern from "./DotPattern";
import GridOverlay from "./GridOverlay";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-white">

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          lg:w-[500px]
          lg:h-[500px]
          rounded-full
          bg-purple-400/30
          blur-3xl
          will-change-transform
        "
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.96, 1.06, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-72
          h-72
          sm:w-96
          sm:h-96
          lg:w-[550px]
          lg:h-[550px]
          rounded-full
          bg-blue-400/25
          blur-3xl
          will-change-transform
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-80
          h-80
          sm:w-[450px]
          sm:h-[450px]
          lg:w-[600px]
          lg:h-[600px]
          rounded-full
          bg-indigo-300/20
          blur-3xl
          will-change-transform
        "
      />

      <BackgroundPattern />
      <DotPattern />
      <GridOverlay />
    </div>
  );
}