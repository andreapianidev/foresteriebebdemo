"use client";

import { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  Loader2,
  ChevronRight,
  Bed,
  Mail,
  Phone,
  User,
  Sparkles,
} from "lucide-react";
import { rooms } from "@/data/rooms";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

type Step = "details" | "guest" | "confirm" | "processing" | "success";

export default function BookingModal({ isOpen, onClose, preselectedRoom }: BookingModalProps) {
  const [step, setStep] = useState<Step>("details");
  const [selectedRoom, setSelectedRoom] = useState(preselectedRoom || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (preselectedRoom) setSelectedRoom(preselectedRoom);
  }, [preselectedRoom]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep("details");
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const selectedRoomData = rooms.find((r) => r.name === selectedRoom);

  const nights = checkIn && checkOut
    ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0;

  const total = selectedRoomData ? selectedRoomData.price * nights : 0;

  const today = new Date().toISOString().split("T")[0];

  const handleProcess = () => {
    setStep("processing");
    setTimeout(() => setStep("success"), 2500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("details");
      setSelectedRoom(preselectedRoom || "");
      setCheckIn("");
      setCheckOut("");
      setGuests("2");
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
    }, 300);
  };

  const bookingId = `LF-${Date.now().toString(36).toUpperCase()}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-earth-100 hover:bg-earth-200 
                     rounded-full flex items-center justify-center transition-all hover:rotate-90 duration-300"
        >
          <X className="w-5 h-5 text-earth-600" />
        </button>

        {/* Header */}
        {step !== "success" && step !== "processing" && (
          <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-6 rounded-t-3xl">
            <div className="flex items-center gap-3 text-white mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-serif">Prenota il tuo soggiorno</h2>
                <p className="text-forest-100 text-sm">La Foresteria B&B</p>
              </div>
            </div>
            {/* Progress */}
            <div className="flex gap-2 mt-4">
              {["details", "guest", "confirm"].map((s, i) => (
                <div key={s} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      ["details", "guest", "confirm"].indexOf(step) >= i
                        ? "bg-white w-full"
                        : "bg-transparent w-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: Details */}
        {step === "details" && (
          <div className="p-6 space-y-5 animate-step-in">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                <Bed className="w-4 h-4 text-forest-600" /> Camera
              </label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all bg-white text-earth-800"
              >
                <option value="">Seleziona una camera...</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name} — €{room.price}/notte ({room.capacity} ospiti)
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                  <Calendar className="w-4 h-4 text-forest-600" /> Check-in
                </label>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && e.target.value >= checkOut) setCheckOut("");
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                             focus:ring-4 focus:ring-forest-100 outline-none transition-all"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                  <Calendar className="w-4 h-4 text-forest-600" /> Check-out
                </label>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                             focus:ring-4 focus:ring-forest-100 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                <Users className="w-4 h-4 text-forest-600" /> Ospiti
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all bg-white"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "ospite" : "ospiti"}</option>
                ))}
              </select>
            </div>

            {/* Price preview */}
            {selectedRoomData && nights > 0 && (
              <div className="bg-forest-50 rounded-xl p-4 border border-forest-100 animate-fade-in">
                <div className="flex justify-between text-sm text-earth-600 mb-1">
                  <span>{selectedRoomData.name}</span>
                  <span>€{selectedRoomData.price} × {nights} notti</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-forest-800 pt-2 border-t border-forest-200 mt-2">
                  <span>Totale</span>
                  <span>€{total}</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setStep("guest")}
              disabled={!selectedRoom || !checkIn || !checkOut}
              className="w-full btn-primary !py-4 !rounded-xl flex items-center justify-center gap-2 
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            >
              Continua <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 2: Guest info */}
        {step === "guest" && (
          <div className="p-6 space-y-5 animate-step-in">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                <User className="w-4 h-4 text-forest-600" /> Nome completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mario Rossi"
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                <Mail className="w-4 h-4 text-forest-600" /> Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mario@esempio.it"
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-earth-700 mb-2">
                <Phone className="w-4 h-4 text-forest-600" /> Telefono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+39 333 123 4567"
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-earth-700 mb-2 block">Note speciali</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Allergie, richieste particolari..."
                className="w-full px-4 py-3 rounded-xl border-2 border-earth-200 focus:border-forest-400 
                           focus:ring-4 focus:ring-forest-100 outline-none transition-all resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("details")}
                className="flex-1 py-3 rounded-xl border-2 border-earth-200 text-earth-600 font-medium 
                           hover:bg-earth-50 transition-all"
              >
                Indietro
              </button>
              <button
                onClick={() => setStep("confirm")}
                disabled={!name || !email}
                className="flex-1 btn-primary !py-3 !rounded-xl flex items-center justify-center gap-2 
                           disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                Riepilogo <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirm */}
        {step === "confirm" && (
          <div className="p-6 space-y-5 animate-step-in">
            <h3 className="text-lg font-bold font-serif text-forest-800">Riepilogo prenotazione</h3>

            <div className="bg-earth-50 rounded-xl p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Camera</span>
                <span className="font-medium text-earth-800">{selectedRoom}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Check-in</span>
                <span className="font-medium text-earth-800">{new Date(checkIn).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Check-out</span>
                <span className="font-medium text-earth-800">{new Date(checkOut).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Ospiti</span>
                <span className="font-medium text-earth-800">{guests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Notti</span>
                <span className="font-medium text-earth-800">{nights}</span>
              </div>
              <div className="border-t border-earth-200 pt-3 flex justify-between">
                <span className="font-bold text-forest-800">Totale</span>
                <span className="font-bold text-2xl text-forest-700">€{total}</span>
              </div>
            </div>

            <div className="bg-earth-50 rounded-xl p-5 space-y-2">
              <p className="text-sm font-medium text-earth-700">{name}</p>
              <p className="text-sm text-earth-500">{email}</p>
              {phone && <p className="text-sm text-earth-500">{phone}</p>}
              {notes && <p className="text-sm text-earth-400 italic">{notes}</p>}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("guest")}
                className="flex-1 py-3 rounded-xl border-2 border-earth-200 text-earth-600 font-medium 
                           hover:bg-earth-50 transition-all"
              >
                Modifica
              </button>
              <button
                onClick={handleProcess}
                className="flex-1 bg-gradient-to-r from-forest-600 to-forest-700 text-white py-3 rounded-xl 
                           font-semibold hover:from-forest-700 hover:to-forest-800 transition-all 
                           flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <CreditCard className="w-5 h-5" /> Conferma
              </button>
            </div>

            <p className="text-xs text-earth-400 text-center">
              Questa è una demo — nessun pagamento reale verrà effettuato
            </p>
          </div>
        )}

        {/* STEP 4: Processing */}
        {step === "processing" && (
          <div className="p-12 text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full border-4 border-forest-100" />
              <div className="absolute inset-0 rounded-full border-4 border-forest-600 border-t-transparent animate-spin" />
              <Loader2 className="w-8 h-8 text-forest-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold font-serif text-forest-800 mb-2">Elaborazione in corso...</h3>
            <p className="text-earth-500">Stiamo confermando la vostra prenotazione</p>
          </div>
        )}

        {/* STEP 5: Success */}
        {step === "success" && (
          <div className="p-8 text-center animate-success-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center animate-bounce-in">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>
            <div className="animate-confetti">
              <Sparkles className="w-6 h-6 text-warm-500 absolute top-12 left-12 animate-float" />
              <Sparkles className="w-5 h-5 text-forest-400 absolute top-16 right-16 animate-float" style={{ animationDelay: "0.5s" }} />
              <Sparkles className="w-4 h-4 text-warm-400 absolute top-24 left-24 animate-float" style={{ animationDelay: "1s" }} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-forest-800 mb-2">Prenotazione confermata!</h3>
            <p className="text-earth-600 mb-6">
              Grazie <strong>{name.split(" ")[0]}</strong>, il vostro soggiorno è stato prenotato con successo.
            </p>

            <div className="bg-forest-50 rounded-xl p-5 mb-6 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Codice prenotazione</span>
                <span className="font-mono font-bold text-forest-700">{bookingId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Camera</span>
                <span className="font-medium">{selectedRoom}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-earth-500">Date</span>
                <span className="font-medium">{new Date(checkIn).toLocaleDateString("it-IT", { day: "numeric", month: "short" })} → {new Date(checkOut).toLocaleDateString("it-IT", { day: "numeric", month: "short" })}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-forest-200 pt-2 mt-2">
                <span className="font-bold">Totale</span>
                <span className="font-bold text-forest-700">€{total}</span>
              </div>
            </div>

            <p className="text-xs text-earth-400 mb-6">
              Una email di conferma è stata inviata a {email}<br />
              (demo — nessuna email reale inviata)
            </p>

            <button
              onClick={handleClose}
              className="btn-primary !py-3 !px-8 !rounded-xl"
            >
              Chiudi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
