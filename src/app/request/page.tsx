"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import {
  Shield,
  Package,
  Factory,
  DollarSign,
  Globe,
  ArrowRight,
  Clock,
  BarChart3,
} from "lucide-react";

export default function RequestPage() {
  const router = useRouter();
  const [sector, setSector] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [budgetRequirements, setBudgetRequirements] = useState("");
  const [priorityCountries, setPriorityCountries] = useState("");
  const [compliance, setCompliance] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/dashboard");
  };

  const filledFields = [sector, equipmentType, budgetRequirements, priorityCountries].filter(Boolean).length;

  return (
    <>
      <TopNav />
      <div className="min-h-screen pt-24 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-16">
            {/* Left: Form */}
            <div className="col-span-2">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-3xl font-semibold tracking-tight mb-2">
                  New procurement request
                </h1>
                <p className="text-gray-500">
                  Tell us what you need, and our AI agents will find the best
                  vendors.
                </p>
              </div>

              {/* Progress */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      filledFields >= 1
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    1
                  </div>
                  <span className={filledFields >= 1 ? "text-gray-900 font-medium" : "text-gray-400"}>
                    Sector
                  </span>
                </div>
                <div className="w-8 h-px bg-gray-200" />
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      filledFields >= 2
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    2
                  </div>
                  <span className={filledFields >= 2 ? "text-gray-900 font-medium" : "text-gray-400"}>
                    Equipment
                  </span>
                </div>
                <div className="w-8 h-px bg-gray-200" />
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      filledFields >= 3
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    3
                  </div>
                  <span className={filledFields >= 3 ? "text-gray-900 font-medium" : "text-gray-400"}>
                    Budget
                  </span>
                </div>
                <div className="w-8 h-px bg-gray-200" />
                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      filledFields >= 4
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    4
                  </div>
                  <span className={filledFields >= 4 ? "text-gray-900 font-medium" : "text-gray-400"}>
                    Region
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Sector */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2.5">
                    <Factory className="w-4 h-4 text-gray-400" />
                    Sector
                  </label>
                  <input
                    type="text"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    placeholder="e.g., Electronics, Manufacturing, Construction"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Equipment Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2.5">
                    <Package className="w-4 h-4 text-gray-400" />
                    Equipment type
                  </label>
                  <input
                    type="text"
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                    placeholder="e.g., Copper wire, Steel fasteners, Industrial motors"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Budget Requirements */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2.5">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    Budget requirements
                  </label>
                  <input
                    type="text"
                    value={budgetRequirements}
                    onChange={(e) => setBudgetRequirements(e.target.value)}
                    placeholder="e.g., $5,000 - $10,000 USD, under $50k"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Priority Countries */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2.5">
                    <Globe className="w-4 h-4 text-gray-400" />
                    Priority countries
                  </label>
                  <input
                    type="text"
                    value={priorityCountries}
                    onChange={(e) => setPriorityCountries(e.target.value)}
                    placeholder="e.g., USA, Germany, Japan, China"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                {/* Compliance */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2.5">
                    <Shield className="w-4 h-4 text-gray-400" />
                    Compliance requirements
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={compliance}
                    onChange={(e) => setCompliance(e.target.value)}
                    placeholder="e.g., ISO 9001, CE, UL, RoHS"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      AI agents searching...
                    </>
                  ) : (
                    <>
                      Find vendors
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Context sidebar */}
            <div className="pt-24">
              <div className="sticky top-32 space-y-6">
                {/* How it works */}
                <div className="rounded-xl border border-gray-100 p-6">
                  <h3 className="text-sm font-semibold mb-4">How it works</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-medium">Submit request</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Describe your procurement needs and preferences
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-medium">AI searches globally</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          AI agents find and rank vendors worldwide
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-medium">Compare & select</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Review scores, compliance, and budget data
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <p className="text-sm font-medium">Automated outreach</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          AI drafts and sends vendor emails for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">Avg. time</span>
                    </div>
                    <p className="text-lg font-semibold">~30s</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">Vendors</span>
                    </div>
                    <p className="text-lg font-semibold">8-15</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">Verified</span>
                    </div>
                    <p className="text-lg font-semibold">100%</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">Regions</span>
                    </div>
                    <p className="text-lg font-semibold">8+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
