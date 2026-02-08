import Link from "next/link";
import { Mountain, MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import BookingButton from "./BookingButton";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-forest-700 via-forest-600 to-forest-700 animate-gradient">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-forest-100 text-sm uppercase tracking-wider mb-2">Non aspettate oltre</p>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Il vostro soggiorno da sogno vi aspetta
            </h3>
            <BookingButton className="bg-white text-forest-800 px-8 py-3.5 rounded-lg font-semibold 
                         hover:bg-forest-50 transition-all duration-300 inline-flex items-center gap-2
                         hover:scale-105 hover:shadow-xl shadow-lg">
              Prenota il tuo soggiorno
            </BookingButton>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-forest-300" />
              <div>
                <h3 className="text-xl font-bold font-serif">La Foresteria</h3>
                <p className="text-xs text-forest-300 tracking-widest uppercase">
                  Bed & Breakfast
                </p>
              </div>
            </div>
            <p className="text-forest-200 text-sm leading-relaxed">
              Un angolo di paradiso tra le montagne. 10 camere accoglienti,
              colazione con prodotti locali e la natura a portata di mano.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center 
                           hover:bg-forest-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center 
                           hover:bg-forest-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Esplora</h4>
            <ul className="space-y-2">
              {[
                { href: "/camere", label: "Le Camere" },
                { href: "/ebike", label: "Noleggio E-Bike" },
                { href: "/esperienze", label: "Esperienze" },
                { href: "/galleria", label: "Galleria" },
                { href: "/contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-forest-200">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <span>Via delle Tre Vie, 1<br />38060 Borgo Montano (TN)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-forest-200">
                <Phone className="w-4 h-4 text-forest-400 shrink-0" />
                <a href="tel:+390000000000" className="hover:text-white transition-colors">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-forest-200">
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                <a href="mailto:info@laforesteriabb.it" className="hover:text-white transition-colors">
                  info@laforesteriabb.it
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Orari</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-forest-200">
                <Clock className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <div>
                  <p className="font-medium text-white">Check-in</p>
                  <p>15:00 - 20:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-forest-200">
                <Clock className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <div>
                  <p className="font-medium text-white">Check-out</p>
                  <p>Entro le 10:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-forest-200">
                <Clock className="w-4 h-4 mt-0.5 text-forest-400 shrink-0" />
                <div>
                  <p className="font-medium text-white">Colazione</p>
                  <p>7:30 - 10:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-forest-400">
            &copy; {new Date().getFullYear()} La Foresteria B&B. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-forest-500">
            Sito dimostrativo — Le immagini sono a scopo illustrativo
          </p>
        </div>
      </div>
    </footer>
  );
}
