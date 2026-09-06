"use client";
import { useState, useEffect } from "react";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  PlusCircle, 
  Trash2, 
  Shield, 
  Search, 
  CheckCircle, 
  AlertCircle,
  FileSpreadsheet
} from "lucide-react";
import { getStorageItem, setStorageItem, addItem, removeItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("users"); // 'users' | 'courses' | 'finance'
  const [searchQuery, setSearchQuery] = useState("");

  // Storage States
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [donations, setDonations] = useState([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  // Form States
  const [newCourse, setNewCourse] = useState({
    title: "",
    slug: "",
    category: "Civic Governance",
    description: "",
    progress: 0,
  });

  const [newTransaction, setNewTransaction] = useState({
    donorName: "",
    amount: "",
    purpose: "General Fund",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setUsers(getStorageItem("ttc_users"));
    setCourses(getStorageItem("ttc_courses"));
    setDonations(getStorageItem("ttc_donations"));
  };

  // User Actions
  const handleDeleteUser = (id, name) => {
    removeItem("ttc_users", id);
    refreshData();
    setModalDetails({
      title: "Member Record Removed",
      message: `User record for "${name}" has been revoked and removed from the active database.`,
      type: "success",
    });
    setIsModalOpen(true);
  };

  // Course Actions
  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.slug) return;

    const courseObj = {
      id: `crs-${Date.now()}`,
      ...newCourse,
      slug: newCourse.slug.toLowerCase().replace(/\s+/g, "-"),
    };

    addItem("ttc_courses", courseObj);
    refreshData();
    setNewCourse({ title: "", slug: "", category: "Civic Governance", description: "", progress: 0 });

    setModalDetails({
      title: "Course Module Published",
      message: `The Civic Academy course "${courseObj.title}" is now published and accessible to all members.`,
      type: "success",
    });
    setIsModalOpen(true);
  };

  const handleDeleteCourse = (id, title) => {
    removeItem("ttc_courses", id);
    refreshData();
    setModalDetails({
      title: "Course Deleted",
      message: `"${title}" has been removed from the academy repository.`,
      type: "warning",
    });
    setIsModalOpen(true);
  };

  // Finance Actions
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.donorName || !newTransaction.amount) return;

    const entry = {
      id: `tx-${Date.now()}`,
      amount: Number(newTransaction.amount),
      donorName: newTransaction.donorName,
      purpose: newTransaction.purpose,
      date: newTransaction.date,
    };

    addItem("ttc_donations", entry);
    refreshData();
    setNewTransaction({ donorName: "", amount: "", purpose: "General Fund", date: new Date().toISOString().split("T")[0] });

    setModalDetails({
      title: "Financial Record Logged",
      message: `Transaction of ₦${Number(entry.amount).toLocaleString()} logged successfully.`,
      type: "success",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-soft py-10 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Admin Header */}
        <div className="bg-navy rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold-warm" />
              <span className="text-xs font-bold text-gold-warm uppercase tracking-wider">TTC Administration</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl mt-1">Platform Operations Panel</h1>
            <p className="text-xs text-gray-300 mt-1">Manage membership records, release academy curriculum, and audit financial inputs.</p>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="px-3 py-1.5 bg-white/10 rounded-lg font-semibold border border-white/10">
              Total Members: {users.length}
            </span>
            <span className="px-3 py-1.5 bg-green-transform/20 text-green-transform font-bold rounded-lg border border-green-transform/30">
              System Health: Optimal
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-border gap-6">
          <button
            onClick={() => setActiveTab("users")}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === "users" ? "border-green-transform text-navy" : "border-transparent text-gray-mutedText hover:text-navy"
            }`}
          >
            <Users className="w-4 h-4" /> Member Management ({users.length})
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === "courses" ? "border-green-transform text-navy" : "border-transparent text-gray-mutedText hover:text-navy"
            }`}
          >
            <BookOpen className="w-4 h-4" /> Academy Publishing ({courses.length})
          </button>
          <button
            onClick={() => setActiveTab("finance")}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === "finance" ? "border-green-transform text-navy" : "border-transparent text-gray-mutedText hover:text-navy"
            }`}
          >
            <DollarSign className="w-4 h-4" /> Financial Ledger
          </button>
        </div>

        {/* TAB 1: USER MANAGEMENT */}
        {activeTab === "users" && (
          <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-heading font-bold text-xl text-navy">Registered Coalition Members</h2>
              <div className="relative w-64">
                <Search className="w-4 h-4 text-gray-mutedText absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 border border-gray-border rounded-lg text-xs focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-border text-navy bg-gray-soft/50 font-bold">
                    <th className="p-3">User ID</th>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Role</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border">
                  {users
                    .filter(u => u.name?.toLowerCase().includes(searchQuery.toLowerCase()) || u.email?.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((user) => (
                      <tr key={user.id} className="hover:bg-gray-soft/30 transition">
                        <td className="p-3 font-mono font-bold text-navy">{user.id}</td>
                        <td className="p-3 font-semibold text-gray-darkText">{user.name}</td>
                        <td className="p-3 text-gray-mutedText">{user.email}</td>
                        <td className="p-3 text-gray-mutedText">{user.phone || "N/A"}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 bg-blue-trust/10 text-blue-trust font-bold rounded text-[10px]">
                            {user.role || "Member"}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleDeleteUser(user.id, user.name)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded transition"
                            title="Revoke Membership"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: COURSE PUBLISHING */}
        {activeTab === "courses" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-lg text-navy">Publish New Course</h2>
              <form onSubmit={handleCreateCourse} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Course Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Budget Analysis 101"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">URL Slug</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. budget-analysis-101"
                    value={newCourse.slug}
                    onChange={(e) => setNewCourse({ ...newCourse, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Category</label>
                  <select
                    value={newCourse.category}
                    onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  >
                    <option>Civic Governance</option>
                    <option>Public Finance</option>
                    <option>Youth Leadership</option>
                    <option>Policy & Advocacy</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Overview Description</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Course objectives..."
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-green-transform text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" /> Publish Module
                </button>
              </form>
            </div>

            <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-lg text-navy">Active Course Modules</h2>
              <div className="space-y-3">
                {courses.map((course) => (
                  <div key={course.id} className="p-4 border border-gray-border rounded-xl flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold text-blue-trust uppercase">{course.category}</span>
                      <h3 className="font-heading font-bold text-navy text-sm">{course.title}</h3>
                      <p className="text-xs text-gray-mutedText mt-0.5">{course.description}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteCourse(course.id, course.title)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FINANCIAL LEDGER */}
        {activeTab === "finance" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-lg text-navy">Log Financial Entry</h2>
              <form onSubmit={handleAddTransaction} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Donor Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Open Society Civic Fund"
                    value={newTransaction.donorName}
                    onChange={(e) => setNewTransaction({ ...newTransaction, donorName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Amount (NGN ₦)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 250000"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Earmarked Purpose</label>
                  <select
                    value={newTransaction.purpose}
                    onChange={(e) => setNewTransaction({ ...newTransaction, purpose: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  >
                    <option>General Fund</option>
                    <option>Civic Academy Support</option>
                    <option>Policy Research</option>
                    <option>Town Hall Hosting</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-navy text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" /> Record Ledger Entry
                </button>
              </form>
            </div>

            <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-lg text-navy">Verified Financial Ledger</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-border text-navy bg-gray-soft/50 font-bold">
                      <th className="p-3">Date</th>
                      <th className="p-3">Contributor</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3 text-right">Amount (₦)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-border">
                    {donations.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-soft/30 transition">
                        <td className="p-3 text-gray-mutedText">{tx.date || "2026-03-01"}</td>
                        <td className="p-3 font-semibold text-gray-darkText">{tx.donorName || tx.name}</td>
                        <td className="p-3 text-gray-mutedText">{tx.purpose || "General Fund"}</td>
                        <td className="p-3 text-right font-bold text-green-transform">
                          ₦{Number(tx.amount).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}