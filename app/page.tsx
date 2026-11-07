"use client";

import React, { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesThreePillars from "@/components/ServicesThreePillars";
import HowItWorks from "@/components/HowItWorks";
import DoctorTeam from "@/components/DoctorTeam";
import WhyVetVana from "@/components/WhyVetVana";
import ReviewsSection from "@/components/ReviewsSection";
import EmergencyHelp from "@/components/EmergencyHelp";
import LocationContact from "@/components/LocationContact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import BookingModal from "@/components/BookingModal";
import JsonLdSchema from "@/components/JsonLdSchema";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-coral selection:text-white">
      {/* Google Local Business / VeterinaryCare Schema */}
      <JsonLdSchema />

      {/* Top Banner with live working status and direct phone */}
      <TopBanner />

      {/* Sticky Clean Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Section: Answer 3 core questions with high-impact visual */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3 Core Service Pillars (Psi/Mačke, Egzoti, Hirurgija) */}
      <ServicesThreePillars onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Psychological Key Section: Kako izgleda vaš pregled? (01 -> 04) */}
      <HowItWorks />

      {/* The Specialists: dr Ana Vukićević & dr Ivana Nikić */}
      <DoctorTeam onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Why Vet Vana: Clinical precision & calm care */}
      <WhyVetVana />

      {/* Authentic Google Reviews (4.8 ★) */}
      <ReviewsSection />

      {/* Emergency & Pre-arrival call assistance */}
      <EmergencyHelp />

      {/* Location, Google Map & Working Hours */}
      <LocationContact />

      {/* Final Warm CTA */}
      <FinalCta onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Footer in Deep Forest #183A34 */}
      <Footer />

      {/* Sticky Mobile Bottom Dial & Book Bar */}
      <StickyMobileCta onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Simple 4-field Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
