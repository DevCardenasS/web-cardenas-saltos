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

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-[#051d40] text-4xl md:text-6xl leading-tight mb-6">
            <span className="block font-black">¿Te abrieron un sumario administrativo</span>
            <span className="block font-medium mt-1">o fuiste destituido injustamente?</span>
          </h1>
          
          <p className="text-[#051d40] text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed font-normal">
            Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, 
            no dejes que el Estado vulnere tus derechos.
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-xl"
          >
            Consulta gratis
          </a>
        </div>
      </section>

      {/* --- IMAGEN PRINCIPAL --- */}
      <section className="w-full">
        <img 
          src="/losep/Expertos-en-normativa-LOSEP-Cardenas-Saltos-Abogados.jpg" 
          alt="Defensa LOSEP Cárdenas Saltos" 
          className="w-full h-auto object-cover max-h-[700px]"
        />
      </section>

      {/* --- SECCIÓN DUAL: SERVICE CARD --- */}
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
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te notificaron el inicio de un sumario administrativo y temes la destitución?"
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Estás sufriendo acoso laboral para obligarte a renunciar?"
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te notificaron una resolución de destitución sin seguir el debido proceso?"
                </p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Te Ayudamos */}
          <div className="bg-[#051d40] p-10 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-[#ffbd4a] text-3xl font-black mb-10 uppercase italic">Te ayudamos</h3>
            <ul className="space-y-8 mb-12">
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
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              className="w-fit bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg block"
            >
              Consulta gratis
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: AGITADORES DE CONCIENCIA CON TÍTULO --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-[#051d40] text-3xl md:text-5xl font-black uppercase leading-tight">
            No permitas que el <br />
            <span className="text-[#ffbd4a]">sistema te deje indefenso</span>
          </h2>
          <div className="w-24 h-2 bg-[#ffbd4a] mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Cada día con el sello de clausura es dinero que no vuelve y sueldos que hay que pagar.",
            "Las multas no deben ser una sentencia de muerte para tu empresa.",
            "Que la burocracia no asfixie tu derecho a trabajar. Peleamos contra la arbitrariedad de los inspectores.",
            "Existen plazos legales que la autoridad ignora; si ellos fallan, tú ganas."
          ].map((text, index) => (
            <div key={index} className="border-l-4 border-[#ffbd4a] bg-gray-50 p-8 shadow-sm">
              <p className="text-[#051d40] text-xl italic font-medium leading-relaxed">
                "{text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN EXPERTO --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-[#051d40] text-3xl md:text-5xl font-bold leading-tight mb-10">
              Expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo.
            </h2>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Consulta gratis
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
              alt="Cárdenas Saltos Abogados Expertos" 
              className="w-full h-auto max-w-lg bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* --- BANNER FINAL --- */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black uppercase">estrategia legal</span>
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
