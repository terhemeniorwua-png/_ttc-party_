"use client";
import { Send } from "lucide-react";

export default function ProposalForm({ form, setForm, onSubmit }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-border shadow-sm space-y-6">
      <div>
        <h2 className="font-heading font-bold text-2xl text-navy">Submit Policy Proposal</h2>
        <p className="text-xs text-gray-mutedText mt-1">
          Pitch your civic tech app, community organizing campaign, or reform proposal.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 text-xs">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Project / Initiative Name</label>
            <input
              type="text"
              required
              placeholder="e.g. LGA Budget Tracker"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Lead Applicant Name</label>
            <input
              type="text"
              required
              placeholder="Full Name"
              value={form.leadName}
              onChange={(e) => setForm({ ...form, leadName: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@domain.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-darkText mb-1">Primary State of Impact</label>
            <select
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
            >
              <option>Lagos</option>
              <option>Abuja (FCT)</option>
              <option>Kano</option>
              <option>Rivers</option>
              <option>Enugu</option>
              <option>Kaduna</option>
              <option>Oyo</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-darkText mb-1">Incubator Track</label>
          <select
            value={form.track}
            onChange={(e) => setForm({ ...form, track: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
          >
            <option>Digital Democracy & Civic Tech</option>
            <option>Grassroots Community Organizing</option>
            <option>Legislative Reform & Advocacy</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-gray-darkText mb-1">Executive Summary & Problem Statement</label>
          <textarea
            rows="4"
            required
            placeholder="Outline the governance challenge your initiative addresses..."
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-transform text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" /> Submit for Incubation
        </button>
      </form>
    </div>
  );
}