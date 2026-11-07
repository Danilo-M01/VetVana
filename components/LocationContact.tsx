"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, Car, Bus } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="kontakt" className="py-14 md:py-28 bg-white border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="max-w-3xl mb-8 md:mb-14">
          <span className="text-xs sm:text-sm font-extrabold text-forest uppercase tracking-wider px-3 py-1 rounded-md bg-sage-200">
            Lokacija & Dolazak
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mt-4 mb-3">
            Kako do nas u Dr Ivana Ribara
          </h2>
          <p className="text-sm sm:text-lg text-charcoal/80">
            Nalazimo se u mirnom delu Novog Beograda sa jednostavnim prilazom i obezbeđenim javnim parkingom.
          </p>
        </div>

        {/* Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Contact & Working Hours Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address & Direct Phone */}
            <div className="p-7 rounded-3xl bg-ivory border border-forest/10 shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sage-200 text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-forest">Adresa</h3>
                  <p className="text-sm text-charcoal/90 mt-1 font-medium leading-relaxed">
                    Dr Ivana Ribara 115A <br />
                    11070 Novi Beograd, Srbija
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=Dr+Ivana+Ribara+115A+Novi+Beograd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-coral hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Otvori u Google Mapama</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-forest/10">
                <div className="w-12 h-12 rounded-2xl bg-sage-200 text-forest flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-forest">Telefon za kontakt</h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Za preglede, konsultacije i hitne slučajeve:
                  </p>
                  <a
                    href="tel:0638522855"
                    className="text-xl font-black text-forest hover:text-coral transition-colors block mt-1"
                  >
                    063 852 2855
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-7 rounded-3xl bg-forest text-ivory border border-forest-600 shadow-soft">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-coral">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white">Radno vreme</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-forest-400/20">
                  <span className="text-sage-200">Ponedeljak – Petak:</span>
                  <span className="font-extrabold text-white">17:00 – 21:00</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-forest-400/20">
                  <span className="text-sage-200">Subota:</span>
                  <span className="font-extrabold text-white">Po dogovoru</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-sage-200">Nedelja:</span>
                  <span className="font-extrabold text-coral">Zatvoreno</span>
                </div>
              </div>

              <p className="text-[11px] text-sage-300 mt-4 leading-relaxed bg-forest-700/60 p-3 rounded-xl border border-forest-500/20">
                * Zakazani hirurški zahvati i specijalističke konsultacije se mogu realizovati i u prepodnevnim terminima po prethodnom dogovoru.
              </p>
            </div>

            {/* Parking & Transit info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-start gap-3">
                <Car className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-forest">Parking</h4>
                  <p className="text-[11px] text-charcoal/80 mt-0.5">Slobodan javni parking u neposrednoj blizini.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-start gap-3">
                <Bus className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-forest">GSP prevoz</h4>
                  <p className="text-[11px] text-charcoal/80 mt-0.5">Busevi 89, 95, 73, 610, tramvaji 7, 9, 11.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[300px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-elevated border-2 border-forest/10 relative bg-sage-100">
              <iframe
                title="Lokacija Vet Vana Novi Beograd"
                src="https://maps.google.com/maps?q=Dr+Ivana+Ribara+115A,+Novi+Beograd&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
