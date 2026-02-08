import Image from "next/image";
import { Users, Maximize, Wifi, Bath, Sun, Coffee } from "lucide-react";
import { rooms } from "@/data/rooms";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingButton from "@/components/BookingButton";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  "Bagno privato": <Bath className="w-4 h-4" />,
  Balcone: <Sun className="w-4 h-4" />,
  "Macchina caffè": <Coffee className="w-4 h-4" />,
};

export default function CamerePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
          alt="Le nostre camere"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <AnimateOnScroll animation="fade-up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">Le Nostre Camere</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" duration={1000} delay={300}>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              10 camere uniche, ognuna con il suo carattere. Tutte con vista sulla natura.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {rooms.map((room, index) => (
              <AnimateOnScroll key={room.id} animation="fade-up" delay={(index % 2) * 120}>
                <div
                  className={`card flex flex-col group ${
                    index % 3 === 0 ? "md:col-span-2 md:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 3 === 0
                        ? "h-72 md:h-auto md:w-1/2"
                        : "h-64"
                    }`}
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {room.badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`p-6 lg:p-8 flex flex-col justify-between ${
                    index % 3 === 0 ? "md:w-1/2" : ""
                  }`}>
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-forest-800 mb-3">
                        {room.name}
                      </h2>
                      <p className="text-earth-600 mb-4 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Room info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-earth-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {room.capacity} ospiti
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="w-4 h-4" /> {room.size} m²
                        </span>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="inline-flex items-center gap-1.5 text-xs bg-forest-50 text-forest-700 px-3 py-1.5 rounded-full"
                          >
                            {amenityIcons[amenity] || null}
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-earth-100">
                      <div>
                        <span className="text-2xl font-bold text-forest-700">€{room.price}</span>
                        <span className="text-earth-400 text-sm"> / notte</span>
                      </div>
                      <BookingButton
                        roomName={room.name}
                        className="btn-primary !px-6 !py-2.5 text-sm hover:scale-105"
                      >
                        Prenota
                      </BookingButton>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BOX */}
      <section className="py-16 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold font-serif text-forest-800 mb-4">
              Informazioni utili
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-sm text-earth-600">
              <div>
                <p className="font-semibold text-forest-700 mb-1">Check-in</p>
                <p>15:00 – 20:00</p>
              </div>
              <div>
                <p className="font-semibold text-forest-700 mb-1">Check-out</p>
                <p>Entro le 10:00</p>
              </div>
              <div>
                <p className="font-semibold text-forest-700 mb-1">Colazione</p>
                <p>7:30 – 10:00 inclusa nel prezzo</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
