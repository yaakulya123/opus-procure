export interface Material {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  specs: string;
}

export interface ProcurementRequest {
  materials: Material[];
  prompt: string;
  budget: {
    currency: string;
    min: number;
    max: number;
    total: number;
  };
  region: string;
}

export interface Vendor {
  id: string;
  companyName: string;
  logoUrl: string;
  productName: string;
  productDescription: string;
  productImage: string;
  price: number;
  currency: string;
  priceComparison: "lowest" | "below_avg" | "average" | "above_avg" | "highest";
  compliance: string[];
  shippingDays: number;
  deliveryCost: number;
  rating: number;
  matchScore: number;
  region: string;
}

export interface DashboardStats {
  totalVendors: number;
  avgPrice: number;
  bestMatchScore: number;
  estimatedSavings: number;
}

export interface AIRecommendation {
  vendorId: string;
  reasoning: string;
  confidenceScore: number;
}

export interface OrderConfirmation {
  vendor: Vendor;
  materials: Material[];
  totalPrice: number;
  estimatedDelivery: string;
  emailDraft: string;
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

export const CATEGORIES = [
  "Electronics",
  "Raw Materials",
  "Office Supplies",
  "Industrial Equipment",
  "Packaging",
  "Chemicals",
  "Textiles",
  "Hardware & Tools",
] as const;

export const UNITS = ["pcs", "kg", "m", "L", "boxes", "rolls", "sets", "tons"] as const;

export const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CNY"] as const;

export const REGIONS = [
  "North America",
  "Europe",
  "East Asia",
  "Southeast Asia",
  "South Asia",
  "Middle East",
  "South America",
  "Africa",
] as const;
