"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { GetStartedDialog } from "components/get-started-dialog"

export default function ContactForm() {
  const [userName, setUserName] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 bg-[#111314] px-4 py-16 text-white outline outline-2 outline-[#363636]">
      <h2 className="text-3xl sm:text-4xl">Avoid 3 Common Builder Traps</h2>
      <p className="mt-2 text-base text-neutral-400 sm:text-lg">
        Get a free consultation before you pay the booking amount
      </p>
      {/* <Link */}
      {/* href="https://wa.me/919739807465?text=Hi%20I%20found%20Property%20Salahe%20from%20[Source]%20and%20I%20want%20details%20about%20projects%20in%20Bangalore."> */}
      <Button

        onClick={() => setDialogOpen(true)}
        className="h-auto w-auto min-w-50 p-4 text-lg">
        Get started on WhatsApp
      </Button>
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      {/* </Link> */}
    </section >
  )
}
