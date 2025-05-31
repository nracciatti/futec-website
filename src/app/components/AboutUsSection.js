import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-slate-100" id="nosotros">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <div data-aos="fade-right" data-aos-duration="800">
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
              Nuestro equipo de profesionales altamente capacitados trabaja con
              <span className="font-semibold text-blue-600">
                {" "}
                tecnología de última generación
              </span>
              , garantizando la máxima calidad en cada proyecto que emprendemos.
            </p>

            {/* caracteristicas */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="space-y-4 mb-8"
            >
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
          </div>

          {/* imagen */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="relative"
          >
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
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
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
  );
}
