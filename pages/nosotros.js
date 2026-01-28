import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function Nosotros() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, me gustaría agendar una asesoría...");

  // --- PIZZA DE GOOGLE ADS: FUNCIÓN DE RASTREO ---
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
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 mb-24">
        <div className="bg-[#051d40] text-white p-10 md:p-20 rounded-[3rem] shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
              Estrategia <br/>
              <span className="font-light italic text-[#ffbd4a]">Hecha a tu medida</span>
            </h2>
          </div>
          <div className="md:w-1/2 border-l border-white/20 pl-0 md:pl-12">
            <p className="text-lg text-white/90 leading-relaxed font-normal">
              En Cárdenas Saltos, no creemos en soluciones genéricas. Cada caso es un mundo, 
              y nuestra misión es diseñar la ruta legal más eficiente para proteger tus intereses. 
              Combinamos experiencia, ética y un enfoque humano para resolver conflictos 
              antes de que se conviertan en problemas mayores.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA / VALORES */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
        <div>
          <h3 className="text-[#051d40] text-sm font-black uppercase tracking-[0.3em] mb-6">Nuestra visión</h3>
          <p className="text-slate-700 text-xl leading-relaxed font-normal">
            Buscamos ser el referente de confianza para ciudadanos y empresas en Ecuador, 
            siendo el puente entre los problemas legales complejos y las soluciones definitivas 
            mediante el derecho y la mediación.
          </p>
        </div>
        <div>
          <h3 className="text-[#051d40] text-sm font-black uppercase tracking-[0.3em] mb-6">Valores</h3>
          <ul className="space-y-4">
            {['Transparencia total en cada proceso', 'Agilidad en la respuesta', 'Defensa firme de tus derechos'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700 font-medium text-lg">
                <div className="w-2 h-2 rounded-full bg-[#ffbd4a]"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECCIÓN CLIENTES / EXPERIENCIA */}
      <section className="w-full py-24 bg-slate-50 text-center px-6 border-y border-slate-200">
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
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
            onClick={handleConversion} // <--- AQUÍ ESTÁ EL RASTREADOR DE GOOGLE ADS
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
