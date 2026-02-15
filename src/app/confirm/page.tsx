"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import { Vendor } from "@/lib/types";
import { mockVendors, mockTimeline, mockEmailDraft } from "@/lib/mockData";
import {
  CheckCircle,
  Clock,
  Circle,
  ArrowRight,
  Mail,
  Shield,
  Send,
  Star,
} from "lucide-react";

export default function ConfirmPage() {
  const router = useRouter();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [emailContent, setEmailContent] = useState(mockEmailDraft);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const stored = localStorage.getItem("selectedVendor");
    if (stored) {
      setVendor(JSON.parse(stored));
    } else {
      setVendor(mockVendors[0]);
    }
  }, []);

  const handleSendEmail = async () => {
    setEmailStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setEmailStatus("sent");
  };

  if (!vendor) return null;

  return (
    <>
      <TopNav />
      <div className="min-h-screen pt-24 pb-20 px-8 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Vendor selected
            </h1>
            <p className="text-gray-500 text-sm">
              Review your order and send outreach to {vendor.matchName || "the vendor"}
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              {mockTimeline.map((step, i) => (
                <div key={step.stage} className="flex items-center flex-1 last:flex-initial">
                  <div className="flex items-center gap-3">
                    {step.status === "completed" ? (
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                    ) : step.status === "current" ? (
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shrink-0 ring-4 ring-gray-100">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                        <Circle className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium ${
                          step.status === "upcoming"
                            ? "text-gray-400"
                            : "text-gray-900"
                        }`}
                      >
                        {step.label}
                      </p>
                      {step.timestamp && (
                        <p className="text-xs text-gray-500">{step.timestamp}</p>
                      )}
                    </div>
                  </div>
                  {i < mockTimeline.length - 1 && (
                    <div
                      className={`flex-1 h-px mx-4 ${
                        step.status === "completed"
                          ? "bg-emerald-200"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {/* Left: Order summary */}
            <div className="col-span-2 space-y-4">
              {/* Vendor card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">
                  Selected vendor
                </h2>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold">
                    {(vendor.matchName || "?").charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{vendor.matchName || "Unknown"}</p>
                    {vendor.ratings && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        {vendor.ratings}
                      </div>
                    )}
                  </div>
                </div>

                {vendor.companyProductName && (
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    {vendor.companyProductName}
                  </p>
                )}

                {vendor.companyDescription && (
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {vendor.companyDescription}
                  </p>
                )}

                {vendor.complianceDetails && (
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-gray-500 uppercase">Compliance</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {vendor.complianceDetails}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="flex-1 border border-gray-200 bg-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Back to results
                </button>
                <button
                  onClick={() => router.push("/request")}
                  className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  New request
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Email preview */}
            <div className="col-span-3">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <h2 className="text-sm font-medium">Vendor outreach email</h2>
                  </div>
                  <span className="text-xs text-gray-500">
                    To: {vendor.matchName || "Vendor"}
                  </span>
                </div>
                <div className="p-6">
                  <textarea
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows={16}
                    className="w-full font-mono text-sm text-gray-700 leading-relaxed bg-transparent border-0 focus:outline-none resize-none"
                  />
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    AI-generated draft — edit before sending
                  </p>
                  <button
                    onClick={handleSendEmail}
                    disabled={emailStatus !== "idle"}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      emailStatus === "sent"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    } disabled:cursor-not-allowed`}
                  >
                    {emailStatus === "idle" && (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send email
                      </>
                    )}
                    {emailStatus === "sending" && (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    )}
                    {emailStatus === "sent" && (
                      <>
                        <CheckCircle className="w-3.5 h-3.5" />
                        Sent
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
