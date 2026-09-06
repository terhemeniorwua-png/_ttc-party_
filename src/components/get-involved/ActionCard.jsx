"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ActionCard({ item, onOpenModal }) {
  const isModalTrigger = item.isModal;

  const CardContent = (
    <div className="bg-white border border-gray-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between group h-full cursor-pointer">
      <div>
        {/* Visual Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-navy/5">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-md rounded-2xl text-navy shadow-md">
            <item.icon className="w-5 h-5 text-green-transform" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="font-heading font-bold text-xl text-navy group-hover:text-green-transform transition">
            {item.title}
          </h3>
          <p className="text-xs text-gray-mutedText leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Action Footer Button */}
      <div className="p-6 pt-0">
        <div className="w-full py-3 bg-navy/5 border border-navy/10 text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-navy group-hover:text-white transition flex items-center justify-center gap-2">
          <span>{item.actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );

  if (isModalTrigger) {
    return (
      <div onClick={onOpenModal} className="h-full">
        {CardContent}
      </div>
    );
  }

  return (
    <Link href={item.href} className="h-full block">
      {CardContent}
    </Link>
  );
}