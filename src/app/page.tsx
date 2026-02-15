import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import { ArrowRight, Sparkles, BarChart3, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="min-h-screen flex flex-col">
        {/* Hero */}
        <div className="flex-1 flex items-center justify-center px-8 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Powered by AI agents
            </div>
            <h1 className="text-6xl font-semibold tracking-tight mb-6 leading-[1.1]">
              AI-powered
              <br />
              procurement platform
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Submit your material needs, and our AI agents find, compare, and
              rank the best vendors globally. From search to outreach in minutes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/request"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Start procurement
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                View demo results
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-5xl mx-auto px-8 pb-24 w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">AI vendor discovery</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                AI agents search across global suppliers to find matches
                for your exact specifications.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Smart comparison</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Compare pricing, delivery times, compliance ratings, and match
                scores across all vendors at a glance.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 bg-white">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Compliance verified</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every vendor is screened for ISO, CE, UL, and other industry
                certifications automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
