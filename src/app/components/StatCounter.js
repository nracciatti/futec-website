"use client";

import { useState, useEffect, useRef } from "react";

const StatCounter = ({ end, suffix = "", prefix = "", label = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animación del contador
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // 2.5 segundos
    const steps = 60; // 60 pasos para animación suave
    const increment = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(currentStep * increment, end);
      setCount(newCount);

      if (currentStep >= steps) {
        setCount(end); // Asegurar valor final exacto
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  // Formatear el número para mostrar
  const displayCount = end % 1 === 0 ? Math.floor(count) : count.toFixed(2);

  return (
    <div ref={elementRef}>
      <div className="text-3xl font-bold text-white">
        {prefix}
        {displayCount}
        {suffix}
      </div>
      <div className="text-slate-300 text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
