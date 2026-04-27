"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function ContactForm() {
  const [userName, setUserName] = useState("")
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 bg-[#111314] px-4 py-16 text-white outline outline-2 outline-[#363636]">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl">Avoid 3 Common Builder Traps</h2>
        <p className="mt-2 text-base text-neutral-400 sm:text-lg">
          Get a free consultation before you pay the booking amount
        </p>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Input
          placeholder="Your Name"
          value={userName}
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
        />
        <Input
          placeholder="Phone number"
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
        />
        <Input
          placeholder="Select budget"
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
        />
        <Input
          placeholder="Select area"
          className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-0"
        />
      </div>

      <span className="text-xl text-neutral-500">or</span>

      <Link
        href="https://wa.me/919739807465?text=Hi%20I%20found%20Property%20Salahe%20from%20[Source]%20and%20I%20want%20details%20about%20projects%20in%20Bangalore.">
        <Button className="h-auto w-auto min-w-50 p-4 text-lg">
          Get started on WhatsApp
        </Button>
      </Link>
    </section>
  )
}
