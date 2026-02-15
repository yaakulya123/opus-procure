"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardList,
  LayoutDashboard,
  CheckCircle2,
  Cpu,
} from "lucide-react";

const navItems = [
  { href: "/request", label: "Material Request", icon: ClipboardList },
  { href: "/dashboard", label: "AI Results", icon: LayoutDashboard },
  { href: "/confirm", label: "Confirmation", icon: CheckCircle2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200/80 flex flex-col z-50">
      <div className="p-6 border-b border-gray-200/50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">OpusProcure</h1>
            <p className="text-xs text-gray-500 font-medium">AI Procurement</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-5 space-y-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-800 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${isActive ? "text-blue-800" : "text-gray-400"}`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t border-gray-200/50">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200/50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Powered by
          </p>
          <p className="text-sm font-bold text-gray-900 mt-1">
            AI Agents
          </p>
        </div>
      </div>
    </aside>
  );
}
