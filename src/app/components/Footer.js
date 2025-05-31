export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="w-16 h-1 bg-blue-500 rounded mb-4"></div>
            </div>
            <div className="text-2xl font-bold text-white mb-4">FUTEC</div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empresa especializada en servicios de tornería con más de 15 años
              de experiencia. Ofrecemos soluciones de mecanizado de precisión
              para la industria.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-slate-300">
                  Perdriel 4352, Villa Lynch
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-slate-300">ventas@futec.com.ar</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-slate-300">011 65122340</span>
              </div>
            </div>
          </div>

          {/* servicios */}
          <div>
            <div className="mb-4">
              <div className="w-12 h-1 bg-blue-500 rounded mb-4"></div>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Tornería Convencional
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Tornería CNC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Reparaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Piezas Especiales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Asesoramiento Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* enlaces */}
          <div>
            <div className="mb-4">
              <div className="w-12 h-1 bg-blue-500 rounded mb-4"></div>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#presupuesto"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Solicitar Presupuesto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* horario */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">
                Horarios de Atención
              </h4>
              <p className="text-slate-300">
                Lunes a Viernes: 9:00hs - 17:00hs
              </p>
              <p className="text-slate-300">
                Sábados: Consultar disponibilidad
              </p>
            </div>
            <div className="text-center md:text-right">
              <a
                href="https://wa.me/5491165122340?text=Hola%20FUTEC,%20me%20interesa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg text-center"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-slate-400">
              © 2025 FUTEC - Servicios de Tornería. Todos los derechos
              reservados.
            </p>
            <p className="text-slate-500 text-sm">
              Sitio web desarrollado por {}
              <a
                href="https://portfolio-nracciatti.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 hover:underline"
              >
                nracciatti
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
