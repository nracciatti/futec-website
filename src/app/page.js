"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* header con info contacto */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* horarios */}
            <div className="text-sm flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Lun-Vie: 9:00hs - 17:00hs
            </div>

            {/* telefono */}
            <div className="text-sm font-medium flex items-center space-x-4">
              <div className="hidden sm:flex items-center">
                <span className="text-blue-200">📞</span>
                <span className="ml-2">011 65122340</span>
              </div>
              <div className="sm:hidden">
                <span>011 65122340</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* nav */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo FUTEC  */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              FUTEC
            </div>

            {/* menu desktop */}
            <ul className="hidden md:flex gap-8">
              <li>
                <a
                  href="#servicios"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  Ubicación
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>

            {/* boton menu hamburguesa */}
            <button
              className="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <div className="w-6 h-0.5 bg-slate-700 rounded-full"></div>
              <div className="w-6 h-0.5 bg-slate-700 rounded-full"></div>
              <div className="w-6 h-0.5 bg-slate-700 rounded-full"></div>
            </button>
          </div>

          {/* menu mobile */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#nosotros"
                    className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* hero  */}
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
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-8">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-white font-medium">
                  15+ años de experiencia en tornería industrial
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                SERVICIOS DE TORNERÍA
                <span className="block text-blue-400 text-4xl md:text-5xl mt-2">
                  PRECISIÓN Y CALIDAD
                </span>
              </h1>

              <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-3xl">
                Especializados en mecanizado de precisión para la industria.
                Solucionamos todos los requerimientos técnicos con equipamiento
                de última generación y personal altamente capacitado.
              </p>

              {/* botones */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">
                    Proyectos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">
                    Años
                  </div>
                </div>
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

      {/* servicios */}
      <section className="py-20 bg-slate-50" id="servicios">
        <div className="mx-auto max-w-7xl px-4">
          {/* titulo */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded text-sm font-medium mb-4 uppercase tracking-wide">
              Nuestras Especialidades
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas en tornería con la más alta calidad
              y precisión
            </p>
          </div>

          {/* grid servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Tornería Convencional
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Mecanizado de piezas con tornos convencionales. Trabajos de
                precisión en diferentes materiales y medidas.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Tornería CNC
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Mecanizado de alta precisión con control numérico computarizado.
                Ideal para series y piezas complejas.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Reparaciones
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Reparación y reconstrucción de piezas industriales. Soluciones
                rápidas y efectivas para su maquinaria.
              </p>
            </div>

            {/* Servicio 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Piezas Especiales
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Fabricación de piezas únicas según especificaciones del cliente.
                Adaptamos nuestro trabajo a sus necesidades.
              </p>
            </div>

            {/* Servicio 5 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Asesoramiento Técnico
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Consultoría especializada en procesos de mecanizado. Te ayudamos
                a optimizar tus proyectos.
              </p>
            </div>

            {/* Servicio 6 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Entregas Rápidas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Cumplimos con los plazos acordados. Servicio de urgencias para
                casos que requieren entrega inmediata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros profesional */}
      <section className="py-20 bg-slate-100" id="nosotros">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido de texto */}
            <div>
              <div className="mb-6">
                <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
              </div>

              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Sobre FUTEC
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Con más de{" "}
                <span className="font-semibold text-blue-600">
                  15 años de experiencia
                </span>{" "}
                en el rubro de la tornería, FUTEC se ha consolidado como una
                empresa líder en soluciones de mecanizado de precisión.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados trabaja
                con
                <span className="font-semibold text-blue-600">
                  {" "}
                  tecnología de última generación
                </span>
                , garantizando la máxima calidad en cada proyecto que
                emprendemos.
              </p>

              {/* caracteristicas */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">
                    Más de 15 años de experiencia
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">
                    Tecnología CNC de última generación
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">
                    Equipo de profesionales especializados
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">
                    Garantía de calidad en todos nuestros trabajos
                  </span>
                </div>
              </div>

              {/* Botón de contacto
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200">
                Conocer más sobre nosotros
              </button> */}
            </div>

            {/* imagen */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-slate-200 shadow-lg">
                <Image
                  src="/images/trabajador-futec.png"
                  alt="Taller FUTEC - Maquinaria industrial"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                />
              </div>

              {/* card con stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* seccion contacto rapido */}
      <section className="py-16 bg-slate-800" id="contacto">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-6">
            <div className="w-16 h-1 bg-blue-500 rounded mx-auto mb-4"></div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas un presupuesto?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contactanos hoy mismo y recibí una cotización personalizada para tu
            proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5491165122340"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg text-center"
            >
              Llamar: 011 65122340
            </a>
          </div>
        </div>
      </section>

      {/* seccion ubi */}
      <section className="py-20 bg-slate-100" id="ubicacion">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="w-16 h-1 bg-blue-600 rounded mx-auto mb-4"></div>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Visitanos en nuestro taller ubicado en Villa Lynch. Fácil acceso
              desde toda la zona norte del Gran Buenos Aires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* info ubi */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Villa Lynch
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Perdriel 4352
                <br />
                Provincia de Buenos Aires
              </p>

              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=Perdriel+4352,+Villa+Lynch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>

            {/* mapa */}
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8234567890123!2d-58.5123456789!3d-34.5987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPerdriel+4352%2C+Villa+Lynch!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación FUTEC - Perdriel 4352, Villa Lynch"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
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
                Empresa especializada en servicios de tornería con más de 15
                años de experiencia. Ofrecemos soluciones de mecanizado de
                precisión para la industria.
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
              <h3 className="text-lg font-semibold mb-4 text-white">
                Servicios
              </h3>
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

      {/* boton whatsapp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5491165122340?text=Hola%20FUTEC,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios%20de%20tornería"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {/* icono de WhatsApp */}
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* hover whatsapp */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Contactanos por WhatsApp
          </div>
        </a>
      </div>
    </main>
  );
}
