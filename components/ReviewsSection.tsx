"use client";

import React from "react";
import { Star, ArrowUpRight, Quote } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Marija S.",
      patient: "Papagaj Žako",
      text: "Dr Ivana je neverovatan stručnjak za ptice! Spasila je našeg papagaja kada su nam na drugim mestima rekli da nema pomoći. Stručnost, posvećenost i divan odnos prema životinjama.",
      date: "Google recenzija",
      rating: 5,
    },
    {
      name: "Nikola Petrović",
      patient: "Pas Leo (Zlatni Retriver)",
      text: "Dr Ana je radila komplikovanu operaciju mekih tkiva mom psu. Sve je prošlo besprekorno, oporavak je bio brz i bez bolova. Svaka preporuka za hirurgiju i celokupnu ambulantu Vet Vana!",
      date: "Google recenzija",
      rating: 5,
    },
    {
      name: "Jelena Marković",
      patient: "Kunić Beli",
      text: "Najbolja ambulanta na Novom Beogradu. Izuzetno čisto, oprema je nova i moderna, a doktorke detaljno objasne svaki korak. Osećate da je vaš ljubimac u pravim rukama.",
      date: "Google recenzija",
      rating: 5,
    },
    {
      name: "Dejan V.",
      patient: "Mačka Luna",
      text: "Vrhunski pristup i brza dijagnostika. Došli smo uplašeni, a otišli smireni sa tačnim planom lečenja. Divni ljudi i vrhunski lekari.",
      date: "Google recenzija",
      rating: 5,
    },
  ];

  return (
    <section id="iskustva" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-extrabold text-forest uppercase tracking-wider px-3 py-1 rounded-md bg-sage-200">
              Iskustva Vlasnika
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mt-4 mb-3">
              Njihove reči govore više
            </h2>
            <p className="text-base text-charcoal/80">
              Poverenje vlasnika i dobrobit njihovih ljubimaca su naše najveće merilo uspeha.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-forest/10 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-forest">4.8</span>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-charcoal-muted font-medium mt-0.5">
                  24+ ocena na Google-u
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=ana+vet+novi+beograd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-forest bg-sage-200 hover:bg-sage-300 transition-colors"
            >
              <span>Pogledajte sve recenzije</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-forest/10 shadow-soft flex flex-col justify-between hover:border-forest/30 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-forest/20" />
                </div>

                <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-forest/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-forest">{rev.name}</h4>
                  <p className="text-xs font-medium text-coral">{rev.patient}</p>
                </div>
                <span className="text-[10px] text-charcoal-muted font-medium">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
