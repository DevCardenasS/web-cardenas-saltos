import React from 'react';
import Head from 'next/head';

export default function Administrativo() {
  const phoneNumber = "5939984851296";

  const servicios = [
    {
      titulo: "Impugnación de Glosas (Contraloría)",
      descripcion: "Defensa técnica para eliminar responsabilidades y multas impuestas por la Contraloría General del Estado. [cite: 15, 16]",
      beneficios: [
        "No pagar la multa: Lograr que el valor económico impuesto quede sin efecto. [cite: 18]",
        "Evitar el embargo de bienes: Frenar procesos coactivos que buscan quitarte tus cuentas o propiedades. [cite: 19]",
        "Seguir en el cargo público: Mantener tu récord limpio para no ser destituido ni inhabilitado. [cite: 20]",
        "Ganar por caducidad: Aprovechar los errores de tiempo de la Contraloría para anular el proceso. [cite: 21]",
        "Paz financiera: Eliminar deudas millonarias que ponen en riesgo el patrimonio de tu familia. [cite: 22]"
      ]
    },
    {
      titulo: "Contratación Pública (Defensa de Proveedores - SERCOP)",
      descripcion: "Asesoría y defensa para empresas que venden al Estado y enfrentan problemas en sus contratos o licitaciones. [cite: 24, 25]",
      beneficios: [
        "No ser 'Contratista Incumplido': Evitar la sanción que te impide venderle al Estado por 5 años. [cite: 27]",
        "Cobrar planillas atrasadas: Lograr que la institución pública te pague lo que te debe por tus servicios. [cite: 28]",
        "Ganar apelaciones de ofertas: Reclamar cuando te descalifican injustamente en una licitación. [cite: 29]",
        "Eliminar multas contractuales: Impugnar sanciones económicas aplicadas durante la ejecución de la obra. [cite: 30]",
        "Terminación por mutuo acuerdo: Salir de un contrato conflictivo sin demandas ni manchas legales. [cite: 31]"
      ]
    },
    {
      titulo: "Sumarios Administrativos (Defensa de Servidores Públicos - LOSEP)",
      descripcion: "Defensa para empleados públicos que enfrentan procesos para ser despedidos o sancionados. [cite: 33, 34]",
      beneficios: [
        "Conservar tu empleo: Desvanecer las acusaciones para que no te destituyan de la institución. [cite: 36]",
        "Limpiar tu expediente: Evitar sanciones en tu hoja de vida que impidan futuros ascensos. [cite: 37]",
        "Derecho a la defensa: Garantizar que te dejen presentar pruebas y testigos a tu favor. [cite: 38, 39]",
        "Anulación por errores de trámite: Ganar el caso si el Estado no cumplió con los pasos legales. [cite: 40, 41]",
        "Seguridad familiar: Proteger la estabilidad y el sueldo de tu hogar frente a decisiones injustas. [cite: 42]"
      ]
    },
    {
      titulo: "Reclamos SRI (Tributario Administrativo)",
      descripcion: "Trámites para recuperar dinero, borrar deudas antiguas o frenar cobros injustos del SRI. [cite: 44, 45]",
      beneficios: [
        "Recuperar dinero de impuestos: Lograr que te devuelvan el IVA o Impuesto a la Renta estancado. [cite: 48]",
        "Borrar deudas antiguas: Aplicar la prescripción para eliminar deudas que el SRI ya no puede cobrar. [cite: 49]",
        "Desbloqueo de cuentas: Levantar las retenciones bancarias de forma rápida y legal. [cite: 50]",
        "Pagar en cuotas: Negociar convenios de pago que se ajusten a tu realidad económica actual. [cite: 51]",
        "Anular multas injustas: Impugnar actas de determinación donde te quieren cobrar más de lo debido. [cite: 52]"
      ]
    },
    {
      titulo: "Defensa ante Multas y Clausuras (Municipios y Agencias)",
      descripcion: "Defensa rápida contra cierres de locales o multas impuestas por el Municipio, Bomberos o Intendencia. [cite: 53, 54]",
      beneficios: [
        "Reabrir tu negocio rápido: Levantar sellos de clausura para volver a trabajar de inmediato. [cite: 57]",
        "Bajar el monto de la multa: Usar la ley para reducir cobros exagerados por faltas menores. [cite: 58]",
        "Evitar el cierre definitivo: Defender tu permiso de funcionamiento frente a informes negativos. [cite: 59, 60]",
        "Frenar abusos de inspectores: Impugnar actas de control que no tienen sustento legal real. [cite: 61]",
        "Ponerse al día legalmente: Guía exacta para cumplir las normas y que no te vuelvan a molestar. [cite: 62]"
      ]
    },
    {
      titulo: "Recursos Administrativos (Apelación y Revisión)",
      descripcion: "El camino legal para que el jefe de la institución cambie una decisión que te perjudica. [cite: 63, 64]",
      beneficios: [
        "Cambiar una resolución negativa: Lograr que la autoridad superior anule lo que decidió el inferior. [cite: 66, 67]",
        "Frenar la sanción mientras peleas: Que la multa no se cobre hasta que se revise el último recurso. [cite: 68]",
        "Ahorrar tiempo y dinero: Resolver el problema sin tener que ir a un juicio de años en los tribunales. [cite: 69]",
        "Corregir injusticias internas: Obligar a la institución a que revise sus propios errores. [cite: 70]",
        "Última oportunidad administrativa: Agotar todas las vías antes de pasar a la vía judicial. [cite: 71]"
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Administrativo [cite: 1, 9]</title>
      </Head>

      {/* TEXT HERO SECTION - Fondo Blanco */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#051d40] text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            Derecho Administrativo [cite: 9]
          </h1>
          <div className="max-w-4xl">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-6">
              ¿Te sancionó el Estado? ¿Tienes problemas con AMT, AMC, SUPERÍAS, SUPERBANCOS, SEPS, etc? [cite: 10] <br />
              Impugnamos glosas de Contraloría, defendemos en sumarios LOSEP y frenamos multas de GADS o Superintendencias. [cite: 10] <br />
              Expertos en recursos de apelación, reclamos al SRI y contratación pública. [cite: 11] <br />
              ¡Escríbenos ahora y recupera tu tranquilidad legal! [cite: 11]
            </p>
            <h2 className="text-[#051d40] text-2xl md:text-4xl font-black mb-8">
              ¡Escríbenos y recibe una consulta gratis! [cite: 12]
            </h2>
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Escríbenos ahora [cite: 13]
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION - Full Wide */}
      <section className="w-full h-[50vh] md:h-[70vh]">
        <img 
          src="/administrativo/cardenas-saltos-abogados-derecho-administrativo.jpg" 
          className="w-full h-full object-cover"
          alt="Derecho Administrativo Cárdenas Saltos"
        />
      </section>

      {/* GRID DE SERVICIOS - Estilo PDF */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicios.map((servicio, index) => (
            <div key={index} className="flex flex-col border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="bg-[#051d40] p-10">
                <h3 className="text-[#ffbd4a] text-3xl font-black uppercase leading-tight">
                  {servicio.titulo} [cite: 14, 15, 23, 32, 43, 53, 63]
                </h3>
                <p className="text-white/80 mt-4 text-base italic">
                  {servicio.descripcion}
                </p>
                <div className="mt-6">
                    <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-[#ffbd4a] text-[#051d40] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                        Escríbenos [cite: 46, 55]
                    </a>
                </div>
              </div>
              <div className="p-10 bg-white flex-grow">
                <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-widest mb-6">
                  Posibles beneficios [cite: 17, 26, 35, 47, 56, 65]
                </h4>
                <ul className="space-y-4">
                  {servicio.beneficios.map((beneficio, bIndex) => (
                    <li key={bIndex} className="flex gap-4 items-start text-slate-700 text-[0.95rem] leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd4a] mt-2 flex-shrink-0"></div>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black uppercase tracking-tighter">Estrategia legal [cite: 72]</span>
            <span className="block font-normal">que genera resultados [cite: 73]</span>
          </h2>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis [cite: 74]
          </a>
        </div>
      </section>
    </div>
  );
}
