"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const pageTitles: Record<string, { title: string; description: string }> = {
  "/request": {
    title: "Material Request",
    description: "Define your procurement requirements and let AI find the best suppliers.",
  },
  "/dashboard": {
    title: "AI Results Dashboard",
    description: "Review AI-sourced vendors, compare prices, and select your preferred supplier.",
  },
  "/confirm": {
    title: "Confirmation & Outreach",
    description: "Review your selection and send outreach emails to vendors.",
  },
};

export default function Header() {
  const pathname = usePathname();
  const page = pageTitles[pathname] || pageTitles["/request"];

  return (
    <header className="bg-white border-b border-gray-200/50 px-8 py-6">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 font-medium">
        <span>OpusProcure</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 font-semibold">{page.title}</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-1">{page.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{page.description}</p>
    </header>
  );
}
