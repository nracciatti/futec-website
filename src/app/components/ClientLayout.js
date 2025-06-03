"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/aos-fix.css";

export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,

      disable: false,
      startEvent: "DOMContentLoaded",
      anchorPlacement: "top-bottom",
    });

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
