"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/aos-fix.css"; // Importar nuestro fix CSS

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Configuración optimizada para mobile
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50, // Reducido para mejor experiencia en mobile
      delay: 0,
      // Mantener AOS activo en mobile
      disable: false,
      // Mejorar el comportamiento en mobile
      startEvent: "DOMContentLoaded",
      // Ajustar el punto de anclaje para evitar problemas
      anchorPlacement: "top-bottom",
    });

    // Refrescar AOS cuando cambie el tamaño de la ventana
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  return <body>{children}</body>;
}
