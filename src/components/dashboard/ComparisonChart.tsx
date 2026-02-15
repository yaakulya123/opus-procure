"use client";

import { Vendor } from "@/lib/types";
import { Star, Shield } from "lucide-react";

interface ComparisonChartProps {
  vendors: Vendor[];
}

// Simplified comparison view since vendor data is now string-based (no numeric scores).
export default function ComparisonChart({ vendors }: ComparisonChartProps) {
  const top5 = vendors.slice(0, 5);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">
          Vendor Comparison — Top {top5.length}
        </h3>
      </div>
      <div className="p-6 space-y-4">
        {top5.map((v, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
              {(v.matchName || "?").charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {v.matchName || "Unknown"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {v.companyProductName || "—"}
              </p>
            </div>
            {v.ratings && (
              <div className="flex items-center gap-1 text-sm shrink-0">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {v.ratings}
              </div>
            )}
            {v.complianceDetails && (
              <div className="flex items-center gap-1 shrink-0">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs text-gray-600 max-w-[150px] truncate">
                  {v.complianceDetails}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
