"use client";

import React from "react";
import HowItWorksComponent from "@/components/ui/how-it-works";
import { Sparkles, HeartHandshake } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="kako-izgleda-pregled" className="py-20 md:py-28 bg-white border-y border-forest/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-200 text-forest text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-4 h-4 text-coral" />
            <span>Protokol Poverenja & Mirnog Pregleda</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mb-4">
            Kako izgleda vaš pregled u Vet Vana?
          </h2>

          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Znamo koliko brinete kada dovodite ljubimca. Zato je svaki korak transparentan, miran i prilagođen dobrobiti i sigurnosti životinje.
          </p>
        </div>

        {/* Interactive Steps Component with Pin Cards & Connected Path */}
        <HowItWorksComponent />

      </div>
    </section>
  );
}
