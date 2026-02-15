import { ProcurementRequest, Vendor, DashboardStats, AIRecommendation } from "./types";
import { mockVendors, mockStats, mockRecommendation, mockEmailDraft } from "./mockData";

// API_BASE: "/api/opus" — uncomment when backend is ready

// Simulate network delay for demo
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function triggerProcurementSearch(
  request: ProcurementRequest
): Promise<{ jobId: string }> {
  // Placeholder for Opus workflow trigger
  // POST ${API_BASE}/trigger
  await delay(1500);
  console.log("Triggering procurement search:", request);
  return { jobId: "job_" + Date.now() };
}

export async function fetchVendorResults(): Promise<{
  vendors: Vendor[];
  stats: DashboardStats;
  recommendation: AIRecommendation;
}> {
  // Placeholder for Opus results fetch
  // GET ${API_BASE}/results
  await delay(800);
  return {
    vendors: mockVendors,
    stats: mockStats,
    recommendation: mockRecommendation,
  };
}

export async function sendVendorEmail(
  vendorId: string,
  emailContent: string
): Promise<{ success: boolean; messageId: string }> {
  // Placeholder for Opus email send
  // POST ${API_BASE}/email
  await delay(1000);
  console.log("Sending email to vendor:", vendorId, emailContent);
  return { success: true, messageId: "msg_" + Date.now() };
}

export function getDefaultEmailDraft(): string {
  return mockEmailDraft;
}
