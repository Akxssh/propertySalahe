"use client"

import { motion } from "motion/react"
import ScrollIndicator from "@/components/ui/scroll-indicator"

export default function AnimatedScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, delay: 2.9 }}
      className="-mt-24 flex h-32 w-full items-center justify-center"
    >
      <ScrollIndicator />
    </motion.div>
  )
}
