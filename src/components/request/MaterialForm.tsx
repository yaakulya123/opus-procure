"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";

export default function MaterialForm() {
  const router = useRouter();
  const [sector, setSector] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [budgetRequirements, setBudgetRequirements] = useState("");
  const [priorityCountries, setPriorityCountries] = useState("");
  const [compliance, setCompliance] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Sector</label>
          <input
            type="text"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            placeholder="e.g., Electronics, Manufacturing"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Equipment Type</label>
          <input
            type="text"
            value={equipmentType}
            onChange={(e) => setEquipmentType(e.target.value)}
            placeholder="e.g., Copper wire, Steel fasteners"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Budget Requirements</label>
          <input
            type="text"
            value={budgetRequirements}
            onChange={(e) => setBudgetRequirements(e.target.value)}
            placeholder="e.g., $5,000 - $10,000 USD"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Priority Countries</label>
          <input
            type="text"
            value={priorityCountries}
            onChange={(e) => setPriorityCountries(e.target.value)}
            placeholder="e.g., USA, Germany, Japan"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Compliance</label>
          <input
            type="text"
            value={compliance}
            onChange={(e) => setCompliance(e.target.value)}
            placeholder="e.g., ISO 9001, CE, UL"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading || !sector}
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
