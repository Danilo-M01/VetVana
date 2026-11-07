"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, ArrowRight, ChevronDown } from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function ServicesThreePillars({ onOpenBooking }: ServicesProps) {
  const [activePillar, setActivePillar] = useState<number>(0);
  // Mobile: track open accordion item (null = collapsed)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const pillars = [
    {
      title: "Psi & Mačke",
      badge: "Sveobuhvatna nega",
      shortDesc: "Kompletna zdravstvena zaštita, preventiva i internistička terapija za vaše najvernije prijatelje.",
      image: "/img/kucamaca.jpg",
      subsections: [
        {
          name: "Preventiva & Imunizacija",
          items: [
            "Vakcinacija protiv zaraznih bolesti i besnila",
            "Mikročipovanje i izdavanje zvaničnog pasoša",
            "Zaštita od spoljašnjih i unutrašnjih parazita (buve, krpelji, srčani crv)",
          ],
        },
        {
          name: "Interna medicina",
          items: [
            "Dijagnostika i lečenje bolesti gastrointestinalnog i respiratornog trakta",
            "Dermatološki pregledi, brisevi i terapija kožnih oboljenja",
            "Praćenje i terapija hroničnih i gerijatrijskih stanja",
          ],
        },
        {
          name: "Dijagnostika",
          items: [
            "Brze hematološke i biohemijske analize krvi",
            "Brzi infektivni testovi (FIV/FeLV, Giardia, Parvovirus)",
            "Ultrazvuk abdomena i mekih tkiva",
          ],
        },
        {
          name: "Stomatologija",
          items: [
            "Ultrazvučno skidanje zubnog kamenca i poliranje",
            "Ekstrakcija obolelih zuba i sanacija gingivitisa",
            "Saveti za oralnu higijenu kod kuće",
          ],
        },
      ],
    },
    {
      title: "Egzotične Životinje",
      badge: "Subspecijalista za egzote",
      shortDesc: "Jedinstvena ekspertiza za ptice, reptile, kuniće i male glodare kojima je potreban poseban pristup.",
      image: "/img/egozitka.jpg",
      subsections: [
        {
          name: "Ptice (Papagaji, Kanarinci...)",
          items: [
            "Klinički pregled i provera opšteg zdravstvenog stanja",
            "Dijagnostika i terapija respiratornih i probavnih problema",
            "Korekcija kljuna i kandži, savetovanje o ishrani",
          ],
        },
        {
          name: "Gmizavci & Reptili",
          items: [
            "Pregledi kornjača, bradatih agama, guštera i zmija",
            "Terapija metaboličkih bolesti kostiju i nedostatka UV svetla",
            "Savetovanje o pravilnoj mikroklimi i teraristici",
          ],
        },
        {
          name: "Kunići",
          items: [
            "Specifični tretmani probavnog zastoja (GI stasis)",
            "Brušenje i korekcija molara i sekutića",
            "Vakcinacija i preventivni sistematski pregledi",
          ],
        },
        {
          name: "Glodari & Feretke",
          items: [
            "Zamorci, tvorovi (feretke), hrčci, degui i činčile",
            "Dermatološki pregledi i parazitologija",
            "Hirurške i internističke intervencije prilagođene malim pacijentima",
          ],
        },
      ],
    },
    {
      title: "Hirurgija",
      badge: "dr Ana Vukićević · Spec. hirurgije",
      shortDesc: "Precizni hirurški zahvati uz savremeni monitoring, sterilne uslove i pažljivo vođenu anesteziju.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
      subsections: [
        {
          name: "Operativni zahvati",
          items: [
            "Hirurgija mekih tkiva i abdominalnih organa",
            "Rutinske elektivne operacije (sterilizacije i kastracije)",
            "Uklanjanje neoplazmi (tumora) i rekonstrukcija rana",
          ],
        },
        {
          name: "Preoperativna dijagnostika",
          items: [
            "Detaljna laboratorijska procena pre uvođenja u anesteziju",
            "Individualni protokol anestezije prilagođen starosti i stanju",
            "Kontinuirani monitoring vitalnih funkcija (puls, oksigenacija, pritisak)",
          ],
        },
        {
          name: "Postoperativna nega",
          items: [
            "Umirujući oporavak u toplom i nadziranom prostoru",
            "Multimodalna terapija bola za miran i bezbolan oporavak",
            "Kontrolni pregledi i stalna dostupnost za pitanja vlasnika",
          ],
        },
      ],
    },
  ];

  return (
    <section id="usluge" className="py-14 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-forest tracking-tight mb-3">
            Medicinske oblasti naše ordinacije
          </h2>
          <p className="text-sm sm:text-lg text-charcoal/85 hidden md:block">
            Pređite mišem preko oblasti za uvid u procedure, specijalistički nadzor i pripremu pacijenata.
          </p>
          <p className="text-sm text-charcoal/75 md:hidden">
            Tapnite na oblast da vidite procedure i usluge.
          </p>
        </div>

        {/* ── MOBILE: Accordion layout ── */}
        <div className="md:hidden space-y-3 mb-6">
          {pillars.map((pillar, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-forest bg-forest"
                    : "border-forest/10 bg-white"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        isOpen ? "bg-coral text-white" : "bg-forest/5 text-forest"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                          isOpen ? "text-sage-300" : "text-forest/60"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                      <h3
                        className={`text-base font-extrabold ${
                          isOpen ? "text-white" : "text-forest"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-coral" : "text-forest/40"
                    }`}
                  />
                </button>

                {/* Accordion Body with Smooth Height Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`pillar-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1">
                        <p className="text-sm text-sage-200 mb-4 leading-relaxed">
                          {pillar.shortDesc}
                        </p>

                        {/* Subsections as compact list */}
                        <div className="space-y-3">
                          {pillar.subsections.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3 rounded-xl bg-white/10 border border-white/15"
                            >
                              <h4 className="text-xs font-extrabold text-sage-200 mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
                                {sub.name}
                              </h4>
                              <ul className="space-y-1.5">
                                {sub.items.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="text-xs text-sage-100/85 flex items-start gap-2"
                                  >
                                    <Check className="w-3 h-3 text-coral shrink-0 mt-0.5" />
                                    <span className="leading-snug">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <button
                          onClick={onOpenBooking}
                          className="mt-4 w-full py-3 rounded-xl font-bold text-white bg-coral hover:bg-coral-600 transition-colors text-sm flex items-center justify-center gap-2 shadow-coral"
                        >
                          <Calendar className="w-4 h-4" />
                          Zakažite za {pillar.title}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: Original hover card + expanded panel layout ── */}
        <div className="hidden md:block">
          {/* 3 Direction Selector Cards */}
          <div className="grid grid-cols-3 gap-5 mb-10">
            {pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActivePillar(idx)}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 sm:p-7 rounded-3xl text-left cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isActive
                      ? "bg-forest text-ivory border-forest shadow-elevated -translate-y-1"
                      : "bg-white text-charcoal border-forest/10 hover:border-forest/30 hover:bg-sage-50 hover:shadow-soft"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                          isActive ? "bg-white/15 text-sage-200" : "bg-sage-200 text-forest"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                          isActive ? "bg-coral text-white" : "bg-forest/5 text-forest"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl font-extrabold mb-2 transition-colors ${
                        isActive ? "text-white" : "text-forest"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                        isActive ? "text-sage-200" : "text-charcoal-muted"
                      }`}
                    >
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-bold">
                    <span>{isActive ? "Aktivna oblast" : "Pređite mišem za detalje"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isActive ? "rotate-180 text-coral" : "text-charcoal-muted"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-forest/10 shadow-elevated transition-all duration-300">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left */}
              <div className="col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-coral uppercase tracking-wider">
                    {pillars[activePillar].badge}
                  </span>
                  <span className="text-xs text-charcoal-muted">•</span>
                  <span className="text-xs font-semibold text-forest">
                    {pillars[activePillar].title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest mb-6">
                  {pillars[activePillar].title} — Procedure i nega
                </h3>

                <div className="grid grid-cols-2 gap-5 mb-8">
                  {pillars[activePillar].subsections.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-sage-50 border border-sage-200/80 hover:border-forest/20 transition-colors"
                    >
                      <h4 className="text-sm font-extrabold text-forest mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral inline-block" />
                        {sub.name}
                      </h4>
                      <ul className="space-y-2">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-xs text-charcoal/85 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-forest/10">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3.5 rounded-xl font-bold text-white bg-coral hover:bg-coral-600 shadow-coral text-sm transition-all"
                  >
                    Zakažite pregled za {pillars[activePillar].title}
                  </button>
                  <a
                    href="tel:0638522855"
                    className="px-5 py-3.5 rounded-xl font-bold text-forest bg-sage-200 hover:bg-sage-300 text-sm transition-all flex items-center gap-2"
                  >
                    <span>Pozovite: 063 852 2855</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Photo */}
              <div className="col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-soft border-2 border-forest/5 bg-sage-100">
                  <Image
                    src={pillars[activePillar].image}
                    alt={pillars[activePillar].title}
                    fill
                    className={`object-cover transition-all duration-500 ${activePillar === 1 ? "object-top" : "object-center"}`}
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm text-xs font-bold text-forest flex items-center justify-between">
                    <span>Vet Vana · Novi Beograd</span>
                    <span className="text-coral">063 852 2855</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
