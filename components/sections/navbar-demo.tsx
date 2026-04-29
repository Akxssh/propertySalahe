"use client"

import { useState } from "react"
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

export default function NavbarDemo() {
  const navItems: { name: string; link: string }[] = []
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <Navbar>
        <NavBody>
          <NavbarLogo />

          <NavItems
            items={navItems}
            className="text-slate-700 dark:text-slate-200"
          />

          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              className="flex items-center justify-center gap-2 
                         bg-emerald-600 hover:bg-emerald-500 
                         text-white dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              Contact us on WhatsApp <IconBrandWhatsapp size={20} />
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 dark:text-slate-200"
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white dark:bg-slate-950"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
              >
                Login
              </NavbarButton>

              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-emerald-600 text-white dark:bg-emerald-500"
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
