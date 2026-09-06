"use client";

import { useState, useEffect } from "react";
import AdminStatGrid from "@/components/admin/AdminStatGrid";
import AdminDataTable from "@/components/admin/AdminDataTable";

export default function AdminDashboardPage() {
  const [users, setUsers] = useState([
    {
      id: "usr_1",
      fullName: "Philip Okafor",
      email: "philip@example.com",
      phone: "+234 801 234 5678",
      role: "Learner",
    },
    {
      id: "usr_2",
      fullName: "Amina Bello",
      email: "amina@example.com",
      phone: "+234 802 987 6543",
      role: "Moderator",
    },
  ]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ttc_users");
      if (stored) {
        setUsers(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load users from localStorage", e);
    }
  }, []);

  const handleDeleteUser = (id) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem("ttc_users", JSON.stringify(updated));
  };

  const handleEditUser = (user) => {
    alert(`Editing user: ${user.fullName}`);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-1">
        <h1 className="font-heading font-extrabold text-3xl text-navy">
          Admin Overview Dashboard
        </h1>
        <p className="text-xs text-gray-mutedText">
          Monitor real-time participation, manage user accounts, and update curriculum content.
        </p>
      </div>

      {/* Metric Cards Grid */}
      <AdminStatGrid />

      {/* Main Administrative Table */}
      <AdminDataTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}