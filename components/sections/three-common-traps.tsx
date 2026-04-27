import { TriangleAlert } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ThreeCommonTraps() {
  return (
    <section className="my-8 flex h-auto w-full flex-col items-center justify-center gap-8 bg-[#1a1a1a] p-6 outline outline-2 outline-[#333333]">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl text-white sm:text-4xl">
          3 Common Builder Traps to Avoid
        </h2>
        <h3 className="mt-2 text-base text-gray-500">
          Before you pay that booking amount, know what&apos;s at stake.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-4 text-center">
          <div className="mb-4 flex justify-center">
            <TriangleAlert size={48} color="#f87171" />
          </div>
          <span className="block text-2xl text-white">Stamp Duty Loss</span>
          <span className="mt-2 block text-xl text-gray-500">
            Non-refundable 5.6% if project fails
          </span>
        </Card>
        <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-4 text-center">
          <div className="mb-4 flex justify-center">
            <TriangleAlert size={48} color="#f87171" />
          </div>
          <span className="block text-2xl text-white">Booking Trap</span>
          <span className="mt-2 block text-xl text-gray-500">
            ₹2-5L held hostage with vague terms
          </span>
        </Card>
        <Card className="w-auto max-w-sm min-w-64 bg-[#141414] p-4 text-center">
          <div className="mb-4 flex justify-center">
            <TriangleAlert size={48} color="#f87171" />
          </div>
          <span className="block text-2xl text-white">Hidden Charges</span>
          <span className="mt-2 block text-xl text-gray-500">
            Maintenance, legal, parking add 8-12%
          </span>
        </Card>
      </div>
    </section>
  )
}
