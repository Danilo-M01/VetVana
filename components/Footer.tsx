"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-900 text-sage-200 pt-16 pb-24 md:pb-16 border-t border-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-700/60">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-forest-600 border border-forest-500 flex items-center justify-center text-ivory font-extrabold text-xl">
                <span>V</span>
                <span className="text-coral -ml-0.5">V</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Vet Vana
                </span>
                <p className="text-[11px] text-sage-300 font-medium">
                  Veterinarska ambulanta · Novi Beograd
                </p>
              </div>
            </Link>

            <p className="text-sm text-sage-200/90 leading-relaxed mb-6 max-w-sm">
              Precizna medicina i topla briga. Specijalizovana hirurgija i lečenje ptica, glodara i egzotičnih životinja na Novom Beogradu.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/vet.vana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vet Vana Instagram"
                className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600/60 flex items-center justify-center text-sage-200 hover:text-white hover:bg-coral transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/p/VetVana-61587336683712/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vet Vana Facebook"
                className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-600/60 flex items-center justify-center text-sage-200 hover:text-white hover:bg-coral transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Tim & Usluge */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Lekari & Specijalnosti
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="text-white font-bold">dr Ana Vukićević</li>
              <li className="text-sage-300 text-xs pl-2 border-l border-coral mb-3">
                dr vet. spec. hirurgije
              </li>


            </ul>
          </div>

          {/* Col 3: Kontakt & Lokacija */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Kontakt & Radno Vreme
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>Dr Ivana Ribara 115A, 11070 Novi Beograd</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral shrink-0" />
                <a href="tel:0638522855" className="font-bold text-white hover:text-coral transition-colors">
                  063 852 2855
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sage-300 shrink-0 mt-0.5" />
                <div>
                  <p>Pon – Pet: 17:00 – 21:00</p>
                  <p className="text-xs text-sage-300">Subota: Po dogovoru</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <div>
            <p>© {new Date().getFullYear()} Vet Vana (Preduzetnik VET VANA). Sva prava zadržana.</p>
            <p className="text-[11px] text-sage-500 mt-0.5">Dr Ivana Ribara 115A, Novi Beograd, Srbija</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-800 border border-forest-700 text-sage-200 hover:text-white transition-colors"
          >
            <span>Nazad na vrh</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
