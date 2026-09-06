"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import Modal from "@/components/ui/Modal";

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      id: "leader-1",
      name: "Amina Yusuf",
      position: "National Coordinator",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Amina brings over 14 years of expertise in public policy, constitutional reform advocacy, and coalition building. She oversees TTC's strategic direction across Nigeria's 36 states.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "leader-2",
      name: "Daniel Okoro",
      position: "Policy Director",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      bio: "Daniel is a public finance analyst specializing in open budget architectures, anti-corruption frameworks, and legislative policy drafting.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "leader-3",
      name: "Grace Adeyemi",
      position: "Community Development Lead",
      photo: "https://images.unsplash.com/photo-1580894732413-b7ce29a8f4df?auto=format&fit=crop&q=80&w=800",
      bio: "Grace directs grassroots organizing, voter literacy workshops, and civic academy expansion across all 774 Local Government Areas.",
      linkedin: "https://linkedin.com",
    },
    {
      id: "leader-4",
      name: "David Ibrahim",
      position: "Digital Transformation Lead",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      bio: "David leads TTC's open-data platforms, digital voting audit tools, and youth civic tech incubation initiatives.",
      linkedin: "https://linkedin.com",
    },
  ];

  const handleOpenBio = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-body border-y border-gray-border">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedLeader ? `${selectedLeader.name} — ${selectedLeader.position}` : ""}
        message={selectedLeader?.bio || ""}
        type="success"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-blue-trust/10 text-blue-trust border border-blue-trust/20 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <FaShieldAlt className="w-3.5 h-3.5" /> 
            Executive Guidance
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
            Coalition Leadership
          </h2>
          <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
            Guided by dedicated public policy strategists, civic technologists, and community organizers committed to transparent governance.
          </p>
        </div>

        {/* 4-Column Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-gray-soft rounded-2xl border border-gray-border overflow-hidden shadow-sm flex flex-col justify-between hover:border-blue-trust hover:shadow-md transition duration-300 group"
            >
              <div className="space-y-4">
                {/* Leader Photo */}
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-navy/10">
                  <Image
                    src={leader.photo}
                    alt={`${leader.name} - ${leader.position}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Info Container */}
                <div className="px-6 space-y-2">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy group-hover:text-blue-trust transition">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-green-transform uppercase tracking-wider">
                      {leader.position}
                    </p>
                  </div>

                  <p className="text-xs text-gray-darkText leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer: Profile Actions */}
              <div className="p-6 pt-4 mt-4 border-t border-gray-border/60 flex items-center justify-between">
                <button
                  onClick={() => handleOpenBio(leader)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-green-transform transition"
                >
                  View Profile 
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition duration-200" />
                </button>

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-navy/60 hover:text-blue-trust hover:bg-white rounded-lg transition"
                  aria-label={`${leader.name}'s LinkedIn Profile`}
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}