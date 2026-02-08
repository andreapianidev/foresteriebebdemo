"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Star,
  Clock,
  Compass,
  ArrowUpRight,
  Calendar,
  Euro,
  Lightbulb,
  CheckCircle,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Experience, categoryLabels, categoryColors } from "@/data/experiences";
import { useBooking } from "./BookingProvider";

const categoryIcons: Record<string, string> = {
  natura: "🌿",
  cultura: "🏛️",
  gastronomia: "🍷",
  sport: "⛷️",
};

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    if (experience) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [experience]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!experience) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-8 sm:pt-12 overflow-y-auto animate-modal-overlay"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-modal-content relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center
                     text-white hover:bg-black/60 transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category + Season badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${categoryColors[experience.category]}`}>
              {categoryIcons[experience.category]} {categoryLabels[experience.category]}
            </span>
            {experience.season && (
              <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                <Calendar className="w-3 h-3 inline mr-1" />
                {experience.season}
              </span>
            )}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-2 drop-shadow-lg">
              {experience.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> {experience.distance}
              </span>
              {experience.difficulty && (
                <span className="flex items-center gap-1.5">
                  <ArrowUpRight className="w-4 h-4" /> {experience.difficulty}
                </span>
              )}
              {experience.duration && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {experience.duration}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Rating + Reviews */}
          <div className="flex items-center gap-4 pb-5 border-b border-earth-100">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(experience.rating)
                      ? "text-amber-400 fill-amber-400"
                      : i < experience.rating
                      ? "text-amber-400 fill-amber-400 opacity-50"
                      : "text-gray-200"
                  }`}
                />
              ))}
              <span className="text-lg font-bold text-forest-800 ml-1">{experience.rating}</span>
            </div>
            <span className="flex items-center gap-1.5 text-sm text-earth-500">
              <MessageCircle className="w-4 h-4" />
              {experience.reviews} recensioni
            </span>
            {experience.price && (
              <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-forest-700 bg-forest-50 px-3 py-1.5 rounded-full">
                <Euro className="w-4 h-4" />
                {experience.price}
              </span>
            )}
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-3">
            {experience.price && (
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Euro className="w-4 h-4 text-green-600" />
                  <p className="text-xs text-green-600 font-semibold uppercase">Prezzo</p>
                </div>
                <p className="text-sm text-green-800 font-medium">{experience.price}</p>
              </div>
            )}
            {experience.schedule && (
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-blue-600 font-semibold uppercase">Orari</p>
                </div>
                <p className="text-sm text-blue-800 font-medium">{experience.schedule}</p>
              </div>
            )}
          </div>

          {/* Long Description */}
          <div>
            <h3 className="text-lg font-bold font-serif text-forest-800 mb-3">Descrizione</h3>
            <div className="text-earth-600 text-sm leading-relaxed space-y-3">
              {experience.longDescription.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Includes */}
          {experience.includes && experience.includes.length > 0 && (
            <div className="bg-forest-50 rounded-xl p-5 border border-forest-100">
              <h3 className="text-sm font-bold text-forest-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-forest-600" />
                Cosa include
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {experience.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-forest-700">
                    <div className="w-1.5 h-1.5 bg-forest-400 rounded-full shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {experience.tips.length > 0 && (
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <h3 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Consigli utili
              </h3>
              <ul className="space-y-2.5">
                {experience.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-amber-800">
                    <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Location hint */}
          <div className="flex items-center gap-3 bg-earth-50 rounded-xl p-4 border border-earth-100">
            <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-earth-600" />
            </div>
            <div>
              <p className="text-xs text-earth-500 uppercase font-semibold">Come raggiungerla</p>
              <p className="text-sm text-earth-700">{experience.distance} — Indicazioni disponibili alla reception</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {experience.bookable && (
              <button
                onClick={() => {
                  onClose();
                  openBooking();
                }}
                className="flex-1 bg-forest-600 text-white py-3.5 px-6 rounded-xl font-semibold
                           hover:bg-forest-700 transition-all duration-300 flex items-center justify-center gap-2
                           hover:shadow-lg hover:shadow-forest-200 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                Prenota questa esperienza
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 bg-earth-100 text-earth-700 py-3.5 px-6 rounded-xl font-semibold
                         hover:bg-earth-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
