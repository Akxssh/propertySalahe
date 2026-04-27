
"use client"

import { useState, useEffect } from "react"
import { StatsCards } from "./stats-cards"
import { LeadsTable } from "./leads-tables"
import { LeadDrawer } from "./lead-drawer"
import { Button } from "@/components/ui/button"
import { RefreshCw, Building2 } from "lucide-react"
import type { Lead } from "@/lib/types"
import { supabase } from "@/lib/supabaseClient.ts"

export function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchLeads = async () => {
    console.log("Fetching leads from Supabase..."); // Log fetch initiation
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error); // More specific error logging
      return; // Stop if there's an error
    }

    console.log("Raw data fetched from Supabase:", data); // Log the raw data

    // Ensure data is an array before setting state
    if (Array.isArray(data)) {
      setLeads(data as Lead[]); // Cast to Lead[]
    } else {
      console.warn("Supabase fetch returned unexpected data format:", data);
      setLeads([]); // Set to empty if data is not an array
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchLeads().finally(() => setIsLoading(false))
  }, [])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await fetchLeads()
    setIsRefreshing(false)
  }

  const handleSelectLead = (lead: Lead) => {
    setSelectedLead(lead)
    setIsDrawerOpen(true)
  }

  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    )
    setSelectedLead(updatedLead)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading leads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Leads Admin</h1>
                <p className="text-sm text-muted-foreground">
                  Real Estate CRM
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        <StatsCards leads={leads} />
        <LeadsTable leads={leads} onSelectLead={handleSelectLead} />
      </main>

      {/* Lead Detail Drawer */}
      <LeadDrawer
        lead={selectedLead}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        onUpdate={handleUpdateLead}
      />
    </div>
  )
}
