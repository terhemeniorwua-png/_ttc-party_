"use client";
import { useState, useEffect } from "react";
import { 
  Users, 
  FileText, 
  Calendar, 
  BookOpen, 
  DollarSign, 
  Plus, 
  Trash2 
} from "lucide-react";
import { getStorageItem, addItem, removeItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [newsList, setNewsList] = useState([]);
  const [policiesList, setPoliciesList] = useState([]);
  const [donationsList, setDonationsList] = useState([]);
  
  // Form states
  const [newPolicyTitle, setNewPolicyTitle] = useState("");
  const [newPolicyCategory, setNewPolicyCategory] = useState("Healthcare");
  const [newPolicySummary, setNewPolicySummary] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    refreshData();
    const handleStorageUpdate = () => refreshData();
    window.addEventListener("storage_updated", handleStorageUpdate);
    return () => window.removeEventListener("storage_updated", handleStorageUpdate);
  }, []);

  const refreshData = () => {
    setNewsList(getStorageItem("ttc_news"));
    setPoliciesList(getStorageItem("ttc_policies"));
    setDonationsList(getStorageItem("ttc_donations"));
  };

  const handleCreatePolicy = (e) => {
    e.preventDefault();
    if (!newPolicyTitle || !newPolicySummary) return;

    const newPolicy = {
      id: `pol-${Date.now()}`,
      slug: newPolicyTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newPolicyTitle,
      category: newPolicyCategory,
      summary: newPolicySummary,
      updatedAt: new Date().toISOString().split("T")[0]
    };

    addItem("ttc_policies", newPolicy);
    setNewPolicyTitle("");
    setNewPolicySummary("");

    setModalMessage("New policy framework successfully created and published globally!");
    setIsModalOpen(true);
  };

  const handleDeletePolicy = (id) => {
    removeItem("ttc_policies", id);
    setModalMessage("Policy record removed successfully.");
    setIsModalOpen(true);
  };

  const totalDonations = donationsList.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  return (
    <div className="min-h-screen bg-gray-soft flex font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Admin Action Recorded"
        message={modalMessage}
        type="success"
      />

      {/* Admin Sidebar */}
      <aside className="w-64 bg-navy text-white p-6 hidden md:block shrink-0">
        <h2 className="font-heading font-extrabold text-2xl text-white mb-8">TTC Admin</h2>
        <nav className="space-y-2 text-sm">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition ${
              activeTab === "overview" ? "bg-blue-trust font-semibold" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <Users className="w-4 h-4" /> Overview
          </button>
          <button
            onClick={() => setActiveTab("policies")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition ${
              activeTab === "policies" ? "bg-blue-trust font-semibold" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <FileText className="w-4 h-4" /> Manage Policies
          </button>
          <button
            onClick={() => setActiveTab("finance")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition ${
              activeTab === "finance" ? "bg-blue-trust font-semibold" : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <DollarSign className="w-4 h-4" /> Financial Audits
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h1 className="font-heading font-extrabold text-3xl text-navy mb-6">Platform Performance</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
                <p className="text-xs font-bold text-gray-mutedText uppercase">Active Policies</p>
                <p className="font-heading font-bold text-3xl text-navy mt-2">{policiesList.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
                <p className="text-xs font-bold text-gray-mutedText uppercase">Published News</p>
                <p className="font-heading font-bold text-3xl text-blue-trust mt-2">{newsList.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
                <p className="text-xs font-bold text-gray-mutedText uppercase">Simulated Contributions</p>
                <p className="font-heading font-bold text-3xl text-green-transform mt-2">
                  ₦{totalDonations.toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
                <p className="text-xs font-bold text-gray-mutedText uppercase">Registered Members</p>
                <p className="font-heading font-bold text-3xl text-gold-warm mt-2">1,284</p>
              </div>
            </div>
          </div>
        )}

        {/* Policies Tab */}
        {activeTab === "policies" && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
              <h2 className="font-heading font-bold text-xl text-navy mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-green-transform" /> Publish New Policy
              </h2>
              <form onSubmit={handleCreatePolicy} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-darkText mb-1">Policy Title</label>
                    <input
                      type="text"
                      required
                      value={newPolicyTitle}
                      onChange={(e) => setNewPolicyTitle(e.target.value)}
                      placeholder="e.g. Agricultural Tech Modernization"
                      className="w-full px-4 py-2 border border-gray-border rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-darkText mb-1">Category</label>
                    <select
                      value={newPolicyCategory}
                      onChange={(e) => setNewPolicyCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-border rounded-lg text-sm"
                    >
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-darkText mb-1">Executive Summary</label>
                  <textarea
                    required
                    rows="3"
                    value={newPolicySummary}
                    onChange={(e) => setNewPolicySummary(e.target.value)}
                    placeholder="Briefly describe the key objectives of this proposal..."
                    className="w-full px-4 py-2 border border-gray-border rounded-lg text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-transform text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition"
                >
                  Publish Policy Framework
                </button>
              </form>
            </div>

            {/* Existing Policies List */}
            <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
              <h2 className="font-heading font-bold text-xl text-navy mb-4">Active Policy Repository</h2>
              <div className="divide-y divide-gray-border">
                {policiesList.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-blue-trust uppercase">{item.category}</span>
                      <h4 className="font-heading font-bold text-navy">{item.title}</h4>
                      <p className="text-xs text-gray-mutedText">{item.summary}</p>
                    </div>
                    <button
                      onClick={() => handleDeletePolicy(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Finance Tab */}
        {activeTab === "finance" && (
          <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm">
            <h2 className="font-heading font-bold text-xl text-navy mb-4">Simulated Contribution History</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-border text-xs text-gray-mutedText uppercase">
                    <th className="pb-3">Donor</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Method</th>
                    <th className="pb-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border">
                  {donationsList.map((don) => (
                    <tr key={don.id}>
                      <td className="py-3 font-medium text-gray-darkText">{don.donorName}</td>
                      <td className="py-3 font-bold text-green-transform">₦{Number(don.amount).toLocaleString()}</td>
                      <td className="py-3 text-gray-mutedText">{don.method}</td>
                      <td className="py-3 text-gray-mutedText">{don.date}</td>
                    </tr>
                  ))}
                  {donationsList.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-6 text-center text-gray-mutedText">No contributions recorded yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}