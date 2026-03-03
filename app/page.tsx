export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="relative">
        <div className="relative w-full h-[70vh] md:h-[80vh]">
          <img
            src="/hero-cafe-racer-59.png"
            alt="Cafe Racer MotoGuiaCR"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="px-4 pb-12 pt-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-[#f4b942]">AHORRA</span> en cada kilómetro
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descuentos en talleres y repuestos para tu moto en Costa Rica
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/talleres"
              className="px-8 py-3 bg-[#f4b942] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#d4a035] transition-colors"
            >
              Explorar talleres
            </a>
            <a
              href="/registro"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0a0a0a] transition-colors"
            >
              Registrarse gratis
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-[#f4b942]">✓</span> 50+ talleres
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#f4b942]">✓</span> 200+ cupones
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#f4b942]">✓</span> Desde ₡3,000 al mes
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}