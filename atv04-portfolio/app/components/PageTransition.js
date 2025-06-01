"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.04,
  },
}

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94], // Curva de easing mais suave
  duration: 0.6,
}

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
