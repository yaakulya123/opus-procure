"use client";

import { SlidersHorizontal } from "lucide-react";

interface Filters {
  maxPrice: number;
  minRating: number;
  maxDelivery: number;
  compliance: string;
  region: string;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const update = (key: keyof Filters, value: string | number) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center flex-wrap gap-5">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          </div>
          Filters
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Max Price</label>
          <select
            value={filters.maxPrice}
            onChange={(e) => update("maxPrice", Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
          >
            <option value={99999}>Any</option>
            <option value={4000}>Under $4,000</option>
            <option value={5000}>Under $5,000</option>
            <option value={6000}>Under $6,000</option>
          </select>
        </div>
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Min Rating</label>
          <select
            value={filters.minRating}
            onChange={(e) => update("minRating", Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
          >
            <option value={0}>Any</option>
            <option value={4.0}>4.0+</option>
            <option value={4.5}>4.5+</option>
          </select>
        </div>
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Delivery</label>
          <select
            value={filters.maxDelivery}
            onChange={(e) => update("maxDelivery", Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
          >
            <option value={99}>Any</option>
            <option value={5}>Under 5 days</option>
            <option value={7}>Under 7 days</option>
            <option value={10}>Under 10 days</option>
          </select>
        </div>
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Compliance</label>
          <select
            value={filters.compliance}
            onChange={(e) => update("compliance", e.target.value)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
          >
            <option value="">Any</option>
            <option value="ISO 9001">ISO 9001</option>
            <option value="CE">CE</option>
            <option value="UL">UL</option>
            <option value="RoHS">RoHS</option>
          </select>
        </div>
        <div className="flex items-center gap-2.5">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Region</label>
          <select
            value={filters.region}
            onChange={(e) => update("region", e.target.value)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
          >
            <option value="">Any</option>
            <option value="East Asia">East Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South Asia">South Asia</option>
            <option value="Southeast Asia">Southeast Asia</option>
            <option value="South America">South America</option>
          </select>
        </div>
      </div>
    </div>
  );
}
