"use client";

import { Vendor } from "@/lib/types";
import { CheckCircle2, Building2, Star, Shield } from "lucide-react";

interface VendorCardProps {
  vendor: Vendor;
  isRecommended?: boolean;
  onSelect: (vendor: Vendor) => void;
}

export default function VendorCard({ vendor, isRecommended, onSelect }: VendorCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col ${
        isRecommended ? "border-blue-400 shadow-md" : "border-gray-200 shadow-sm"
      }`}
    >
      {isRecommended && (
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
          AI Recommended
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
            <Building2 className="w-4 h-4 text-gray-600" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {vendor.matchName || "Unknown"}
            </p>
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

        {vendor.complianceDetails && (
          <div className="flex items-center gap-1.5 mb-5">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-xs text-gray-600 truncate">
              {vendor.complianceDetails}
            </span>
          </div>
        )}

        <button
          onClick={() => onSelect(vendor)}
          className="w-full mt-auto flex items-center justify-center gap-2 bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <CheckCircle2 className="w-4 h-4" />
          Select Vendor
        </button>
      </div>
    </div>
  );
}
