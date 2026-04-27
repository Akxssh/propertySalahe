
"use client"

import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Phone,
  Mail,
  MapPin,
  Home,
  Clock,
  Calendar,
  IndianRupee,
  Instagram,
  MessageCircle,
  Globe,
  Layout,
  X,
  Save,
  Loader2,
} from "lucide-react"
import type { Lead, LeadStatus, LeadSource } from "@/lib/types"
import { STATUS_CONFIG } from "@/lib/types"
import { format } from "date-fns"
import { supabase } from "@/lib/supabaseClient"

interface LeadDrawerProps {
  lead: Lead | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpdate: (lead: Lead) => void
}

const SourceIcon = ({ source }: { source: LeadSource }) => {
  const icons = {
    whatsapp: <MessageCircle className="h-4 w-4 text-emerald-400" />,
    direct_site: <Globe className="h-4 w-4 text-blue-400" />,
    landing_page: <Layout className="h-4 w-4 text-purple-400" />,
  }
  return icons[source] || <Globe className="h-4 w-4" />
}

const sourceLabels: Record<LeadSource, string> = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  direct_site: "Direct Site",
  landing_page: "Landing Page",
}

function formatBudget(min: number | null, max: number | null): string {
  if (!min && !max) return "Not specified"
  const format = (n: number) => {
    if (n >= 10000000) return `${(n / 10000000).toFixed(1)} Cr`
    if (n >= 100000) return `${(n / 100000).toFixed(1)} L`
    return `₹${n.toLocaleString("en-IN")}`
  }
  if (min && max) return `${format(min)} - ${format(max)}`
  if (min) return `From ${format(min)}`
  if (max) return `Up to ${format(max)}`
  return "Not specified"
}

export function LeadDrawer({ lead, open, onOpenChange, onUpdate }: LeadDrawerProps) {
  const [status, setStatus] = useState<LeadStatus | null>(null)
  const [notes, setNotes] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  // Reset state when lead changes
  const currentStatus = status ?? lead?.status ?? 'new'
  const currentNotes = notes || lead?.notes || ""

  const handleStatusChange = (newStatus: LeadStatus) => {
    setStatus(newStatus)
  }

  const handleNotesChange = (newNotes: string) => {
    setNotes(newNotes)
  }

  const handleSave = async () => {
    if (!lead) return

    setIsSaving(true)

    const { data, error } = await supabase
      .from('leads')
      .update({
        status: currentStatus,
        notes: currentNotes,
      })
      .eq('id', lead.id)
      .select()
      .single()

    setIsSaving(false)

    if (error) {
      console.error('Error updating lead:', error)
      return
    }

    if (data) {
      onUpdate(data as Lead)
      setStatus(null)
      setNotes("")
    }
  }

  const handleClose = () => {
    setStatus(null)
    setNotes("")
    onOpenChange(false)
  }

  if (!lead) return null

  const statusConfig = STATUS_CONFIG[currentStatus]
  const hasChanges =
    (status !== null && status !== lead.status) ||
    (notes !== "" && notes !== (lead.notes || ""))

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border overflow-y-auto">
        <SheetHeader className="pb-4 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle className="text-xl">{lead.name}</SheetTitle>
              <div className="flex items-center gap-2 mt-2">
                <SourceIcon source={lead.source} />
                <span className="text-sm text-muted-foreground">
                  {sourceLabels[lead.source]}
                </span>
              </div>
            </div>
            <Badge className={`${statusConfig.bgColor} ${statusConfig.textColor} border-0`}>
              {statusConfig.label}
            </Badge>
          </div>
        </SheetHeader>

        <div className="py-6 space-y-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Contact Information
            </h3>
            <div className="space-y-2">
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{lead.phone}</span>
              </a>
              {lead.email && (
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="truncate">{lead.email}</span>
                </a>
              )}
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Requirements
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span className="text-xs">Budget</span>
                </div>
                <p className="text-sm font-medium">
                  {formatBudget(lead.budget_min, lead.budget_max)}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Home className="h-3.5 w-3.5" />
                  <span className="text-xs">BHK</span>
                </div>
                <p className="text-sm font-medium">{lead.bhk || "Not specified"}</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-xs">Timeline</span>
                </div>
                <p className="text-sm font-medium">{lead.timeline || "Not specified"}</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-xs">Created</span>
                </div>
                <p className="text-sm font-medium">
                  {format(new Date(lead.created_at), "MMM d, yyyy")}
                </p>
              </div>
            </div>
          </div>

          {/* Areas */}
          {lead.areas && lead.areas.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Preferred Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {lead.areas.map((area) => (
                  <Badge key={area} variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Status Update */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Update Status
            </h3>
            <Select value={currentStatus} onValueChange={(v) => handleStatusChange(v as LeadStatus)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="site_visit">Site Visit</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="dead">Dead</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Notes
            </h3>
            <Textarea
              placeholder="Add notes about this lead..."
              value={currentNotes}
              onChange={(e) => handleNotesChange(e.target.value)}
              className="min-h-[120px] bg-secondary border-border resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleClose}
            >
              <X className="h-4 w-4 mr-2" />
              Close
            </Button>
            <Button
              className="flex-1"
              onClick={handleSave}
              disabled={!hasChanges || isSaving}
            >
              {isSaving ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Changes
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
