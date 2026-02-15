"use client";

import { Material, CATEGORIES, UNITS } from "@/lib/types";
import { Plus, Trash2 } from "lucide-react";

interface MaterialTableProps {
  materials: Material[];
  onChange: (materials: Material[]) => void;
}

export default function MaterialTable({ materials, onChange }: MaterialTableProps) {
  const addRow = () => {
    onChange([
      ...materials,
      {
        id: Date.now().toString(),
        name: "",
        category: CATEGORIES[0],
        quantity: 1,
        unit: "pcs",
        specs: "",
      },
    ]);
  };

  const removeRow = (id: string) => {
    if (materials.length <= 1) return;
    onChange(materials.filter((m) => m.id !== id));
  };

  const updateRow = (id: string, field: keyof Material, value: string | number) => {
    onChange(
      materials.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Materials List</h3>
        <button
          onClick={addRow}
          className="flex items-center gap-1.5 text-sm font-medium text-blue-800 hover:text-blue-900 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Item Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3 w-24">Qty</th>
              <th className="px-6 py-3 w-24">Unit</th>
              <th className="px-6 py-3">Specs / Notes</th>
              <th className="px-6 py-3 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {materials.map((mat) => (
              <tr key={mat.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-3">
                  <input
                    type="text"
                    value={mat.name}
                    onChange={(e) => updateRow(mat.id, "name", e.target.value)}
                    placeholder="e.g. Copper Wire Cable"
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </td>
                <td className="px-6 py-3">
                  <select
                    value={mat.category}
                    onChange={(e) => updateRow(mat.id, "category", e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-3">
                  <input
                    type="number"
                    min={1}
                    value={mat.quantity}
                    onChange={(e) =>
                      updateRow(mat.id, "quantity", parseInt(e.target.value) || 1)
                    }
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </td>
                <td className="px-6 py-3">
                  <select
                    value={mat.unit}
                    onChange={(e) => updateRow(mat.id, "unit", e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    {UNITS.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-3">
                  <input
                    type="text"
                    value={mat.specs}
                    onChange={(e) => updateRow(mat.id, "specs", e.target.value)}
                    placeholder="Specifications or notes"
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => removeRow(mat.id)}
                    disabled={materials.length <= 1}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
