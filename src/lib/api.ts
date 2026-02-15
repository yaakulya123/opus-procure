import { Vendor, DashboardStats, AIRecommendation } from "./types";
import { mockVendors, mockStats, mockRecommendation, mockEmailDraft } from "./mockData";

// Backend base URL — uncomment when backend is ready
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

// Simulate network delay for demo
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Form request payload — matches backend FormRequest.java
 * Backend: POST /api/form-request
 */
export interface FormRequestPayload {
  sector: string;
  equipmentType: string;
  priorityCountries: string;
  budgetRequirements: string;
  compliance: string;
}

/**
 * Email request payload — matches backend EmailRequest.java
 * Backend: POST /api/write-email
 */
export interface EmailRequestPayload {
  recipientEmailAddressList: string;
  instructions: string;
  pastTemplateStructure: string;
}

/**
 * Search response — matches backend SearchResponse.java
 * Backend returns: { topVendorList: VendorEntry[], summary: string }
 * Each VendorEntry: { companyProductName, matchName, ratings, companyDescription, complianceDetails }
 */
export interface SearchResponsePayload {
  topVendorList: Vendor[];
  summary: string | null;
}

/**
 * Submit procurement form to backend
 * Backend: POST /api/form-request → returns SearchResponse
 */
export async function submitFormRequest(
  request: FormRequestPayload
): Promise<SearchResponsePayload> {
  // When backend is ready:
  // const res = await fetch(`${API_BASE}/api/form-request`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(request),
  // });
  // return res.json();

  await delay(1500);
  console.log("Submitting form request:", request);
  return { topVendorList: mockVendors, summary: null };
}

/**
 * Fetch vendor results (mock — for demo purposes)
 */
export async function fetchVendorResults(): Promise<{
  vendors: Vendor[];
  stats: DashboardStats;
  recommendation: AIRecommendation;
}> {
  await delay(800);
  return {
    vendors: mockVendors,
    stats: mockStats,
    recommendation: mockRecommendation,
  };
}

/**
 * Send outreach email to vendor
 * Backend: POST /api/write-email → accepts EmailRequest
 */
export async function sendVendorEmail(
  payload: EmailRequestPayload
): Promise<{ success: boolean }> {
  // When backend is ready:
  // const res = await fetch(`${API_BASE}/api/write-email`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // return res.json();

  await delay(1000);
  console.log("Sending email:", payload);
  return { success: true };
}

export function getDefaultEmailDraft(): string {
  return mockEmailDraft;
}
