"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Stethoscope,
  Phone,
  Calendar,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface DoctorProfile {
  name: string;
  title: string;
  field: string;
  description: string;
  subDescription?: string;
  imageUrl: string;
  badgeText?: string;
  experience?: string;
  specialties?: string[];
  phone?: string;
}

export const defaultVeterinarians: DoctorProfile[] = [
  {
    name: "dr Ana Vukićević",
    title: "dr vet. spec. mekotkivne hirurgije",
    field: "SPECIJALISTIČKA HIRURGIJA",
    badgeText: "Hirurgija & Trauma",
    description:
      "Vodeći hirurg ambulante Vet Vana, sa preko 12 godina posvećenog rada u mekotkivnoj hirurgiji, traumatologiji i preoperativnoj stabilizaciji. Svakom pacijentu pristupa sa maksimalnom hirurškom preciznošću i empatijom.",
    subDescription:
      "Specijalizovana za elektivne zahvate, hitne hirurške intervencije, sterilizacije, uklanjanje tumora i postoperativni multimodalni menadžment bola.",
    imageUrl: "",
    experience: "12+ god. kliničkog iskustva",
    specialties: ["Mekotkivna hirurgija", "Monitoring anestezije", "Traumatologija", "Preventiva"],
  },
];

export interface ProfileCardCarouselProps {
  items?: DoctorProfile[];
  className?: string;
  onBookConsultation?: () => void;
}

export function ProfileCardCarousel({
  items = defaultVeterinarians,
  className,
  onBookConsultation,
}: ProfileCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % items.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + items.length) % items.length
    );

  const currentDoctor = items[currentIndex] || items[0];

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6", className)}>
      {/* Desktop layout */}
      <div className="hidden lg:flex relative items-center justify-center pt-2 pb-2">
        {/* Left Side: Avatar Container */}
        <div className="relative w-[430px] h-[490px] flex-shrink-0 z-0">
          <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-forest/20 via-sage-300 to-coral/30 blur-lg opacity-60" />
          
          <div className="w-full h-full rounded-[32px] overflow-hidden bg-forest/5 border-2 border-white shadow-elevated relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDoctor.imageUrl}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full relative"
              >
                {currentDoctor.imageUrl ? (
                  <Image
                    src={currentDoctor.imageUrl}
                    alt={currentDoctor.name}
                    fill
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                    priority
                    sizes="(max-width: 1024px) 100vw, 430px"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-sage-100">
                    <div className="w-24 h-24 rounded-full bg-sage-200 flex items-center justify-center mb-3">
                      <Stethoscope className="w-12 h-12 text-forest/40" />
                    </div>
                    <span className="text-forest/40 text-sm font-medium">Fotografija uskoro</span>
                  </div>
                )}
                
                {/* Gradient for image depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
                
                {/* Floating field pill on photo top */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold text-forest uppercase tracking-wider shadow-soft border border-white/60">
                    <Sparkles className="w-3.5 h-3.5 text-coral" />
                    {currentDoctor.field}
                  </span>
                </div>

                {/* Experience pill on photo bottom - Compact & clean without overlapping */}
                <div className="absolute bottom-5 left-5 right-[75px] z-10">
                  <div className="px-3.5 py-2 rounded-xl bg-forest-900/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between text-xs font-semibold shadow-lg">
                    <span className="flex items-center gap-1.5 text-sage-200">
                      <ShieldCheck className="w-4 h-4 text-coral flex-shrink-0" />
                      <span>{currentDoctor.experience}</span>
                    </span>
                    <span className="text-coral-300 font-extrabold tracking-wide uppercase text-[11px] ml-2">
                      Vet Vana
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Overlapping Card in Vet Vana Brand Styling */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-forest/10 p-8 lg:p-10 ml-[-50px] z-10 max-w-xl flex-1 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge & Name */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-sage-200 text-forest text-xs font-extrabold uppercase tracking-wide">
                    {currentDoctor.badgeText || "Specijalista"}
                  </span>
                  <span className="text-xs text-charcoal-muted font-bold">
                    Ordinacija Novi Beograd
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-forest tracking-tight mb-1">
                  {currentDoctor.name}
                </h2>

                <p className="text-base font-bold text-coral">
                  {currentDoctor.title}
                </p>
              </div>

              {/* Bio description */}
              <p className="text-charcoal text-base leading-relaxed mb-4">
                {currentDoctor.description}
              </p>

              {currentDoctor.subDescription && (
                <p className="text-charcoal-muted text-sm leading-relaxed mb-5 bg-ivory-50 p-3.5 rounded-xl border border-forest/5">
                  {currentDoctor.subDescription}
                </p>
              )}

              {/* Specialties tags */}
              {currentDoctor.specialties && (
                <div className="mb-7">
                  <span className="text-xs font-bold text-charcoal-muted block mb-2 uppercase tracking-wider">
                    Uža specijalnost i fokus:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentDoctor.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-sage-100 text-forest text-xs font-semibold border border-forest/10 flex items-center gap-1.5"
                      >
                        <Stethoscope className="w-3 h-3 text-coral" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-forest/10">
                <button
                  onClick={onBookConsultation}
                  className="px-6 py-3 rounded-xl bg-coral hover:bg-coral-600 text-white font-extrabold text-sm shadow-coral transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Zakažite kod doktora</span>
                </button>

                <a
                  href="tel:0638522855"
                  className="px-5 py-3 rounded-xl bg-ivory hover:bg-sage-200 border border-forest/15 text-forest font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-coral" />
                  <span>063 852 2855</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile / Tablet layout */}
      <div className="lg:hidden max-w-md mx-auto">
        {/* Avatar */}
        <div className="w-full aspect-[4/3] bg-forest/5 rounded-3xl overflow-hidden mb-6 relative border-2 border-white shadow-elevated">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full relative"
            >
              {currentDoctor.imageUrl ? (
                <Image
                  src={currentDoctor.imageUrl}
                  alt={currentDoctor.name}
                  fill
                  className="w-full h-full object-cover object-center"
                  draggable={false}
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-sage-100">
                  <div className="w-20 h-20 rounded-full bg-sage-200 flex items-center justify-center mb-2">
                    <Stethoscope className="w-10 h-10 text-forest/40" />
                  </div>
                  <span className="text-forest/40 text-xs font-medium">Fotografija uskoro</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 text-[11px] font-extrabold text-forest uppercase tracking-wider shadow-sm">
                  {currentDoctor.field}
                </span>
              </div>

              {/* Experience badge on mobile photo */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="px-3 py-1.5 rounded-xl bg-forest-900/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between text-xs font-semibold shadow-md">
                  <span className="flex items-center gap-1.5 text-sage-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-coral" />
                    <span>{currentDoctor.experience}</span>
                  </span>
                  <span className="text-coral-300 font-extrabold uppercase text-[10px]">
                    Vet Vana
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-elevated border border-forest/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <span className="px-2.5 py-0.5 rounded bg-sage-200 text-forest text-xs font-bold uppercase">
                  {currentDoctor.badgeText || "Specijalista"}
                </span>
                <h3 className="text-2xl font-extrabold text-forest mt-2 mb-1">
                  {currentDoctor.name}
                </h3>
                <p className="text-sm font-bold text-coral">
                  {currentDoctor.title}
                </p>
              </div>

              <p className="text-charcoal text-sm leading-relaxed mb-5">
                {currentDoctor.description}
              </p>

              {currentDoctor.specialties && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {currentDoctor.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-sage-100 text-forest text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-forest/10">
                <button
                  onClick={onBookConsultation}
                  className="w-full py-3 rounded-xl bg-coral text-white font-extrabold text-sm shadow-coral text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Zakažite pregled</span>
                </button>
                <a
                  href="tel:0638522855"
                  className="w-full py-3 rounded-xl bg-sage-200 text-forest font-bold text-sm text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-coral" />
                  <span>063 852 2855</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label="Prethodni veterinar"
          className="w-12 h-12 rounded-full bg-white border border-forest/15 shadow-soft flex items-center justify-center text-forest hover:bg-sage-200 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Doctor name pills / Dots */}
        <div className="flex items-center gap-3">
          {items.map((doc, docIndex) => (
            <button
              key={docIndex}
              onClick={() => setCurrentIndex(docIndex)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2",
                docIndex === currentIndex
                  ? "bg-forest text-white shadow-soft scale-105"
                  : "bg-sage-200 text-forest hover:bg-sage-300"
              )}
              aria-label={`Prikaži ${doc.name}`}
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  docIndex === currentIndex ? "bg-coral" : "bg-forest/40"
                )}
              />
              <span className="hidden sm:inline">{doc.name}</span>
              <span className="sm:hidden">{docIndex + 1}</span>
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Sledeći veterinar"
          className="w-12 h-12 rounded-full bg-white border border-forest/15 shadow-soft flex items-center justify-center text-forest hover:bg-sage-200 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ProfileCardCarousel;
