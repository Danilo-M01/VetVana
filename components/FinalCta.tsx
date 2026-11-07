"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section className="bg-forest py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-coral/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs sm:text-sm font-extrabold text-coral uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/10 border border-white/10 inline-block mb-4">
          Vet Vana · Novi Beograd
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Vaš ljubimac zaslužuje <br className="hidden sm:inline" />
          <span className="text-sage-200">najbolju medicinsku brigu.</span>
        </h2>

        <p className="text-base sm:text-lg text-sage-100/90 max-w-xl mx-auto leading-relaxed mb-10">
          Zakažite termin za preventivni pregled, specijalističku hiruršku konsultaciju ili pregled egzotičnog ljubimca.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-white bg-coral hover:bg-coral-600 shadow-coral text-base transition-all transform hover:-translate-y-0.5"
          >
            Zakažite pregled
          </button>

          <a
            href="tel:0638522855"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-forest bg-sage-200 hover:bg-sage-300 text-base transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-coral" />
            <span>063 852 2855</span>
          </a>
        </div>
      </div>
    </section>
  );
}
