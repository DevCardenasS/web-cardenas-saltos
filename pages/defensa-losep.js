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

      {/* --- HERO SECTION: ALINEADO A LA IZQUIERDA --- */}
      <section className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-[#051d40] text-4xl md:text-6xl font-black leading-tight mb-6 uppercase">
            ¿Te abrieron un Sumario Administrativo <br />
            o fuiste Destituido injustamente?
          </h1>
          
          <p className="text-[#051d40] text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed font-normal">
            Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, 
            no dejes que el Estado vulnere tus derechos.
          </p>

          {/* BOTÓN AMARILLO */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-xl"
          >
            Consulta gratis
          </a>
        </div>
      </section>

      {/* --- IMAGEN FULL WIDTH: DEBAJO DEL HERO (USANDO TU PRIMERA RUTA) --- */}
      <section className="w-full">
        <img 
          src="/losep/Expertos-en-normativa-LOSEP-Cardenas-Saltos-Abogados.jpg" 
          alt="Defensa LOSEP Cárdenas Saltos" 
          className="w-full h-auto object-cover max-h-[700px]"
        />
      </section>

      {/* --- SECCIÓN DUAL: IDENTIFICACIÓN Y AYUDA (DISEÑO PDF) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#051d40]">
          
          {/* Lado Izquierdo: Dolor */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#051d40] text-4xl md:text-5xl font-black mb-12 uppercase leading-tight">
              ¿Te está sucediendo esto?
            </h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-xl text-gray-700 italic font-medium">"¿Te notificaron el inicio de un sumario administrativo y temes la destitución?"</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-xl text-gray-700 italic font-medium">"¿Estás sufriendo acoso laboral para obligarte a renunciar?"</p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-xl text-gray-700 italic font-medium">"¿Te notificaron una resolución de destitución sin seguir el debido proceso?"</p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Te Ayudamos (Bloque Azul) */}
          <div className="bg-[#051d40] p-10 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-[#ffbd4a] text-3xl font-black mb-10 uppercase italic">Te ayudamos</h3>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso.</p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo (historial limpio).</p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo que estuviste fuera.</p>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm leading-relaxed text-white/80 font-medium italic">
                Expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER FINAL: ESTRATEGIA LEGAL (USANDO TU SEGUNDA RUTA DE FOTO) */}
      <section className="relative w-full overflow-hidden">
        {/* Usamos la imagen de fondo si quieres que sea igual al diseño previo o mantenemos el color sólido que pediste */}
        <div className="bg-[#ffbd4a] py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-left">
            <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
                <span className="block font-black uppercase">Estrategia legal</span>
                <span className="block font-normal">que genera resultados</span>
            </h2>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
                className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                Consulta gratis 
            </a>
            </div>
        </div>
        {/* He dejado el contenedor preparado por si la imagen DCS-Cardenas-Saltos-Abogados.png debe ir aquí de fondo */}
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-[#051d40]">
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Dirección</h4>
            <p className="text-lg italic">Edificio La Previsora</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Email</h4>
            <p className="text-lg italic">atencion@cardenassaltos.com</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4">Teléfono</h4>
            <p className="text-lg italic">09984851296</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
