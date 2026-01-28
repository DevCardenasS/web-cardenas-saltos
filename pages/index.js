import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Se añade esta importación necesaria para navegar
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Home() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION - INTERLINEADO CORREGIDO PARA MÓVIL */}
      <section className="w-full bg-[#051d40] flex flex-col md:flex-row items-stretch overflow-hidden">
        
        {/* TEXTO HERO */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end px-6 md:pr-16 py-12 md:py-24 z-20">
          <div className="max-w-[550px] w-full text-left">
            <h1 className="text-white">
              <span 
                className="block font-black tracking-tight text-4xl md:text-[3.2rem]" 
                style={{ marginBottom: '0rem', lineHeight: '1.1' }}
              >
                Nos importas,
              </span>
              <span 
                className="block font-medium text-white/90 text-[1.75rem] md:text-[3rem]"
                style={{ lineHeight: '1.2' }} 
              >
                por eso te ofrecemos <br className="hidden md:block" />
                las mejores soluciones <br className="hidden md:block" />
                legales
              </span>
            </h1>
            <div className="mt-10">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
                 className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Consulta gratis
              </a>
            </div>
          </div>
        </div>

        {/* IMAGEN HERO */}
        <div className="w-full md:w-1/2 h-[450px] md:h-auto overflow-hidden">
          <img 
              src="/home/Cardenas-Saltos-Hero.jpg" 
              alt="Abogada Cárdenas Saltos" 
              className="w-full h-full object-cover object-center md:object-right-bottom" 
          />
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA */}
      <section className="w-full py-24 px-6 bg-white text-center border-t border-gray-100">
        <h2 
          className="font-medium text-[#051d40] mb-20 leading-tight"
          style={{ fontSize: '2.25rem' }}
        >
          Nuestra experiencia nos avala
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32 grayscale opacity-80">
          <img src="/home/asociacion-de-profesionales-de-gestion-de-riesgos-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-28 md:h-36 object-contain" alt="Asociación" />
          <img src="/home/leal-importaciones-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-24 md:h-32 object-contain" alt="Leal" />
          <img src="/home/kunnaxport-Cardenas-Saltos-Abogados-ecuador.jpg" className="h-20 md:h-28 object-contain" alt="Kunnaxport" />
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section className="w-full py-20 px-6 bg-[#f2f2f2]">
        <h2 className="text-center text-3xl md:text-4xl font-medium text-[#051d40] mb-16 leading-tight">
          ¿En qué te podemos ayudar?
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Derecho administrativo" 
            desc="¿Problemas con el Estado? Te ayudamos a recuperar tu empleo, anular glosas de Contraloría, impugnar multas injustas y cobrar planillas del SERCOP. Somos especialistas en recursos administrativos para revocar sanciones, frenar abusos de autoridad y proteger tu patrimonio con total seguridad legal."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-administrativo.png"
            link="/administrativo" // <-- Conectado
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
          />
          <ServiceCard 
            title="Derecho constitucional" 
            desc="Protegemos tus derechos con resultados reales. Recupera tu puesto de trabajo, limpia tu historial crediticio con Habeas Data o borra datos que dañan tu reputación (Derecho al Olvido). Defensa urgente con medidas cautelares en menos de 48 horas para evitar daños inminentes a tu vida y bienes."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-constitucional.png"
            link="/constitucional" // <-- Conectado
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
          />
          <ServiceCard 
            title="Notarías" 
            desc="Trámites legales rápidos sin ir a juicio. Resolvemos herencias (posesión efectiva), divorcios inmediatos y creación de empresas SAS en tiempo récord. Garantizamos seguridad jurídica en tus escrituras y promesas de compraventa de casas o carros, con total respaldo legal y agilidad en cada proceso."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-notarial-notarias.png"
            link="/notarial" // <-- Conectado
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
          />
          <ServiceCard 
            title="Mediación" 
            desc="Resuelve tus conflictos hoy mismo de forma económica y sin peleas. Acuerdos legales sobre pensiones de alimentos, visitas, tenencia, deudas bancarias y liquidaciones laborales. Evita juicios de años con un acta de mediación que tiene la misma fuerza de una sentencia y garantiza tu paz mental."
            img="/home/home-ayudar-Cardenas-saltos-Abogados-mediacion-pension-alimenticia.png"
            link="/mediacion" // <-- Conectado
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
          />
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 
            className="text-[#051d40] text-4xl md:text-6xl mb-10" 
            style={{ lineHeight: '1' }} 
          >
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, img, link, phoneNumber, whatsappMessage }) {
  return (
    <div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[380px] shadow-2xl group border border-white/5">
      <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-[#051d40] order-first lg:order-last">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-8 lg:w-1/2 text-white flex flex-col justify-between order-last lg:order-first">
        <div>
          <h3 className="text-xl font-medium mb-4 leading-tight text-[#ffbd4a] uppercase tracking-wide">{title}</h3>
          <p className="text-[13px] text-gray-300 leading-relaxed mb-8 font-normal">{desc}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* El botón ahora es un Link que usa la prop 'link' */}
          <Link href={link} className="border border-white/50 text-white px-6 py-3 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase tracking-wider text-center">
            Ver más
          </Link>
          <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
             className="bg-[#ffbd4a] text-[#051d40] px-6 py-3 text-[11px] rounded-full font-bold hover:bg-white transition text-center w-full sm:w-auto uppercase tracking-wider">
            Escríbenos
          </a>
        </div>
      </div>
    </div>
  );
}
