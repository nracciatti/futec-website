export default function ContactSection() {
  return (
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
            Llamar: 011 6512 2340
          </a>
        </div>
      </div>
    </section>
  );
}
