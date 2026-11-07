"use client";

import React, { useState } from "react";
import { X, Phone, Calendar, CheckCircle2, Send, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    petType: "Pas",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#183A34", "#E56B5D", "#DCE8DF"],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      petType: "Pas",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-elevated border border-forest/10 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-forest hover:bg-sage-100 transition-colors"
          aria-label="Zatvori"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-forest mb-2">
              Hvala vam! Vaš upit je poslat.
            </h3>
            <p className="text-sm text-charcoal/80 mb-6 max-w-sm mx-auto">
              Naš tim iz ambulante Vet Vana će vas uskoro pozvati na broj <strong>{formData.phone}</strong> radi potvrde termina.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0638522855"
                className="w-full py-3.5 rounded-xl bg-sage-200 text-forest font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-coral" />
                <span>Ili pozovite direktno: 063 852 2855</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl text-sm font-semibold text-charcoal-muted hover:text-forest"
              >
                Zatvori prozor
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest">
                Zakažite pregled
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5">
                Unesite osnovne podatke i javićemo vam se u najkraćem roku radi potvrde termina.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-forest mb-1.5">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  required
                  placeholder="npr. Marko Jovanović"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-forest/15 bg-ivory/50 text-sm font-medium focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-forest mb-1.5">
                  Broj telefona *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="npr. 064 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-forest/15 bg-ivory/50 text-sm font-medium focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                />
              </div>

              {/* Pet Type */}
              <div>
                <label className="block text-xs font-bold text-forest mb-1.5">
                  Vrsta ljubimca
                </label>
                <select
                  value={formData.petType}
                  onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-forest/15 bg-ivory/50 text-sm font-medium focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
                >
                  <option value="Pas">Pas</option>
                  <option value="Mačka">Mačka</option>
                  <option value="Ptica">Ptica (papagaj, kanarinac...)</option>
                  <option value="Egzota">Egzotična životinja / Reptil</option>
                  <option value="Kunić / Glodar">Kunić / Zamorac / Glodar</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-forest mb-1.5">
                  Poruka / Razlog dolaska (opciono)
                </label>
                <textarea
                  rows={3}
                  placeholder="Kratak opis simptoma ili željeni termin..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-forest/15 bg-ivory/50 text-sm font-medium focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-extrabold text-white bg-coral hover:bg-coral-600 shadow-coral text-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>POŠALJI UPIT</span>
              </button>

              {/* Direct call alternative */}
              <div className="text-center pt-2">
                <span className="text-xs text-charcoal-muted">
                  ili pozovite direktno:{" "}
                  <a href="tel:0638522855" className="font-extrabold text-forest hover:text-coral">
                    063 852 2855
                  </a>
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
