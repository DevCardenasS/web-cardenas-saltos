import React from 'react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "5939984851296";
  const imgHero = "/home/home-hero-Cardenas-saltos-Abogados-trabajemos-juntos.png";

  return (
    <div className="bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION */}
      <section className="bg-[#051d40] relative overflow-hidden min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center relative px-6">
          
          {/* TEXTO CON PESOS EXACTOS */}
          <div className="md:w-1/2 py-12 md:py-20 z-10 text-left">
            <h1 className="text-white leading-[1.1]">
              <span className="block text-6xl md:text-7xl font-black mb-2">
                Nos importas,
              </span>
              <span className="block text-4xl md:text-5xl font-medium text-white/90">
                por eso te ofrecemos <br />
                las mejores soluciones <br />
                legales
              </span>
            </h1>
            
            <div className="mt-10">
              <a href={`https://wa.me/${phoneNumber}`} 
                 className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Consulta gratis
              </a>
            </div>
          </div>

          {/* IMAGEN HERO */}
          <div className="md:w-1/2 flex justify-end self-end">
            <img 
                src={imgHero} 
                alt="Abogada Cárdenas Saltos" 
                className="w-full h-auto object-contain max-h-[650px]" 
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA */}
      <section className="py-20 px-6 bg-white text-center font-['Gantari']">
        <h2 className="text-2xl font-bold text-[#051d40] mb-12">Nuestra experiencia nos avala</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10 grayscale opacity-60">
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-asociacion-de-profesionales-de-gestion-de-riesgo.png" className="h-16" alt="Asociación" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-leal-asociados.png" className="h-12" alt="Leal" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-kunak-export.png" className="h-10" alt="Kunak" />
        </div>
      </section>

      {/* SECCIÓN SERVICIOS (Igual al PDF) */}
      <section className="py-20 px-6 bg-gray-50 font-['Gantari']">
        <h2 className="text-center text-4xl font-bold text-[#051d40] mb-16 italic">¿En qué te podemos ayudar?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-['Gantari']">
          
          <ServiceCard 
            title="Derecho Administrativo" 
            desc="¿Problemas con el Estado? Te ayudamos a recuperar tu empleo, eliminar glosas de Contraloría, impugnar multas injustas y proteger tu patrimonio con seguridad jurídica."
            img="/home/servicio-home-derecho-administrativo-Cardenas-saltos-Abogados.png"
            phoneNumber={phoneNumber}
          />

          <ServiceCard 
            title="Derecho Constitucional" 
            desc="Protegemos tus derechos con resultados reales. Recupera tu puesto de trabajo, limpia tu historial crediticio con Habeas Data y defiende tu reputación con medidas cautelares urgentes."
            img="/home/servicio-home-derecho-constitucional-Cardenas-saltos-Abogados.png"
            phoneNumber={phoneNumber}
          />

          <ServiceCard 
            title="Notarias" 
            desc="Trámites legales rápidos sin ir a juicio. Posesiones efectivas, divorcios inmediatos y creación de empresas SAS en tiempo récord garantizando agilidad en cada paso."
            img="/home/servicio-home-notarial-Cardenas-saltos-Abogados.png"
            phoneNumber={phoneNumber}
          />

          <ServiceCard 
            title="Mediación" 
            desc="Resuelve tus conflictos hoy mismo de forma económica y sin peleas. Acuerdos legales sobre pensiones, deudas y liquidaciones laborales con acta de mediación definitiva."
            img="/home/servicio-home-mediacion-Cardenas-saltos-Abogados.png"
            phoneNumber={phoneNumber}
          />
        </div>
      </section>

      {/* BANNER FINAL (AMARILLO) */}
      <section className="bg-[#ffbd4a] py-24 text-center font-['Gantari']">
        <h2 className="text-[#051d40] text-5xl font-black mb-10 max-w-4xl mx-auto leading-tight">
          Estrategia legal <br /> que genera resultados
        </h2>
        <a href={`https://wa.me/${phoneNumber}`} 
           className="inline-block bg-[#051d40] text-white px-12 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#051d40] transition-all shadow-xl">
          Consulta gratis
        </a>
      </section>
    </div>
  );
}

// Sub-componente para las tarjetas de servicios
function ServiceCard({ title, desc, img, phoneNumber }) {
  return (
    <div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px] shadow-2xl group font-['Gantari']">
      <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-black mb-4 uppercase leading-tight">{title}</h3>
          <p className="text-[12px] text-gray-300 leading-relaxed mb-6">{desc}</p>
        </div>
        <div className="flex gap-3">
           <button className="border border-white/50 text-white px-4 py-2 text-[10px] rounded-full font-bold hover:bg-white hover:text-[#051d40] transition">
            Ver más
          </button>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="bg-[#ffbd4a] text-[#051d40] px-4 py-2 text-[10px] rounded-full font-black hover:bg-white transition text-center">
            Escríbenos
          </a>
        </div>
      </div>
      <div className="md:w-1/2 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    </div>
  );
}
