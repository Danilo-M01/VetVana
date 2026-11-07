"use client";

import React from "react";
import { Phone, AlertCircle, Clock } from "lucide-react";

export default function EmergencyHelp() {
  return (
    <section className="bg-forest text-ivory py-16 px-4 sm:px-6 lg:px-8 border-y border-forest-600">
      <div className="max-w-5xl mx-auto rounded-3xl bg-forest-600/60 border border-forest-400/30 p-8 sm:p-12 text-center flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-2xl bg-coral/20 flex items-center justify-center text-coral mb-6">
          <Phone className="w-6 h-6" />
        </div>

        <span className="text-xs sm:text-sm font-extrabold text-coral uppercase tracking-widest mb-3">
          POTREBNA VAM JE POMOĆ?
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Pozovite nas pre dolaska
        </h2>

        <p className="text-base sm:text-lg text-sage-200 max-w-2xl leading-relaxed mb-8">
          Kako bismo blagovremeno pripremili ambulantu, anesteziološki blok ili opremu za vašeg ljubimca, molimo vas da nas prethodno kontaktirate telefonom.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:0638522855"
            className="px-8 py-4 rounded-2xl bg-coral hover:bg-coral-600 text-white font-extrabold text-lg shadow-coral transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            <span>063 852 2855</span>
          </a>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-sage-300 font-medium px-4 py-2 rounded-xl bg-forest/80 border border-forest-400/20">
            <Clock className="w-4 h-4 text-coral" />
            <span>Dr Ivana Ribara 115A, Novi Beograd</span>
          </div>
        </div>

      </div>
    </section>
  );
}
