export interface Vendor {
  companyProductName: string | null;
  matchName: string | null;
  ratings: string | null;
  companyDescription: string | null;
  complianceDetails: string | null;
}

export interface DashboardStats {
  totalVendors: number;
  avgRating: string;
  topMatch: string;
}

export interface AIRecommendation {
  vendorName: string;
  reasoning: string;
  confidenceScore: number;
}

export type ProcurementStage =
  | "request"
  | "search"
  | "select"
  | "contact"
  | "confirm";

export interface TimelineStep {
  stage: ProcurementStage;
  label: string;
  status: "completed" | "current" | "upcoming";
  timestamp?: string;
}
