"use client";

import React from "react";
import { ProfileCardCarousel } from "@/components/ui/profile-card-testimonial-carousel";
import { Sparkles } from "lucide-react";

interface DoctorTeamProps {
  onOpenBooking?: () => void;
}

export default function DoctorTeam({ onOpenBooking }: DoctorTeamProps) {
  return (
    <section id="tim" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      {/* Subtle decorative background blur */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sage-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-200 text-forest text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-coral" />
            <span>Naš Lekarski Tim</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mb-4">
            Stručnost kojoj bezbrižno poveravate ljubimca
          </h2>

          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Kombinacija hirurške specijalizacije i retke subspecijalističke ekspertize za egzotične životinje pod jednim krovom na Novom Beogradu.
          </p>
        </div>

        {/* Carousel Component */}
        <ProfileCardCarousel onBookConsultation={onOpenBooking} />
      </div>
    </section>
  );
}
