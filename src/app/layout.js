import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";
import LocationSection from "./components/LocationSection";
import NavSection from "@/app/components/NavSection";
import AboutUsSection from "./components/AboutUsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Futec",
  icons: {
    icon: "/images/futec-logo.png",
  },
  description: "Servicios de torneria en Villa Lynch.",
};

export default function Home({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout />
        <Header />
        <NavSection />
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <ContactSection />
        <LocationSection />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
