"use client";
import { Download, CheckCircle2 } from "lucide-react";

export default function PressReleaseCard({ release, onDownload }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-trust transition">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 bg-blue-trust/10 text-blue-trust font-bold text-[10px] rounded-full uppercase">
            {release.category}
          </span>
          <span className="text-[11px] text-gray-mutedText font-semibold">{release.date}</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-gray-mutedText">{release.id}</span>
        <h3 className="font-heading font-bold text-lg text-navy leading-snug">{release.title}</h3>
        <p className="text-xs text-gray-darkText leading-relaxed">{release.summary}</p>
      </div>

      <div className="pt-3 border-t border-gray-border flex justify-between items-center text-xs">
        <span className="text-green-transform font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Statement
        </span>
        <button
          onClick={() => onDownload(release.title)}
          className="px-3 py-1.5 bg-navy text-white font-bold rounded hover:bg-opacity-90 transition inline-flex items-center gap-1.5"
        >
          <Download className="w-3 h-3" /> Download PDF
        </button>
      </div>
    </div>
  );
}