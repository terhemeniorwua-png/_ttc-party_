"use client";

import { useState } from "react";
import { UserPlus, HeartHandshake, Calendar, Lightbulb, GraduationCap, Heart } from "lucide-react";
import ActionCard from "./ActionCard";
import SimulatedContributionModal from "./SimulatedContributionModal";

export default function GetInvolvedGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CARDS_DATA = [
    {
      title: "Become a Member",
      description: "Join the TTC community. Register as an official ward delegate or grassroots member to participate in voting and consensus.",
      href: "/join",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
      icon: UserPlus,
      actionText: "Join TTC Community",
      isModal: false,
    },
    {
      title: "Volunteer",
      description: "Support community initiatives. Offer your skills in event planning, digital outreach, health drives, or legal advocacy.",
      href: "/volunteer",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1200",
      icon: HeartHandshake,
      actionText: "Become a Volunteer",
      isModal: false,
    },
    {
      title: "Attend Events",
      description: "Participate in discussions. Join upcoming town halls, policy summits, and youth forums happening across Nigeria.",
      href: "/events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      icon: Calendar,
      actionText: "Explore Events",
      isModal: false,
    },
    {
      title: "Share Ideas",
      description: "Submit policy suggestions. Share grassroots feedback or legislative ideas directly with our reform committees.",
      href: "/ideas",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
      icon: Lightbulb,
      actionText: "Submit Proposal",
      isModal: false,
    },
    {
      title: "Civic Academy",
      description: "Learn about civic participation. Access open courses on constitutional rights, local budgeting, and ward organizing.",
      href: "/academy",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      icon: GraduationCap,
      actionText: "Start Learning",
      isModal: false,
    },
    {
      title: "Support",
      description: "Make a simulated contribution. Help empower grassroots civic infrastructure through sandbox test funding.",
      href: "#",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=1200",
      icon: Heart,
      actionText: "Simulate Support",
      isModal: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS_DATA.map((item, idx) => (
            <ActionCard
              key={idx}
              item={item}
              onOpenModal={() => setIsModalOpen(true)}
            />
          ))}
        </div>

        {/* Modal for Simulated Contribution */}
        <SimulatedContributionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}