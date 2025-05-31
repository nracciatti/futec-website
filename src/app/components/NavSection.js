"use client"

export default function NavSection() {
  return (
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
  );
}
