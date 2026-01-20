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
        "Paz financiera: Eliminar deudas millonarias."
      ]
    },
    {
      titulo: "Contratación Pública (SERCOP)",
      descripcion: "Asesoría y defensa para empresas que venden al Estado y enfrentan problemas en contratos o licitaciones.",
      beneficios: [
        "No ser 'Contratista Incumplido': Evitar sanciones de 5 años.",
        "Cobrar planillas atrasadas: Lograr que el Estado pague lo adeudado.",
        "Ganar apelaciones de ofertas ante descalificaciones injustas.",
        "Eliminar multas contractuales aplicadas indebidamente.",
        "Terminación por mutuo acuerdo sin manchas legales."
      ]
    }
    // Puedes agregar el resto de servicios siguiendo esta misma estructura
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Administrativo</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/administrativo/cardenas-saltos-abogados-derecho-administrativo.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Derecho Administrativo"
        />
        <div className="absolute inset-0 bg-[#051d40]/60 z-10"></div>
        <div className="relative z-20 max-w-5xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">Derecho Administrativo</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">Defensa técnica especializada frente a instituciones públicas y procesos estatales.</p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
              <div className="bg-[#051d40] p-8">
                <h3 className="text-[#ffbd4a] text-2xl font-bold">{servicio.titulo}</h3>
                <p className="text-white/80 mt-2 text-sm italic">{servicio.descripcion}</p>
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-[#051d40] font-black uppercase text-xs tracking-widest mb-4">Posibles Beneficios</h4>
                <ul className="space-y-3">
                  {servicio.beneficios.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd4a] mt-1.5 flex-shrink-0"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <a href={`https://wa.me/${phoneNumber}`} className="block text-center border border-[#051d40] text-[#051d40] py-3 rounded-full font-bold text-xs uppercase hover:bg-[#051d40] hover:text-white transition-all">
                  Consultar caso
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
          <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}

// NOTA: Para esta página NO activamos .transparentNavbar = true
// Esto hace que el Navbar use el logo a color y fondo blanco por defecto.
