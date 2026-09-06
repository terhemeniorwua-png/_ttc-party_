"use client";
import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Download, 
  PieChart, 
  BarChart2, 
  CheckCircle2, 
  Search, 
  Layers 
} from "lucide-react";
import { getStorageItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function TransparencyPage() {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'allocations' | 'audits'
  const [searchQuery, setSearchQuery] = useState("");
  const [donations, setDonations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  useEffect(() => {
    // Load local contributions database
    const savedDonations = getStorageItem("ttc_donations");
    setDonations(savedDonations);
  }, []);

  // Calculate live statistics
  const totalRaised = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 12500000); // Default base offset
  const TotalAllocated = 9800000;
  const reserveFund = totalRaised - TotalAllocated;

  const budgetBreakdown = [
    { sector: "Civic Academy & Citizen Education", amount: 4200000, percentage: 43, color: "bg-blue-trust" },
    { sector: "Policy Research & Working Groups", amount: 2800000, percentage: 28, color: "bg-green-transform" },
    { sector: "Grassroots Town Halls & Events", amount: 1800000, percentage: 18, color: "bg-gold-warm" },
    { sector: "Operational Administration & Tech Support", amount: 1000000, percentage: 11, color: "bg-navy" },
  ];

  const auditLogs = [
    { id: "AUD-2026-02", title: "Q1 2026 External Financial Audit", date: "2026-03-01", auditor: "KPMG Nigeria (Independent Review)", status: "Verified & Compliant" },
    { id: "AUD-2025-04", title: "Q4 2025 Annual Coalition Statement", date: "2025-12-28", auditor: "PwC Civic Advisory Audit", status: "Verified & Compliant" },
    { id: "AUD-2025-03", title: "Civic Academy Grant Disbursal Audit", date: "2025-09-15", auditor: "Internal Ethics Board", status: "Verified & Compliant" },
  ];

  const filteredLogs = auditLogs.filter(
    (log) =>
      log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.auditor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadAudit = (title) => {
    setModalDetails({
      title: "Audit Report Downloaded",
      message: `The full audit statement for "${title}" has been compiled into a certified PDF format.`,
      type: "success",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-soft py-12 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Hero */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-md">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-green-transform/20 text-green-transform border border-green-transform/30 font-bold text-xs rounded-full uppercase tracking-wider">
              Open Financial Integrity
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight">
              Financial Transparency & Budget Allocation Hub
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We operate under full financial openness. Every naira contributed by citizens or institutional donors is tracked, independently audited, and displayed in real time.
            </p>
          </div>
        </div>

        {/* Real-time Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Total Raised & Donated</p>
              <h3 className="font-heading font-extrabold text-2xl text-navy mt-1">
                ₦{totalRaised.toLocaleString()}
              </h3>
              <p className="text-[11px] text-green-transform font-bold mt-1">✓ 100% Verified Citizen Funds</p>
            </div>
            <div className="p-3 bg-blue-trust/10 text-blue-trust rounded-2xl">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Program Expenditure</p>
              <h3 className="font-heading font-extrabold text-2xl text-navy mt-1">
                ₦{TotalAllocated.toLocaleString()}
              </h3>
              <p className="text-[11px] text-blue-trust font-bold mt-1">78.4% Directly Disbursed</p>
            </div>
            <div className="p-3 bg-green-transform/10 text-green-transform rounded-2xl">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Reserve & Capital Contingency</p>
              <h3 className="font-heading font-extrabold text-2xl text-navy mt-1">
                ₦{reserveFund.toLocaleString()}
              </h3>
              <p className="text-[11px] text-gold-warm font-bold mt-1">Protected Emergency Reserves</p>
            </div>
            <div className="p-3 bg-gold-warm/10 text-gold-warm rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* View Selection Tabs */}
        <div className="flex border-b border-gray-border gap-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 text-sm font-bold transition border-b-2 ${
              activeTab === "overview"
                ? "border-green-transform text-navy"
                : "border-transparent text-gray-mutedText hover:text-navy"
            }`}
          >
            Budget Allocations
          </button>
          <button
            onClick={() => setActiveTab("audits")}
            className={`pb-3 text-sm font-bold transition border-b-2 ${
              activeTab === "audits"
                ? "border-green-transform text-navy"
                : "border-transparent text-gray-mutedText hover:text-navy"
            }`}
          >
            Independent Audit Logs
          </button>
        </div>

        {/* Tab 1: Budget Breakdown Chart/Visual */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-border space-y-6">
              <h2 className="font-heading font-bold text-xl text-navy">Sector Allocation Breakdown</h2>
              <div className="space-y-4">
                {budgetBreakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-gray-darkText">{item.sector}</span>
                      <span className="text-navy">₦{item.amount.toLocaleString()} ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-soft h-3 rounded-full overflow-hidden border border-gray-border">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-border space-y-4">
              <h2 className="font-heading font-bold text-xl text-navy">Financial Governance Policy</h2>
              <ul className="space-y-3 text-xs text-gray-darkText leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
                  <span><strong>Zero Foreign Political Funding:</strong> TTC is 100% funded by verified Nigerian citizens, Diaspora civic pools, and aligned philanthropic grants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
                  <span><strong>Quarterly Independent Audits:</strong> Financial reports are reviewed by external licensed auditing firms every 90 days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
                  <span><strong>Capped Administrative Overhead:</strong> Administrative and executive salaries are capped at a maximum of 12% of total operational expenditure.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Independent Audits */}
        {activeTab === "audits" && (
          <div className="bg-white p-6 rounded-2xl border border-gray-border space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="font-heading font-bold text-xl text-navy">Certified Audit Ledger</h2>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search audit records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-border rounded-lg text-xs focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-border text-navy bg-gray-soft/50 font-bold">
                    <th className="p-3">Audit Reference</th>
                    <th className="p-3">Report Title</th>
                    <th className="p-3">Audit Firm / Authority</th>
                    <th className="p-3">Date Certified</th>
                    <th className="p-3">Verification Status</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-soft/30 transition">
                      <td className="p-3 font-bold text-navy">{log.id}</td>
                      <td className="p-3 font-semibold text-gray-darkText">{log.title}</td>
                      <td className="p-3 text-gray-mutedText">{log.auditor}</td>
                      <td className="p-3 text-gray-mutedText">{log.date}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 bg-green-transform/10 text-green-transform font-bold rounded-full text-[10px]">
                          {log.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDownloadAudit(log.title)}
                          className="px-3 py-1.5 bg-navy text-white font-bold rounded hover:bg-opacity-90 transition inline-flex items-center gap-1.5"
                        >
                          <Download className="w-3 h-3" /> Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}