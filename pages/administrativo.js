import React from 'react';
import Head from 'next/head';

export default function Administrativo() {
  const phoneNumber = "5939984851296";

  const servicios = [
    {
      titulo: "Impugnación de Glosas (Contraloría)",
      descripcion: "Defensa técnica para eliminar responsabilidades y multas impuestas por la Contraloría General del Estado.",
      beneficios: [
        "No pagar la multa: Lograr que el valor económico quede sin efecto.",
        "Evitar el embargo de bienes: Frenar procesos coactivos.",
        "Seguir en el cargo público: Mantener tu récord limpio.",
        "Ganar por caducidad: Aprovechar errores de tiempo para anular procesos.",
        "Paz financiera: Eliminar deudas millonarias que arriesgan tu patrimonio."
      ]
    },
    {
      titulo: "Contratación Pública (Defensa de Proveedores - SERCOP)",
      descripcion: "Asesoría y defensa para empresas que venden al Estado y enfrentan problemas en sus contratos o licitaciones.",
      beneficios: [
        "No ser 'Contratista Incumplido': Evitar sanciones de 5 años.",
        "Cobrar planillas atrasadas: Lograr que el Estado te pague lo adeudado.",
        "Ganar apelaciones de ofertas ante descalificaciones injustas.",
        "Eliminar multas contractuales aplicadas durante la ejecución.",
        "Terminación por mutuo acuerdo sin manchas legales."
      ]
    },
    {
      titulo: "Sumarios Administrativos (Defensa de Servidores - LOSEP)",
      descripcion: "Defensa para empleados públicos que enfrentan procesos para ser despedidos o sancionados.",
      beneficios: [
        "Conservar tu empleo: Desvanecer acusaciones de destitución.",
        "Limpiar tu expediente para no impedir futuros ascensos.",
        "Derecho a la defensa: Presentación de pruebas y testigos a tu favor.",
        "Anulación por errores de trámite legal.",
        "Seguridad familiar: Proteger la estabilidad y el sueldo de tu hogar."
      ]
    },
    {
      titulo: "Reclamos SRI (Tributario Administrativo)",
      descripcion: "Trámites para recuperar dinero, borrar deudas antiguas o frenar cobros injustos del SRI.",
      beneficios: [
        "Recuperar dinero de impuestos (IVA o Renta estancado).",
        "Borrar deudas antiguas mediante la prescripción.",
        "Desbloqueo de cuentas y levantamiento de retenciones bancarias.",
        "Pagar en cuotas: Negociar convenios de pago ajustados a tu realidad.",
        "Anular multas injustas por actas de determinación erróneas."
      ]
    },
    {
      titulo: "Defensa ante Multas y Clausuras (Municipios y Agencias)",
      descripcion: "Defensa rápida contra cierres de locales o multas de Municipios, Bomberos o Intendencias.",
      beneficios: [
        "Reabrir tu negocio rápido levantando sellos de clausura.",
        "Bajar el monto de multas exageradas por faltas menores.",
        "Evitar el cierre definitivo defendiendo tu permiso de funcionamiento.",
        "Frenar abusos de inspectores en actas sin sustento legal.",
        "Ponerse al día legalmente para evitar futuras molestias."
      ]
    },
    {
      titulo: "Recursos Administrativos (Apelación y Revisión)",
      descripcion: "El camino legal para que el jefe de la institución cambie una decisión que te perjudica.",
      beneficios: [
        "Cambiar una resolución negativa logrando que se anule.",
        "Frenar la sanción: Que la multa no se cobre hasta revisar el último recurso.",
        "Ahorrar tiempo y dinero evitando juicios de años en tribunales.",
        "Corregir injusticias internas obligando a revisar errores propios.",
        "Agotar la última oportunidad antes de la vía judicial."
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Administrativo</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/administrativo/cardenas-saltos-abogados-derecho-administrativo.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Derecho Administrativo Cárdenas Saltos"
        />
        <div className="absolute inset-0 bg-[#051d40]/70 z-10"></div>
        
        <div className="relative z-20 max-w-5xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6">
            <span className="font-black block uppercase tracking-tighter">Derecho Administrativo</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-light">
            ¿Te sancionó el Estado? Impugnamos glosas, defendemos sumarios y frenamos multas injustas. Expertos en devolverte la tranquilidad legal.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
              {/* Cabecera de la Card */}
              <div className="bg-[#051d40] p-8">
                <h3 className="text-[#ffbd4a] text-2xl font-bold leading-snug">
                  {servicio.titulo}
                </h3>
                <p className="text-white/80 mt-4 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
              
              {/* Cuerpo de la Card */}
              <div className="p-8 flex-grow">
                <h4 className="text-[#051d40] font-black uppercase text-xs tracking-widest mb-6">Posibles Beneficios</h4>
                <ul className="space-y-4">
                  {servicio.beneficios.map((beneficio, bIndex) => (
                    <li key={bIndex} className="flex gap-3 items-start text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd4a] mt-1.5 flex-shrink-0"></span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de acción por servicio */}
              <div className="px-8 pb-8">
                <a 
                  href={`https://wa.me/${phoneNumber}`}
                  className="block text-center border border-[#051d40] text-[#051d40] py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all"
                >
                  Consultar este caso
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER FINAL REUTILIZADO */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black">Estrategia legal</span>
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

// Activamos el Navbar transparente para esta página
Administrativo.transparentNavbar = true;
