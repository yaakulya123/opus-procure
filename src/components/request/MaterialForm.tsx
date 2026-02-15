"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Material, CURRENCIES, REGIONS } from "@/lib/types";
import { defaultMaterials } from "@/lib/mockData";
import MaterialTable from "./MaterialTable";
import PromptInput from "./PromptInput";
import { Search, Globe, DollarSign, Loader2 } from "lucide-react";

export default function MaterialForm() {
  const router = useRouter();
  const [materials, setMaterials] = useState<Material[]>(defaultMaterials);
  const [prompt, setPrompt] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [totalBudget, setTotalBudget] = useState(15000);
  const [region, setRegion] = useState("East Asia");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate Opus workflow trigger
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <MaterialTable materials={materials} onChange={setMaterials} />

      <PromptInput value={prompt} onChange={setPrompt} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-blue-800" />
            <h3 className="text-sm font-semibold text-gray-900">Budget</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Min Price
                </label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Max Price
                </label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Total Budget
              </label>
              <input
                type="number"
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Region Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-800" />
            <h3 className="text-sm font-semibold text-gray-900">
              Sourcing Region
            </h3>
          </div>
          <div className="p-6">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">
              Target Region
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-400 mt-3">
              Select the preferred region for vendor sourcing. The AI will
              prioritize suppliers from this region but may also suggest
              alternatives from other regions.
            </p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading || materials.every((m) => !m.name)}
          className="flex items-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Searching Suppliers...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Find Suppliers
            </>
          )}
        </button>
      </div>
    </div>
  );
}
