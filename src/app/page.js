"use client";

import Header from "@/app/components/Header";
import NavSection from "@/app/components/NavSection";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";
import LocationSection from "@/app/components/LocationSection";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <NavSection />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <LocationSection />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
