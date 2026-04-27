
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, Calendar, CheckCircle2 } from "lucide-react"
import type { Lead } from "@/lib/types"

interface StatsCardsProps {
  leads: Lead[]
}

export function StatsCards({ leads }: StatsCardsProps) {
  const totalLeads = leads.length
  const newLeads = leads.filter(l => l.status === 'new').length
  const qualifiedLeads = leads.filter(l => l.status === 'qualified' || l.status === 'site_visit').length
  const closedLeads = leads.filter(l => l.status === 'closed').length
  const conversionRate = totalLeads > 0 ? ((closedLeads / totalLeads) * 100).toFixed(1) : '0'

  const stats = [
    {
      title: "Total Leads",
      value: totalLeads,
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "New Leads",
      value: newLeads,
      icon: UserCheck,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Qualified / Site Visit",
      value: qualifiedLeads,
      icon: Calendar,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      icon: CheckCircle2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
