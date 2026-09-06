"use client";
import { useState } from "react";
import { 
  Newspaper, 
  Download, 
  Send, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  UserCheck, 
  Search, 
  CheckCircle2, 
  ExternalLink,
  Radio
} from "lucide-react";
import Modal from "@/components/ui/Modal";

export default function MediaCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  const [inquiryForm, setInquiryForm] = useState({
    fullName: "",
    outlet: "",
    email: "",
    topic: "Spokesperson Interview Request",
    deadline: "",
    details: "",
  });

  const pressReleases = [
    {
      id: "PR-2026-08",
      title: "TTC Demands Full Audit of Local Government Revenue Allocations",
      date: "August 28, 2026",
      category: "Press Statement",
      summary: "The Third Choice Coalition calls on anti-corruption agencies to enforce real-time tracking across all 774 Local Government Areas.",
      downloadUrl: "#",
    },
    {
      id: "PR-2026-07",
      title: "Coalition Unveils National Youth Policy Incubator Class of 2026",
      date: "August 14, 2026",
      category: "Program Launch",
      summary: "Fifty civic technologists and grassroots policy strategists awarded inaugural micro-grants to build public expenditure trackers.",
      downloadUrl: "#",
    },
    {
      id: "PR-2026-05",
      title: "Position Paper: Electoral Integrity and Digital Voting Verification",
      date: "July 02, 2026",
      category: "Policy Brief",
      summary: "A comprehensive analysis proposing constitutional amendments to guarantee real-time election result transmission.",
      downloadUrl: "#",
    },
    {
      id: "PR-2026-03",
      title: "Civic Academy Surpasses 100,000 Certified Graduate Citizens",
      date: "May 19, 2026",
      category: "Milestone",
      summary: "Milestone reached in grassroots voter education across 36 states and the Federal Capital Territory.",
      downloadUrl: "#",
    },
  ];

  const spokespersons = [
    {
      name: "Dr. Aisha Bello",
      role: "Lead Policy Strategist",
      focus: "Public Finance & Legislative Reform",
      image: "AB",
    },
    {
      name: "Chidi Nnamdi",
      role: "National Communications Director",
      focus: "Electoral Reform & Public Affairs",
      image: "CN",
    },
    {
      name: "Farouk Usman",
      role: "Director of Civic Technology",
      focus: "Open Data, AI & Expenditure Tracking",
      image: "FU",
    },
  ];

  const brandAssets = [
    { name: "Official TTC Logo Pack (Vector, PNG, SVG)", size: "14.2 MB", format: "ZIP" },
    { name: "Coalition Brand Guidelines & Stylebook (2026)", size: "4.8 MB", format: "PDF" },
    { name: "Executive Spokesperson Headshots (High-Res)", size: "28.5 MB", format: "ZIP" },
    { name: "Official B-Roll & Town Hall Media Footage", size: "120.0 MB", format: "MP4" },
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.fullName || !inquiryForm.outlet || !inquiryForm.email) return;

    setModalDetails({
      title: "Inquiry Submitted Successfully",
      message: `Thank you ${inquiryForm.fullName}. Our media relations team will respond to ${inquiryForm.outlet} within 24 hours.`,
      type: "success",
    });
    setIsModalOpen(true);

    setInquiryForm({
      fullName: "",
      outlet: "",
      email: "",
      topic: "Spokesperson Interview Request",
      deadline: "",
      details: "",
    });
  };

  const filteredReleases = pressReleases.filter((pr) => {
    const matchesSearch = pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pr.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pr.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || pr.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        {/* Header Banner */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-md">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-gold-warm/20 text-gold-warm border border-gold-warm/30 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" /> Media & Public Relations Center
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl leading-tight">
              Press Desk & Media Assets
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Official press statements, policy releases, official brand kits, and broadcast interview scheduling for journalists and media organizations.
            </p>
          </div>
        </div>

        {/* Official Press Statements Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-heading font-extrabold text-2xl text-navy">Press Releases & Official Statements</h2>
              <p className="text-xs text-gray-mutedText mt-0.5">Verified public announcements issued by the Third Choice Coalition desk.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-mutedText absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search releases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-2 border border-gray-border rounded-lg text-xs focus:outline-none focus:border-blue-trust w-full sm:w-48"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-border rounded-lg text-xs focus:outline-none focus:border-blue-trust bg-white font-semibold"
              >
                <option value="All">All Categories</option>
                <option value="Press Statement">Press Statement</option>
                <option value="Program Launch">Program Launch</option>
                <option value="Policy Brief">Policy Brief</option>
                <option value="Milestone">Milestone</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredReleases.map((pr) => (
              <div key={pr.id} className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-trust transition">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-blue-trust/10 text-blue-trust font-bold text-[10px] rounded-full uppercase">
                      {pr.category}
                    </span>
                    <span className="text-[11px] text-gray-mutedText font-semibold">{pr.date}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-mutedText">{pr.id}</span>
                  <h3 className="font-heading font-bold text-lg text-navy leading-snug">{pr.title}</h3>
                  <p className="text-xs text-gray-darkText leading-relaxed">{pr.summary}</p>
                </div>

                <div className="pt-3 border-t border-gray-border flex justify-between items-center text-xs">
                  <span className="text-green-transform font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Statement
                  </span>
                  <button
                    onClick={() => {
                      setModalDetails({
                        title: "Statement Downloaded",
                        message: `The PDF document for "${pr.title}" has been saved.`,
                        type: "success",
                      });
                      setIsModalOpen(true);
                    }}
                    className="px-3 py-1.5 bg-navy text-white font-bold rounded hover:bg-opacity-90 transition inline-flex items-center gap-1.5"
                  >
                    <Download className="w-3 h-3" /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Desk & Inquiry Form Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Interview / Desk Inquiry Form */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-gray-border shadow-sm space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy">Press Inquiry & Interview Request</h2>
              <p className="text-xs text-gray-mutedText mt-1">
                For urgent press comments, broadcast appearances, or policy briefings.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Journalist / Correspondent Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={inquiryForm.fullName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Media House / Press Agency</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Channels TV, Premium Times, BBC"
                    value={inquiryForm.outlet}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, outlet: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Official Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="press@outlet.com"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-darkText mb-1">Broadcast / Production Deadline</label>
                  <input
                    type="date"
                    required
                    value={inquiryForm.deadline}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, deadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-darkText mb-1">Inquiry Category</label>
                <select
                  value={inquiryForm.topic}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                >
                  <option>Spokesperson Interview Request</option>
                  <option>Official Comment on Current Policy</option>
                  <option>Fact Check & Governance Data Request</option>
                  <option>Town Hall Press Access Pass</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-darkText mb-1">Interview Questions or Coverage Context</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Outline the core topics or specific spokesperson requested..."
                  value={inquiryForm.details}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-transform text-white font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Dispatch Request to Press Office
              </button>
            </form>
          </div>

          {/* Spokespersons & Brand Assets Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spokespersons */}
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-xl text-navy">Approved Spokespersons</h2>
              <div className="space-y-3">
                {spokespersons.map((sp, idx) => (
                  <div key={idx} className="p-3 border border-gray-border rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-gold-warm font-bold flex items-center justify-center text-xs shrink-0">
                      {sp.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-xs">{sp.name}</h3>
                      <p className="text-[11px] text-gray-mutedText">{sp.role}</p>
                      <p className="text-[10px] text-blue-trust font-semibold mt-0.5">Focus: {sp.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Brand Assets */}
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-xl text-navy">Media & Press Kit Assets</h2>
              <div className="space-y-3">
                {brandAssets.map((asset, idx) => (
                  <div key={idx} className="p-3 border border-gray-border rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-gray-darkText text-xs">{asset.name}</p>
                      <span className="text-[10px] text-gray-mutedText">{asset.format} • {asset.size}</span>
                    </div>
                    <button
                      onClick={() => {
                        setModalDetails({
                          title: "Asset Download Started",
                          message: `Downloading ${asset.name}...`,
                          type: "success",
                        });
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-navy hover:bg-gray-soft rounded-lg transition"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}