"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Clock, ArrowUpRight, Filter, Mountain, Star, Eye } from "lucide-react";
import {
  experiences,
  categoryLabels,
  categoryColors,
  Experience,
} from "@/data/experiences";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ExperienceModal from "@/components/ExperienceModal";

type Category = "all" | "natura" | "cultura" | "gastronomia" | "sport";

export default function EsperienzePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const filtered =
    activeCategory === "all"
      ? experiences
      : experiences.filter((e) => e.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Esperienze nei dintorni"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <AnimateOnScroll animation="fade-up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">
              Esperienze
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" duration={1000} delay={300}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Natura, cultura, gastronomia e sport: scoprite tutto ciò che i nostri
              dintorni hanno da offrire
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
              <Filter className="w-4 h-4 text-earth-400" />
              {(
                [
                  ["all", "Tutte"],
                  ["natura", "Natura & Trekking"],
                  ["cultura", "Cultura & Storia"],
                  ["gastronomia", "Gastronomia"],
                  ["sport", "Sport & Avventura"],
                ] as [Category, string][]
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-forest-600 text-white shadow-lg shadow-forest-200 scale-105"
                      : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((exp, i) => (
              <AnimateOnScroll key={exp.id} animation="fade-up" delay={(i % 3) * 100}>
                <div
                  className="card group cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          categoryColors[exp.category]
                        }`}
                      >
                        {categoryLabels[exp.category]}
                      </span>
                    </div>
                    {exp.season && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {exp.season}
                        </span>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/30 transition-all duration-500 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2 
                                      opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 
                                      transition-all duration-500 shadow-lg">
                        <Eye className="w-4 h-4 text-forest-700" />
                        <span className="text-sm font-semibold text-forest-700">Scopri di più</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold font-serif text-forest-800">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-semibold text-earth-700">{exp.rating}</span>
                      </div>
                    </div>
                    <p className="text-earth-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs text-earth-500 pt-4 border-t border-earth-100">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> {exp.distance}
                      </span>
                      {exp.difficulty && (
                        <span className="flex items-center gap-1">
                          <ArrowUpRight className="w-3.5 h-3.5" /> {exp.difficulty}
                        </span>
                      )}
                      {exp.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {exp.duration}
                        </span>
                      )}
                      {exp.price && (
                        <span className="ml-auto text-forest-600 font-semibold">
                          {exp.price.split("·")[0].trim()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-earth-400">
              <Mountain className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nessuna esperienza trovata per questa categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}
