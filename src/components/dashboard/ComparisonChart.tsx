"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { Vendor } from "@/lib/types";
import { useState } from "react";

interface ComparisonChartProps {
  vendors: Vendor[];
}

export default function ComparisonChart({ vendors }: ComparisonChartProps) {
  const [chartType, setChartType] = useState<"bar" | "radar">("bar");

  const top5 = vendors.slice(0, 5);

  const barData = top5.map((v) => ({
    name: v.companyName.split(" ").slice(0, 2).join(" "),
    Price: v.price,
    "Delivery (days)": v.shippingDays * 100,
    "Match Score": v.matchScore * 50,
  }));

  const radarData = [
    {
      metric: "Price",
      ...Object.fromEntries(
        top5.map((v) => [
          v.companyName.split(" ")[0],
          Math.round(((6200 - v.price) / 2600) * 100),
        ])
      ),
    },
    {
      metric: "Delivery",
      ...Object.fromEntries(
        top5.map((v) => [
          v.companyName.split(" ")[0],
          Math.round(((14 - v.shippingDays) / 14) * 100),
        ])
      ),
    },
    {
      metric: "Compliance",
      ...Object.fromEntries(
        top5.map((v) => [
          v.companyName.split(" ")[0],
          v.compliance.length * 25,
        ])
      ),
    },
    {
      metric: "Rating",
      ...Object.fromEntries(
        top5.map((v) => [
          v.companyName.split(" ")[0],
          v.rating * 20,
        ])
      ),
    },
    {
      metric: "Match",
      ...Object.fromEntries(
        top5.map((v) => [v.companyName.split(" ")[0], v.matchScore])
      ),
    },
  ];

  const colors = ["#1E40AF", "#059669", "#D97706", "#7C3AED", "#DC2626"];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Vendor Comparison — Top 5
        </h3>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              chartType === "bar"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("radar")}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
              chartType === "radar"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Radar
          </button>
        </div>
      </div>
      <div className="p-6" style={{ height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={{ stroke: "#E5E7EB" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={{ stroke: "#E5E7EB" }}
              />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                }}
              />
              <Bar dataKey="Price" fill="#1E40AF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Match Score" fill="#059669" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <RadarChart data={radarData}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
              />
              {top5.map((v, i) => (
                <Radar
                  key={v.id}
                  name={v.companyName.split(" ")[0]}
                  dataKey={v.companyName.split(" ")[0]}
                  stroke={colors[i]}
                  fill={colors[i]}
                  fillOpacity={0.1}
                />
              ))}
              <Legend
                wrapperStyle={{ fontSize: 12 }}
              />
            </RadarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
