import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function Mediacion() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, necesito información sobre un proceso de mediación...");

  // FUNCIÓN DE CONVERSIÓN: Llama a la configuración de _app.js
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

  const servicios = [
    {
      titulo: "Pensión alimenticia, régimen de visitas y tenencia",
      descripcion: "Acuerdo integral para organizar la vida de los hijos: desde cuánto se paga de pensión hasta con quién viven y cuándo se visitan.",
      beneficios: [
        "Aumento o Reducción de Pensión: Ajustar el valor legal si el padre/madre gana más o si se quedó sin empleo.",
        "Horarios de Visitas Claros: Definir días, feriados y vacaciones para evitar peleas y llamadas constantes.",
        "Acuerdo de Tenencia: Establecer legalmente con quién vivirán los hijos de forma estable.",
        "Ahorro de Juicios Largos: Resolver en una hora lo que un Juez de Familia tarda 6 meses o más.",
        "Acta con Fuerza de Sentencia: Si el acuerdo no se cumple, se puede pedir apremio o ejecución inmediata."
      ]
    },
    {
      titulo: "Liquidaciones Laborales (Empresa y Empleado)",
      descripcion: "Espacio para pactar el pago de liquidaciones, despidos o bonificaciones de forma amistosa y legal.",
      beneficios: [
        "Cobro Inmediato: El trabajador recibe su dinero sin esperar años de juicio laboral.",
        "Cero Multas para la Empresa: Evitar la sanción del Ministerio del Trabajo por falta de pago a tiempo.",
        "Cálculos Legales Correctos: Revisión profesional de décimos, vacaciones y desahucios.",
        "Seguridad Jurídica: El acta de mediación impide que luego existan demandas por los mismos valores.",
        "Confidencialidad: El acuerdo es privado y no mancha el récord de la empresa ni del empleado."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Centro de Mediación</title>
      </Head>

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Resuelve tus conflictos de forma rápida, económica y con total validez legal. 
              El acta de mediación tiene la misma fuerza que una sentencia dictada por un juez, 
              pero sin el desgaste de un juicio largo.
            </p>
            <p className="text-[#051d40] text-xl md:text-2xl font-bold mb-8">
              ¡Agenda tu audiencia hoy mismo!
            </p>
            {/* BOTÓN HERO CON TRACKING */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Iniciar mediación
            </a>
          </div>
          <div className="lg:w-1/2 order-2">
            <h1 className="text-[#051d40] text-4xl md:text-[5rem] uppercase tracking-tighter leading-[0.85] lg:text-right">
              <span className="block font-black">Centro de</span>
              <span className="block font-medium">mediación</span>
            </h1>
          </div>
        </div>
      </section>

      {/* IMAGEN CENTRAL */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/mediacion/mediacion-familiar-laboral-ecuador.jpg" 
          className="w-full h-full object-cover"
          alt="Centro de Mediación Cárdenas Saltos"
        />
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        {servicios.map((servicio, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row bg-white border-2 border-[#051d40] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 min-h-[450px]"
          >
            <div className="lg:w-2/5 bg-[#051d40] p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-[#ffbd4a] text-3xl md:text-4xl font-black leading-tight">
                  {servicio.titulo}
                </h3>
                <p className="text-white/80 mt-6 text-base font-normal leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
              <div className="mt-10">
                {/* BOTÓN SERVICIO CON TRACKING */}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
                  onClick={handleConversion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Agendar audiencia
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">
                Posibles beneficios
              </h4>
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

      {/* BANNER FINAL */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          {/* BOTÓN FINAL CON TRACKING */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
            onClick={handleConversion}
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
