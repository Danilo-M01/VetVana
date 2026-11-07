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
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-forest-900 py-16 sm:py-20 lg:py-24">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl pt-2 sm:pt-4"
        >
          {/* Main Headline - Lifted up and filled */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm"
          >
            Specijalistička hirurgija i{" "}
            <span className="text-coral-400">
              posvećena nega
            </span>{" "}
            za vašeg ljubimca.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-sage-100 leading-relaxed font-normal mb-10 max-w-2xl"
          >
            Veterinarska ambulanta na Novom Beogradu sa vodećom ekspertizom u hirurgiji, dijagnostici i lečenju pasa, mačaka, ptica i egzotičnih životinja.
          </motion.p>

          {/* Direct Action Block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-2xl font-extrabold text-white bg-coral hover:bg-coral-600 shadow-coral text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>ZAKAŽITE PREGLED</span>
              <Sparkles className="w-4 h-4 text-white/80 group-hover:rotate-12 transition-transform" />
            </button>

            <a
              href="tel:0638522855"
              className="px-7 py-4 rounded-2xl font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-base transition-all flex items-center justify-center gap-2.5 group"
            >
              <Phone className="w-4 h-4 text-coral-300 group-hover:scale-110 transition-transform" />
              <span>063 852 2855</span>
            </a>
          </motion.div>

          {/* Discreet Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15"
          >
            {/* Google Rating */}
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ5ZNdxhhvWkcRgqEtLCUVpP4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-white/90 hover:text-white transition-colors group"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white text-base">4.8 ★</span>
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
