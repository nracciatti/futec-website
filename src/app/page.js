import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";
import LocationSection from "@/app/components/LocationSection";
import AboutUsSection from "./components/AboutUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <LocationSection />
    </main>
  );
}
