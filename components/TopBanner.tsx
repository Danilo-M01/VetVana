"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Clock, ShieldAlert } from "lucide-react";

export default function TopBanner() {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    // Determine if currently open (e.g. typical weekday afternoon hours 17:00-21:00 or general consultation)
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 is Sunday
    if (day !== 0 && hour >= 17 && hour < 21) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(false);
    }
  }, []);

  return (
    <div className="bg-forest text-ivory text-xs sm:text-sm py-2 px-4 border-b border-forest-400/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Status */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">


          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sage-300" />
            <span>Radno vreme: Pon - Pet: 17:00 - 21:00</span>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                isOpenNow
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-coral/20 text-coral-100 border border-coral/30"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  isOpenNow ? "bg-emerald-400 animate-pulse" : "bg-coral"
                }`}
              />
              {isOpenNow ? "Otvoreno sada" : "Zatvoreno"}
            </span>
          </span>
        </div>

        {/* Right: Emergency direct phone */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0638522855"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-coral transition-colors group"
          >
            <span className="w-6 h-6 rounded-full bg-coral/20 flex items-center justify-center group-hover:bg-coral transition-all">
              <Phone className="w-3 h-3 text-coral group-hover:text-white" />
            </span>
            <span>063 852 2855</span>
          </a>
        </div>
      </div>
    </div>
  );
}
