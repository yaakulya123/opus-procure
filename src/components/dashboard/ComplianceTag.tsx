import { ShieldCheck } from "lucide-react";

interface ComplianceTagProps {
  label: string;
}

export default function ComplianceTag({ label }: ComplianceTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50">
      <ShieldCheck className="w-3 h-3" />
      {label}
    </span>
  );
}
