"use client";

import { AIRecommendation as AIRecommendationType, Vendor } from "@/lib/types";
import { Sparkles, ArrowRight } from "lucide-react";

interface AIRecommendationProps {
  recommendation: AIRecommendationType;
  vendor: Vendor;
  onSelect: (vendor: Vendor) => void;
}

export default function AIRecommendation({
  recommendation,
  vendor,
  onSelect,
}: AIRecommendationProps) {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wide">
              AI Recommendation
            </h3>
            <span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
              {recommendation.confidenceScore}% confidence
            </span>
          </div>
          <p className="text-xl font-bold mb-2">{vendor.matchName || "Unknown"}</p>
          <p className="text-sm text-blue-50 leading-relaxed max-w-3xl opacity-90">
            {recommendation.reasoning}
          </p>
        </div>
        <button
          onClick={() => onSelect(vendor)}
          className="flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg ml-6 shrink-0"
        >
          Select
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
