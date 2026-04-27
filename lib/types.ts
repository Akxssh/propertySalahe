
export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Nurturing"
  | "Lost"
  | "Converted";

export type LeadSource =
  | "Website"
  | "Referral"
  | "Advertisement"
  | "Event"
  | "Cold Call"
  | "Other";

export interface Lead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  status: LeadStatus;
  source: LeadSource;
  created_at: string;
  updated_at: string;
  assignedTo?: string | null;
  notes: string | null;
  budget_min: number | null;
  budget_max: number | null;
  areas: string[];
  bhk: string;
  timeline: string;
}

// Inferring STATUS_CONFIG structure based on common usage
export const STATUS_CONFIG = {
  New: { label: "New Lead", color: "blue" },
  Contacted: { label: "Contacted", color: "purple" },
  Qualified: { label: "Qualified", color: "green" },
  Nurturing: { label: "Nurturing", color: "orange" },
  Lost: { label: "Lost", color: "red" },
  Converted: { label: "Converted", color: "teal" },
};

export type StatusConfig = typeof STATUS_CONFIG;
