export default function LocationSection() {
  return (
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
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-center lg:text-left"
          >
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
  );
}
