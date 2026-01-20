import React from 'react';
import Head from 'next/head';

export default function Constitucional() {
  const phoneNumber = "5939984851296";

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
      descripcion: "Tu última oportunidad para ganar un juicio que fue sentenciado injustamente o con errores de los jueces.",
      beneficios: [
        "Anular juicios perdidos: Lograr que la sentencia injusta quede sin valor para que el caso se revise bien.",
        "Corregir abusos de jueces: Denunciar ante la máxima autoridad que no se respetaron tus derechos.",
        "Justicia definitiva: Llegar a la instancia más alta de Ecuador para proteger tu patrimonio o libertad.",
        "Protección de bienes y derechos: Evitar que una sentencia mal dictada te quite lo que es tuyo.",
        "Precedente legal: Que tu caso sirva para que a nadie más le vuelvan a cometer la misma injusticia."
      ]
    },
    {
      titulo: "Habeas Data (Limpieza de Buró de Crédito)",
      descripcion: "Trámite legal para actualizar o borrar deudas viejas o información falsa de tu historial financiero.",
      beneficios: [
        "Volver a sacar préstamos: Ser apto nuevamente para créditos en bancos y cooperativas.",
        "Borrar deudas ya pagadas: Eliminar del sistema esas manchas que siguen apareciendo por error.",
        "Comprar casa o carro: Limpiar tu perfil para calificar a préstamos hipotecarios o vehiculares.",
        "Actualizar tu puntaje (Score): Lograr que tu historial refleje tu realidad financiera actual y positiva.",
        "Certificado de solvencia: Tener un documento legal que respalde que no tienes deudas pendientes."
      ]
    },
    {
      titulo: "Medidas Cautelares Constitucionales",
      descripcion: "Órdenes inmediatas de un juez para evitar que el Estado o un particular cometan daños irreversibles contra tus derechos.",
      beneficios: [
        "Protección en 2 días: La respuesta más veloz del sistema judicial para casos desesperados.",
        "Evitar embargos o desalojos: Frenar la acción de la autoridad antes de que te quiten tus bienes.",
        "Suspensión de cierres: Mantener tu negocio abierto mientras se pelea el juicio de fondo.",
        "Garantía de salud: Obligar a la entrega inmediata de medicinas o cirugías de emergencia.",
        "Seguridad inmediata: Dormir tranquilo sabiendo que un juez ya ordenó protegerte."
      ]
    },
    {
      titulo: "Derecho al Olvido (Ocultar datos y Limpiar Reputación)",
      descripcion: "Eliminación o bloqueo de noticias, procesos judiciales o información personal que daña tu imagen en internet.",
      beneficios: [
        "Privacidad para tu familia: Bloquear datos personales que pueden ser usados para extorsiones o acoso.",
        "Perfil impecable para socios: Evitar que inversionistas o nuevos jefes vean errores del pasado ya resueltos.",
        "Eliminar antecedentes irrelevantes: Borrar registros de procesos donde fuiste inocente o que ya caducaron.",
        "Paz mental digital: Tener el control total de qué información tuya es pública y cuál no.",
        "Limpieza de reputación: Asegurar que tu nombre en buscadores refleje quién eres hoy."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Constitucional</title>
      </Head>

      {/* HERO SECTION - 2 COLUMNAS ALINEADAS SUPERIOR */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* Columna de Texto: Primero en móvil, Izquierda en Desktop */}
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Protegemos tus derechos fundamentales. Expertos en Acciones de Protección para recuperar tu empleo, 
              Habeas Data para limpiar tu historial crediticio y derecho al olvido para borrar datos que dañan tu reputación. 
              Defensa efectiva con medidas cautelares.
            </p>
            
            <p className="text-[#051d40] text-xl md:text-2xl font-bold mb-8">
              ¡Escríbenos y recibe una consulta gratis!
            </p>

            <a 
              href={`https://wa.me/${phoneNumber}`} 
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Escríbenos ahora
            </a>
          </div>

          {/* Columna de Título: Segundo en móvil, Derecha en Desktop */}
          <div className="lg:w-1/2 order-2">
            <h1 className="text-[#051d40] text-5xl md:text-[5rem] uppercase tracking-tighter leading-[0.85] lg:text-right">
              <span className="block font-black">Derecho</span>
              <span className="block font-medium">constitucional</span>
            </h1>
          </div>
          
        </div>
      </section>

      {/* IMAGEN FULL WIDE */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/constitucional/cardenas-saltos-constitucional.jpg" 
          className="w-full h-full object-cover"
          alt="Derecho Constitucional Cárdenas Saltos"
        />
      </section>

      {/* CARDS HORIZONTALES CON MARCO AZUL */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        {servicios.map((servicio, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row bg-white border-2 border-[#051d40] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 min-h-[450px]"
          >
            {/* Lado Azul (40%) */}
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
                <a 
                  href={`https://wa.me/${phoneNumber}`} 
                  className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Escríbenos ahora
                </a>
              </div>
            </div>

            {/* Lado Blanco (60%) */}
            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">
                Beneficios
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
            <span className="block font-black uppercase tracking-tighter">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
