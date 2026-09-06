"use client";
import { Download, Search } from "lucide-react";

export default function AuditTable({ logs, searchQuery, setSearchQuery, onDownload }) {
  const filteredLogs = logs.filter(
    (log) =>
      log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.auditor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
              <th className="p-3">Status</th>
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
                    onClick={() => onDownload(log.title)}
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
  );
}