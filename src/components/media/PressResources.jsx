"use client";

import { FileText, Download, Mail, ExternalLink } from "lucide-react";

const PRESS_RELEASES = [
  {
    title: "TTC Releases Comprehensive Electoral Reform Whitepaper",
    date: "February 12, 2026",
    size: "1.4 MB",
    type: "PDF",
  },
  {
    title: "Statement on Grassroots Ward Delegate Registration Framework",
    date: "January 28, 2026",
    size: "820 KB",
    type: "PDF",
  },
  {
    title: "Annual Civic Accountability & Transparency Report Published",
    date: "January 10, 2026",
    size: "2.1 MB",
    type: "PDF",
  },
];

export default function PressResources() {
  return (
    <div className="space-y-12">
      {/* Press Contact Card */}
      <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-gold-warm uppercase tracking-wider">
            Press & Media Inquiries
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Need Official Quotes or Spokesperson Interviews?
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Our communications desk provides journalists and broadcasters with fast-turnaround commentary, background briefings, and policy explanations.
          </p>
        </div>

        <a
          href="mailto:press@ttc.org.ng"
          className="px-6 py-3.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition shrink-0 flex items-center gap-2 shadow-lg"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Media Desk</span>
        </a>
      </div>

      {/* Official Statements List */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-xl text-navy">
          Official Press Statements
        </h3>

        <div className="grid gap-4">
          {PRESS_RELEASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-navy transition shadow-sm group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/5 text-navy rounded-xl group-hover:bg-green-transform/20 group-hover:text-green-transform transition">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-navy group-hover:text-green-transform transition">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-mutedText">
                    Issued: {item.date} • Format: {item.type} ({item.size})
                  </p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy/5 text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-navy group-hover:text-white transition shrink-0">
                <Download className="w-3.5 h-3.5" />
                <span>Download Release</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}