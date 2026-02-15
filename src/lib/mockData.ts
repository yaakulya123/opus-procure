import {
  Vendor,
  DashboardStats,
  AIRecommendation,
  TimelineStep,
} from "./types";

export const mockVendors: Vendor[] = [
  {
    companyProductName: "TechSource Global — Premium Copper Wire AWG 12",
    matchName: "TechSource Global",
    ratings: "4.8/5",
    companyDescription:
      "Leading East Asian electronics supplier with 12 years of experience. Specializes in high-quality copper wiring for industrial applications. ISO 9001, CE, and UL certified.",
    complianceDetails: "ISO 9001, CE, UL — Full compliance with international safety and quality standards.",
  },
  {
    companyProductName: "EuroWire Industries — Industrial Copper Cable AWG 12",
    matchName: "EuroWire Industries",
    ratings: "4.6/5",
    companyDescription:
      "European manufacturer with 20+ years in the wire and cable industry. Premium insulation and EU safety standards compliance.",
    complianceDetails: "ISO 9001, CE, RoHS — Meets all EU environmental and safety regulations.",
  },
  {
    companyProductName: "Pacific Materials Co. — Copper Conductor Wire 12AWG",
    matchName: "Pacific Materials Co.",
    ratings: "4.2/5",
    companyDescription:
      "Southeast Asian bulk materials supplier. Cost-effective solutions with solid insulation coating. Bulk order discounts available.",
    complianceDetails: "ISO 9001 — Basic quality management certification.",
  },
  {
    companyProductName: "AmeriCable Supply — US-Made Copper Wire AWG 12",
    matchName: "AmeriCable Supply",
    ratings: "4.9/5",
    companyDescription:
      "Domestically manufactured copper cable with full UL certification. Premium quality with fast shipping across North America.",
    complianceDetails: "ISO 9001, UL, NEMA — US domestic safety and electrical standards.",
  },
  {
    companyProductName: "ShenZhen ElectroParts — Bulk Copper Wire AWG 12",
    matchName: "ShenZhen ElectroParts",
    ratings: "4.0/5",
    companyDescription:
      "Factory-direct copper wire at competitive pricing. Minimum order 200m. 6 years in the electronics parts industry.",
    complianceDetails: "CE — European conformity marking.",
  },
  {
    companyProductName: "Nordic Industrial AB — Eco-Grade Copper Cable 12AWG",
    matchName: "Nordic Industrial AB",
    ratings: "4.7/5",
    companyDescription:
      "Sustainably sourced copper wire with eco-friendly insulation. Carbon-neutral manufacturing. 25 years in industrial equipment.",
    complianceDetails: "ISO 9001, ISO 14001, CE, RoHS — Full environmental and quality compliance.",
  },
  {
    companyProductName: "Mumbai Wire Works — Standard Copper Wire AWG 12",
    matchName: "Mumbai Wire Works",
    ratings: "4.3/5",
    companyDescription:
      "Reliable copper wire for general purpose use from South Asia. Competitive pricing with flexible order quantities. 10 years in manufacturing.",
    complianceDetails: "ISO 9001, BIS — Indian standards compliance.",
  },
  {
    companyProductName: "BrazilTech Cables — Premium Copper Wire 12 Gauge",
    matchName: "BrazilTech Cables",
    ratings: "4.4/5",
    companyDescription:
      "South American manufactured copper cable with NBR certification. Regional shipping advantages. 14 years in electronics.",
    complianceDetails: "ISO 9001, NBR — Brazilian technical standards compliance.",
  },
];

export const mockStats: DashboardStats = {
  totalVendors: 8,
  avgRating: "4.5/5",
  topMatch: "TechSource Global",
};

export const mockRecommendation: AIRecommendation = {
  vendorName: "TechSource Global",
  reasoning:
    "TechSource Global offers the best combination of competitive pricing, strong compliance (ISO 9001, CE, UL), and high customer rating (4.8/5). Their 12 years in business and Electronics industry expertise make them an excellent fit.",
  confidenceScore: 94,
};

export const mockEmailDraft = `Dear TechSource Global Team,

I am writing to express our interest in procuring materials from your company.

Based on our requirements, we would like to proceed with a formal quotation request. Please include:

1. Bulk pricing for the specified quantity
2. Delivery timeline and logistics details
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
