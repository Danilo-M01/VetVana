"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Calendar, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Usluge", href: "#usluge" },
    { name: "Kako izgleda pregled?", href: "#kako-izgleda-pregled" },
    { name: "Tim", href: "#tim" },
    { name: "Iskustva", href: "#iskustva" },
    { name: "Lokacija & Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm py-3.5 border-b border-forest/10"
          : "bg-ivory py-5 border-b border-forest/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform group-hover:scale-105">
            <Image
              src="/img/logo.png"
              alt="Vet Vana logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-charcoal/80 hover:text-forest transition-colors relative py-1 hover:text-forest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-coral hover:bg-coral-600 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Zakažite pregled
            </button>
          </div>

          {/* Mobile Direct Header Action */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:0638522855"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-forest bg-sage-200 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-coral" />
              <span>063 852 2855</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-sage-200 transition-colors"
              aria-label="Navigacija"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-forest/10 shadow-elevated px-5 py-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-base font-semibold text-charcoal hover:text-forest border-b border-forest/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-charcoal-muted" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl text-center font-bold text-white bg-coral hover:bg-coral-600 shadow-coral text-sm"
              >
                Zakažite pregled online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
