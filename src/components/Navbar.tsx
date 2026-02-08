"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain, Phone } from "lucide-react";
import { useBooking } from "./BookingProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/camere", label: "Le Camere" },
  { href: "/ebike", label: "Noleggio E-Bike" },
  { href: "/esperienze", label: "Esperienze" },
  { href: "/galleria", label: "Galleria" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Mountain className={`text-forest-600 group-hover:text-forest-700 transition-all duration-300 ${scrolled ? "w-7 h-7" : "w-8 h-8"}`} />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-forest-800 font-serif leading-tight">
                La Foresteria
              </span>
              <span className={`text-xs text-earth-500 tracking-widest uppercase transition-all duration-300 ${scrolled ? "opacity-0 h-0" : "opacity-100"}`}>
                Bed & Breakfast
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-forest-700 bg-forest-50"
                    : "text-earth-700 hover:text-forest-600 hover:bg-forest-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+390000000000"
              className="flex items-center gap-1 text-sm text-earth-600 hover:text-forest-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+39 000 000 0000</span>
            </a>
            <button
              onClick={() => openBooking()}
              className="btn-primary text-sm !px-5 !py-2"
            >
              Prenota Ora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-forest-50 text-earth-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-earth-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                  pathname === link.href
                    ? "text-forest-700 bg-forest-50"
                    : "text-earth-700 hover:text-forest-600 hover:bg-forest-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-earth-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBooking();
                }}
                className="block w-full text-center btn-primary"
              >
                Prenota Ora
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
