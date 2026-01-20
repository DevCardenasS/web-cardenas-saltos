import React from 'react';
import Head from 'next/head';

export default function Administrativo() {
  const phoneNumber = "5939984851296";

  const servicios = [
    {
      titulo: "Impugnación de glosas (Contraloría)",
      descripcion: "Defensa técnica para eliminar responsabilidades y multas impuestas por la Contraloría General del Estado.",
      beneficios: [
        "No pagar la multa: Lograr que el valor económico impuesto quede sin efecto.",
        "Evitar el embargo de bienes: Frenar procesos coactivos que buscan quitarte tus cuentas o propiedades.",
        "Seguir en el cargo público: Mantener tu récord limpio para no ser destituido ni inhabilitado.",
        "Ganar por caducidad: Aprovechar los errores de tiempo de la Contraloría para anular el proceso.",
        "Paz financiera: Eliminar deudas millonarias que ponen en riesgo el patrimonio de tu familia."
      ]
    },
    {
      titulo: "Contratación pública (Defensa de proveedores - SERCOP)",
      descripcion: "Asesoría y defensa para empresas que venden al Estado y enfrentan problemas en sus contratos o licitaciones.",
      beneficios: [
        "No ser 'Contratista Incumplido': Evitar la sanción que te impide venderle al Estado por 5 años.",
        "Cobrar planillas atrasadas: Lograr que la institución pública te pague lo que te debe por tus servicios.",
        "Ganar apelaciones de ofertas: Reclamar cuando te descalifican injustamente en una licitación.",
        "Eliminar multas contractuales: Impugnar sanciones económicas aplicadas durante la ejecución de la obra.",
        "Terminación por mutuo acuerdo: Salir de un contrato conflictivo sin demandas ni manchas legales."
      ]
    },
    {
      titulo: "Sumarios administrativos (Defensa de servidores públicos - LOSEP)",
      descripcion: "Defensa para empleados públicos que enfrentan procesos para ser despedidos o sancionados.",
      beneficios: [
        "Conservar tu empleo: Desvanecer las acusaciones para que no te destituyan de la institución.",
        "Limpiar tu expediente: Evitar sanciones en tu hoja de vida que impidan futuros ascensos.",
        "Derecho a la defensa: Garantizar que te dejen presentar pruebas y testigos a tu favor.",
        "Anulación por errores de trámite: Ganar el caso si el Estado no cumplió con los pasos legales.",
        "Seguridad familiar: Proteger la estabilidad y el sueldo de tu hogar frente a decisiones injustas."
      ]
    },
    {
      titulo: "Reclamos SRI (Tributario administrativo)",
      descripcion: "Trámites para recuperar dinero, borrar deudas antiguas o frenar cobros injustos del SRI.",
      beneficios: [
        "Recuperar dinero de impuestos: Lograr que te devuelvan el IVA o Impuesto a la Renta estancado.",
        "Borrar deudas antiguas: Aplicar la prescripción para eliminar deudas que el SRI ya no puede cobrar.",
        "Desbloqueo de cuentas: Levantar las retenciones bancarias de forma rápida y legal.",
        "Pagar en cuotas: Negociar convenios de pago que se ajusten a tu realidad económica actual.",
        "Anular multas injustas: Impugnar actas de determinación donde te quieren cobrar más de lo debido."
      ]
    },
    {
      titulo: "Defensa ante multas y clausuras (Municipios y agencias)",
      descripcion: "Defensa rápida contra cierres de locales o multas impuestas por el Municipio, Bomberos o Intendencia.",
      beneficios: [
        "Reabrir tu negocio rápido: Levantar sellos de clausura para volver a trabajar de inmediato.",
        "Bajar el monto de la multa: Usar la ley para reducir cobros exagerados por faltas menores.",
        "Evitar el cierre definitivo: Defender tu permiso de funcionamiento frente a informes negativos.",
        "Frenar abusos de inspectores: Impugnar actas de control que no tienen sustento legal real.",
        "Ponerse al día legalmente: Guía exacta para cumplir las normas y que no te vuelvan a molestar."
      ]
    },
    {
      titulo: "Recursos administrativos (Apelación y revisión)",
      descripcion: "El camino legal para que el jefe de la institución cambie una decisión que te perjudica.",
      beneficios: [
        "Cambiar una resolución negativa: Lograr que la autoridad superior anule lo que decidió el inferior.",
        "Frenar la sanción mientras peleas: Que la multa no se cobre hasta que se revise el último recurso.",
        "Ahorrar tiempo y dinero: Resolver el problema sin tener que ir a un juicio de años en los tribunales.",
        "Corregir injusticias internas: Obligar a la institución a que revise sus propios errores.",
        "Última oportunidad administrativa: Agotar todas las vías antes de pasar a la vía judicial."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Administrativo</title>
      </Head>

      {/* HERO SECTION - 2 COLUMNAS ALINEADAS SUPERIOR */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* Columna de Texto: Primero en móvil, Izquierda en Desktop */}
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              ¿Te sancionó el Estado? ¿Tienes problemas con AMT, AMC, SUPECIAS, SUPER DE BANCOS, SEPS, etc? 
              Impugnamos glosas de Contraloría, defendemos en sumarios LOSEP y frenamos multas de GADS o Superintendencias. 
              Recibe ayuda en recursos de apelación, reclamos al SRI y contratación pública.
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
              <span className="block font-medium">administrativo</span>
            </h1>
          </div>
          
        </div>
      </section>

      {/* IMAGEN FULL WIDE */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/administrativo/cardenas-saltos-abogados-derecho-administrativo.jpg" 
          className="w-full h-full object-cover"
          alt="Derecho Administrativo Cárdenas Saltos"
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
