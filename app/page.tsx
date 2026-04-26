"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { House } from "lucide-react"
import Link from "next/link"
// import { IconBrandWhatsapp } from "@tabler/icons-react"

export default function Page() {
  return (
    <div className="flex flex-col justify-center p-2">
      <NavbarDemo />
      <HeroSectionOne />
    </div>
  )
}

function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Buying a Home in Bangalore? Avoid Costly Mistakes Before You Pay the Booking Amount."
            .split(" ")
            .map((word, index) =>
              word === "Costly" ? (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="max-text-2xl mr-2 inline-block text-red-400"
                >
                  {word}
                </motion.span>
              ) : (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="max-text-2xl mr-2 inline-block"
                >
                  {word}
                </motion.span>
              )
            )}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="text-md relative z-10 mx-auto max-w-xl py-4 text-center font-normal text-neutral-600 dark:text-neutral-400"
        >
          Tell us your budget and area. We’ll match you with suitable projects
          and assist with home loan guidance.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 flex flex-wrap items-center justify-center"
        >
          <Link
            href="https://wa.me/919739807465?text=Hi%20I%20found%20Property%20Salahe%20from%20[Source]%20and%20I%20want%20details%20about%20projects%20in%20Bangalore."
            className="relative z-10 mt-8 flex flex-col flex-wrap items-center justify-center gap-4"
          >
            <Button className="max-h-sm flex w-80 transform rounded-lg bg-black p-6 text-xl font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Get started on whatsapp{" "}
              <IconBrandWhatsapp className="scale-150" />
            </Button>
            {/* other social media platforms , not ready yet : */}
            {/* <span className="text-2xl">also checkout</span> */}
            {/* <Button className="h-auto w-auto min-w-80 gap-4 p-4 text-2xl text-white"> */}
            {/*   <InstagramIcon size={1.5} className="mr-2 inline-block" /> */}
            {/*   Visit */}
            {/* </Button> */}
          </Link>

          {/*contact support btn*/}
          {/*<button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>*/}
        </motion.div>
      </div>
    </div>
  )
}

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
import { useState } from "react"
import { IconBrandWhatsapp } from "@tabler/icons-react"

export function NavbarDemo() {
  const navItems = [
    // {
    //   name: "Features",
    //   link: "#features",
    // },
    // {
    //   name: "Pricing",
    //   link: "#pricing",
    // },
    // {
    //   name: "Contact",
    //   link: "#contact",
    // },
  ]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/*<NavbarButton variant="secondary">Login</NavbarButton>*/}
            <NavbarButton
              variant="primary"
              className="flex items-center justify-center"
            >
              contact us on whatsapp <IconBrandWhatsapp />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
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

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="scale-250"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  )
}
