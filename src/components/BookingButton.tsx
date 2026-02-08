"use client";

import { useBooking } from "./BookingProvider";

interface BookingButtonProps {
  roomName?: string;
  children: React.ReactNode;
  className?: string;
}

export default function BookingButton({ roomName, children, className = "" }: BookingButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button onClick={() => openBooking(roomName)} className={className}>
      {children}
    </button>
  );
}
