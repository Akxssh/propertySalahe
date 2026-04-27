"use client"

import { supabase } from "@/lib/supabaseClient.ts"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"

const AREAS = [
  "Whitefield",
  "Electronic City",
  "Sarjapur Road",
  "Hebbal",
  "Marathahalli",
  "Koramangala",
  "HSR Layout",
  "Bannerghatta Road",
  "Yelahanka",
  "Devanahalli",
  "Kanakapura Road",
  "Thanisandra",
]

const TIMELINES = [
  { value: "immediate", label: "Ready to move" },
  { value: "3-months", label: "Within 3 months" },
  { value: "6-months", label: "Within 6 months" },
  { value: "1-year", label: "Within 1 year" },
  { value: "just-exploring", label: "Just exploring" },
]

interface FormData {
  budgetRange: [number, number]
  areas: string[]
  bhk: string
  timeline: string
  name: string
  phone: string
}

interface GetStartedDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GetStartedDialog({ open, onOpenChange }: GetStartedDialogProps) {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState<FormData>({
    budgetRange: [40, 80],
    areas: [],
    bhk: "",
    timeline: "",
    name: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const totalSteps = 4

  const formatBudget = (value: number) => {
    if (value >= 100) {
      return `${(value / 100).toFixed(1)} Cr`
    }
    return `${value} L`
  }

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.budgetRange[0] < formData.budgetRange[1]
      case 2:
        return formData.areas.length > 0
      case 3:
        return formData.bhk && formData.timeline
      case 4:
        return formData.name.trim() && formData.phone.trim().length >= 10
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    const message = `Hi! I'm looking for a ${formData.bhk} BHK home in Bangalore.

Budget: ${formatBudget(formData.budgetRange[0])} - ${formatBudget(formData.budgetRange[1])}
Areas: ${formData.areas.join(", ")}
Timeline: ${TIMELINES.find((t) => t.value === formData.timeline)?.label}
Name: ${formData.name}
Phone: ${formData.phone}`

    const encoded = encodeURIComponent(message)

    setIsLoading(true)

    const handleSupabaseInsert = async () => {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          phone: formData.phone,
          budget_min: formData.budgetRange[0],
          budget_max: formData.budgetRange[1],
          areas: formData.areas,
          bhk: formData.bhk,
          timeline: formData.timeline,
          source: "website",
          status: "new",
        },
      ])
      if (error) {
        alert("Failed to save lead. Try again.")
        console.log(error)
        return
      }
    }
    await handleSupabaseInsert()
    if (!isLoading) {
      window.open(`https://wa.me/919739807465?text=${encoded}`, "_blank")
    }
    setIsLoading(false)
    onOpenChange(false)
    setStep(1)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => setStep(1), 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg border-border bg-card">
        {/* Progress bar */}
        <div className="mb-2 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i < step ? "bg-foreground" : "bg-muted"
              )}
            />
          ))}
        </div>

        {/* Step 1: Budget */}
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">What&apos;s your budget?</DialogTitle>
              <DialogDescription>
                Drag the slider to set your budget range
              </DialogDescription>
            </DialogHeader>

            <div className="py-8">
              <div className="mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {formatBudget(formData.budgetRange[0])}
                </span>
                <span className="text-muted-foreground">to</span>
                <span className="text-3xl font-bold text-foreground">
                  {formatBudget(formData.budgetRange[1])}
                </span>
              </div>

              <Slider
                value={formData.budgetRange}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    budgetRange: value as [number, number],
                  }))
                }
                min={20}
                max={300}
                step={5}
                className="w-full"
              />

              <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>20 L</span>
                <span>3 Cr+</span>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Areas */}
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Preferred areas?</DialogTitle>
              <DialogDescription>
                Select one or more areas you&apos;re interested in
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-2 py-6">
              {AREAS.map((area) => (
                <button
                  key={area}
                  onClick={() => handleAreaToggle(area)}
                  className={cn(
                    "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                    formData.areas.includes(area)
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-foreground hover:border-muted-foreground"
                  )}
                >
                  {area}
                </button>
              ))}
            </div>

            {formData.areas.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Selected: {formData.areas.join(", ")}
              </p>
            )}
          </>
        )}

        {/* Step 3: BHK & Timeline */}
        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Property details</DialogTitle>
              <DialogDescription>
                Choose your preferred configuration and timeline
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-6">
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  BHK Type
                </label>
                <ToggleGroup
                  type="single"
                  value={formData.bhk}
                  onValueChange={(value) =>
                    value && setFormData((prev) => ({ ...prev, bhk: value }))
                  }
                  className="w-full"
                  variant="outline"
                >
                  <ToggleGroupItem value="1" className="flex-1">
                    1 BHK
                  </ToggleGroupItem>
                  <ToggleGroupItem value="2" className="flex-1">
                    2 BHK
                  </ToggleGroupItem>
                  <ToggleGroupItem value="3" className="flex-1">
                    3 BHK
                  </ToggleGroupItem>
                  <ToggleGroupItem value="4+" className="flex-1">
                    4+ BHK
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  When do you plan to buy?
                </label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, timeline: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMELINES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Almost there!</DialogTitle>
              <DialogDescription>
                Enter your details so we can reach you
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Your name
                </label>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="bg-background"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  WhatsApp number
                </label>
                <Input
                  placeholder="Enter your phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="bg-background"
                />
              </div>

              {/* Summary */}
              <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="mb-3 text-sm font-medium text-foreground">
                  Your preferences
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground">Budget:</span>{" "}
                    {formatBudget(formData.budgetRange[0])} -{" "}
                    {formatBudget(formData.budgetRange[1])}
                  </p>
                  <p>
                    <span className="text-foreground">Areas:</span>{" "}
                    {formData.areas.join(", ")}
                  </p>
                  <p>
                    <span className="text-foreground">Type:</span> {formData.bhk} BHK
                  </p>
                  <p>
                    <span className="text-foreground">Timeline:</span>{" "}
                    {TIMELINES.find((t) => t.value === formData.timeline)?.label}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        <DialogFooter className="flex-row gap-2">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep((s) => s - 1)}
              className="flex-1"
            >
              Back
            </Button>
          )}
          {step < totalSteps ? (
            <Button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="flex-1"
            >
              Continue
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="flex-1"
            >
              Connect on WhatsApp
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
