import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Bike,
  Compass,
  Star,
  Wifi,
  Coffee,
  TreePine,
  Users,
  ChevronRight,
} from "lucide-react";
import { rooms } from "@/data/rooms";
import { experiences } from "@/data/experiences";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingButton from "@/components/BookingButton";

const testimonials = [
  {
    name: "Marco e Giulia",
    location: "Milano",
    text: "Un posto magico! La camera del Camino è stata perfetta per il nostro anniversario. Colazione incredibile con prodotti locali.",
    rating: 5,
  },
  {
    name: "Famiglia Rossi",
    location: "Roma",
    text: "I bambini si sono divertiti tantissimo con le e-bike! Lo staff è gentilissimo e la posizione è ideale per esplorare la zona.",
    rating: 5,
  },
  {
    name: "Anna K.",
    location: "Vienna",
    text: "Wunderschön! The perfect mountain retreat. We loved the hiking trails and the panoramic suite was breathtaking.",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredRooms = [rooms[0], rooms[1], rooms[6]];
  const featuredExperiences = [experiences[0], experiences[3], experiences[6]];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Panorama montano"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <AnimateOnScroll animation="fade-down" duration={1000}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mountain className="w-10 h-10 text-forest-300 animate-float" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" duration={1000} delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight drop-shadow-lg">
              La Foresteria
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" duration={1000} delay={400}>
            <p className="text-xl md:text-2xl font-light mb-3 tracking-wide">
              Bed & Breakfast di Montagna
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" duration={1200} delay={600}>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Un angolo di paradiso dove la natura incontra il comfort.
              10 camere uniche, colazione genuina e avventure all&apos;aria aperta.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" duration={800} delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/camere" className="btn-primary text-lg !px-10 !py-4 hover:scale-105">
                Scopri le Camere
              </Link>
              <BookingButton
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-medium
                           hover:bg-white/30 transition-all duration-300 border border-white/30 text-lg hover:scale-105"
              >
                Prenota Ora
              </BookingButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HIGHLIGHTS BAR */}
      <section className="bg-forest-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: TreePine, label: "Immersi nella Natura" },
            { icon: Coffee, label: "Colazione Inclusa" },
            { icon: Wifi, label: "WiFi Gratuito" },
            { icon: Users, label: "Ospitalità Familiare" },
          ].map((item, i) => (
            <AnimateOnScroll key={i} animation="scale-up" delay={i * 100}>
              <div className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-forest-200" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll animation="blur-in" duration={1000}>
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80"
                    alt="La Foresteria B&B esterno"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-forest-600 text-white p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="text-3xl font-bold font-serif">10</p>
                  <p className="text-sm text-forest-100">Camere uniche</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div>
                <p className="text-forest-600 font-medium mb-2 uppercase tracking-wider text-sm">
                  Benvenuti
                </p>
                <h2 className="section-title">
                  Un rifugio tra le montagne
                </h2>
                <p className="text-earth-600 leading-relaxed mb-6">
                  La Foresteria B&B nasce dal desiderio di condividere la bellezza
                  delle nostre montagne. Situati a 1.200 metri di altitudine, nel
                  cuore di una valle incontaminata, offriamo 10 camere curate nei
                  minimi dettagli, ciascuna con il suo carattere unico.
                </p>
                <p className="text-earth-600 leading-relaxed mb-8">
                  Ogni mattina vi accogliamo con una colazione ricca di prodotti
                  locali: marmellate fatte in casa, pane fresco del forno del
                  paese, formaggi di malga e torte della tradizione. Il nostro
                  servizio di noleggio e-bike vi permetterà di esplorare sentieri
                  e valli circostanti con facilità.
                </p>
                <Link href="/camere" className="btn-primary inline-flex items-center gap-2 hover:scale-105">
                  Scopri le Camere <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CAMERE PREVIEW */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-forest-600 font-medium mb-2 uppercase tracking-wider text-sm">
                Le nostre camere
              </p>
              <h2 className="section-title">Dove il comfort incontra la natura</h2>
              <p className="section-subtitle">
                Ogni camera è un mondo a sé, arredata con materiali naturali e pensata
                per il massimo relax.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room, i) => (
              <AnimateOnScroll key={room.id} animation="fade-up" delay={i * 150}>
                <div className="card group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {room.badges.slice(0, 2).map((badge) => (
                        <span
                          key={badge}
                          className="bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-forest-800 mb-2">
                      {room.name}
                    </h3>
                    <p className="text-earth-600 text-sm mb-4 line-clamp-2">
                      {room.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-forest-700 font-bold">
                        da €{room.price}
                        <span className="text-earth-400 font-normal text-sm"> /notte</span>
                      </p>
                      <span className="text-sm text-earth-500">
                        {room.capacity} ospiti · {room.size}m²
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="text-center mt-10">
              <Link href="/camere" className="btn-secondary inline-flex items-center gap-2">
                Vedi tutte le camere <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* E-BIKE BANNER */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=1920&q=80"
          alt="E-bike in montagna"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-right">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Bike className="w-6 h-6 text-white" />
                </div>
                <p className="text-forest-200 font-medium uppercase tracking-wider text-sm">
                  Nuovo servizio
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                Noleggio E-Bike
              </h2>
              <p className="text-lg text-forest-100 mb-8 leading-relaxed">
                Esplorate le nostre montagne in sella a una e-bike di ultima
                generazione. Percorsi per tutti i livelli, dalla passeggiata in
                fondovalle all&apos;enduro trail più tecnico.
              </p>
              <Link
                href="/ebike"
                className="bg-white text-forest-800 px-8 py-4 rounded-lg font-semibold 
                           hover:bg-forest-50 transition-all duration-300 inline-flex items-center gap-2
                           shadow-lg hover:shadow-xl hover:scale-105"
              >
                Scopri le E-Bike <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ESPERIENZE PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-forest-600 font-medium mb-2 uppercase tracking-wider text-sm">
                Cosa fare
              </p>
              <h2 className="section-title">Esperienze nei dintorni</h2>
              <p className="section-subtitle">
                Natura, cultura, gastronomia e sport: la montagna offre emozioni per
                tutti i gusti.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredExperiences.map((exp, i) => (
              <AnimateOnScroll key={exp.id} animation="scale-up" delay={i * 150}>
                <div className="card group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-medium px-3 py-1 rounded-full">
                        {exp.category === "natura"
                          ? "Natura"
                          : exp.category === "gastronomia"
                          ? "Gastronomia"
                          : exp.category === "sport"
                          ? "Sport"
                          : "Cultura"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-serif text-forest-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-earth-600 text-sm mb-3 line-clamp-2">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-earth-500">
                      <span className="flex items-center gap-1">
                        <Compass className="w-3 h-3" /> {exp.distance}
                      </span>
                      {exp.duration && <span>{exp.duration}</span>}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fade-up" delay={500}>
            <div className="text-center mt-10">
              <Link
                href="/esperienze"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Tutte le esperienze <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-forest-600 font-medium mb-2 uppercase tracking-wider text-sm">
                Recensioni
              </p>
              <h2 className="section-title">Cosa dicono i nostri ospiti</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} animation="blur-in" delay={i * 150}>
                <div
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 text-warm-500 fill-warm-500"
                      />
                    ))}
                  </div>
                  <p className="text-earth-700 italic mb-6 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-forest-800">{t.name}</p>
                    <p className="text-sm text-earth-500">{t.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
          alt="Valle al tramonto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <AnimateOnScroll animation="scale-up" duration={1000}>
          <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
              Pronti per la vostra avventura?
            </h2>
            <p className="text-lg text-forest-100 mb-10">
              Prenotate il vostro soggiorno a La Foresteria e scoprite la magia
              della montagna in ogni stagione.
            </p>
            <BookingButton className="btn-primary text-lg !px-12 !py-4 hover:scale-105">
              Prenota il tuo soggiorno
            </BookingButton>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
