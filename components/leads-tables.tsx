
"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BrandInstagram } from 'tabler-icons-react';
import { Search, MessageCircle, Globe, Layout, Phone } from "lucide-react"
import type { Lead, LeadStatus, LeadSource } from "@/lib/types"
import { STATUS_CONFIG } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

interface LeadsTableProps {
  leads: Lead[]
  onSelectLead: (lead: Lead) => void
}

const SourceIcon = ({ source }: { source: LeadSource }) => {
  const icons = {
    instagram: <BrandInstagram className="h-4 w-4 text-pink-400" />,
    whatsapp: <MessageCircle className="h-4 w-4 text-emerald-400" />,
    direct_site: <Globe className="h-4 w-4 text-blue-400" />,
    landing_page: <Layout className="h-4 w-4 text-purple-400" />,
  }
  return icons[source] || <Globe className="h-4 w-4" />
}

function formatBudget(min: number | null, max: number | null): string {
  if (!min && !max) return "-"
  const format = (n: number) => {
    if (n >= 10000000) return `${(n / 10000000).toFixed(1)}Cr`
    if (n >= 100000) return `${(n / 100000).toFixed(1)}L`
    return n.toLocaleString("en-IN")
  }
  if (min && max) return `${format(min)} - ${format(max)}`
  if (min) return `From ${format(min)}`
  if (max) return `Up to ${format(max)}`
  return "-"
}

export function LeadsTable({ leads, onSelectLead }: LeadsTableProps) {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sourceFilter, setSourceFilter] = useState<string>("all")

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      (lead.email && lead.email.toLowerCase().includes(search.toLowerCase()))

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter

    return matchesSearch && matchesStatus && matchesSource
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, phone, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-secondary border-border"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[160px] bg-secondary border-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="qualified">Qualified</SelectItem>
            <SelectItem value="site_visit">Site Visit</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="dead">Dead</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-full sm:w-[160px] bg-secondary border-border">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="direct_site">Direct Site</SelectItem>
            <SelectItem value="landing_page">Landing Page</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              <TableHead className="text-muted-foreground font-medium">Name</TableHead>
              <TableHead className="text-muted-foreground font-medium">Phone</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden md:table-cell">Budget</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">Areas</TableHead>
              <TableHead className="text-muted-foreground font-medium">Source</TableHead>
              <TableHead className="text-muted-foreground font-medium">Status</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden sm:table-cell">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => {
                const statusConfig = {
  label: "Unknown",
  bgColor: "bg-gray-500",
  textColor: "text-gray-500",
};
                return (
                  <TableRow
                    key={lead.id}
                    className="cursor-pointer hover:bg-secondary/30 transition-colors"
                    onClick={() => onSelectLead(lead)}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        {lead.email && (
                          <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {lead.email}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm">{lead.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-sm">
                        {formatBudget(lead.budget_min, lead.budget_max)}
                      </span>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {lead.areas?.slice(0, 2).map((area) => (
                          <Badge key={area} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {lead.areas && lead.areas.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{lead.areas.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <SourceIcon source={lead.source} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${statusConfig.bgColor} ${statusConfig.textColor} border-0`}>
                        {statusConfig.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground text-sm">
                      {formatDistanceToNow(new Date(lead.created_at), { addSuffix: true })}
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredLeads.length} of {leads.length} leads
      </div>
    </div>
  )
}

