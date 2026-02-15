"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import { mockVendors, mockStats, mockRecommendation } from "@/lib/mockData";
import { Vendor } from "@/lib/types";
import {
  Search,
  CheckCircle2,
  Truck,
  Building2,
  Sparkles,
  Star,
  ArrowUpRight,
  Package,
  DollarSign,
  Target,
  PiggyBank,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

const CHART_COLORS = ["#111827", "#6B7280", "#D1D5DB"];

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [sortBy, setSortBy] = useState<"matchScore" | "price" | "rating" | "shippingDays">("matchScore");
  const [chartView, setChartView] = useState<"price" | "radar">("price");

  const aiRecommended = mockVendors.find(
    (v) => v.id === mockRecommendation.vendorId
  );

  const filteredVendors = useMemo(() => {
    const filtered = mockVendors.filter(
      (v) =>
        v.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered.sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "shippingDays") return a.shippingDays - b.shippingDays;
      return b.matchScore - a.matchScore;
    });
  }, [searchQuery, sortBy]);

  // Chart data
  const priceChartData = useMemo(
    () =>
      [...mockVendors]
        .sort((a, b) => a.price - b.price)
        .map((v) => ({
          name: v.companyName.split(" ")[0],
          price: v.price,
          id: v.id,
        })),
    []
  );

  const radarData = useMemo(() => {
    const top3 = [...mockVendors].sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    const maxPrice = Math.max(...mockVendors.map((v) => v.price));
    const maxDays = Math.max(...mockVendors.map((v) => v.shippingDays));
    return [
      {
        metric: "Price",
        [top3[0].companyName.split(" ")[0]]: Math.round((1 - top3[0].price / maxPrice) * 100),
        [top3[1].companyName.split(" ")[0]]: Math.round((1 - top3[1].price / maxPrice) * 100),
        [top3[2].companyName.split(" ")[0]]: Math.round((1 - top3[2].price / maxPrice) * 100),
      },
      {
        metric: "Delivery",
        [top3[0].companyName.split(" ")[0]]: Math.round((1 - top3[0].shippingDays / maxDays) * 100),
        [top3[1].companyName.split(" ")[0]]: Math.round((1 - top3[1].shippingDays / maxDays) * 100),
        [top3[2].companyName.split(" ")[0]]: Math.round((1 - top3[2].shippingDays / maxDays) * 100),
      },
      {
        metric: "Rating",
        [top3[0].companyName.split(" ")[0]]: Math.round(top3[0].rating * 20),
        [top3[1].companyName.split(" ")[0]]: Math.round(top3[1].rating * 20),
        [top3[2].companyName.split(" ")[0]]: Math.round(top3[2].rating * 20),
      },
      {
        metric: "Match",
        [top3[0].companyName.split(" ")[0]]: top3[0].matchScore,
        [top3[1].companyName.split(" ")[0]]: top3[1].matchScore,
        [top3[2].companyName.split(" ")[0]]: top3[2].matchScore,
      },
      {
        metric: "Compliance",
        [top3[0].companyName.split(" ")[0]]: Math.round(top3[0].compliance.length * 25),
        [top3[1].companyName.split(" ")[0]]: Math.round(top3[1].compliance.length * 25),
        [top3[2].companyName.split(" ")[0]]: Math.round(top3[2].compliance.length * 25),
      },
    ];
  }, []);

  const top3Names = useMemo(
    () =>
      [...mockVendors]
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3)
        .map((v) => v.companyName.split(" ")[0]),
    []
  );

  const handleRowClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
  };

  const handleConfirm = () => {
    if (selectedVendor) {
      localStorage.setItem("selectedVendor", JSON.stringify(selectedVendor));
      router.push("/confirm");
    }
  };

  const getPriceColor = (comparison: string) => {
    if (comparison === "lowest" || comparison === "below_avg")
      return "text-emerald-600";
    if (comparison === "above_avg" || comparison === "highest")
      return "text-amber-600";
    return "text-gray-600";
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
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Total vendors
                </span>
                <Package className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold">{mockStats.totalVendors}</p>
              <p className="text-xs text-gray-500 mt-1">Across 6 regions</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Avg. price
                </span>
                <DollarSign className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold">
                ${mockStats.avgPrice.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Range ${Math.min(...mockVendors.map((v) => v.price)).toLocaleString()} -{" "}
                ${Math.max(...mockVendors.map((v) => v.price)).toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Best match
                </span>
                <Target className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold">
                {mockStats.bestMatchScore}%
              </p>
              <p className="text-xs text-gray-500 mt-1">
                AI confidence score
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Est. savings
                </span>
                <PiggyBank className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-semibold text-emerald-600">
                ${mockStats.estimatedSavings.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                vs. market average
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Main Table */}
            <div className="flex-1 min-w-0">
              {/* Search + Sort */}
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
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900"
                >
                  <option value="matchScore">Sort by match</option>
                  <option value="price">Sort by price</option>
                  <option value="rating">Sort by rating</option>
                  <option value="shippingDays">Sort by delivery</option>
                </select>
              </div>

              {/* Table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Company
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Product
                      </th>
                      <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Match
                      </th>
                      <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Rating
                      </th>
                      <th className="text-center py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Delivery
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVendors.map((vendor) => (
                      <tr
                        key={vendor.id}
                        onClick={() => handleRowClick(vendor)}
                        className={`border-b border-gray-50 cursor-pointer transition-colors ${
                          selectedVendor?.id === vendor.id
                            ? "bg-gray-50"
                            : "hover:bg-gray-50/50"
                        }`}
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
                              {vendor.companyName.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <p className="font-medium text-sm truncate">
                                  {vendor.companyName}
                                </p>
                                {vendor.id === mockRecommendation.vendorId && (
                                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500">
                                {vendor.region}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="text-sm text-gray-900 truncate max-w-[200px]">
                            {vendor.productName}
                          </p>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                              vendor.matchScore >= 90
                                ? "bg-emerald-50 text-emerald-700"
                                : vendor.matchScore >= 80
                                ? "bg-gray-100 text-gray-700"
                                : "bg-gray-50 text-gray-500"
                            }`}
                          >
                            {vendor.matchScore}%
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="text-sm">{vendor.rating}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="text-sm text-gray-600">
                            {vendor.shippingDays}d
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <p className="text-sm font-semibold">
                            ${vendor.price.toLocaleString()}
                          </p>
                          <p
                            className={`text-xs ${getPriceColor(
                              vendor.priceComparison
                            )}`}
                          >
                            {vendor.priceComparison === "lowest" && "Lowest"}
                            {vendor.priceComparison === "below_avg" &&
                              "Below avg"}
                            {vendor.priceComparison === "average" && "Average"}
                            {vendor.priceComparison === "above_avg" &&
                              "Above avg"}
                            {vendor.priceComparison === "highest" && "Highest"}
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
              <div className="w-80 shrink-0 space-y-4">
                {/* Vendor Header */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold">
                      {selectedVendor.companyName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">
                        {selectedVendor.companyName}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {selectedVendor.region}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedVendor.productDescription}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Match</p>
                    <p className="text-xl font-semibold">
                      {selectedVendor.matchScore}%
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <p className="text-xl font-semibold">
                        {selectedVendor.rating}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compliance */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    <h3 className="font-medium text-xs uppercase tracking-wide text-gray-500">
                      Compliance
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedVendor.compliance.map((cert) => (
                      <span
                        key={cert}
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shipping */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-4 h-4 text-gray-400" />
                    <h3 className="font-medium text-xs uppercase tracking-wide text-gray-500">
                      Shipping
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-semibold">
                      {selectedVendor.shippingDays}
                    </p>
                    <p className="text-sm text-gray-500">days</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Delivery cost: ${selectedVendor.deliveryCost}
                  </p>
                </div>

                {/* Price */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Unit price</span>
                    <span className={`text-xs font-medium ${getPriceColor(selectedVendor.priceComparison)}`}>
                      {selectedVendor.priceComparison === "lowest" && "Lowest price"}
                      {selectedVendor.priceComparison === "below_avg" && "Below average"}
                      {selectedVendor.priceComparison === "average" && "Average"}
                      {selectedVendor.priceComparison === "above_avg" && "Above average"}
                      {selectedVendor.priceComparison === "highest" && "Highest price"}
                    </span>
                  </div>
                  <p className="text-2xl font-semibold">
                    ${selectedVendor.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Total with shipping: $
                    {(
                      selectedVendor.price + selectedVendor.deliveryCost
                    ).toLocaleString()}
                  </p>
                </div>

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
              <div className="w-80 shrink-0">
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
                      AI recommends {aiRecommended.companyName}
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

          {/* Charts */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-sm">Vendor comparison</h2>
              <div className="flex items-center bg-gray-100 rounded-lg p-0.5">
                <button
                  onClick={() => setChartView("price")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    chartView === "price"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Price comparison
                </button>
                <button
                  onClick={() => setChartView("radar")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    chartView === "radar"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Multi-axis (top 3)
                </button>
              </div>
            </div>

            <div className="h-64">
              {chartView === "price" ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={priceChartData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                    />
                    <Tooltip
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, "Price"]}
                      contentStyle={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        fontSize: "12px",
                        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Bar dataKey="price" radius={[6, 6, 0, 0]}>
                      {priceChartData.map((entry) => (
                        <Cell
                          key={entry.id}
                          fill={
                            entry.id === mockRecommendation.vendorId
                              ? "#111827"
                              : "#E5E7EB"
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} margin={{ top: 10, right: 40, bottom: 10, left: 40 }}>
                    <PolarGrid stroke="#E5E7EB" />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fontSize: 11, fill: "#6B7280" }}
                    />
                    {top3Names.map((name, i) => (
                      <Radar
                        key={name}
                        name={name}
                        dataKey={name}
                        stroke={CHART_COLORS[i]}
                        fill={CHART_COLORS[i]}
                        fillOpacity={i === 0 ? 0.15 : 0.05}
                        strokeWidth={i === 0 ? 2 : 1}
                      />
                    ))}
                    <Tooltip
                      contentStyle={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              )}
            </div>
            {chartView === "radar" && (
              <div className="flex items-center justify-center gap-6 mt-4">
                {top3Names.map((name, i) => (
                  <div key={name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: CHART_COLORS[i] }}
                    />
                    <span className="text-xs text-gray-600">{name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
