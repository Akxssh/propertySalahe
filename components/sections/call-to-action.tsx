import { IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function CallToAction() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#202020] px-4 py-16 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
          Ready to Find Your Home Without the Headaches?
        </h2>

        <p className="mt-4 text-base text-zinc-400">
          Let us help you avoid costly mistakes and find the right project.
        </p>

        <Link
          href="https://wa.me/919739807465?text=Hi%20I%20found%20Property%20Salahe%20from%20[Source]%20and%20I%20want%20details%20about%20projects%20in%20Bangalore.">
          <Button
            className="mt-8 scale-125 flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Connect with us on WhatsApp
            <IconBrandWhatsapp size={20} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
