"use client";
import { useState, useEffect } from "react";
import { 
  Rocket, 
  Users, 
  Lightbulb, 
  Award, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Clock 
} from "lucide-react";
import { getStorageItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function YouthIncubatorPage() {
  const [proposals, setProposals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  const [form, setForm] = useState({
    title: "",
    leadName: "",
    email: "",
    state: "Lagos",
    track: "Digital Democracy & Civic Tech",
    summary: "",
  });

  useEffect(() => {
    // Load local youth project submissions
    const saved = getStorageItem("ttc_youth_projects") || [];
    setProposals(saved);
  }, []);

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    if (!form.title || !form.leadName || !form.email || !form.summary) return;

    const newProject = {
      id: `yp-${Date.now()}`,
      ...form,
      status: "Under Policy Review",
      date: new Date().toISOString().split("T")[0],
    };

    addItem("ttc_youth_projects", newProject);
    setProposals([newProject, ...proposals]);

    setForm({
      title: "",
      leadName: "",
      email: "",
      state: "Lagos",
      track: "Digital Democracy & Civic Tech",
      summary: "",
    });

    setModalDetails({
      title: "Policy Proposal Submitted!",
      message: `Your project "${newProject.title}" has been placed in the Incubator pipeline for Q2 Review.`,
      type: "success",
    });
    setIsModalOpen(true);
  };

  const incubatorTracks = [
    {
      title: "Digital Democracy & Civic Tech",
      desc: "Leveraging software, AI, and open data to audit public spending and track legislative performance.",
      grants: "Up to ₦5,000,000 Seed Grant",
    },
    {
      title: "Grassroots Community Organizing",
      desc: "Training local civic leaders across 774 LGAs to run voter literacy and governance tracking hubs.",
      grants: "Mentorship + Operational Support",
    },
    {
      title: "Legislative Reform & Advocacy",
      desc: "Drafting model bills, policy briefs, and citizen-led petitions for constitutional reforms.",
      grants: "Legal & Policy Drafting Retainers",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-soft py-12 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-md">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-gold-warm/20 text-gold-warm border border-gold-warm/30 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Youth Policy & Innovation Hub
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight">
              Youth Leadership & Policy Incubator
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Empowering Nigeria’s next generation of public leaders, policy strategists, and civic technologists. Submit your ideas to receive policy mentorship, technical tooling, and micro-grants.
            </p>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="space-y-6">
          <h2 className="font-heading font-extrabold text-2xl text-navy">Incubator Focus Tracks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {incubatorTracks.map((track, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-trust/10 text-blue-trust flex items-center justify-center font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy">{track.title}</h3>
                  <p className="text-xs text-gray-darkText leading-relaxed">{track.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-border">
                  <span className="text-[11px] font-bold text-green-transform bg-green-transform/10 px-2.5 py-1 rounded-full">
                    {track.grants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application & Tracker Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-gray-border shadow-sm space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy">Submit Policy Proposal</h2>
              <p className="text-xs text-gray-mutedText mt-1">
                Pitch your civic tech app, community organizing campaign, or reform proposal.
              </p>
            </div>

            <form onSubmit={handleSubmitProposal} className="space-y-4 text-xs">
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

          {/* Submissions Feed Side */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-6">
            <h2 className="font-heading font-bold text-xl text-navy">Active Pipeline Submissions</h2>
            {proposals.length === 0 ? (
              <p className="text-xs text-gray-mutedText">No proposals submitted yet. Be the first to apply!</p>
            ) : (
              <div className="space-y-4">
                {proposals.map((item) => (
                  <div key={item.id} className="p-4 border border-gray-border rounded-xl space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-blue-trust uppercase">{item.track}</span>
                      <span className="px-2 py-0.5 bg-gold-warm/10 text-gold-warm font-bold rounded-full text-[10px] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.status}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-navy text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-darkText line-clamp-2">{item.summary}</p>
                    <div className="pt-2 flex justify-between text-[11px] text-gray-mutedText border-t border-gray-border/50">
                      <span>Lead: {item.leadName}</span>
                      <span>{item.state} State</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}