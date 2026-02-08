"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  openBooking: (roomName?: string) => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState<string | undefined>();

  const openBooking = (roomName?: string) => {
    setPreselectedRoom(roomName);
    setIsOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        preselectedRoom={preselectedRoom}
      />
    </BookingContext.Provider>
  );
}
