"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bike,
  Clock,
  Mountain,
  ArrowUpRight,
  Shield,
  Map,
  Zap,
  ChevronRight,
  ChevronDown,
  MapPin,
  Compass,
  Star,
} from "lucide-react";
import { ebikes, trails } from "@/data/ebikes";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingButton from "@/components/BookingButton";
import TrailMap from "@/components/TrailMap";

const difficultyColor: Record<string, string> = {
  Facile: "bg-green-100 text-green-700 border-green-200",
  Media: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Difficile: "bg-red-100 text-red-700 border-red-200",
};

const difficultyBar: Record<string, string> = {
  Facile: "w-1/3 bg-green-500",
  Media: "w-2/3 bg-yellow-500",
  Difficile: "w-full bg-red-500",
};

export default function EbikePage() {
  const [expandedTrail, setExpandedTrail] = useState<number | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>("Tutti");

  const filteredTrails =
    filterDifficulty === "Tutti"
      ? trails
      : trails.filter((t) => t.difficulty === filterDifficulty);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=1920&q=80"
          alt="Noleggio E-Bike"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <Bike className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">
            Noleggio E-Bike
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Esplorate le montagne con le nostre e-bike di ultima generazione
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Bike className="w-4 h-4" /> 3 modelli disponibili
            </span>
            <span className="flex items-center gap-2">
              <Map className="w-4 h-4" /> 6 percorsi mappati
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" /> Da €25/mezza giornata
            </span>
          </div>
        </div>
      </section>

      {/* INTRO + VANTAGGI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="section-title">Pedalare in montagna, senza fatica</h2>
              <p className="section-subtitle">
                Le nostre e-bike vi permettono di raggiungere malghe, passi e panorami
                mozzafiato senza essere atleti professionisti.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Zap, title: "Motore Potente", desc: "Batterie da 625Wh per autonomia fino a 120km" },
              { icon: Shield, title: "Casco Incluso", desc: "Casco, lucchetto e kit riparazione inclusi" },
              { icon: Map, title: "Mappe & GPS", desc: "Percorsi consigliati con tracce GPX scaricabili" },
              { icon: Mountain, title: "Tutti i Livelli", desc: "Da principianti a esperti, c'è un percorso per tutti" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6 rounded-xl bg-forest-50 hover:bg-forest-100 
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mx-auto mb-4
                                  group-hover:bg-forest-200 transition-colors">
                    <item.icon className="w-7 h-7 text-forest-600" />
                  </div>
                  <h3 className="font-semibold text-forest-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-earth-600">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BIKES CATALOG */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="section-title">Le nostre E-Bike</h2>
              <p className="section-subtitle">Tre modelli per ogni esigenza</p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {ebikes.map((bike, i) => (
              <AnimateOnScroll key={bike.id} animation="fade-up" delay={i * 150}>
                <div className="card group hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={bike.image}
                      alt={bike.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                        {bike.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-forest-800 mb-2">
                      {bike.name}
                    </h3>
                    <p className="text-earth-600 text-sm mb-4">{bike.description}</p>
                    
                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {bike.specs.map((spec, j) => (
                        <span key={j} className="text-xs bg-earth-50 text-earth-600 px-2 py-1.5 rounded-md text-center">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-4 border-t border-earth-100">
                      <div>
                        <p className="text-xs text-earth-400 uppercase">Mezza giornata</p>
                        <p className="text-2xl font-bold text-forest-700">€{bike.priceHalf}</p>
                      </div>
                      <div>
                        <p className="text-xs text-earth-400 uppercase">Giornata intera</p>
                        <p className="text-2xl font-bold text-forest-700">€{bike.priceFull}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRAILS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-forest-600 font-medium mb-2 uppercase tracking-wider text-sm">Esplora i percorsi</p>
              <h2 className="section-title">Percorsi Consigliati</h2>
              <p className="section-subtitle">
                I nostri itinerari preferiti, testati e approvati dal team La Foresteria.
                Clicca su un percorso per scoprire tutti i dettagli.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Difficulty Filter */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {["Tutti", "Facile", "Media", "Difficile"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterDifficulty(level)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filterDifficulty === level
                      ? "bg-forest-600 text-white shadow-lg shadow-forest-200 scale-105"
                      : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Trail Cards */}
          <div className="space-y-4">
            {filteredTrails.map((trail, i) => (
              <AnimateOnScroll key={trail.id} animation="fade-up" delay={i * 80}>
                <div
                  className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
                    expandedTrail === trail.id
                      ? "border-forest-300 shadow-xl shadow-forest-100/50"
                      : "border-earth-100 hover:border-earth-200 hover:shadow-md"
                  }`}
                >
                  {/* Trail Header - Always visible */}
                  <button
                    onClick={() =>
                      setExpandedTrail(expandedTrail === trail.id ? null : trail.id)
                    }
                    className="w-full text-left p-6 flex items-center gap-4 group"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={trail.image}
                        alt={trail.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-lg font-bold font-serif text-forest-800">
                          {trail.name}
                        </h3>
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full border ${
                            difficultyColor[trail.difficulty]
                          }`}
                        >
                          {trail.difficulty}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-earth-500">
                        <span className="flex items-center gap-1">
                          <ArrowUpRight className="w-3.5 h-3.5" /> {trail.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mountain className="w-3.5 h-3.5" /> {trail.elevation}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {trail.duration}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-earth-400 shrink-0 transition-transform duration-300 ${
                        expandedTrail === trail.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedTrail === trail.id ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      {/* Top row: Image + Quick info */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Trail Image */}
                        <div className="relative h-56 rounded-xl overflow-hidden">
                          <Image
                            src={trail.image}
                            alt={trail.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-white text-sm">
                              <Compass className="w-4 h-4" />
                              <span>{trail.terrain}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Details */}
                        <div>
                          {/* Difficulty Bar */}
                          <div className="mb-4">
                            <p className="text-xs text-earth-500 uppercase mb-2 font-medium">Difficoltà</p>
                            <div className="w-full h-2 bg-earth-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  difficultyBar[trail.difficulty]
                                }`}
                              />
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="mb-4">
                            <p className="text-xs text-earth-500 uppercase mb-2 font-medium">Punti di interesse</p>
                            <div className="flex flex-wrap gap-2">
                              {trail.highlights.map((h, j) => (
                                <span
                                  key={j}
                                  className="flex items-center gap-1.5 text-xs bg-forest-50 text-forest-700 px-3 py-1.5 rounded-full"
                                >
                                  <MapPin className="w-3 h-3" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Recommended bike */}
                          <div className="bg-warm-50 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-warm-100 rounded-lg flex items-center justify-center shrink-0">
                              <Star className="w-5 h-5 text-earth-600" />
                            </div>
                            <div>
                              <p className="text-xs text-earth-500">Bici consigliata</p>
                              <p className="text-sm font-semibold text-forest-800">{trail.recommended}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Long Description */}
                      <div className="mb-6 bg-earth-50/50 rounded-xl p-5 border border-earth-100">
                        <h4 className="text-sm font-bold text-forest-800 mb-3 flex items-center gap-2">
                          <Compass className="w-4 h-4 text-forest-600" />
                          Descrizione del percorso
                        </h4>
                        <div className="text-sm text-earth-600 leading-relaxed space-y-3">
                          {trail.longDescription.split("\n\n").map((paragraph, pi) => (
                            <p key={pi}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {/* Trail Map */}
                      <div>
                        <h4 className="text-sm font-bold text-forest-800 mb-3 flex items-center gap-2">
                          <Map className="w-4 h-4 text-forest-600" />
                          Mappa del percorso
                        </h4>
                        <TrailMap trail={trail} isExpanded={expandedTrail === trail.id} />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filteredTrails.length === 0 && (
            <div className="text-center py-12 text-earth-400">
              <Mountain className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nessun percorso trovato per questa difficoltà.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <AnimateOnScroll animation="zoom-in">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <Bike className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Pronti a pedalare?
            </h2>
            <p className="text-forest-100 mb-8 text-lg">
              Prenotate la vostra e-bike direttamente alla reception o contattateci in anticipo
              per assicurarvi la disponibilità.
            </p>
            <BookingButton className="bg-white text-forest-800 px-8 py-4 rounded-lg font-semibold 
                       hover:bg-forest-50 transition-all duration-300 inline-flex items-center gap-2
                       hover:scale-105 hover:shadow-xl">
              Prenota la tua E-Bike <ChevronRight className="w-5 h-5" />
            </BookingButton>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
