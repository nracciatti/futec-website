import "./globals.css";
import { Geist } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import NavSection from "@/app/components/NavSection";
import WhatsAppButton from "./components/WhatsAppButton";

// Opcional: configurar la fuente
const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "FUTEC - Tornería Industrial | Mecanizado CNC y Convencional",
  description:
    "Servicios profesionales de tornería industrial en Buenos Aires. Mecanizado CNC, tornería convencional, reparaciones y piezas especiales. +25 años de experiencia.",
    keywords:
    "tornería industrial, mecanizado CNC, tornería convencional, piezas industriales, mecanizado de precisión, tornería Buenos Aires, reparación de piezas, fabricación industrial, FUTEC",
  openGraph: {
    title: "FUTEC - Tornería Industrial | Mecanizado CNC y Convencional",
    description:
      "Servicios profesionales de tornería industrial en Buenos Aires. +15 años de experiencia en mecanizado de precisión.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.className}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/images/futec-logo.png" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Meta tags adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Buenos Aires" />

        {/* Schema.org para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "FUTEC",
              description:
                "Empresa líder en tornería industrial con más de 15 años de experiencia en mecanizado de precisión",
              url: "https://futec-website.vercel.app",
              telephone: "+54-11-6512-2340",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressLocality: "Buenos Aires",
                addressRegion: "Buenos Aires",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.6037,
                longitude: -58.3816,
              },
              openingHours: "Mo-Fr 09:00-17:00",
              priceRange: "$$",
              image: "https://futec-website.vercel.app/images/hero-futec.png",
              sameAs: ["https://wa.me/5491165122340"],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.6037,
                  longitude: -58.3816,
                },
                geoRadius: "100000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Tornería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tornería CNC",
                      description:
                        "Mecanizado de alta precisión con control numérico computarizado",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tornería Convencional",
                      description:
                        "Mecanizado de piezas con tornos convencionales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparaciones Industriales",
                      description:
                        "Reparación y reconstrucción de piezas industriales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Piezas Especiales",
                      description:
                        "Fabricación de piezas únicas según especificaciones del cliente",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout />
        <Header />
        <NavSection />
        {children} {/* AQUÍ se insertan las páginas */}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
