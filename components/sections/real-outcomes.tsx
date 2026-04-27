import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RealOutcomes() {
  return (
    <section className="mt-12 flex h-auto w-full flex-col items-center justify-center gap-8 p-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl text-white sm:text-5xl">Real Outcomes</h2>
        <h3 className="mt-2 text-base text-gray-500">
          Mistakes avoided. Money saved.
        </h3>
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
          <Button className="h-auto w-auto gap-2 bg-[#12261a] p-2 hover:bg-[#1a3826]">
            <Check size={24} color="#01c850" />
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
          <Button className="h-auto w-auto gap-2 bg-[#12261a] p-2 hover:bg-[#1a3826]">
            <Check size={24} color="#01c850" />
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
          <Button className="h-auto w-auto gap-2 bg-[#12261a] p-2 hover:bg-[#1a3826]">
            <Check size={24} color="#01c850" />
            <span className="text-[#01c850]">Saved ₹8,00,000</span>
          </Button>
        </Card>
      </div>
    </section>
  )
}
