"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Phone, ArrowUpRight, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Stagger animation variants for super smooth 60fps entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-stretch overflow-hidden bg-forest-900 py-0 sm:py-24 lg:py-24">
      {/* Background Dog Image with Smooth Ambient Zoom */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="https://i.pinimg.com/1200x/f1/d6/ed/f1d6edf989bced3464d2fbf57eecc3ac.jpg"
          alt="Veterinarska ambulanta Vet Vana Novi Beograd"
          fill
          priority
          className="object-cover object-right md:object-center filter brightness-[0.95]"
          sizes="100vw"
        />

        {/* Multi-layered cinematic gradient overlays for pristine typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/85 to-forest-900/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
      </motion.div>

      {/* Decorative ambient glow orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-coral/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sage-300/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full sm:flex sm:items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full flex flex-col sm:block min-h-[calc(560px-64px)] sm:min-h-0 pt-16 pb-10 sm:pt-4 sm:pb-0"
        >
          {/* Main Headline - top on mobile, normal flow on sm+ */}
          <motion.h1
            variants={itemVariants}
            className="text-[26px] min-[360px]:text-[28px] min-[390px]:text-[30px] sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.28] sm:leading-[1.2] mb-5 sm:mb-8 lg:mb-5 drop-shadow-sm"
          >
            <span className="block mb-1 sm:mb-1.5 lg:mb-0">Specijalistička hirurgija i</span>
            <span className="block">
              <span className="text-coral-400">posvećena nega</span> za vašeg ljubimca.
            </span>
          </motion.h1>

          {/* Spacer top — smaller to push subtitle slightly up */}
          <div className="flex-[0.6] sm:hidden" />

          {/* Supporting Text — centered between headline and buttons on mobile */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-lg text-sage-100/90 leading-relaxed font-normal mb-0 sm:mb-11 lg:mb-8 max-w-xl"
          >
            Veterinarska ambulanta na Novom Beogradu sa vodećom ekspertizom u hirurgiji, dijagnostici i lečenju pasa, mačaka, ptica i egzotičnih životinja.
          </motion.p>

          {/* Spacer bottom — half space below subtitle */}
          <div className="flex-1 sm:hidden" />

          {/* Direct Action Block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center gap-3 sm:gap-4 mb-7 sm:mb-14 lg:mb-9 w-full sm:w-auto max-w-md sm:max-w-none"
          >
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-initial px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl font-extrabold text-white bg-coral hover:bg-coral-600 shadow-coral text-xs sm:text-sm md:text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer"
            >
              <span>ZAKAŽITE PREGLED</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 group-hover:rotate-12 transition-transform" />
            </button>

            <a
              href="tel:0638522855"
              className="flex-initial px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm md:text-base transition-all flex items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral-300 group-hover:scale-110 transition-transform" />
              <span>063 852 2855</span>
            </a>
          </motion.div>

          {/* Trust Indicators / Google reviews — bottom on mobile */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 sm:pt-9 lg:pt-6 border-t border-white/15"
          >
            {/* Google Rating */}
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ5ZNdxhhvWkcRgqEtLCUVpP4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base font-semibold text-white/90 hover:text-white transition-colors group"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white text-xs sm:text-base">4.8 ★</span>
              <span className="text-white/40">·</span>
              <span className="underline decoration-white/30 group-hover:decoration-white">
                24+ Google recenzije
              </span>
              <ArrowUpRight className="w-4 h-4 text-sage-200 group-hover:text-white" />
            </a>

            {/* Quick Proof Badges */}
            <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-sage-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-coral-400" />
                <span>Bez stresa za ljubimca</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-coral-400" />
                <span>Hirurgija & Egzotični pacijenti</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
