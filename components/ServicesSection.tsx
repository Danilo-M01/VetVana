"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Stethoscope,
  Feather,
  Activity,
  HeartPulse,
  Sparkles,
  Check,
  Calendar,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState("hirurgija");

  const categories = [
    {
      id: "hirurgija",
      name: "Specijalistička hirurgija",
      icon: Stethoscope,
      doctor: "dr Ana Vukićević",
      desc: "Visoko precizni operativni zahvati uz savremeni monitoring i individualnu anesteziološku podršku.",
      items: [
        "Hirurgija mekih tkiva i abdomena",
        "Rutinske sterilizacije i kastracije",
        "Uklanjanje neoplazmi i biopsije",
        "Sanacija trauma, rana i hitna hirurgija",
        "Savremeni monitoring vitalnih funkcija i gasna anestezija",
        "Multimodalna terapija bola tokom oporavka",
      ],
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      accentTag: "Hirurški protokol najvišeg standarda",
    },
    {
      id: "egzote",
      name: "Egzotične životinje & Ptice",
      icon: Feather,
      doctor: "dr Ivana Nikić",
      desc: "Specijalizovana nega, dijagnostika i lečenje ptica, glodara, gmizavaca i malih egzotičnih sisara.",
      items: [
        "Klinički pregled i terapija svih vrsta ptica (papagaji, kanarinci...)",
        "Nega i terapija gmizavaca (kornjače, agame, zmije)",
        "Kunići, zamorci, feretke (tvorovi) i glodari",
        "Korekcija i brušenje zuba kod glodara i kunića",
        "Stručno savetovanje o pravilnoj ishrani i teraristici",
        "Preventivni skrining i terapija specifičnih parazitoza",
      ],
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      accentTag: "Subspecijalistička ekspertiza",
    },
    {
      id: "dijagnostika",
      name: "Laboratorija & Ultrazvuk",
      icon: Activity,
      doctor: "Vet Vana Tim",
      desc: "Pravovremena i precizna laboratorijska i ultrazvučna dijagnostika za brzu odluku o terapiji.",
      items: [
        "Hematološke i biohemijske analize krvi u kratkom roku",
        "Brzi testovi (FIV/FeLV, Giardia, Parvo, Srčani crv)",
        "Ultrazvučni pregled abdominalnih organa",
        "Citološki i dermatološki mikroskopski pregledi",
        "Analiza urina i sedimenta",
        "Redovno praćenje hroničnih bolesnika",
      ],
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
      accentTag: "Brzi i tačni rezultati",
    },
    {
      id: "preventiva",
      name: "Preventiva & Stomatologija",
      icon: HeartPulse,
      doctor: "Vet Vana Tim",
      desc: "Kompletna zaštita zdravlja vašeg ljubimca kroz vakcinaciju, čipovanje i stomatološke tretmane.",
      items: [
        "Vakcinacija protiv zaraznih bolesti i besnila",
        "Mikročipovanje i izdavanje pasoša za putovanja",
        "Ultrazvučno uklanjanje zubnog kamenca i poliranje",
        "Zaštita od spoljašnjih i unutrašnjih parazita",
        "Nutritivno savetovanje i plan ishrane",
        "Sistematski pregledi mladih i gerijatrijskih pacijenata",
      ],
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      accentTag: "Dug i zdrav život ljubimca",
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="usluge" className="py-20 md:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-200 text-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-coral" />
            <span>Naše Usluge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-forest tracking-tight">
            Sveobuhvatna nega uz vrhunsku specijalizaciju
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80">
            Kombinujemo hiruršku preciznost, specifična znanja za egzote i humanu brigu. Svaka intervencija se planira individualno za vašeg ljubimca.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-forest text-ivory shadow-soft scale-[1.02]"
                    : "bg-white text-charcoal hover:bg-sage-100 hover:text-forest border border-forest/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-coral" : "text-forest"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Card Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest/10 shadow-elevated transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Detail Description */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-coral/10 text-coral font-bold text-xs">
                    {currentCategory.accentTag}
                  </span>
                  <span className="text-xs font-semibold text-charcoal-muted flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-forest" />
                    Vodeći lekar: <strong className="text-forest">{currentCategory.doctor}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest mb-4">
                  {currentCategory.name}
                </h3>

                <p className="text-charcoal/85 text-base leading-relaxed mb-6">
                  {currentCategory.desc}
                </p>

                {/* List of services in this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-sage-50 border border-sage-200/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-forest text-ivory flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-coral" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-charcoal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-forest/10">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-coral hover:bg-coral-600 text-white font-bold text-sm shadow-coral transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Zakažite ovu uslugu</span>
                </button>

                <a
                  href="tel:0638522855"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-sage-200 hover:bg-sage-300 text-forest font-bold text-sm transition-all"
                >
                  <span>Konsultacija: 063 852 2855</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] shadow-soft border-2 border-forest/5">
                <Image
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  fill
                  className="object-cover object-center transform transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm text-xs font-semibold text-forest flex items-center justify-between">
                  <span>Dr Ivana Ribara 115A, Novi Beograd</span>
                  <span className="text-coral font-bold">Vet Vana</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
