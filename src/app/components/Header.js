export default function Header() {
  return (
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
  );
}