"use client";

import React from "react";
import { ShieldCheck, Stethoscope, Feather, Zap, Compass, PhoneCall } from "lucide-react";

export default function QuickInfoBar() {
  const highlights = [
    {
      icon: Stethoscope,
      title: "Specijalistička hirurgija",
      desc: "Zahvati mekih tkiva, elektivne operacije i sigurna anestezija.",
      badge: "dr Ana Vukićević",
    },
    {
      icon: Feather,
      title: "Ptice i egzotične životinje",
      desc: "Jedan od retkih subspecijalističkih centara za ptice, reptile i glodare.",
      badge: "dr Ivana Nikić",
    },
    {
      icon: Zap,
      title: "Najsavremenija dijagnostika",
      desc: "Digitalni ultrazvuk, laboratorija sa brzim nalazima i monitoring.",
      badge: "Inovativna oprema",
    },
    {
      icon: Compass,
      title: "Novi Beograd — Dr Ivana Ribara",
      desc: "Laka dostupnost iz svih delova Beograda uz jednostavan pristup.",
      badge: "Br. 115A",
    },
  ];

  return (
    <section className="bg-white border-y border-forest/10 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-ivory border border-forest/5 hover:border-forest/20 hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-200 text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-ivory transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-forest/5 text-forest group-hover:bg-coral/10 group-hover:text-coral transition-colors">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-forest mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.desc}
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
