import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function DefensaLosep() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, necesito defensa urgente por un tema de LOSEP...");

  const servicios = [
    {
      titulo: "Sumarios Administrativos",
      descripcion: "Defensa técnica para servidores públicos frente a procesos disciplinarios que buscan la destitución.",
      beneficios: [
        "Frenamos la destitución: Analizamos el expediente para encontrar errores técnicos que anulen el proceso. [cite: 18]",
        "Derecho a la defensa: Garantizamos que te dejen presentar pruebas y testigos a tu favor.",
        "Anulación por errores de trámite: Ganamos el caso si el Estado no cumplió con los pasos legales.",
        "Seguridad familiar: Proteger la estabilidad y el sueldo de tu hogar frente a decisiones injustas."
      ]
    },
    {
      titulo: "Reintegro y Sueldos Caídos",
      descripcion: "Acciones legales para recuperar tu puesto de trabajo y los valores no percibidos por despidos ilegales.",
      beneficios: [
        "Regreso al puesto: Peleamos por tu restitución inmediata al cargo del que fuiste separado. [cite: 20]",
        "Cobro de sueldos caídos: Logramos el pago de todo el tiempo que estuviste fuera de la institución. [cite: 20]",
        "Limpiamos tu historial: Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo. [cite: 19]",
        "Victoria ante la arbitrariedad: Revertimos resoluciones de destitución sin el debido proceso. [cite: 16]"
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa LOSEP</title>
      </Head>

      {/* HERO SECTION - COPIADO TAL CUAL DEL PDF */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h1 className="text-[#051d40] text-4xl md:text-6xl font-black leading-tight uppercase mb-6">
              ¿Te abrieron un <br />
              <span className="text-[#051d40]">Sumario Administrativo</span> <br />
              <span className="text-[#051d40] font-medium normal-case">o fuiste Destituido injustamente? [cite: 10, 11]</span>
            </h1>
            
            <p className="text-[#051d40] text-xl md:text-2xl mb-10 leading-relaxed max-w-xl">
              Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, no dejes que el Estado vulnere tus derechos. [cite: 12]
            </p>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#051d40] hover:text-white transition-all shadow-xl"
            >
              Consulta gratis [cite: 13]
            </a>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/losep/losep.png" 
                className="w-full max-w-lg rounded-2xl shadow-2xl z-20 relative"
                alt="Defensa LOSEP"
              />
              {/* Elemento decorativo que simula el estilo del PDF */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#ffbd4a] rounded-2xl -z-10"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECCIÓN IDENTIFICACIÓN (¿Te está sucediendo esto?) - DISEÑO PDF */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[#051d40] text-4xl md:text-5xl font-black mb-12 uppercase">
              ¿Te está sucediendo esto? [cite: 14]
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <span className="text-[#ffbd4a] text-2xl font-black">01</span>
                <p className="text-xl text-gray-700 italic">"¿Te notificaron el inicio de un sumario administrativo y temes la destitución?" [cite: 15]</p>
              </div>
              <div className="flex gap-6 items-start border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] text-2xl font-black">02</span>
                <p className="text-xl text-gray-700 italic">"¿Estás sufriendo acoso laboral para obligarte a renunciar?" [cite: 16]</p>
              </div>
              <div className="flex gap-6 items-start border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] text-2xl font-black">03</span>
                <p className="text-xl text-gray-700 italic">"¿Te notificaron una resolución de destitución sin seguir el debido proceso?" [cite: 16]</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#051d40] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-[#ffbd4a] text-3xl font-black mb-8 uppercase italic">Te ayudamos [cite: 17]</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                    <p className="text-lg leading-snug"><span className="font-bold">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso. [cite: 18]</p>
                  </li>
                  <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                    <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                    <p className="text-lg leading-snug"><span className="font-bold">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo. [cite: 19]</p>
                  </li>
                  <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                    <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                    <p className="text-lg leading-snug"><span className="font-bold">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo perdido. [cite: 20]</p>
                  </li>
                </ul>
                <p className="mt-10 text-sm text-white/60 font-medium uppercase tracking-widest pt-6 border-t border-white/10">
                  Expertos en normativa LOSEP y Contraloría [cite: 21]
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* CARDS HORIZONTALES - Estructura de tu código base */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col lg:flex-row bg-white border-2 border-[#051d40] rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[450px]">
            <div className="lg:w-2/5 bg-[#051d40] p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-[#ffbd4a] text-3xl md:text-4xl font-black leading-tight uppercase">{servicio.titulo}</h3>
                <p className="text-white/80 mt-6 text-base font-normal leading-relaxed">{servicio.descripcion}</p>
              </div>
              <div className="mt-10">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">Escríbenos ahora</a>
              </div>
            </div>
            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">Beneficios de nuestra defensa</h4>
              <ul className="grid grid-cols-1 gap-5">
                {servicio.beneficios.map((beneficio, bIndex) => (
                  <li key={bIndex} className="flex gap-4 items-start text-slate-700 text-[0.95rem] font-normal leading-snug">
                    <div className="w-2 h-2 rounded-full bg-[#ffbd4a] mt-1.5 flex-shrink-0"></div>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* BANNER FINAL - FONDO PERSONALIZADO */}
      <section className="relative w-full py-32 overflow-hidden">
        <img 
          src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Estrategia Legal" 
        />
        <div className="absolute inset-0 bg-[#051d40]/85 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-4xl md:text-7xl mb-12">
            <span className="block font-black uppercase">Estrategia legal [cite: 24]</span>
            <span className="block font-light">que genera resultados [cite: 24]</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            Consulta gratis ahora [cite: 25]
          </a>
        </div>
      </section>
    </div>
  );
}
