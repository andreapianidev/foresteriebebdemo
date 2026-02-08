"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { useBooking } from "./BookingProvider";

export default function FloatingBookButton() {
  const { openBooking } = useBooking();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => openBooking()}
      className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-forest-600 to-forest-700 text-white 
                  px-6 py-3.5 rounded-full shadow-2xl shadow-forest-900/30
                  hover:from-forest-700 hover:to-forest-800 hover:shadow-3xl hover:scale-105
                  transition-all duration-500 flex items-center gap-2 font-semibold
                  ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden sm:inline">Prenota Ora</span>
    </button>
  );
}
