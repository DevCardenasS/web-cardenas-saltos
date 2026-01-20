import React from 'react';
import Head from 'next/head';

export default function Mediacion() {
  const phoneNumber = "5939984851296";

  const servicios = [
    {
      titulo: "Pensión alimenticia, régimen de visitas y tenencia",
      descripcion: "Acuerdo integral para organizar la vida de los hijos: desde cuánto se paga de pensión hasta con quién viven y cuándo se visitan[cite: 149, 150].",
      beneficios: [
        "Aumento o Reducción de Pensión: Ajustar el valor legal si el padre/madre gana más o si se quedó sin empleo[cite: 153, 154].",
        "Horarios de Visitas Claros: Definir días, feriados y vacaciones para evitar peleas y llamadas constantes[cite: 155, 156].",
        "Acuerdo de Tenencia: Establecer legalmente con quién vivirán los hijos de forma estable[cite: 157].",
        "Ahorro de Juicios Largos: Resolver en una hora lo que un Juez de Familia tarda 6 meses o más[cite: 158].",
        "Acta con Fuerza de Sentencia: Si el acuerdo no se cumple, se puede pedir apremio o ejecución inmediata[cite: 159]."
      ]
    },
    {
      titulo: "Liquidaciones Laborales (Empresa y Empleado)",
      descripcion: "Espacio para pactar el pago de liquidaciones, despidos o bonificaciones de forma amistosa y legal[cite: 160, 161].",
      beneficios: [
        "Cobro Inmediato: El trabajador recibe su dinero sin esperar años de juicio laboral[cite: 164].",
        "Cero Multas para la Empresa: Evitar la sanción del Ministerio del Trabajo por falta de pago a tiempo[cite: 165].",
        "Cálculos Legales Correctos: Revisión profesional de décimos, vacaciones y desahucios[cite: 166].",
        "Seguridad Total: El acta impide que el empleado pueda volver a demandar por el mismo tema[cite: 167].",
        "Planes de Pago: Posibilidad de pactar cuotas si la empresa no tiene liquidez total inmediata[cite: 168]."
      ]
    },
    {
      titulo: "Reestructuración de deudas (Bancos y Cooperativas)",
      descripcion: "Negociación directa con acreedores para conseguir nuevas cuotas que el cliente sí pueda pagar[cite: 169, 170].",
      beneficios: [
        "Frenar el Acoso de Cobranza: Detener las llamadas insistentes y las amenazas de juicio[cite: 173].",
        "Nuevos Plazos y Cuotas: Lograr que el banco extienda el tiempo y baje el valor de la cuota mensual[cite: 174].",
        "Bajar Intereses de Mora: Negociar la reducción de recargos por atrasos[cite: 175].",
        "Evitar Embargos: Detener el proceso de quitarte el sueldo, el carro o la casa[cite: 176].",
        "Certificado de Acuerdo: Un documento legal que demuestra que estás cumpliendo con tus pagos[cite: 177]."
      ]
    },
    {
      titulo: "Conflictos de Inquilinato (Arriendos)",
      descripcion: "Solución de problemas por falta de pago de renta, daños al inmueble o entrega de locales[cite: 178, 179].",
      beneficios: [
        "Desalojo Pactado: Acordar una fecha fija para desocupar sin necesidad de usar la fuerza pública[cite: 182].",
        "Plan para Pagar Arriendos: Reconocer la deuda y pactar cómo se va a cancelar lo adeudado[cite: 183].",
        "Devolución de Garantía: Liquidación justa descontando daños reales y servicios pendientes[cite: 184].",
        "Evitar Juicios de Inquilinato: Ahorrar miles de dólares en abogados y trámites judiciales eternos[cite: 185].",
        "Paz entre las Partes: Terminar la relación arrendaticia sin violencia ni rencores[cite: 186]."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Mediación</title>
      </Head>

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Resuelve tus conflictos de forma rápida y económica sin juicios[cite: 144]. Logra acuerdos legales en pensión alimenticia, visitas, tenencia, deudas y liquidaciones laborales[cite: 145]. Total validez ante la ley, menos estrés y resultados rápidos[cite: 146].
            </p>
            <p className="text-[#051d40] text-xl md:text-2xl font-bold mb-8">
              ¡Escríbenos y recibe una consulta gratis! [cite: 147]
            </p>
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Escribenos ahora [cite: 148]
            </a>
          </div>
          <div className="lg:w-1/2 order-2">
            <h1 className="text-[#051d40] text-5xl md:text-[5rem] uppercase tracking-tighter leading-[0.85] lg:text-right">
              <span className="block font-black">Mediación</span>
            </h1>
          </div>
        </div>
      </section>

      {/* IMAGEN FULL WIDE */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/mediacion/mediacion-cardenas-saltos.jpg" 
          className="w-full h-full object-cover"
          alt="Mediación Cárdenas Saltos"
        />
      </section>

      {/* CARDS HORIZONTALES */}
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
                <a 
                  href={`https://wa.me/${phoneNumber}`} 
                  className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Escríbenos ahora
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">
                Posibles beneficios [cite: 152, 163, 172]
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
            <span className="block font-black uppercase tracking-tighter">Estrategia legal [cite: 187]</span>
            <span className="block font-normal">que genera resultados [cite: 188]</span>
          </h2>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis [cite: 189]
          </a>
        </div>
      </section>
    </div>
  );
}
