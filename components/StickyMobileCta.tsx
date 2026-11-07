"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";

interface StickyMobileCtaProps {
  onOpenBooking: () => void;
}

export default function StickyMobileCta({ onOpenBooking }: StickyMobileCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-forest/10 p-3 shadow-elevated">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href="tel:0638522855"
          className="flex-1 py-3 px-3 rounded-xl bg-sage-200 hover:bg-sage-300 text-forest font-extrabold text-sm flex items-center justify-center gap-2 border border-sage-300 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-coral" />
          <span>Pozovi</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.4] py-3 px-3 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-coral active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Zakaži pregled</span>
        </button>

      </div>
    </div>
  );
}
