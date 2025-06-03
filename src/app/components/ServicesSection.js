export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50" id="servicios">
      <div className="mx-auto max-w-7xl px-4">
        {/* titulo */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded text-sm font-medium mb-4 uppercase tracking-wide">
            Nuestras Especialidades
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas en tornería con la más alta calidad y
            precisión
          </p>
        </div>

        {/* grid servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Tornería Convencional
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Trabajos de precisión en diferentes materiales y medidas. Contamos
              con 12 tornos automáticos, 6 roscadoras, 8 agujereadoreas y 1
              laminadora de rosca
            </p>
          </div>

          {/* Servicio 2 */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Tornería CNC
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Contamos con 6 tornos CNC y 4 centros de mecanizado de alta
              precisión con control numérico computarizado. Ideal para series y
              piezas complejas.
            </p>
          </div>

          {/* Servicio 3 */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Estampado</h3>
            <p className="text-slate-600 leading-relaxed">
              Realizamos trabajos de estampado de hasta 80 TN con matricería
              propia o del cliente. {""}
              <span className="font-semibold text-blue-600">
                Proximamente servicio de corte laser y plegado.
              </span>
            </p>
          </div>

          {/* Servicio 4 */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-blue-600 rounded mb-4"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Asesoramiento Técnico
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Consultoría especializada en procesos de mecanizado. Te ayudamos a
              optimizar tus proyectos.
            </p>
          </div>

          {/* Servicio 6 */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-blue-600 transition-shadow duration-300 border border-slate-200"
          >
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
  );
}
