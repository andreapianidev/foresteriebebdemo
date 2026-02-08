"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  Mountain,
  Send,
  CheckCircle,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80"
          alt="Contattaci"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <AnimateOnScroll animation="fade-up" duration={1000}>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">Contatti</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" duration={1000} delay={300}>
            <p className="text-xl text-white/80">
              Siamo qui per voi. Scriveteci o chiamateci per prenotare.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FORM */}
            <AnimateOnScroll animation="fade-right">
            <div>
              <h2 className="text-3xl font-bold font-serif text-forest-800 mb-2">
                Richiedi informazioni
              </h2>
              <p className="text-earth-600 mb-8">
                Compilate il modulo e vi risponderemo entro 24 ore.
              </p>

              {submitted ? (
                <div className="bg-forest-50 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-serif text-forest-800 mb-2">
                    Messaggio inviato!
                  </h3>
                  <p className="text-earth-600">
                    Grazie per averci contattato. Vi risponderemo al più presto.
                  </p>
                  <p className="text-sm text-earth-400 mt-4">
                    (Questo è un sito dimostrativo — nessun messaggio è stato realmente inviato)
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                   focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                   outline-none transition-all"
                        placeholder="Mario"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">
                        Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                   focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                   outline-none transition-all"
                        placeholder="Rossi"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                 focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                 outline-none transition-all"
                      placeholder="mario@esempio.it"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                 focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                 outline-none transition-all"
                      placeholder="+39 333 123 4567"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">
                        Check-in
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                   focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                   outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">
                        Check-out
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                   focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                   outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      Numero ospiti
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                 focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                 outline-none transition-all bg-white"
                    >
                      <option>1 ospite</option>
                      <option>2 ospiti</option>
                      <option>3 ospiti</option>
                      <option>4 ospiti</option>
                      <option>5+ ospiti</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">
                      Messaggio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 
                                 focus:border-forest-400 focus:ring-2 focus:ring-forest-100 
                                 outline-none transition-all resize-none"
                      placeholder="Raccontateci le vostre esigenze..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 !py-4"
                  >
                    <Send className="w-5 h-5" />
                    Invia Richiesta
                  </button>
                </form>
              )}
            </div>
            </AnimateOnScroll>

            {/* INFO SIDEBAR */}
            <AnimateOnScroll animation="fade-left">
            <div className="space-y-8">
              {/* Contact details */}
              <div className="bg-forest-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold font-serif text-forest-800 mb-6">
                  I nostri recapiti
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Indirizzo</p>
                      <p className="text-earth-600 text-sm">
                        Via delle Tre Vie, 1<br />
                        38060 Borgo Montano (TN)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Telefono</p>
                      <p className="text-earth-600 text-sm">+39 000 000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Email</p>
                      <p className="text-earth-600 text-sm">info@laforesteriabb.it</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Orari Reception</p>
                      <p className="text-earth-600 text-sm">
                        Tutti i giorni: 8:00 – 20:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* How to get there */}
              <div className="bg-warm-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold font-serif text-forest-800 mb-6">
                  Come raggiungerci
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warm-100 rounded-xl flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">In auto</p>
                      <p className="text-earth-600 text-sm">
                        Autostrada A22 del Brennero, uscita Borgo Montano.
                        Proseguire per 15 km sulla SP45. Parcheggio gratuito.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warm-100 rounded-xl flex items-center justify-center shrink-0">
                      <Train className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">In treno</p>
                      <p className="text-earth-600 text-sm">
                        Stazione di Trento, poi autobus linea 204 fino a Borgo
                        Montano. Servizio navetta disponibile su prenotazione.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warm-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mountain className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Altitudine</p>
                      <p className="text-earth-600 text-sm">
                        1.200 m s.l.m. — Si consiglia abbigliamento a strati
                        anche in estate.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-earth-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-earth-400 mx-auto mb-2" />
                  <p className="text-earth-500 font-medium">Mappa interattiva</p>
                  <p className="text-earth-400 text-sm">
                    (Google Maps sarà integrato nella versione finale)
                  </p>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
