"use client";

import { useState } from "react";
import { DollarSign, Shield, FileText, Users, BarChart3, Scale, Download, ArrowUpRight } from "lucide-react";

export default function TransparencySections() {
  const [activeTab, setActiveTab] = useState("Financial Transparency");

  const SECTIONS = [
    {
      name: "Financial Transparency",
      icon: DollarSign,
      description: "Audited financial statements, funding allocation, and expenditure reports.",
      items: [
        { title: "Annual Audit Report 2025", date: "Jan 2026", type: "PDF", size: "2.4 MB" },
        { title: "Grassroots Campaign Spending Breakdown", date: "Nov 2025", type: "XLSX", size: "1.1 MB" },
        { title: "Third-Party Funding Disclosures", date: "Sep 2025", type: "PDF", size: "850 KB" },
      ],
    },
    {
      name: "Governance",
      icon: Shield,
      description: "Constitutional framework, ward delegate rules, and electoral codes.",
      items: [
        { title: "TTC Constitution & Bylaws", date: "Updated 2025", type: "PDF", size: "3.2 MB" },
        { title: "Ward Delegate Primary Voting Rules", date: "Oct 2025", type: "PDF", size: "1.5 MB" },
      ],
    },
    {
      name: "Policy Documents",
      icon: FileText,
      description: "Whitepapers, legislative reform proposals, and policy suggestions.",
      items: [
        { title: "Electoral Reform Whitepaper 2026", date: "Feb 2026", type: "PDF", size: "4.1 MB" },
        { title: "Devolution of Local Govt Powers Brief", date: "Dec 2025", type: "PDF", size: "1.8 MB" },
      ],
    },
    {
      name: "Leadership",
      icon: Users,
      description: "Executive committee profiles, asset declarations, and tenure terms.",
      items: [
        { title: "Executive Committee Asset Declarations", date: "Jan 2026", type: "PDF", size: "980 KB" },
        { title: "National Advisory Board Directory", date: "2026", type: "PDF", size: "620 KB" },
      ],
    },
    {
      name: "Reports",
      icon: BarChart3,
      description: "Impact assessments, civic engagement metrics, and election monitoring.",
      items: [
        { title: "Civic Participation Index Q4 2025", date: "Jan 2026", type: "PDF", size: "2.9 MB" },
        { title: "Voter Registration Campaign Assessment", date: "Oct 2025", type: "PDF", size: "1.4 MB" },
      ],
    },
    {
      name: "Accountability",
      icon: Scale,
      description: "Whistleblower policies, ethics committee logs, and feedback loops.",
      items: [
        { title: "Whistleblower & Ethics Charter", date: "2025", type: "PDF", size: "750 KB" },
        { title: "Ethics Committee Public Hearing Minutes", date: "Dec 2025", type: "PDF", size: "1.2 MB" },
      ],
    },
  ];

  const activeContent = SECTIONS.find((s) => s.name === activeTab) || SECTIONS[0];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-gray-border">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.name;
            return (
              <button
                key={sec.name}
                onClick={() => setActiveTab(sec.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap transition ${
                  isActive
                    ? "bg-navy text-white shadow-md"
                    : "bg-gray-soft text-gray-mutedText hover:bg-gray-200 hover:text-navy"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-green-transform" : ""}`} />
                <span>{sec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-gray-soft/40 border border-gray-border rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="space-y-2 border-b border-gray-border pb-6">
            <h2 className="font-heading font-extrabold text-2xl text-navy flex items-center gap-3">
              <activeContent.icon className="w-6 h-6 text-green-transform" />
              <span>{activeContent.name}</span>
            </h2>
            <p className="text-xs text-gray-mutedText max-w-2xl">
              {activeContent.description}
            </p>
          </div>

          {/* Document Download List */}
          <div className="grid gap-4">
            {activeContent.items.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-navy transition shadow-sm group"
              >
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-navy group-hover:text-green-transform transition flex items-center gap-2">
                    <span>{doc.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h4>
                  <p className="text-[11px] text-gray-mutedText">
                    Published: {doc.date} • Format: {doc.type} ({doc.size})
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy/5 text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-navy group-hover:text-white transition shrink-0">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}