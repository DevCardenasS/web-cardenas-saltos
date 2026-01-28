import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function DefensaLosep() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, necesito ayuda urgente con un tema de LOSEP / Sumario...");

  // Función de disparo para Google Ads
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa LOSEP</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 md:pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-[#051d40] text-3xl md:text-6xl leading-tight mb-6">
            <span className="block font-black">¿Te abrieron un sumario administrativo</span>
            <span className="block font-medium mt-1">o fuiste destituido injustamente?</span>
          </h1>
          
          <p className="text-[#051d40] text-lg md:text-2xl mb-10 max-w-3xl leading-relaxed font-normal">
            Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, 
            no dejes que el Estado vulnere tus derechos.
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            onClick={handleConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-xl"
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#051d40]">
          
          {/* Lado Izquierdo: ¿Estás pasando por esto? */}
          <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#051d40] text-3xl lg:text-5xl font-bold mb-10 uppercase leading-tight">
              ¿Estás pasando por esto?
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-4">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te notificaron el inicio de un sumario administrativo y temes la destitución?"
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-6 md:pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Estás sufriendo acoso laboral para obligarte a renunciar?"
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-6 md:pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te notificaron una resolución de destitución sin seguir el debido proceso?"
                </p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Te ayudamos */}
          <div className="bg-[#051d40] p-8 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-[#ffbd4a] text-3xl md:text-5xl font-black mb-10 uppercase">
              Te ayudamos
            </h3>
            <ul className="space-y-6 md:space-y-8 mb-12">
              <li className="flex gap-4 items-start">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-base md:text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Frenamos la destitución:</span> Analizamos el expediente para encontrar errores técnicos que anulen el proceso.</p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-base md:text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Limpiamos tu historial:</span> Evitamos que la sanción aparezca en el sistema del Ministerio de Trabajo (historial limpio).</p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-base md:text-lg leading-snug"><span className="font-bold text-[#ffbd4a]">Reintegro y Sueldos Caídos:</span> Peleamos por tu regreso al puesto y el pago de todo el tiempo que estuviste fuera.</p>
              </li>
            </ul>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg block"
            >
              Consulta gratis
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN: AUTORIDAD Y RESULTADOS --- */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#051d40] text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight">
            Somos tu mejor opción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-[#ffbd4a] text-5xl md:text-6xl font-black mb-2">19</p>
              <p className="text-[#051d40] text-lg md:text-xl font-bold uppercase tracking-tighter">Años de experiencia</p>
              <p className="text-gray-500 mt-2">Liderando la defensa administrativa en el Ecuador.</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-gray-200 py-10 md:py-0 md:px-12">
              <p className="text-[#ffbd4a] text-5xl md:text-6xl font-black mb-2">+$300k</p>
              <p className="text-[#051d40] text-lg md:text-xl font-bold uppercase tracking-tighter">Dólares recuperados</p>
              <p className="text-gray-500 mt-2">En multas anuladas y valores devueltos a nuestros clientes.</p>
            </div>
            <div className="md:pl-12">
              <p className="text-[#ffbd4a] text-5xl md:text-6xl font-black mb-2 italic">TOP</p>
              <p className="text-[#051d40] text-lg md:text-xl font-bold uppercase tracking-tighter">Expertos sector público</p>
              <p className="text-gray-500 mt-2">Especialistas en la normativa que rige a las instituciones del Estado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN MINIMALISTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-[#051d40] text-3xl md:text-5xl font-black leading-tight md:sticky md:top-32">
              Entendemos lo que estás pasando
            </h2>
          </div>
          <div className="md:w-2/3 grid gap-10 md:gap-12">
            {[
              "No eres solo un número de expediente, es tu estabilidad familiar la que está en juego.",
              "Sabemos que el Estado suele ser juez y parte. No estás solo contra el sistema.",
              "Un error en el trámite de la institución puede ser tu salvación legal. Nosotros lo encontramos.",
              "Tu récord profesional de años no puede ser borrado por una decisión política o un jefe momentáneo."
            ].map((text, index) => (
              <div key={index} className="flex gap-6 group">
                <span className="text-[#ffbd4a] text-xl md:text-2xl font-black">0{index + 1}</span>
                <p className="text-xl md:text-2xl italic font-medium leading-relaxed border-b border-gray-100 pb-8 group-last:border-0 text-[#051d40]">
                  "{text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN EXPERTO --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-[#051d40] text-2xl md:text-5xl leading-tight mb-10">
              <span className="font-black">Tranquilo, </span>
              <span className="font-normal">somos expertos en normativa LOSEP, procesos ante la Contraloría General del Estado y Ministerio de Trabajo.</span>
            </h2>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
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
      <section className="w-full bg-[#ffbd4a] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-3xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
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
