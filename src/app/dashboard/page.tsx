"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import { mockVendors, mockStats, mockRecommendation } from "@/lib/mockData";
import { Vendor } from "@/lib/types";
import {
  Search,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowUpRight,
  Package,
  Star,
  Target,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const aiRecommended = mockVendors.find(
    (v) => v.matchName === mockRecommendation.vendorName
  );

  const filteredVendors = useMemo(() => {
    return mockVendors.filter(
      (v) =>
        (v.matchName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.companyProductName || "").toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleRowClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
  };

  const handleConfirm = () => {
    if (selectedVendor) {
      localStorage.setItem("selectedVendor", JSON.stringify(selectedVendor));
      router.push("/confirm");
    }
  };

  return (
    <>
      <TopNav />
      <div className="min-h-screen pt-24 pb-20 px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Vendor results
              </h1>
              <span className="px-2.5 py-0.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                {mockVendors.length} found
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              AI-sourced vendors for your procurement request
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Total vendors
                </span>
                <Package className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold">{mockStats.totalVendors}</p>
              <p className="text-xs text-gray-500 mt-1">Matched to your request</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Avg. rating
                </span>
                <Star className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold">{mockStats.avgRating}</p>
              <p className="text-xs text-gray-500 mt-1">Across all vendors</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Top match
                </span>
                <Target className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold truncate">{mockStats.topMatch}</p>
              <p className="text-xs text-gray-500 mt-1">AI recommended</p>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Main Table */}
            <div className="flex-1 min-w-0">
              {/* Search */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vendors..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Company / Product
                      </th>
                      <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Rating
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Compliance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVendors.map((vendor, idx) => (
                      <tr
                        key={idx}
                        onClick={() => handleRowClick(vendor)}
                        className={`border-b border-gray-50 cursor-pointer transition-colors ${
                          selectedVendor?.matchName === vendor.matchName
                            ? "bg-gray-50"
                            : "hover:bg-gray-50/50"
                        }`}
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
                              {(vendor.matchName || "?").charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <p className="font-medium text-sm truncate">
                                  {vendor.matchName || "Unknown"}
                                </p>
                                {vendor.matchName === mockRecommendation.vendorName && (
                                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 truncate max-w-[300px]">
                                {vendor.companyProductName || "—"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="inline-flex items-center gap-1 text-sm">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            {vendor.ratings || "—"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="text-xs text-gray-600 truncate max-w-[200px]">
                            {vendor.complianceDetails || "—"}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detail Sidebar */}
            {selectedVendor ? (
              <div className="w-96 shrink-0 space-y-4">
                {/* Vendor Header */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold">
                      {(selectedVendor.matchName || "?").charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">
                        {selectedVendor.matchName || "Unknown"}
                      </h3>
                      {selectedVendor.ratings && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          {selectedVendor.ratings}
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedVendor.companyProductName && (
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      {selectedVendor.companyProductName}
                    </p>
                  )}
                  {selectedVendor.companyDescription && (
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {selectedVendor.companyDescription}
                    </p>
                  )}
                </div>

                {/* Compliance */}
                {selectedVendor.complianceDetails && (
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" />
                      <h3 className="font-medium text-xs uppercase tracking-wide text-gray-500">
                        Compliance
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedVendor.complianceDetails}
                    </p>
                  </div>
                )}

                {/* Confirm Button */}
                <button
                  onClick={handleConfirm}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Select vendor
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-96 shrink-0">
                <div className="bg-white border border-gray-200 border-dashed rounded-xl p-8 text-center">
                  <Building2 className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">
                    Click a vendor row to view details
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* AI Recommendation Banner */}
          {aiRecommended && (
            <div className="bg-gray-900 rounded-xl p-5 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-white font-semibold text-sm">
                      AI recommends {aiRecommended.matchName}
                    </p>
                    <span className="px-2 py-0.5 bg-white/15 rounded text-xs text-white/80 font-medium">
                      {mockRecommendation.confidenceScore}% confidence
                    </span>
                  </div>
                  <p className="text-white/60 text-xs max-w-2xl">
                    {mockRecommendation.reasoning}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedVendor(aiRecommended);
                }}
                className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shrink-0"
              >
                View details
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
