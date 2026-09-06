"use client";
import { Search, Trash2 } from "lucide-react";

export default function UserTable({ users, searchQuery, setSearchQuery, onDelete }) {
  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
            {filteredUsers.map((user) => (
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
                    onClick={() => onDelete(user.id, user.name)}
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
  );
}