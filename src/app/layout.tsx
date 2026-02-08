import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/BookingProvider";
import FloatingBookButton from "@/components/FloatingBookButton";

export const metadata: Metadata = {
  title: "La Foresteria B&B — Bed & Breakfast di Montagna",
  description:
    "La Foresteria B&B: 10 camere accoglienti nel cuore delle montagne. Noleggio e-bike, esperienze uniche e natura incontaminata. Prenota il tuo soggiorno.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="antialiased">
        <BookingProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <FloatingBookButton />
        </BookingProvider>
      </body>
    </html>
  );
}
