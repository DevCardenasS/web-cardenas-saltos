import React from 'react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "5939984851296";

  // Rutas exactas según tu PDF y estructura de Git
  const imgHero = "/home/home-hero-Cardenas-saltos-Abogados-trabajemos-juntos.png";
  const logoBlanco = "/Logos/CS-logo-blanco-pequeño.png";

  return (
    <div className="min-h-screen bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos Abogados</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO SECTION - AZUL OSCURO CON IMAGEN INTEGRADA */}
      <section className="bg-cs-navy relative overflow-hidden">
        {/* Navbar interno del Hero (según diseño) */}
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-20">
          <img src={logoBlanco} alt="Logo" className="h-12" />
          <div className="hidden lg:flex gap-6 text-[11px] font-medium uppercase tracking-widest text-white/90">
            <a href="/" className="hover:text-cs-gold transition">Inicio</a>
            <a href="/nosotros" className="hover:text-cs-gold transition">Nosotros</a>
            <a href="/administrativo" className="hover:text-cs-gold transition">Derecho administrativo</a>
            <a href="/constitucional" className="hover:text-cs-gold transition">Derecho constitucional</a>
            <a href="/notarial" className="hover:text-cs-gold transition">Notarial</a>
            <a href="/mediacion" className="hover:text-cs-gold transition">Mediación</a>
            <a href={`https://wa.me/${phoneNumber}`} className="border border-white px-4 py-2 hover:bg-white hover:text-cs-navy transition">Consulta gratis</a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 px-6 py-20 z-10">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-8">
              Nos importas, <br />
              <span className="font-light">por eso te ofrecemos <br />
              las mejores soluciones <br />
              legales</span>
            </h1>
            <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-cs-gold text-cs-navy px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white transition">
              Consulta gratis
            </a>
          </div>
          
          <div className="md:w-1/2 h-full flex justify-end">
            <img 
              src={imgHero} 
              alt="Abogada Cárdenas Saltos" 
              className="w-full h-full object-contain object-bottom max-h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-cs-navy mb-16">Nuestra experiencia nos avala</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-12 grayscale opacity-80">
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-asociacion-de-profesionales-de-gestion-de-riesgo.png" className="h-20" alt="Asociación" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-leal-asociados.png" className="h-16" alt="Leal" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-kunak-export.png" className="h-14" alt="Kunak" />
        </div>
      </section>

      {/* SECCIÓN SERVICIOS (TARJETAS AZULES) */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-cs-navy mb-20 italic">¿En qué te podemos ayudar?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Tarjeta 1 - Administrativo */}
          <div className="bg-cs-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Derecho <br/> Administrativo</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Problemas con el Estado? Te ayudamos a recuperar tu empleo, eliminar glosas de Contraloría, impugnar multas injustas y proteger tu patrimonio con seguridad jurídica.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-white/50 text-white px-4 py-2 text-[10px] rounded-full hover:bg-white hover:text-cs-navy transition">Ver más</button>
                <button className="bg-cs-gold text-cs-navy px-4 py-2 text-[10px] rounded-full font-bold hover:bg-white transition">Escríbenos</button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src="/home/servicio-home-derecho-administrativo-Cardenas-saltos-Abogados.png" className="w-full h-full object-cover" alt="Administrativo" />
            </div>
          </div>

          {/* Tarjeta 2 - Constitucional */}
          <div className="bg-cs-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Derecho <br/> Constitucional</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Protegemos tus derechos con resultados reales. Recupera tu puesto de trabajo, limpia tu historial crediticio con Habeas Data y defiende tu reputación con medidas cautelares urgentes.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-white/50 text-white px-4 py-2 text-[10px] rounded-full hover:bg-white hover:text-cs-navy transition">Ver más</button>
                <button className="bg-cs-gold text-cs-navy px-4 py-2 text-[10px] rounded-full font-bold hover:bg-white transition">Escríbenos</button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src="/home/servicio-home-derecho-constitucional-Cardenas-saltos-Abogados.png" className="w-full h-full object-cover" alt="Constitucional" />
            </div>
          </div>

          {/* Tarjeta 3 - Notarial */}
          <div className="bg-cs-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Notarias</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Trámites legales rápidos sin ir a juicio. Posesiones efectivas, divorcios inmediatos y creación de empresas SAS en tiempo récord garantizando agilidad en cada paso.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-white/50 text-white px-4 py-2 text-[10px] rounded-full hover:bg-white hover:text-cs-navy transition">Ver más</button>
                <button className="bg-cs-gold text-cs-navy px-4 py-2 text-[10px] rounded-full font-bold hover:bg-white transition">Escríbenos</button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src="/home/servicio-home-notarial-Cardenas-saltos-Abogados.png" className="w-full h-full object-cover" alt="Notarial" />
            </div>
          </div>

          {/* Tarjeta 4 - Mediación */}
          <div className="bg-cs-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Mediación</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Resuelve tus conflictos hoy mismo de forma económica y sin peleas. Acuerdos legales sobre pensiones, deudas y liquidaciones laborales con acta de mediación definitiva.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-white/50 text-white px-4 py-2 text-[10px] rounded-full hover:bg-white hover:text-cs-navy transition">Ver más</button>
                <button className="bg-cs-gold text-cs-navy px-4 py-2 text-[10px] rounded-full font-bold hover:bg-white transition">Escríbenos</button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src="/home/servicio-home-mediacion-Cardenas-saltos-Abogados.png" className="w-full h-full object-cover" alt="Mediación" />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER AMARILLO */}
      <section className="bg-cs-gold py-24 px-6 text-center">
        <h2 className="text-cs-navy text-5xl font-bold mb-10 max-w-4xl mx-auto">
          Estrategia legal <br /> que genera resultados
        </h2>
        <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-cs-navy text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-cs-navy transition-all shadow-xl">
          Consulta gratis
        </a>
      </section>

      {/* FOOTER AZUL FINAL */}
      <footer className="bg-cs-navy text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-2">Dirección</h4>
            <p className="text-sm text-gray-400">Edificio La Previsora</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Email</h4>
            <p className="text-sm text-gray-400">atencion@cardenassaltos.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Teléfono</h4>
            <p className="text-sm text-gray-400">09984851296</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest">
          Todos los derechos reservados para Cárdenas Saltos Abogados
        </div>
      </footer>
    </div>
  );
}
