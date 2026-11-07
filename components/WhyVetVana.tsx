"use client";

import React from "react";
import { Sparkles, Shield, Heart, Zap } from "lucide-react";

export default function WhyVetVana() {
  const points = [
    {
      title: "Dokazana specijalizacija",
      desc: "Ne nudimo samo opštu praksu, naš tim čine lekari specijalisti hirurgije i medicine egzota sa godinama kliničkog iskustva.",
      icon: Shield,
    },
    {
      title: "Savremeni aparati & monitoring",
      desc: "Digitalna ultrazvučna dijagnostika, brza laboratorija i anesteziološki monitoring pružaju maksimalnu bezbednost tokom zahvata.",
      icon: Zap,
    },
    {
      title: "Mirna ordinacija bez stresa",
      desc: "Poseban fokus stavljamo na smanjenje stresa kod ljubimaca od prijema i pregleda do nežnog buđenja nakon anestezije.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-extrabold text-forest uppercase tracking-wider px-3 py-1 rounded-md bg-sage-200">
            Zašto Izabrati Nas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mt-4 mb-4">
            Klinička preciznost u službi zdravlja vašeg ljubimca
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80">
            Spoj znanja, opreme najnovije generacije i empatičnog odnosa prema svakoj životinji.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-ivory border border-forest/10 hover:border-forest/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sage-200 text-forest flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-xl font-extrabold text-forest mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-charcoal/85 leading-relaxed">
                    {pt.desc}
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
