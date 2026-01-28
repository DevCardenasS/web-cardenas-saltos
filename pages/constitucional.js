import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Constitucional() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre derecho constitucional...");

  // FUNCIÓN DE CONVERSIÓN: Avisa a Google antes de abrir WhatsApp
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

  const servicios = [
    {
      titulo: "Acción de Protección (General y Laboral)",
      descripcion: "La herramienta legal para frenar abusos de instituciones públicas o recuperar tu empleo tras un despido ilegal.",
      beneficios: [
        "Recuperar tu puesto de trabajo: Regresar a trabajar en tu institución.",
        "Cobrar sueldos atrasados: Recibir el pago de todos los meses no trabajados y beneficios de ley.",
        "Indemnización económica: Reparación en dinero por los daños y el estrés causados por el abuso.",
        "Anulación del acto injusto: Dejar sin efecto legal la resolución o carta que te perjudicó.",
        "Sentencia de cumplimiento obligatorio: La autoridad no puede negarse; si no cumple, hay sanciones graves."
      ]
    },
    {
      titulo: "Acción Extraordinaria de Protección (EP)",
      descripcion: "Tu última oportunidad para ganar un juicio que fue sentenciado injustamente por jueces que violaron tus derechos.",
      beneficios: [
        "Revisión en la Corte Constitucional: Que el máximo organismo del país analice tu caso.",
        "Anular sentencias definitivas: Dejar sin efecto fallos que parecían imposibles de cambiar.",
        "Reparación integral: Que se dicten medidas para corregir el daño que te causaron los jueces anteriores.",
        "Sentar precedentes: Lograr que tu caso sirva para que a nadie más le pase lo mismo.",
        "Justicia final: Agotar la última instancia legal permitida en el Ecuador."
      ]
    },
    {
      titulo: "Habeas Data y Acceso a la Información",
      descripcion: "Limpia tu historial crediticio, elimina datos falsos o exige que las instituciones te entreguen documentos que te ocultan.",
      beneficios: [
        "Limpiar central de riesgo: Borrar información negativa que te impide sacar créditos en bancos.",
        "Derecho al olvido: Eliminar noticias o datos antiguos que dañan tu reputación actual.",
        "Obtener documentos clave: Obligar a que te den copias de expedientes o informes que necesitas para defenderte.",
        "Corregir errores de identidad: Actualizar datos erróneos en el Registro Civil o entidades públicas.",
        "Privacidad protegida: Asegurar que nadie use tu información personal sin tu permiso."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Constitucional</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/servicios/abogado-constitucional-ecuador-cardenas-saltos.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Derecho Constitucional" 
        />
        <div className="absolute inset-0 bg-[#051d40]/70 z-10"></div>
        <div className="relative z-20 max-w-5xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Derecho Constitucional</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto font-light italic">Tus derechos fundamentales son intocables. Nosotros los defendemos.</p>
          <div className="mt-10">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-2xl"
            >
              Defender mis derechos
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col lg:flex-row mb-16 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="lg:w-2/5 bg-[#051d40] p-10 md:p-14 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 leading-tight">{servicio.titulo}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">{servicio.descripcion}</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                onClick={handleConversion} // <--- RASTREADOR AÑADIDO AQUÍ
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest self-start hover:bg-white transition-colors"
              >
                Consultar ahora
              </a>
            </div>

            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">Beneficios</h4>
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
