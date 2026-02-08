"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Panorama montano al tramonto",
    category: "Paesaggi",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    alt: "Camera del Bosco",
    category: "Camere",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Valle nebbiosa all'alba",
    category: "Paesaggi",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Suite Panoramica",
    category: "Camere",
  },
  {
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80",
    alt: "E-bike sui sentieri",
    category: "E-Bike",
  },
  {
    src: "https://images.unsplash.com/photo-1682685797857-97de838c192e?w=800&q=80",
    alt: "Cascata nel bosco",
    category: "Paesaggi",
  },
  {
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    alt: "Esterno del B&B",
    category: "Struttura",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Piatto tipico di montagna",
    category: "Gastronomia",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    alt: "Camera delle Stelle",
    category: "Camere",
  },
  {
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    alt: "Lago alpino",
    category: "Paesaggi",
  },
  {
    src: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
    alt: "E-bike pronte al noleggio",
    category: "E-Bike",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Camera del Camino",
    category: "Camere",
  },
  {
    src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    alt: "Vini di montagna",
    category: "Gastronomia",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Trekking in montagna",
    category: "Paesaggi",
  },
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    alt: "Camera Familiare",
    category: "Camere",
  },
  {
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    alt: "Piste da sci invernali",
    category: "Paesaggi",
  },
];

const categories = ["Tutte", "Paesaggi", "Camere", "E-Bike", "Struttura", "Gastronomia"];

export default function GalleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Tutte");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tutte"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
          alt="Galleria fotografica"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <AnimateOnScroll animation="fade-up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">Galleria</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" duration={1000} delay={300}>
            <p className="text-xl text-white/80">
              Immagini dal cuore delle nostre montagne
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-forest-600 text-white shadow-lg shadow-forest-200 scale-105"
                      : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightbox(index)}
              >
                <div className={`relative ${index % 3 === 0 ? "h-80" : index % 3 === 1 ? "h-64" : "h-72"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">{img.alt}</p>
                      <p className="text-white/70 text-sm">{img.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={filtered[lightbox].src.replace("w=800", "w=1600")}
              alt={filtered[lightbox].alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 text-center text-white">
            <p className="text-lg font-medium">{filtered[lightbox].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
