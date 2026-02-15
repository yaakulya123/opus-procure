import { Vendor, DashboardStats, AIRecommendation } from "./types";
import { mockVendors, mockStats, mockRecommendation, mockEmailDraft } from "./mockData";

// Backend base URL — uncomment when backend is ready
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

// Simulate network delay for demo
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Form request payload — matches backend FormRequest.java
 */
export interface FormRequestPayload {
  materialName: string;
  sector: string;
  budgetMin: number;
  budgetMax: number;
  country: string;
  aiPrompt: string;
}

/**
 * Submit procurement form to backend
 * Backend: POST /api/form-request
 * Sends form data → backend calls Opus API → parses results → saves to DB → returns vendors
 */
export async function submitFormRequest(
  request: FormRequestPayload
): Promise<{ jobId: string }> {
  // When backend is ready:
  // const res = await fetch(`${API_BASE}/api/form-request`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(request),
  // });
  // return res.json();

  await delay(1500);
  console.log("Submitting form request:", request);
  return { jobId: "job_" + Date.now() };
}

/**
 * Fetch vendor results from backend
 * Backend: GET /api
 * Returns vendor list, stats, and AI recommendation
 */
export async function fetchVendorResults(): Promise<{
  vendors: Vendor[];
  stats: DashboardStats;
  recommendation: AIRecommendation;
}> {
  // When backend is ready:
  // const res = await fetch(`${API_BASE}/api`);
  // return res.json();

  await delay(800);
  return {
    vendors: mockVendors,
    stats: mockStats,
    recommendation: mockRecommendation,
  };
}

/**
 * Send outreach email to vendor
 * Backend: POST /api/write-email
 * Sends email request → backend calls Opus API → updates vendor status
 */
export async function sendVendorEmail(
  vendorId: string,
  emailContent: string
): Promise<{ success: boolean; messageId: string }> {
  // When backend is ready:
  // const res = await fetch(`${API_BASE}/api/write-email`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ vendorId, emailContent }),
  // });
  // return res.json();

  await delay(1000);
  console.log("Sending email to vendor:", vendorId, emailContent);
  return { success: true, messageId: "msg_" + Date.now() };
}

export function getDefaultEmailDraft(): string {
  return mockEmailDraft;
}
