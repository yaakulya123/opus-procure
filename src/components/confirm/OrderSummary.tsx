"use client";

import { Vendor } from "@/lib/types";
import ComplianceTag from "@/components/dashboard/ComplianceTag";
import { Building2, Truck, Star, DollarSign } from "lucide-react";

interface OrderSummaryProps {
  vendor: Vendor;
}

export default function OrderSummary({ vendor }: OrderSummaryProps) {
  const totalCost = vendor.price + vendor.deliveryCost;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">Order Summary</h3>
      </div>
      <div className="p-6 space-y-5">
        {/* Vendor Info */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
            <img
              src={vendor.productImage}
              alt={vendor.productName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold text-gray-900">
                {vendor.companyName}
              </span>
            </div>
            <p className="text-sm text-gray-700">{vendor.productName}</p>
            <p className="text-xs text-gray-500 mt-0.5">{vendor.region}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
              <DollarSign className="w-3.5 h-3.5" />
              Product Price
            </div>
            <p className="text-lg font-bold text-gray-900">
              ${vendor.price.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
              <Truck className="w-3.5 h-3.5" />
              Delivery
            </div>
            <p className="text-lg font-bold text-gray-900">
              {vendor.shippingDays} days
            </p>
            <p className="text-xs text-gray-500">
              +${vendor.deliveryCost} shipping
            </p>
          </div>
        </div>

        {/* Rating & Compliance */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-gray-900">
              {vendor.rating}/5.0
            </span>
            <span className="text-xs text-gray-500 ml-1">
              — {vendor.matchScore}% match score
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {vendor.compliance.map((c) => (
              <ComplianceTag key={c} label={c} />
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Estimated Total
            </span>
            <span className="text-xl font-bold text-blue-800">
              ${totalCost.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
