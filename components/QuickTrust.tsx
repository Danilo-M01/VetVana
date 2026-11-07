"use client";

import React from "react";
import { Stethoscope, Feather, Activity, MapPin } from "lucide-react";

export default function QuickTrust() {
  const trustPoints = [
    {
      icon: Stethoscope,
      title: "Hirurgija",
      subtitle: "Specijalizovana veterinarska hirurgija mekih tkiva i operativni zahvati.",
      badge: "dr Ana Vukićević",
    },
    {
      icon: Feather,
      title: "Egzotične životinje",
      subtitle: "Ptice · gmizavci · glodari · kunići · specijalistički pristup i terapija.",
      badge: "dr Ivana Nikić",
    },
    {
      icon: Activity,
      title: "Savremena dijagnostika",
      subtitle: "Laboratorija sa brzim nalazima, ultrazvučni pregledi i monitoring.",
      badge: "Precizna oprema",
    },
    {
      icon: MapPin,
      title: "Novi Beograd",
      subtitle: "Dr Ivana Ribara 115A · jednostavno parkiranje i pristupačna lokacija.",
      badge: "Lokacija",
    },
  ];

  return (
    <section className="bg-white border-y border-forest/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-ivory border border-forest/5 flex flex-col justify-between hover:border-forest/20 hover:shadow-soft transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sage-200 text-forest flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-forest uppercase tracking-wider px-2 py-0.5 rounded bg-sage-300/60">
                      {point.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-forest mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {point.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
