import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header con información de contacto */}
      <header className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Información de horarios */}
            <div className="text-sm">Lun-Vie: 9:00hs - 17:00hs</div>

            {/* Teléfono */}
            <div className="text-sm font-medium">011 65122340</div>
          </div>
        </div>
      </header>

      {/* Navegación principal */}
      <nav className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo FUTEC */}
            <div className="text-2xl font-bold text-blue-600">FUTEC</div>

            {/* Menú de navegación */}
            <ul className="flex gap-8">
              <li>
                <a
                  href="/"
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/servicios"
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/placeholder.svg?height=800&width=1200&query=industrial machinery gears torneria')",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido del hero */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                SERVICIOS DE TORNERÍA
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Solucionamos todos los requerimientos que nuestros clientes nos
                piden. Experiencia y precisión en cada proyecto.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas en tornería con la más alta calidad
              y precisión
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
            <div className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
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
    </main>
  );
}
