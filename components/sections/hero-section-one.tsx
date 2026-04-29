"use client"

import { Backlight } from "@/components/ui/backlight"
import { Highlighter } from "@/components/ui/highlighter"
import { Meteors } from "@/components/ui/meteors"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { motion } from "motion/react"
import { GetStartedDialog } from "components/get-started-dialog"
import { useState } from "react"

export default function HeroSectionOne() {
  const words =
    "Buying a Home in Bangalore? Avoid Costly Mistakes Before You Pay the Booking Amount.".split(
      " "
    )

  const baseDelay = 0.1
  const animDuration = 0.3
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0 z-0 sm:mr-200 opacity-80">
        <Meteors />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
          <div className="px-4 py-10 md:py-20">
            <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold text-[#e5e7eb] md:text-4xl lg:text-7xl">
              {words.map((word, index) => {
                const isCostly = word === "Costly"
                const wordEndDelay = index * baseDelay + animDuration

                return (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: animDuration,
                      delay: index * baseDelay,
                      ease: "easeInOut",
                    }}
                    className="relative mr-2 inline-block"
                  >
                    {isCostly ? (
                      <Backlight className="inline-block">
                        <Highlighter
                          action="underline"
                          color="#FF3B30"
                          animationDuration={400}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              color: "#FF3B30",
                              animationDelay: `${wordEndDelay}s`,
                            }}
                          >
                            {word}
                          </span>
                        </Highlighter>
                      </Backlight>
                    ) : (
                      <span className="text-[#e5e7eb]">{word}</span>
                    )}
                  </motion.span>
                )
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="text-md relative z-10 mx-auto max-w-xl py-4 text-center font-normal text-[#9ca3af]"
            >
              Tell us your budget and area. We&apos;ll match you with suitable
              projects and assist with home loan guidance.
            </motion.p>

            <RainbowButton
              onClick={() => setDialogOpen(true)}
              className="mx-auto flex w-80 transform rounded-lg bg-[#ffffff] p-6 text-xl font-medium text-[#0b0f14] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#e5e7eb]"
            >
              Get started
            </RainbowButton>

            <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </div>
        </div>
      </div>
    </section>
  )
}
