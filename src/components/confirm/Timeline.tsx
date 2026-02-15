"use client";

import { TimelineStep } from "@/lib/types";
import { Check, Circle, Clock } from "lucide-react";

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">
          Procurement Timeline
        </h3>
      </div>
      <div className="p-6">
        <div className="relative">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.stage} className="flex gap-4 pb-6 last:pb-0">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      step.status === "completed"
                        ? "bg-emerald-100 text-emerald-600"
                        : step.status === "current"
                        ? "bg-blue-100 text-blue-800 ring-4 ring-blue-50"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Check className="w-4 h-4" />
                    ) : step.status === "current" ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </div>
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 mt-1 ${
                        step.status === "completed"
                          ? "bg-emerald-200"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1">
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
                    <p className="text-xs text-gray-400 mt-0.5">
                      {step.timestamp}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
