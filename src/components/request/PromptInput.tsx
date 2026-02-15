"use client";

import { Sparkles } from "lucide-react";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PromptInput({ value, onChange }: PromptInputProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-blue-800" />
        <h3 className="text-sm font-semibold text-gray-900">
          AI Prompt (Optional)
        </h3>
      </div>
      <div className="p-6">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder="Describe your requirements in natural language, e.g. 'I need high-quality copper wire suitable for outdoor installations, preferably from certified manufacturers with fast shipping to the US...'"
          className="w-full text-sm border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-gray-400"
        />
        <p className="text-xs text-gray-400 mt-2">
          The AI agent will use this context along with your materials list to find the best suppliers.
        </p>
      </div>
    </div>
  );
}
