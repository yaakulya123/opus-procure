"use client";

import { Vendor } from "@/lib/types";
import ComplianceTag from "./ComplianceTag";
import {
  Star,
  Truck,
  TrendingDown,
  TrendingUp,
  Minus,
  CheckCircle2,
  Building2,
} from "lucide-react";

interface VendorCardProps {
  vendor: Vendor;
  isRecommended?: boolean;
  onSelect: (vendor: Vendor) => void;
}

const priceIndicator = {
  lowest: { icon: TrendingDown, label: "Lowest", color: "text-emerald-600" },
  below_avg: { icon: TrendingDown, label: "Below Avg", color: "text-emerald-500" },
  average: { icon: Minus, label: "Average", color: "text-gray-500" },
  above_avg: { icon: TrendingUp, label: "Above Avg", color: "text-amber-500" },
  highest: { icon: TrendingUp, label: "Highest", color: "text-red-500" },
};

export default function VendorCard({ vendor, isRecommended, onSelect }: VendorCardProps) {
  const priceInfo = priceIndicator[vendor.priceComparison];
  const PriceIcon = priceInfo.icon;

  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col ${
        isRecommended ? "border-blue-400 shadow-md" : "border-gray-200 shadow-sm"
      }`}
    >
      {isRecommended && (
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-current" />
          AI Recommended
        </div>
      )}

      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <img
          src={vendor.productImage}
          alt={vendor.productName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold text-blue-800 shadow-sm">
          {vendor.matchScore}% match
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Company */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
            <Building2 className="w-4.5 h-4.5 text-gray-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-500 mb-0.5">{vendor.region}</p>
            <p className="text-sm font-semibold text-gray-900 truncate">
              {vendor.companyName}
            </p>
          </div>
        </div>

        {/* Product */}
        <h4 className="text-base font-semibold text-gray-900 mb-1.5 line-clamp-1">
          {vendor.productName}
        </h4>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {vendor.productDescription}
        </p>

        {/* Price & Rating */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${vendor.price.toLocaleString()}
            </p>
            <div className={`flex items-center gap-1 text-xs font-medium mt-1 ${priceInfo.color}`}>
              <PriceIcon className="w-3.5 h-3.5" />
              {priceInfo.label}
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1.5 rounded-lg">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-sm text-gray-900">{vendor.rating}</span>
          </div>
        </div>

        {/* Shipping */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-gray-400" />
            {vendor.shippingDays} days
          </span>
          <span className="text-gray-400">•</span>
          <span>+${vendor.deliveryCost}</span>
        </div>

        {/* Compliance */}
        <div className="flex flex-wrap gap-2 mb-5">
          {vendor.compliance.map((c) => (
            <ComplianceTag key={c} label={c} />
          ))}
        </div>

        {/* Select Button */}
        <button
          onClick={() => onSelect(vendor)}
          className="w-full mt-auto flex items-center justify-center gap-2 bg-blue-800 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <CheckCircle2 className="w-4.5 h-4.5" />
          Select Vendor
        </button>
      </div>
    </div>
  );
}
