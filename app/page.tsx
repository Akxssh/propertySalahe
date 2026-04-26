"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Meteors } from "@/components/ui/meteors"
import { Backlight } from "@/components/ui/backlight"
import { Highlighter } from "@/components/ui/highlighter"
import ScrollIndicator from "@/components/ui/scroll-indicator"
import { IconBrandWhatsapp } from "@tabler/icons-react"

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden p-0">
      <NavbarDemo />
      <HeroSectionOne />

      <div className="-mt-24 flex h-32 w-full items-center justify-center">
        <ScrollIndicator />
      </div>

      <div className="flex h-32 w-full items-center justify-center bg-[#1a1a1a]">
        <Button>Hi im akash</Button>
      </div>
    </div>
  )
}

function HeroSectionOne() {
  const words =
    "Buying a Home in Bangalore? Avoid Costly Mistakes Before You Pay the Booking Amount.".split(
      " "
    )

  const baseDelay = 0.1
  const animDuration = 0.3

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Meteors />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
          <div className="px-4 py-10 md:py-20">
            <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
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
                              color: "#ef4444",
                              animationDelay: `${wordEndDelay}s`,
                            }}
                          >
                            {word}
                          </span>
                        </Highlighter>
                      </Backlight>
                    ) : (
                      word
                    )}
                  </motion.span>
                )
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="text-md relative z-10 mx-auto max-w-xl py-4 text-center font-normal text-neutral-600 dark:text-neutral-400"
            >
              Tell us your budget and area. We’ll match you with suitable
              projects and assist with home loan guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="relative z-10 flex flex-wrap items-center justify-center"
            >
              <Link
                href="https://wa.me/919739807465?text=Hi%20I%20found%20Property%20Salahe%20from%20[Source]%20and%20I%20want%20details%20about%20projects%20in%20Bangalore."
                className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4"
              >
                <RainbowButton className="flex w-80 transform rounded-lg bg-black p-6 text-xl font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Get started
                </RainbowButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function NavbarDemo() {
  const navItems: { name: string; link: string }[] = []
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              className="flex items-center justify-center"
            >
              contact us on whatsapp <IconBrandWhatsapp />
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
