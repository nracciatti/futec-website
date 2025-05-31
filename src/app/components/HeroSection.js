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
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-4xl">
            {/* experiencia */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-8 "
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-white font-medium">
                15+ años de experiencia en tornería industrial
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              SERVICIOS DE TORNERÍA
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="block text-blue-400 text-4xl md:text-5xl mt-2"
              >
                PRECISIÓN Y CALIDAD
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              className="text-xl text-slate-200 mb-10 leading-relaxed max-w-3xl"
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
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://wa.me/5491165122340?text=Hola%20FUTEC,%20me%20interesa%20solicitar%20una%20cotización%20para%20servicios%20de%20tornería"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg text-center"
              >
                Solicitar Cotización
              </a>

              <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg text-lg font-semibold transition-all duration-300">
                Ver Capacidades Técnicas
              </button>
            </div>

            {/* datos tecnicos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <StatCounter end={500} suffix="+" label="Proyectos" />
              <StatCounter end={25} suffix="+" label="Años" />
              <div>
                <div className="text-3xl font-bold text-white">±0.01mm</div>
                <div className="text-slate-300 text-sm uppercase tracking-wide">
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
