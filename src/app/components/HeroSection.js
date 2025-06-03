import StatCounter from "./StatCounter";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-futec.png')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>

      {/* contenido hero */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] items-center py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* experiencia */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="inline-flex items-center px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-6 sm:mb-8"
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-white font-medium text-sm sm:text-base">
                15+ años de experiencia en tornería industrial
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-3xl sm:text-6xl md:text-3xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            >
              SERVICIOS DE TORNERÍA
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="block text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"
              >
                PRECISIÓN Y CALIDAD
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-3xl"
            >
              Especializados en mecanizado de precisión para la industria.
              Solucionamos todos los requerimientos técnicos con equipamiento de
              última generación y personal altamente capacitado.
            </p>

            {/* botones */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12"
            >
              <a
                href="https://wa.me/5491165122340?text=Hola%20FUTEC,%20me%20interesa%20solicitar%20una%20cotización%20para%20servicios%20de%20tornería"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base sm:text-lg font-semibold transition-colors duration-300 shadow-lg text-center"
              >
                Solicitar Cotización
              </a>

              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300">
                Ver Capacidades Técnicas
              </button>
            </div>

            {/* datos tecnicos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <StatCounter end={500} suffix="+" label="Proyectos" />
              </div>
              <div className="text-center sm:text-left">
                <StatCounter end={15} suffix="+" label="Años" />
              </div>
              <div className="text-center sm:text-left col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  ±0.01mm
                </div>
                <div className="text-slate-300 text-xs sm:text-sm uppercase tracking-wide">
                  Precisión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
