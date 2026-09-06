"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  FileText, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  MessageSquare 
} from "lucide-react";
import { getStorageItem, setStorageItem, addItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

export default function PolicyDetailPage({ params }) {
const { slug } = use(params);

  const [policy, setPolicy] = useState(null);
  const [votes, setVotes] = useState({ support: 0, oppose: 0 });
  const [userVote, setUserVote] = useState(null); // 'support' | 'oppose' | null
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });


  useEffect(() => {
    // 1. Fetch policy from storage or use spec-accurate default
    const storedPolicies = getStorageItem("ttc_policies");
    const foundPolicy = storedPolicies.find((p) => p.slug === slug) || {
      id: "pol-1",
      slug: slug || "healthcare-transformation",
      category: "Healthcare",
      title: "Universal Primary Healthcare Modernization Framework",
      summary: "A comprehensive framework to modernize 10,000 primary healthcare centers, digitize patient records, and optimize rural medical logistics.",
      updatedAt: "2026-02-15",
      author: "Dr. Grace Adeyemi",
      problemStatement: "Over 60% of primary health facilities lack consistent access to basic medicine, essential equipment, and reliable power infrastructure.",
      ourApproach: "Establish decentralized health maintenance hubs, leverage solar power grids, and introduce transparent supply tracking to prevent medical shortages.",
      proposals: [
        "Upgrade 10,000 community primary health centers across 36 states.",
        "Implement a national digital health card system for transparent records.",
        "Establish local pharmaceutical distribution hubs to eliminate supply chain bottlenecks."
      ],
      expectedOutcomes: "Reduce maternal mortality rates by 35% and expand affordable care access to 25 million underserved citizens."
    };

    setPolicy(foundPolicy);

    // 2. Fetch or initialize voting stats from localStorage
    const allVotes = getStorageItem("ttc_policy_votes");
    const policyVoteData = allVotes[foundPolicy.id] || { support: 482, oppose: 34 };
    setVotes(policyVoteData);

    // 3. Check if current user already voted on this policy
    const userVoteHistory = getStorageItem("ttc_user_policy_votes");
    if (userVoteHistory[foundPolicy.id]) {
      setUserVote(userVoteHistory[foundPolicy.id]);
    }
  }, [slug]);

  const handleVote = (voteType) => {
    if (!policy) return;

    if (userVote === voteType) {
      setModalDetails({
        title: "Vote Already Recorded",
        message: `You have already registered your ${voteType === 'support' ? 'endorsement for' : 'opposition to'} this policy framework.`,
        type: "warning"
      });
      setIsModalOpen(true);
      return;
    }

    // Calculate new tally
    const updatedVotes = { ...votes };
    if (userVote) {
      // Switch vote type
      updatedVotes[userVote] = Math.max(0, updatedVotes[userVote] - 1);
    }
    updatedVotes[voteType] += 1;

    // Save vote metrics to local storage engine
    const allVotes = getStorageItem("ttc_policy_votes");
    allVotes[policy.id] = updatedVotes;
    setStorageItem("ttc_policy_votes", allVotes);

    // Track specific user vote history locally
    const userVoteHistory = getStorageItem("ttc_user_policy_votes");
    userVoteHistory[policy.id] = voteType;
    setStorageItem("ttc_user_policy_votes", userVoteHistory);

    // Update state & show custom modal alert
    setVotes(updatedVotes);
    setUserVote(voteType);

    setModalDetails({
      title: voteType === "support" ? "Policy Endorsed!" : "Feedback Recorded",
      message: voteType === "support" 
        ? "Thank you for supporting this policy initiative. Your vote helps shape TTC's official priorities."
        : "Your critique has been logged into our civic consultation records for future revisions.",
      type: "success"
    });
    setIsModalOpen(true);
  };

  const handleDownloadPDF = () => {
    setModalDetails({
      title: "Document Download Triggered",
      message: `The full policy document (${policy?.title}.pdf) has been prepared for offline reading.`,
      type: "success"
    });
    setIsModalOpen(true);
  };

  if (!policy) return null;

  const totalVotes = votes.support + votes.oppose;
  const supportPercent = totalVotes > 0 ? Math.round((votes.support / totalVotes) * 100) : 0;

  return (
    <div className="min-h-screen bg-white py-12 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/policies"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-mutedText hover:text-navy transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Policy Repository
        </Link>

        {/* Header Hero Section */}
        <div className="bg-navy rounded-2xl p-8 md:p-10 text-white space-y-4 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3 py-1 bg-blue-trust/20 text-gold-warm font-bold text-xs rounded-full uppercase tracking-wider border border-white/10">
              {policy.category}
            </span>
            <span className="text-xs text-gray-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-green-transform" /> Last Updated: {policy.updatedAt}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight">
            {policy.title}
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
            {policy.summary}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2.5 bg-green-transform text-white rounded-lg text-xs font-bold hover:bg-opacity-90 transition flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" /> Download Policy Summary (PDF)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Policy Content Breakdown */}
          <div className="md:col-span-2 space-y-8">
            {/* Problem Statement */}
            <section className="bg-white p-6 rounded-2xl border border-gray-border space-y-3">
              <h2 className="font-heading font-bold text-xl text-navy">The Problem</h2>
              <p className="text-sm text-gray-mutedText leading-relaxed">
                {policy.problemStatement}
              </p>
            </section>

            {/* Strategic Approach */}
            <section className="bg-white p-6 rounded-2xl border border-gray-border space-y-3">
              <h2 className="font-heading font-bold text-xl text-navy">Our Strategic Approach</h2>
              <p className="text-sm text-gray-mutedText leading-relaxed">
                {policy.ourApproach}
              </p>
            </section>

            {/* Key Proposals List */}
            <section className="bg-white p-6 rounded-2xl border border-gray-border space-y-4">
              <h2 className="font-heading font-bold text-xl text-navy">Key Proposals</h2>
              <ul className="space-y-3">
                {policy.proposals?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-darkText">
                    <CheckCircle className="w-5 h-5 text-green-transform shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Expected Impact */}
            <section className="bg-white p-6 rounded-2xl border border-gray-border space-y-3">
              <h2 className="font-heading font-bold text-xl text-navy">Expected Outcomes</h2>
              <p className="text-sm text-gray-mutedText leading-relaxed">
                {policy.expectedOutcomes}
              </p>
            </section>
          </div>

          {/* Right Interactive Sidebar: Voting & Public Support */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-6">
              <h3 className="font-heading font-bold text-lg text-navy">Citizen Endorsement Tally</h3>

              {/* Real-time Percentage Bar */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-navy mb-2">
                  <span>Citizen Approval</span>
                  <span className="text-green-transform">{supportPercent}% Support</span>
                </div>
                <div className="w-full bg-gray-soft h-3 rounded-full overflow-hidden border border-gray-border">
                  <div
                    className="bg-green-transform h-full transition-all duration-500"
                    style={{ width: `${supportPercent}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-gray-mutedText mt-2 text-center">
                  Based on {totalVotes.toLocaleString()} civic consultations
                </p>
              </div>

              {/* Endorsement Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => handleVote("support")}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                    userVote === "support"
                      ? "bg-green-transform text-white shadow-md"
                      : "bg-green-transform/10 text-green-transform hover:bg-green-transform hover:text-white border border-green-transform/20"
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  {userVote === "support" ? "Endorsed Policy" : "Support This Proposal"}
                </button>

                <button
                  onClick={() => handleVote("oppose")}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                    userVote === "oppose"
                      ? "bg-navy text-white shadow-md"
                      : "bg-gray-soft text-gray-darkText hover:bg-navy hover:text-white border border-gray-border"
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  {userVote === "oppose" ? "Recorded Disapproval" : "Suggest Revisions"}
                </button>
              </div>

              {/* Policy Author Metadata */}
              <div className="pt-4 border-t border-gray-border flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-trust shrink-0" />
                <div>
                  <p className="text-xs font-bold text-navy">{policy.author}</p>
                  <p className="text-[10px] text-gray-mutedText">TTC Policy Research Directorate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}