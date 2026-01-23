import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function Losep() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta urgente sobre un proceso LOSEP...");

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa LOSEP</title>
      </Head>

      {/* HERO SECTION - Basado en el PDF */}
      <section className="relative w-full min-h-[80vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-20">
          <div className="order-2 lg:order-1">
            <h1 className="text-[#051d40] text-4xl md:text-6xl leading-[1.1] mb-6">
              <span className="block font-black uppercase">¿Te abrieron un</span>
              <span className="block font-black uppercase text-[#ffbd4a]">Sumario Administrativo</span>
              <span className="block font-medium">o fuite Destituido injustamente?</span>
            </h1>
            <p className="text-[#051d40] text-xl md:text-2xl mb-8 leading-relaxed">
              Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, no dejes que el Estado vulnere tus derechos.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#ffbd4a] hover:text-[#051d40] transition-all shadow-xl"
            >
              Consulta gratis
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img 
              src="/losep/losep.png" 
              alt="Defensa LOSEP" 
              className="w-full max-w-lg object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN AGITADORES - Ventriloquía y Efecto Espejo */}
      <section className="w-full py-16 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#ffbd4a]">
              <p className="text-[#051d40] font-medium">"No eres solo un número de expediente, es tu estabilidad familiar la que está en juego."</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#ffbd4a]">
              <p className="text-[#051d40] font-medium">"Sabemos que el Estado suele ser juez y parte. No estás solo contra el sistema."</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#ffbd4a]">
              <p className="text-[#051d40] font-medium">"Un error en el trámite de la institución puede ser tu salvación legal. Nosotros lo encontramos."</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#ffbd4a]">
              <p className="text-[#051d40] font-medium">"Tu récord profesional de años no puede ser borrado por una decisión política."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN IDENTIFICACIÓN DEL DOLOR (¿Te está sucediendo esto?) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-[#051d40] text-4xl md:text-5xl font-black mb-12 uppercase leading-tight">
              ¿Te está sucediendo esto?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[#051d40]">1</div>
                <p className="text-xl text-gray-700">¿Te notificaron el inicio de un sumario administrativo y temes la destitución?</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[#051d40]">2</div>
                <p className="text-xl text-gray-700">¿Estás sufriendo acoso laboral para obligarte a renunciar?</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[#051d40]">3</div>
                <p className="text-xl text-gray-700">¿Te notificaron una resolución de destitución sin seguir el debido proceso?</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#051d40] p-12 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-[#ffbd4a] text-3xl font-black mb-8 uppercase">Te ayudamos</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-[#ffbd4a] font-bold">✓</span>
                <p><span className="font-bold">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#ffbd4a] font-bold">✓</span>
                <p><span className="font-bold">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#ffbd4a] font-bold">✓</span>
                <p><span className="font-bold">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo perdido.</p>
              </li>
            </ul>
            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="font-medium text-white/80 italic">Expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE FONDO PERSONALIZADO */}
      <section className="relative w-full py-32 overflow-hidden">
        <img 
          src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Fondo Estrategia" 
        />
        <div className="absolute inset-0 bg-[#051d40]/80 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-4xl md:text-7xl mb-12">
            <span className="block font-black uppercase">Estrategia legal</span>
            <span className="block font-light">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            Consulta gratis ahora
          </a>
        </div>
      </section>
    </div>
  );
}
