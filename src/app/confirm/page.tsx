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
  Star,
  Truck,
  Shield,
  Send,
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
              Review your order and send outreach to {vendor.companyName}
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
                    {vendor.companyName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{vendor.companyName}</p>
                    <p className="text-xs text-gray-500">{vendor.region}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {vendor.productName}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Unit price</span>
                    <span className="text-sm font-semibold">
                      ${vendor.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Shipping</span>
                    <span className="text-sm font-medium">
                      ${vendor.deliveryCost}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-sm font-semibold">
                      ${(vendor.price + vendor.deliveryCost).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 mx-auto mb-1" />
                  <p className="text-lg font-semibold">{vendor.rating}</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <Truck className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <p className="text-lg font-semibold">{vendor.shippingDays}d</p>
                  <p className="text-xs text-gray-500">Delivery</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <Shield className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                  <p className="text-lg font-semibold">{vendor.compliance.length}</p>
                  <p className="text-xs text-gray-500">Certs</p>
                </div>
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
                    To: {vendor.companyName}
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
