import {
  Material,
  Vendor,
  DashboardStats,
  AIRecommendation,
  TimelineStep,
} from "./types";

export const defaultMaterials: Material[] = [
  {
    id: "1",
    name: "Copper Wire Cable",
    category: "Electronics",
    quantity: 500,
    unit: "m",
    specs: "AWG 12, insulated, UL listed",
  },
  {
    id: "2",
    name: "Steel Fasteners Assortment",
    category: "Hardware & Tools",
    quantity: 2000,
    unit: "pcs",
    specs: "Grade 8, zinc-plated, M6-M12",
  },
  {
    id: "3",
    name: "Corrugated Shipping Boxes",
    category: "Packaging",
    quantity: 300,
    unit: "boxes",
    specs: '24x18x12", double wall, kraft',
  },
];

export const mockVendors: Vendor[] = [
  {
    id: "v1",
    companyName: "TechSource Global",
    logoUrl: "https://ui-avatars.com/api/?name=TechSource+Global&background=0D8ABC&color=fff&size=128&bold=true",
    productName: "Premium Copper Wire Cable AWG 12",
    productDescription:
      "High-quality insulated copper wire cable, UL and CE certified. Ideal for industrial and commercial wiring applications.",
    productImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    price: 4250,
    currency: "USD",
    priceComparison: "lowest",
    compliance: ["ISO 9001", "CE", "UL"],
    shippingDays: 7,
    deliveryCost: 320,
    rating: 4.8,
    matchScore: 96,
    region: "East Asia",
  },
  {
    id: "v2",
    companyName: "EuroWire Industries",
    logoUrl: "https://ui-avatars.com/api/?name=EuroWire+Industries&background=1E40AF&color=fff&size=128&bold=true",
    productName: "Industrial Copper Cable AWG 12",
    productDescription:
      "European manufactured copper wiring with premium insulation. Meets all EU safety standards.",
    productImage:
      "https://images.unsplash.com/photo-1578663248567-4f2f48c7c85e?w=400&h=300&fit=crop",
    price: 5100,
    currency: "USD",
    priceComparison: "average",
    compliance: ["ISO 9001", "CE", "RoHS"],
    shippingDays: 5,
    deliveryCost: 180,
    rating: 4.6,
    matchScore: 89,
    region: "Europe",
  },
  {
    id: "v3",
    companyName: "Pacific Materials Co.",
    logoUrl: "https://ui-avatars.com/api/?name=Pacific+Materials&background=059669&color=fff&size=128&bold=true",
    productName: "Copper Conductor Wire 12AWG",
    productDescription:
      "Cost-effective copper wire solution with solid insulation coating. Bulk order discounts available.",
    productImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    price: 3890,
    currency: "USD",
    priceComparison: "lowest",
    compliance: ["ISO 9001"],
    shippingDays: 12,
    deliveryCost: 450,
    rating: 4.2,
    matchScore: 78,
    region: "Southeast Asia",
  },
  {
    id: "v4",
    companyName: "AmeriCable Supply",
    logoUrl: "https://ui-avatars.com/api/?name=AmeriCable+Supply&background=DC2626&color=fff&size=128&bold=true",
    productName: "US-Made Copper Wire AWG 12",
    productDescription:
      "Domestically manufactured copper cable with full UL certification. Fast shipping across North America.",
    productImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
    price: 5800,
    currency: "USD",
    priceComparison: "above_avg",
    compliance: ["ISO 9001", "UL", "NEMA"],
    shippingDays: 3,
    deliveryCost: 95,
    rating: 4.9,
    matchScore: 85,
    region: "North America",
  },
  {
    id: "v5",
    companyName: "ShenZhen ElectroParts",
    logoUrl: "https://ui-avatars.com/api/?name=ShenZhen+ElectroParts&background=EA580C&color=fff&size=128&bold=true",
    productName: "Bulk Copper Wire AWG 12 Roll",
    productDescription:
      "Large volume copper wire at competitive pricing. Minimum order 200m. Factory direct.",
    productImage:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop&sat=-100",
    price: 3650,
    currency: "USD",
    priceComparison: "lowest",
    compliance: ["CE"],
    shippingDays: 14,
    deliveryCost: 520,
    rating: 4.0,
    matchScore: 72,
    region: "East Asia",
  },
  {
    id: "v6",
    companyName: "Nordic Industrial AB",
    logoUrl: "https://ui-avatars.com/api/?name=Nordic+Industrial&background=7C3AED&color=fff&size=128&bold=true",
    productName: "Eco-Grade Copper Cable 12AWG",
    productDescription:
      "Sustainably sourced copper wire with eco-friendly insulation. Carbon-neutral manufacturing.",
    productImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    price: 6200,
    currency: "USD",
    priceComparison: "highest",
    compliance: ["ISO 9001", "ISO 14001", "CE", "RoHS"],
    shippingDays: 6,
    deliveryCost: 210,
    rating: 4.7,
    matchScore: 82,
    region: "Europe",
  },
  {
    id: "v7",
    companyName: "Mumbai Wire Works",
    logoUrl: "https://ui-avatars.com/api/?name=Mumbai+Wire&background=D97706&color=fff&size=128&bold=true",
    productName: "Standard Copper Wire AWG 12",
    productDescription:
      "Reliable copper wire for general purpose use. Competitive pricing with flexible order quantities.",
    productImage:
      "https://images.unsplash.com/photo-1581092162509-e0049e84f1c8?w=400&h=300&fit=crop",
    price: 4100,
    currency: "USD",
    priceComparison: "below_avg",
    compliance: ["ISO 9001", "BIS"],
    shippingDays: 10,
    deliveryCost: 380,
    rating: 4.3,
    matchScore: 76,
    region: "South Asia",
  },
  {
    id: "v8",
    companyName: "BrazilTech Cables",
    logoUrl: "https://ui-avatars.com/api/?name=BrazilTech+Cables&background=16A34A&color=fff&size=128&bold=true",
    productName: "Premium Copper Wire 12 Gauge",
    productDescription:
      "South American manufactured copper cable with NBR certification. Regional shipping advantages.",
    productImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
    price: 4500,
    currency: "USD",
    priceComparison: "average",
    compliance: ["ISO 9001", "NBR"],
    shippingDays: 8,
    deliveryCost: 290,
    rating: 4.4,
    matchScore: 80,
    region: "South America",
  },
];

export const mockStats: DashboardStats = {
  totalVendors: 8,
  avgPrice: 4686,
  bestMatchScore: 96,
  estimatedSavings: 2150,
};

export const mockRecommendation: AIRecommendation = {
  vendorId: "v1",
  reasoning:
    "TechSource Global offers the best combination of competitive pricing ($4,250), strong compliance (ISO 9001, CE, UL), high customer rating (4.8/5), and reasonable shipping (7 days). Their 96% match score reflects excellent alignment with your specifications for AWG 12 insulated copper wire.",
  confidenceScore: 94,
};

export const mockEmailDraft = `Dear TechSource Global Team,

I am writing to express our interest in procuring the following materials from your company:

- Premium Copper Wire Cable AWG 12 — 500 meters
  Specifications: Insulated, UL listed

Based on your listed price of $4,250.00, we would like to proceed with a formal quotation request. Please include:

1. Bulk pricing for the specified quantity
2. Delivery timeline to North America
3. Certificate of compliance (ISO 9001, CE, UL)
4. Payment terms and conditions

We are looking for a reliable long-term supplier and value quality, compliance, and delivery reliability.

Please respond at your earliest convenience.

Best regards,
Procurement Team
OpusProcure`;

export const mockTimeline: TimelineStep[] = [
  {
    stage: "request",
    label: "Request Submitted",
    status: "completed",
    timestamp: "2026-02-15 09:30 AM",
  },
  {
    stage: "search",
    label: "AI Vendor Search",
    status: "completed",
    timestamp: "2026-02-15 09:31 AM",
  },
  {
    stage: "select",
    label: "Vendor Selected",
    status: "completed",
    timestamp: "2026-02-15 09:35 AM",
  },
  {
    stage: "contact",
    label: "Vendor Contacted",
    status: "current",
  },
  {
    stage: "confirm",
    label: "Order Confirmed",
    status: "upcoming",
  },
];
