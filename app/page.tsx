export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* NAVBAR */}
      <nav className="w-full bg-[#0a0a0a]/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/logo-transparent.png" 
                  alt="MotoGuiaCR" 
                  className="h-28 w-auto"
                />
              </a>
            </div>

            {/* Links - Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/explorar" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Explorar
                </a>
                <a href="/talleres" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Talleres
                </a>
                <a href="/repuestos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Repuestos
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Compra y venta
                </a>
                <a href="/clubes" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Clubes
                </a>
                <a href="/blog" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Blog
                </a>
              </div>
            </div>

            {/* Botón */}
            <div className="hidden md:block">
              <a
                href="/registro"
                className="bg-[#f4b942] text-[#0a0a0a] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#d4a035] transition-colors"
              >
                Registrarse
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-16">
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
            <span className="text-[#f4b942]">Disfruta</span> cada kilómetro
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Todo para decidir bien sobre tu moto
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/talleres"
              className="px-8 py-3 bg-[#f4b942] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#d4a035] transition-colors"
            >
              Explorar
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
              <span className="text-[#f4b942]">✓</span> Desde ₡1,000 al mes
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN ¿POR QUÉ MOTOGUIACR? */}
      <section className="py-16 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            ¿Por qué <span className="text-[#f4b942]">MotoGuiaCR</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. Verificados */}
            <div className="text-center p-6 rounded-lg bg-[#1a1a1a] border border-gray-800">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Verificados</h3>
              <p className="text-gray-400 text-sm">
                Talleres y repuesteras revisados.
              </p>
            </div>

            {/* 2. Especialistas */}
            <div className="text-center p-6 rounded-lg bg-[#1a1a1a] border border-gray-800">
              <div className="text-4xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold text-white mb-2">Especialistas</h3>
              <p className="text-gray-400 text-sm">
                Encuentra expertos en tu marca y cilindrada específica.
              </p>
            </div>

            {/* 3. Reviews reales */}
            <div className="text-center p-6 rounded-lg bg-[#1a1a1a] border border-gray-800">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-2">Reviews Reales</h3>
              <p className="text-gray-400 text-sm">
                Opiniones de motociclistas que ya usaron el servicio.
              </p>
            </div>

            {/* 4. Beneficios */}
            <div className="text-center p-6 rounded-lg bg-[#1a1a1a] border border-gray-800">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Beneficios</h3>
              <p className="text-gray-400 text-sm">
                Acceso exclusivo a cupones y promociones especiales.
              </p>
            </div>

          </div>
        </div>
      </section>

          {/* CÓMO FUNCIONA */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Cómo <span className="text-[#f4b942]">funciona</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Tres simples pasos para encontrar el servicio perfecto para tu moto
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Paso 1 */}
            <div className="relative text-center">
              <div className="text-5xl mb-6">🔍</div>
              <div className="absolute top-0 right-0 -mr-4 hidden md:block text-[#f4b942] text-2xl font-bold">→</div>
              <h3 className="text-xl font-bold text-white mb-3">1. Encuentra servicios</h3>
              <p className="text-gray-400 text-sm">
                Filtra por tu marca, modelo y cilindrada. 
                Encuentra servicios a la medida de tu moto.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="relative text-center">
              <div className="text-5xl mb-6">✅</div>
              <div className="absolute top-0 right-0 -mr-4 hidden md:block text-[#f4b942] text-2xl font-bold">→</div>
              <h3 className="text-xl font-bold text-white mb-3">2. Verifica reputación</h3>
              <p className="text-gray-400 text-sm">
                Lee reviews de otros motociclistas. 
                Revisa fotos, servicios y experiencia real.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="relative text-center">
              <div className="text-5xl mb-6">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">3. Aprovecha los beneficios</h3>
              <p className="text-gray-400 text-sm">
                Accede a cupones exclusivos. 
                Contacta con confianza y ahorra en cada servicio.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/registro"
              className="inline-block px-8 py-3 bg-[#f4b942] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#d4a035] transition-colors"
            >
              Registra tu moto y empieza
            </a>
          </div>

        </div>
      </section>

              {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Logo y descripción */}
            <div>
              <h3 className="text-[#f4b942] font-bold text-xl mb-4">MotoGuiaCR</h3>
              <div>
                <img 
                  src="/logo-transparent.png" 
                  alt="MotoGuiaCR" 
                  className="h-12 w-auto mb-4"
                />
                
              </div>
              <p className="text-gray-400 text-sm">
                Todo para decidir bien sobre tu moto. 
                Talleres y repuesteras verificados.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Explorar</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/talleres" className="text-gray-400 hover:text-[#f4b942] transition-colors">Talleres</a></li>
                <li><a href="/repuestos" className="text-gray-400 hover:text-[#f4b942] transition-colors">Repuestos</a></li>
                <li><a href="/clubes" className="text-gray-400 hover:text-[#f4b942] transition-colors">Clubes</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-[#f4b942] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/terminos" className="text-gray-400 hover:text-[#f4b942] transition-colors">Términos de uso</a></li>
                <li><a href="/privacidad" className="text-gray-400 hover:text-[#f4b942] transition-colors">Privacidad</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-[#f4b942] transition-colors">Cookies</a></li>
              </ul>
            </div>

          </div>

          {/* Redes y copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            
            {/* Redes sociales */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-[#f4b942] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f4b942] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f4b942] transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-right">
              © 2026 MotoGuiaCR. Todos los derechos reservados.<br />
              Hecho en Costa Rica
            </p>
            
          </div>
        </div>
      </footer>
    </main>
  );
}