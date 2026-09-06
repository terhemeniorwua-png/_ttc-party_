"use client";

import { Linkedin, Twitter, Mail } from "lucide-react";

export default function FullLeadershipSection() {
  const leaders = [
    {
      name: "Dr. Amina Abubakar",
      role: "National Convener & Policy Director",
      bio: "15+ years leading public sector governance reform and civic education initiatives across West Africa.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Olawale Adeleke",
      role: "Director of Grassroots Mobilization",
      bio: "Grassroots organizer who has managed decentralized voter literacy drives in over 180 LGAs.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Chidimma Nnamdi",
      role: "Head of Legal & Institutional Compliance",
      bio: "Constitutional law specialist dedicated to public interest litigation and electoral reform frameworks.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Tunde Bakare",
      role: "Director of Civic Technology",
      bio: "Former software architect developing open-source budget tracking and election monitoring platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section className="py-20 bg-gray-soft/30 border-t border-gray-border px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-extrabold text-3xl text-navy">
            Leadership & Steering Committee
          </h2>
          <p className="text-gray-mutedText text-sm sm:text-base">
            Guided by experienced professionals committed to institutional integrity and public service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition space-y-4 pb-6"
            >
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>

              <div className="px-5 space-y-2">
                <h3 className="font-heading font-bold text-lg text-navy">
                  {leader.name}
                </h3>
                <p className="text-xs font-bold text-green-transform uppercase tracking-wide">
                  {leader.role}
                </p>
                <p className="text-xs text-gray-mutedText leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}