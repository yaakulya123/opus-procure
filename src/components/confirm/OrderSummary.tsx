"use client";

import { Vendor } from "@/lib/types";
import { Building2, Shield, Star } from "lucide-react";

interface OrderSummaryProps {
  vendor: Vendor;
}

export default function OrderSummary({ vendor }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">Order Summary</h3>
      </div>
      <div className="p-6 space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-lg font-semibold">
            {(vendor.matchName || "?").charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold text-gray-900">
                {vendor.matchName || "Unknown"}
              </span>
            </div>
            {vendor.ratings && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                {vendor.ratings}
              </div>
            )}
          </div>
        </div>

        {vendor.companyProductName && (
          <p className="text-sm text-gray-600 font-medium">
            {vendor.companyProductName}
          </p>
        )}

        {vendor.companyDescription && (
          <p className="text-sm text-gray-500 leading-relaxed">
            {vendor.companyDescription}
          </p>
        )}

        {vendor.complianceDetails && (
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs font-medium text-gray-500 uppercase">
                Compliance
              </span>
            </div>
            <p className="text-sm text-gray-600">{vendor.complianceDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
}
