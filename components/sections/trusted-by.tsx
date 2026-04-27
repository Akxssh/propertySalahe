import { Card } from "@/components/ui/card"

export default function TrustedBy() {
  return (
    <div className="mt-0 flex flex-col items-center justify-center gap-6 bg-[#202020] p-2 outline outline-2 outline-[#393939]">
      <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
        <h2 className="text-3xl">Trusted by Home Buyers</h2>
        <h3 className="text-xl text-neutral-400">What our clients say</h3>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Card className="max-w-sm border-zinc-800 bg-[#141414] p-6 text-white">
          <p className="mb-4 text-neutral-400 italic">
            &quot;Saved me from a nightmare project. The RERA was pending and
            they helped me find a better option.&quot;
          </p>
          <div className="flex flex-col items-start justify-center border-t border-zinc-800 pt-4">
            <span className="block font-medium">Rajesh K.</span>
            <span className="block text-sm text-neutral-500">
              Bought 3BHK in Whitefield
            </span>
          </div>
        </Card>
        <Card className="max-w-sm border-zinc-800 bg-[#141414] p-6 text-white">
          <p className="mb-4 text-neutral-400 italic">
            &quot;The comparison helped me negotiate ₹4L off the asking price.
            Worth every minute.&quot;
          </p>
          <div className="flex flex-col items-start justify-center border-t border-zinc-800 pt-4">
            <span className="block font-medium">Priya M.</span>
            <span className="block text-sm text-neutral-500">
              Bought 2BHK in Sarjapur
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
