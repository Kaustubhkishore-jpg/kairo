import { motion } from "framer-motion";

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

      {/* Left Curve */}
      <motion.svg
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-16
          top-0
          h-full
          w-[55%]
          sm:w-[45%]
          lg:w-[40%]
          opacity-10
          md:opacity-20
          will-change-transform
        "
        viewBox="0 0 400 900"
        preserveAspectRatio="none"
      >
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M${-80 + i * 18} 0 C ${150 + i * 8} 250, ${
              -80 + i * 18
            } 650, ${220 + i * 8} 900`}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1"
          />
        ))}
      </motion.svg>

      {/* Right Curve */}
      <motion.svg
        animate={{
          x: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-0
          h-full
          w-[55%]
          sm:w-[45%]
          lg:w-[40%]
          opacity-10
          md:opacity-20
          will-change-transform
        "
        viewBox="0 0 400 900"
        preserveAspectRatio="none"
      >
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M${420 - i * 18} 0 C ${200 - i * 8} 250, ${
              420 - i * 18
            } 650, ${100 - i * 8} 900`}
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
          />
        ))}
      </motion.svg>

    </div>
  );
}