"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de las animaciones (profesional: 600-1000ms)
      easing: "ease-out-cubic", // Suavizado elegante
      once: true, // Solo anima una vez
      offset: 100, // Inicia la animación 100px antes de que sea visible
      delay: 0, // Sin delay global
    });
  }, []);

  return <body>{children}</body>;
}
