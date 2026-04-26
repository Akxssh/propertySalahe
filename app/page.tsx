"use client"
import { TriangleAlert } from "lucide-react"
import { Check } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

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

      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 2.9 }}
        className="-mt-24 flex h-32 w-full items-center justify-center"
      >
        <ScrollIndicator />
      </motion.div>

      <div className="my-8 flex h-auto w-full flex-col items-center justify-center gap-8 bg-[#1a1a1a] p-6 outline outline-2 outline-[#333333]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-white sm:text-4xl">
            3 Common Builder Traps to Avoid
          </h2>
          <h2 className="text-md text-gray-500">
            Before you pay that booking amount, know what's at stake.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-2">
            <TriangleAlert size={48} color="#f87171" />
            <span className="text-2xl">Stamp Duty Loss</span>
            <span className="text-xl text-gray-500">
              Non-refundable 5.6% if project fails
            </span>
          </Card>
          <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-2">
            <TriangleAlert size={48} color="#f87171" />
            <span className="text-2xl">Booking Trap</span>
            <span className="text-xl text-gray-500">
              ₹2-5L held hostage with vague terms
            </span>
          </Card>
          <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-2">
            <TriangleAlert size={48} color="#f87171" />
            <span className="text-2xl">Hidden Charges</span>
            <span className="text-xl text-gray-500">
              Maintenance, legal, parking add 8-12%
            </span>
          </Card>
        </div>
      </div>
      <div className="mt-12 flex h-auto w-full flex-col items-center justify-center gap-8 p-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-white sm:text-5xl">Real Outcomes</h2>
          <h2 className="text-md text-gray-500">
            Mistakes avoided. Money saved.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Card className="w-auto max-w-sm min-w-64 space-y-4 bg-[#141414] p-6">
            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#ed563d]">
                BEFORE
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Almost paid ₹5L booking for project with pending RERA
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#03c445]">
                AFTER
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Saved ₹5L + found RERA-approved alternative
              </p>
            </div>
            <Button className="h-auto w-auto bg-[#12261a] p-2">
              <Check size={32} color="#01c850" />
              <span className="text-[#01c850]">Saved ₹5,00,000</span>
            </Button>
          </Card>

          <Card className="w-auto max-w-sm min-w-64 space-y-4 bg-[#141414] p-6">
            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#ed563d]">
                BEFORE
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Builder promised possession in 2024, actual: 2027
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#03c445]">
                AFTER
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Identified delay pattern, chose ready-to-move
              </p>
            </div>
            <Button className="h-auto w-auto bg-[#12261a] p-2">
              <Check size={32} color="#01c850" />
              <span className="text-[#01c850]">Saved 3 years rent</span>
            </Button>
          </Card>
          <Card className="w-auto max-w-sm min-w-64 space-y-4 bg-[#141414] p-6">
            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#ed563d]">
                BEFORE
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Hidden charges of ₹8L not disclosed upfront
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-semibold tracking-wide text-[#03c445]">
                AFTER
              </span>
              <p className="text-lg leading-snug font-medium text-white">
                Full cost breakdown before booking
              </p>
            </div>
            <Button className="h-auto w-auto bg-[#12261a] p-2">
              <Check size={32} color="#01c850" />
              <span className="text-[#01c850]">Saved ₹8,00,000</span>
            </Button>
          </Card>
        </div>
      </div>
      <div className="my-8 flex h-auto w-full flex-col items-center justify-center gap-8 bg-[#1a1a1a] p-6 outline outline-2 outline-[#333333]">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl text-white sm:text-5xl">How it works</h2>
          <h2 className="text-md text-gray-500">
            Simple 3-step process to find your home
          </h2>
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <span className="text-xl font-bold text-black">1</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl">Tell Your Budget</span>
              <span className="text-xl text-gray-500">
                Share budget & preferred areas
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <span className="text-xl font-bold text-black">2</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl">Get Shortlist</span>
              <span className="text-xl text-gray-500">
                Receive vetted project options
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <span className="text-xl font-bold text-black">3</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl">Site Visit + Loan</span>
              <span className="text-xl text-gray-500">
                We arrange visits & loan help
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full w-screen flex-col items-center justify-center bg-[#111314] px-4 py-16 text-white outline outline-2 outline-[#363636]">
          <h1 className="text-center text-3xl font-semibold md:text-4xl">
            We Compare So You Don’t Overpay
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sample comparison snapshot
          </p>

          <div className="mt-10 w-full max-w-3xl">
            <div className="grid grid-cols-3 border-b border-gray-700 pb-3 text-center">
              <div></div>
              <div className="font-medium">Builder A</div>
              <div className="font-medium">Builder B</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
              <div className="text-gray-400">Price/sqft</div>
              <div>₹6,800</div>
              <div>₹7,200</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
              <div className="text-gray-400">RERA Status</div>
              <div className="text-green-500">Approved</div>
              <div className="text-red-500">Pending</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
              <div className="text-gray-400">Possession</div>
              <div>Dec 2025</div>
              <div>Mar 2027</div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-800 py-4 text-center">
              <div className="text-gray-400">Hidden Charges</div>
              <div>₹2.5L</div>
              <div>₹6L</div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            We analyze 15+ factors before recommending any project.
          </p>
        </div>

        <div className="-row flex flex-col items-center justify-center gap-4 p-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl">Trusted by Home Buyers</h1>
            <h2 className="text-2xl text-neutral-600">What our clients say</h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Card className="max-w-sm p-6">
              <span className="text-neutral-400">
                "Saved me from a nightmare project. The RERA was pending and
                they helped me find a better option."
              </span>
              <div className="flex-col items-start justify-center">
                <span className="dark: block text-white">Rajesh k</span>
                <span className="block text-neutral-500">
                  {" "}
                  Bought 3BHK in Whitefield
                </span>
              </div>
            </Card>
            <Card className="max-w-sm p-6">
              <span className="text-neutral-400">
                "The comparison helped me negotiate ₹4L off the asking price.
                Worth every minute."
              </span>
              <div className="flex-col items-start justify-center">
                <span className="dark: block text-white">Priya M.</span>
                <span className="block text-neutral-500">
                  {" "}
                  Bought 2BHK in Sarjapur
                </span>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex w-full w-screen flex-col items-center justify-center gap-6 bg-[#111314] px-4 py-16 text-white outline outline-2 outline-[#363636]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl">
              Avoid 3 Common Builder Traps
            </h1>
            <h1 className="text-md text-neutral-600 sm:text-xl">
              Get a free consultation before you pay the booking amount
            </h1>
          </div>
          <Input
            placeholder="Your Name"
            className="h-12 w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
          />
          <Input
            placeholder="Phone number"
            className="h-12 w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
          />

          <Input
            placeholder="Select budget"
            className="h-12 w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
          />
          <Input
            placeholder="Select area"
            className="h-12 w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
          />
          <span className="text-2xl text-neutral-300">or</span>
          <Button className="h-auto w-auto min-w-sm p-3 text-2xl">
            Get started on whatsapp
          </Button>
          <div className="flex w-full w-screen flex-col items-center justify-center bg-[#202020] px-4 py-16 text-white outline outline-2 outline-[#363636]">
            <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
              <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
                Ready to Find Your Home Without the Headaches?
              </h2>

              <p className="mt-4 text-sm text-zinc-400 sm:text-base">
                Let us help you avoid costly mistakes and find the right
                project.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Get started on whatsapp
                <span className="text-lg">📱</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-4xl text-xs text-zinc-500">
        <span className="block text-3xl">© 2024 Propertysalahe.com.</span>
        <span className="block text-3xl">All rights reserved.</span>
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
      <div className="inset-0 z-0 sm:mr-200">
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
    <div className="fixed relative top-0 left-0 w-full">
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
