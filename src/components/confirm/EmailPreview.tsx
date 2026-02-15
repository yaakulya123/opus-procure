"use client";

import { useState } from "react";
import { Mail, Send, FileText, CalendarClock, Loader2, CheckCircle2 } from "lucide-react";

interface EmailPreviewProps {
  defaultContent: string;
  onSend: (content: string) => Promise<void>;
}

export default function EmailPreview({ defaultContent, onSend }: EmailPreviewProps) {
  const [content, setContent] = useState(defaultContent);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    setSending(true);
    await onSend(content);
    setSending(false);
    setSent(true);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
        <Mail className="w-4 h-4 text-blue-800" />
        <h3 className="text-sm font-semibold text-gray-900">Email Preview</h3>
        {sent && (
          <span className="ml-auto flex items-center gap-1 text-xs font-medium text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sent Successfully
          </span>
        )}
      </div>
      <div className="p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          className="w-full text-sm border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono leading-relaxed"
        />
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={handleSend}
            disabled={sending || sent}
            className="flex items-center gap-2 bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : sent ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Email Sent
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Email
              </>
            )}
          </button>
          <button className="flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FileText className="w-4 h-4" />
            Request Quote
          </button>
          <button className="flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <CalendarClock className="w-4 h-4" />
            Schedule Follow-up
          </button>
        </div>
      </div>
    </div>
  );
}
