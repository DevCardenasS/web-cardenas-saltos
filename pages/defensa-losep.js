import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function DefensaLosep() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, necesito ayuda urgente con un tema de LOSEP / Sumario...");

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa LOSEP</title>
      </Head>

      {/* --- HERO SECTION: TEXTO LIMPIO --- */}
      <section className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#051d40] text-4xl md:text-6xl font-black leading-tight mb-6">
            ¿Te abrieron un Sumario Administrativo <br />
            [cite_start]o fuiste Destituido injustamente? [cite: 10, 11]
          </h1>
          
          <p className="text-[#051d40] text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed font-normal">
            Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, 
            [cite_start]no dejes que el Estado vulnere tus derechos. [cite: 12]
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
          >
            [cite_start]Consulta gratis [cite: 13]
          </a>
        </div>
      </section>

      {/* --- IMAGEN FULL WIDTH: DEBAJO DEL HERO --- */}
      <section className="w-full">
        <img 
          src="/losep/hero-losep-full.jpg" 
          alt="Defensa LOSEP Cárdenas Saltos" 
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </section>

      {/* --- SECCIÓN DUAL: IDENTIFICACIÓN Y AYUDA --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#051d40]">
          
          {/* Lado Izquierdo: Dolor */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#051d40] text-4xl md:text-5xl font-black mb-12 uppercase leading-tight">
              [cite_start]¿Te está sucediendo esto? [cite: 14]
            </h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                [cite_start]<p className="text-xl text-gray-700 italic">"¿Te notificaron el inicio de un sumario administrativo y temes la destitución?" [cite: 15]</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                [cite_start]<p className="text-xl text-gray-700 italic">"¿Estás sufriendo acoso laboral para obligarte a renunciar?" [cite: 16]</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                [cite_start]<p className="text-xl text-gray-700 italic">"¿Te notificaron una resolución de destitución sin seguir el debido proceso?" [cite: 16]</p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Te Ayudamos */}
          <div className="bg-[#051d40] p-10 md:p-16 text-white flex flex-col justify-center">
            [cite_start]<h3 className="text-[#ffbd4a] text-3xl font-black mb-10 uppercase italic">Te ayudamos [cite: 17]</h3>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                [cite_start]<p className="text-lg leading-snug"><span className="font-bold">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso. [cite: 18]</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                [cite_start]<p className="text-lg leading-snug"><span className="font-bold">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo (historial limpio). [cite: 19]</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                [cite_start]<p className="text-lg leading-snug"><span className="font-bold">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo que estuviste fuera. [cite: 20]</p>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm leading-relaxed text-white/80 font-medium italic">
                [cite_start]Expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo. [cite: 21]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BANNER DE RESULTADOS --- */}
      <section className="relative w-full py-40 overflow-hidden">
        <img 
          src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Estrategia Legal" 
        />
        <div className="absolute inset-0 bg-[#051d40]/85 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-5xl md:text-8xl mb-12 leading-none uppercase">
            [cite_start]<span className="block font-black">Estrategia legal</span> [cite: 24]
            [cite_start]<span className="block font-light italic">que genera resultados</span> [cite: 24]
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#ffbd4a] text-[#051d40] px-14 py-6 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">
            [cite_start]Consulta gratis ahora [cite: 25]
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-[#051d40]">
          <div>
            [cite_start]<h4 className="font-black uppercase text-xs tracking-widest mb-4">Dirección [cite: 26]</h4>
            [cite_start]<p className="text-lg">Edificio La Previsora [cite: 28]</p>
          </div>
          <div>
            [cite_start]<h4 className="font-black uppercase text-xs tracking-widest mb-4">Email [cite: 27]</h4>
            [cite_start]<p className="text-lg">atencion@cardenassaltos.com [cite: 29]</p>
          </div>
          <div>
            [cite_start]<h4 className="font-black uppercase text-xs tracking-widest mb-4">Teléfono [cite: 30]</h4>
            [cite_start]<p className="text-lg">09984851296 [cite: 30]</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
