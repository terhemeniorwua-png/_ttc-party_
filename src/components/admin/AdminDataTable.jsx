"use client";

import { Edit, Trash2, CheckCircle2, XCircle } from "lucide-react";

export default function AdminDataTable({ users = [], onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 space-y-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-border pb-4">
        <div>
          <h3 className="font-heading font-extrabold text-xl text-navy">
            Platform Users Management
          </h3>
          <p className="text-xs text-gray-mutedText">
            View, edit, or manage civic platform access rights.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-border bg-gray-soft/50 text-[10px] uppercase tracking-wider font-bold text-navy/70 font-heading">
              <th className="p-3.5 rounded-l-xl">User</th>
              <th className="p-3.5">Email</th>
              <th className="p-3.5">Phone</th>
              <th className="p-3.5">Role</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5 text-right rounded-r-xl">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-border text-xs text-navy">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-soft/30 transition">
                <td className="p-3.5 font-bold">{u.fullName}</td>
                <td className="p-3.5 text-gray-600">{u.email}</td>
                <td className="p-3.5 text-gray-600">{u.phone || "—"}</td>
                <td className="p-3.5">
                  <span className="px-2.5 py-1 bg-navy/5 text-navy rounded-full text-[10px] font-bold">
                    {u.role || "Learner"}
                  </span>
                </td>
                <td className="p-3.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-transform bg-green-transform/10 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </span>
                </td>
                <td className="p-3.5 text-right space-x-2">
                  <button
                    onClick={() => onEdit(u)}
                    className="p-1.5 bg-gray-soft hover:bg-navy hover:text-white rounded-lg transition"
                    title="Edit Record"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDelete(u.id)}
                    className="p-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition"
                    title="Delete User"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
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