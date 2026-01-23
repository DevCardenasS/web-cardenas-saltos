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

      {/* --- HERO SECTION (TEXTO ARRIBA + IMAGEN DEBAJO IGUAL AL PDF) --- */}
      <section className="pt-32 pb-12 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Títulos en bloques para control total del diseño */}
          <h1 className="text-[#051d40] leading-[1.1] mb-8">
            <span className="block text-4xl md:text-6xl font-black uppercase">¿Te abrieron un</span>
            <span className="block text-4xl md:text-6xl font-black uppercase">Sumario Administrativo</span>
            <span className="block text-3xl md:text-5xl font-medium mt-2">o fuiste Destituido injustamente?</span>
          </h1>
          
          <p className="text-[#051d40] text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, no dejes que el Estado vulnere tus derechos.
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="inline-block bg-[#051d40] text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#ffbd4a] hover:text-[#051d40] transition-all shadow-xl mb-20"
          >
            Consulta gratis
          </a>
          
          {/* La imagen losep.png va justo debajo del botón */}
          <div className="w-full flex justify-center">
            <img 
              src="/losep/losep.png" 
              alt="Defensa LOSEP Cárdenas Saltos" 
              className="w-full max-w-4xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DUAL: IDENTIFICACIÓN Y AYUDA (CENTRO DEL PDF) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#051d40]">
          
          {/* Columna Izquierda: Dolor (Blanco) */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#051d40] text-4xl md:text-5xl font-black mb-12 uppercase leading-tight">
              ¿Te está sucediendo esto?
            </h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <span className="text-[#ffbd4a] font-black text-2xl">●</span>
                <p className="text-xl text-gray-700 italic">"¿Te notificaron el inicio de un sumario administrativo y temes la destitución?"</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">●</span>
                <p className="text-xl text-gray-700 italic">"¿Estás sufriendo acoso laboral para obligarte a renunciar?"</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">●</span>
                <p className="text-xl text-gray-700 italic">"¿Te notificaron una resolución de destitución sin seguir el debido proceso?"</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Te Ayudamos (Azul) */}
          <div className="bg-[#051d40] p-10 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-[#ffbd4a] text-3xl font-black mb-10 uppercase italic">Te ayudamos</h3>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo (historial limpio).</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo que estuviste fuera.</p>
              </li>
            </ul>
            
            {/* Pie del bloque azul */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm leading-relaxed text-white/80 font-medium italic mb-8">
                Expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg"
              >
                Consulta gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- BANNER DE CIERRE (FONDO CON IMAGEN SEGÚN PDF) --- */}
      <section className="relative w-full py-40 overflow-hidden">
        <img 
          src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Estrategia Legal Cárdenas Saltos" 
        />
        <div className="absolute inset-0 bg-[#051d40]/85 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-5xl md:text-8xl mb-12 leading-none uppercase">
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-light italic">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#ffbd4a] text-[#051d40] px-14 py-6 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">
            Consulta gratis ahora
          </a>
        </div>
      </section>

      {/* --- FOOTER INFORMATIVO --- */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-[#051d40]">
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Dirección</h4>
            <p className="text-lg">Edificio La Previsora</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Email</h4>
            <p className="text-lg">atencion@cardenassaltos.com</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Teléfono</h4>
            <p className="text-lg">0984851296</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
