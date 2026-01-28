import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Nosotros() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  // FUNCIÓN DE CONVERSIÓN: Avisa a Google antes de abrir WhatsApp
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

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
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#051d40] rounded-[3rem] p-10 md:p-20 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-[#ffbd4a] text-sm font-black uppercase tracking-[0.3em] mb-10">
              Sobre la firma
            </h2>
            <p className="text-2xl md:text-4xl font-medium leading-tight mb-12">
              Somos una firma jurídica especializada en Derecho Administrativo y Constitucional, 
              con más de <span className="text-[#ffbd4a] font-black italic">19 años de trayectoria</span>.
            </p>
            <div className="h-[2px] w-full bg-white/10 mb-12"></div>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-normal text-justify">
              Nacimos con el propósito de equilibrar la balanza entre el Estado y el ciudadano. 
              Entendemos que detrás de cada glosa, cada sumario o cada vulneración de derechos hay 
              una persona, una familia o una empresa que busca justicia. Nuestra estrategia combina el 
              rigor técnico con una defensa humana y cercana.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN VALORES / EXPERIENCIA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
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
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             onClick={handleConversion}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
