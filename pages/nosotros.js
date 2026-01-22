import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Nosotros() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Nosotros</title>
      </Head>

      {/* HERO - Texto fluido sin saltos forzados en responsive */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/nosotros/cardenas-saltos-abogados-hero-nosotros.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Cárdenas Saltos Hero"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 max-w-5xl px-6 text-center">
          <h1 className="text-white text-3xl md:text-5xl leading-tight">
            <span className="font-black">Nuestro compromiso es </span>
            <span className="font-medium">acompañarte en el proceso y darte los mejores resultados</span>
          </h1>
        </div>
      </section>

      {/* CARD AZUL ESTRATEGIA */}
      <section className="w-full bg-white pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-[#051d40] rounded-[40px] md:rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end border-r-0 lg:border-r border-white/10 pr-0 lg:pr-16">
            <img src="/nosotros/nosotros-logo-blanco-CS-2.png" className="h-40 md:h-52 object-contain" alt="Logo" />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-[#ffbd4a] text-3xl md:text-4xl font-medium mb-12">Es clave para tu estrategia legal</h3>
            <div className="grid gap-12">
              <div className="flex gap-8 items-start">
                <img src="/nosotros/procesos-cardenas-saltos-abogados.svg" className="w-16 h-16 flex-shrink-0" alt="Icono" />
                <p className="text-white/80 text-xl leading-relaxed pt-2">
                  <span className="font-black text-white">Experiencia en procesos legales de instituciones</span> como ministerios gubernamentales
                </p>
              </div>
              <div className="flex gap-8 items-start">
                <img src="/nosotros/asesoramientos-entidades-ecuatorianas-cardenas-saltos-abogados.svg" className="w-16 h-16 flex-shrink-0" alt="Icono" />
                <p className="text-white/80 text-xl leading-relaxed pt-2">
                  <span className="font-black text-white">Experiencia en asesoramiento jurídico de alto nivel</span> en diversas entidades del Estado Ecuatoriano
                </p>
              </div>
              <div className="flex gap-8 items-start">
                <img src="/nosotros/litigio-cardenas-saltos-abogados.svg" className="w-16 h-16 flex-shrink-0" alt="Icono" />
                <p className="text-white/80 text-xl leading-relaxed pt-2">
                  <span className="font-black text-white">Experiencia en Litigios de sanciones estatales</span> y representación en juzgados y tribunales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA (Más aire: py-32) */}
      <section className="w-full py-32 px-6 bg-white text-center">
        <h2 className="font-medium text-[#051d40] mb-20 leading-tight text-[2.25rem]">Nuestra experiencia nos avala</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32 grayscale opacity-80">
          <img src="/home/asociacion-de-profesionales-de-gestion-de-riesgos-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-28 md:h-36 object-contain" alt="Asociación" />
          <img src="/home/leal-importaciones-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-24 md:h-32 object-contain" alt="Leal" />
          <img src="/home/kunnaxport-Cardenas-Saltos-Abogados-ecuador.jpg" className="h-20 md:h-28 object-contain" alt="Kunnaxport" />
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}

Nosotros.transparentNavbar = true;
