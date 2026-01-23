import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function DefensaSancionatoria() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, mi negocio fue clausurado o recibí una multa y necesito ayuda urgente...");

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa ante Clausuras y Multas</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 md:pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-[#051d40] text-3xl md:text-6xl leading-tight mb-6">
            <span className="block font-black">¿Tu negocio fue clausurado</span>
            <span className="block font-medium mt-1">o recibiste una multa injusta?</span> 
          </h1>
          
          <p className="text-[#051d40] text-lg md:text-2xl mb-10 max-w-3xl leading-relaxed font-normal">
            Impugnamos sanciones de Municipios, Agencias de Control y Superintendencias. 
            Reactiva tu economía inmediatamente. 
          </p>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-xl"
          >
            Consulta gratis 
          </a>
        </div>
      </section>

      {/* --- IMAGEN PRINCIPAL --- */}
      <section className="w-full">
        <img 
          src="sancionatorio/defensa-sancionatoria-sanciones-administrativas.jpg" 
          alt="Defensa legal ante clausura de negocios" 
          className="w-full h-auto object-cover max-h-[700px]"
        />
      </section>

      {/* --- SECCIÓN DUAL: SERVICE CARD --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#051d40]">
          
          {/* Lado Izquierdo: ¿Te está sucediendo esto? */}
          <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-[#051d40] text-3xl lg:text-5xl font-bold mb-10 uppercase leading-tight">
              ¿Te está sucediendo esto? 
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-4">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te clausuraron el local injustamente y estás perdiendo ventas cada hora?" 
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-6 md:pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Te llegó una multa desproporcionada de la AMC, Intendencia o Municipio que es imposible de pagar?" 
                </p>
              </div>
              <div className="flex gap-4 border-t border-gray-100 pt-6 md:pt-8">
                <span className="text-[#ffbd4a] font-black text-2xl">•</span>
                <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "¿Presentaste un reclamo y la autoridad ignora tu apelación?" 
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
                <p className="text-base md:text-lg leading-snug">
                  <span className="font-bold text-[#ffbd4a]">Suspensión Inmediata:</span> Aplicamos medidas para que el negocio siga operando o la multa no se cobre mientras peleamos. 
                </p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-base md:text-lg leading-snug">
                  <span className="font-bold text-[#ffbd4a]">Ahorro y Anulación:</span> Reducimos drásticamente los montos o eliminamos multas por falta de sustento legal. 
                </p>
              </li>
              <li className="flex gap-4 items-start border-t border-white/10 pt-6">
                <span className="text-[#ffbd4a] font-bold text-xl">✓</span>
                <p className="text-base md:text-lg leading-snug">
                  <span className="font-bold text-[#ffbd4a]">Silencio Administrativo:</span> Si la autoridad no responde en los plazos legales, exigimos que ganes el caso por ley. 
                </p>
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

      {/* --- SECCIÓN: AUTORIDAD Y RESULTADOS (DEBAJO DE SERVICE CARD) --- */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* --- SECCIÓN MINIMALISTA: TU ESFUERZO NO PUEDE DETENERSE --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-[#051d40] text-3xl md:text-5xl font-black leading-tight md:sticky md:top-32">
              Tu esfuerzo no puede detenerse
            </h2>
          </div>
          <div className="md:w-2/3 grid gap-10 md:gap-12">
            {[
              "Cada día con el sello de clausura es dinero que no vuelve y sueldos que hay que pagar.",
              "Las multas no deben ser una sentencia de muerte para tu empresa.",
              "Que la burocracia no asfixie tu derecho a trabajar. Peleamos contra la arbitrariedad de los inspectores.",
              "Existen plazos legales que la autoridad ignora; si ellos fallan, tú ganas."
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
              <span className="font-normal">te ofrecemos representación especializada ante Municipios (AMC/AMT), ARCSA, Intendencias, SRI y Superintendencias.</span> 
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
              src="losep/DCS-Cardenas-Saltos-Abogados.png" 
              alt="Abogado experto en sanciones administrativas" 
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
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis 
          </a>
        </div>
      </section>
    </div>
  );
}
