"use client";

import { useState, useEffect } from "react";
import { FileText, BarChart3, Scale, Settings2, Check, RefreshCw } from "lucide-react";

const DEFAULT_METRICS = {
  policyDocs: 12,
  reports: 8,
  governanceDocs: 6,
};

export default function TransparencyDashboard() {
  const [metrics, setMetrics] = useState(DEFAULT_METRICS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_METRICS);
  const [isSaved, setIsSaved] = useState(false);

  // Load metrics from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ttc_transparency_metrics");
      if (saved) {
        const parsed = JSON.parse(saved);
        setMetrics(parsed);
        setFormData(parsed);
      }
    } catch (e) {
      console.error("Failed to load metrics", e);
    }
  }, []);

  const handleAdminUpdate = (e) => {
    e.preventDefault();
    setMetrics(formData);
    try {
      localStorage.setItem("ttc_transparency_metrics", JSON.stringify(formData));
    } catch (e) {
      console.error("Failed to save metrics", e);
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleReset = () => {
    setMetrics(DEFAULT_METRICS);
    setFormData(DEFAULT_METRICS);
    localStorage.removeItem("ttc_transparency_metrics");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 space-y-6">
      {/* Metrics Grid */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-border rounded-3xl p-6 shadow-xl flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-mutedText uppercase tracking-wider block">
              Policy Documents
            </span>
            <span className="font-heading font-extrabold text-4xl text-navy">
              {metrics.policyDocs}
            </span>
          </div>
          <div className="p-3.5 bg-green-transform/10 rounded-2xl text-green-transform">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border border-gray-border rounded-3xl p-6 shadow-xl flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-mutedText uppercase tracking-wider block">
              Reports
            </span>
            <span className="font-heading font-extrabold text-4xl text-navy">
              {metrics.reports}
            </span>
          </div>
          <div className="p-3.5 bg-blue-trust/10 rounded-2xl text-blue-trust">
            <BarChart3 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border border-gray-border rounded-3xl p-6 shadow-xl flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-mutedText uppercase tracking-wider block">
              Governance Documents
            </span>
            <span className="font-heading font-extrabold text-4xl text-navy">
              {metrics.governanceDocs}
            </span>
          </div>
          <div className="p-3.5 bg-gold-warm/10 rounded-2xl text-gold-warm">
            <Scale className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Admin Panel Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsAdminOpen(!isAdminOpen)}
          className="inline-flex items-center gap-2 text-xs font-bold text-navy bg-gray-soft border border-gray-border px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          <Settings2 className="w-4 h-4" />
          <span>{isAdminOpen ? "Close Admin Controller" : "Admin: Update Metrics"}</span>
        </button>
      </div>

      {/* Inline Admin Form */}
      {isAdminOpen && (
        <form
          onSubmit={handleAdminUpdate}
          className="bg-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Admin Dashboard Controls
              </h3>
              <p className="text-xs text-gray-300">
                Update document totals displayed across the portal.
              </p>
            </div>
            {isSaved && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-transform/20 text-green-transform border border-green-transform/30 rounded-full text-xs font-bold">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300">Policy Documents</label>
              <input
                type="number"
                value={formData.policyDocs}
                onChange={(e) =>
                  setFormData({ ...formData, policyDocs: Number(e.target.value) })
                }
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-green-transform"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300">Reports</label>
              <input
                type="number"
                value={formData.reports}
                onChange={(e) =>
                  setFormData({ ...formData, reports: Number(e.target.value) })
                }
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-green-transform"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300">Governance Documents</label>
              <input
                type="number"
                value={formData.governanceDocs}
                onChange={(e) =>
                  setFormData({ ...formData, governanceDocs: Number(e.target.value) })
                }
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-green-transform"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/10 transition flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Defaults
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-green-transform text-navy rounded-xl text-xs font-heading font-bold uppercase tracking-wider hover:bg-white transition"
            >
              Save Metrics
            </button>
          </div>
        </form>
      )}
    </div>
  );
}