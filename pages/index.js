import React from 'react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "5939984851296";

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION - ESTRUCTURA DE REFERENCIA */}
      <section className="w-full bg-[#051d40] min-h-[600px] md:min-h-[85vh] flex items-stretch overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-6">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="py-16 md:py-24 z-20 flex flex-col justify-center h-full">
            <h1 className="text-white text-left">
              <span 
                className="block font-black tracking-tight mb-[0.7rem]" 
                style={{ fontSize: '3.2rem', lineHeight: '1' }}
              >
                Nos importas,
              </span>
              <span 
                className="block font-medium text-white/90"
                style={{ fontSize: '3rem', lineHeight: '0.9' }}
              >
                por eso te ofrecemos <br />
                las mejores soluciones <br />
                legales
              </span>
            </h1>
            <div className="mt-12">
              <a href={`https://wa.me/${phoneNumber}`} 
                 className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Consulta gratis
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: IMAGEN (Alineada al fondo para eliminar aire azul) */}
          <div className="h-full w-full flex items-end justify-end self-end relative min-h-[400px] md:min-h-full">
            <img 
                src="/home/Cardenas-Saltos-Hero.jpg" 
                alt="Abogada Cárdenas Saltos" 
                className="w-full h-full object-contain object-right-bottom" 
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA - RUTAS CORREGIDAS */}
      <section className="w-full py-24 px-6 bg-white text-center">
        <h2 className="text-2xl font-medium text-[#051d40] mb-16">Nuestra experiencia nos avala</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-16 md:gap-24 grayscale opacity-70">
          <img 
            src="/home/asociacion-de-profesionales-de-gestion-de-riesgos-Cardenas-Saltos-Abogados-Ecuador.jpg" 
            className="h-20 md:h-24 object-contain" 
            alt="Asociación"
          />
          <img 
            src="/home/leal-importaciones-Cardenas-Saltos-Abogados-Ecuador.jpg" 
            className="h-16 md:h-20 object-contain" 
            alt="Leal"
          />
          <img 
            src="/home/kunnaxport-Cardenas-Saltos-Abogados-ecuador.jpg" 
            className="h-14 md:h-18 object-contain" 
            alt="Kunnaxport"
          />
        </div>
      </section>

      {/* SECCIÓN SERVICIOS - TÍTULOS AMARILLOS Y ORDEN FOTO-TEXTO EN MÓVIL */}
      <section className="w-full py-20 px-6 bg-[#f2f2f2]">
        <h2 className="text-center text-4xl font-medium text-[#051d40] mb-16">¿En qué te podemos ayudar?</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Derecho administrativo" 
            desc="¿Problemas con el Estado? Te ayudamos a recuperar tu empleo, anular glosas de Contraloría, impugnar multas injustas y cobrar planillas del SERCOP..."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-administrativo.png"
            phoneNumber={phoneNumber}
          />
          <ServiceCard 
            title="Derecho constitucional" 
            desc="Protegemos tus derechos con resultados reales. Recupera tu puesto de trabajo, limpia tu historial crediticio con Habeas Data o borra datos..."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-constitucional.png"
            phoneNumber={phoneNumber}
          />
          <ServiceCard 
            title="Notarías" 
            desc="Trámites legales rápidos sin ir a juicio. Resolvemos herencias (posesión efectiva), divorcios inmediatos y creación de empresas SAS..."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-notarial-notarias.png"
            phoneNumber={phoneNumber}
          />
          <ServiceCard 
            title="Mediación" 
            desc="Resuelve tus conflictos hoy mismo de forma económica y sin peleas. Acuerdos legales sobre pensiones de alimentos, visitas, tenencia..."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-mediacion-pension-alimenticia.png"
            phoneNumber={phoneNumber}
          />
        </div>
      </section>

      {/* BANNER FINAL - LINE HEIGHT 0.7 */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-5xl md:text-6xl mb-12" style={{ lineHeight: '0.7' }}>
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-block bg-[#051d40] text-white px-16 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, img, phoneNumber }) {
  return (
    <div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[350px] shadow-2xl group border border-white/5">
      {/* IMAGEN: Primero en móvil */}
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-[#051d40] order-first md:order-last">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      {/* TEXTO Y BOTONES */}
      <div className="p-8 md:w-1/2 text-white flex flex-col justify-between order-last md:order-first">
        <div>
          <h3 className="text-xl font-medium mb-4 leading-tight text-[#ffbd4a]">{title}</h3>
          <p className="text-[12px] text-gray-300 leading-relaxed mb-8 font-normal">{desc}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="border border-white/50 text-white px-5 py-2.5 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase">
            Ver más
          </button>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="bg-[#ffbd4a] text-[#051d40] px-5 py-2.5 text-[11px] rounded-full font-bold hover:bg-white transition text-center w-full sm:w-auto uppercase">
            Escríbenos
          </a>
        </div>
      </div>
    </div>
  );
}
