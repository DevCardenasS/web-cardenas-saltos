import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importación de la constante global

export default function Administrativo() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre derecho administrativo...");

  // FUNCIÓN DE CONVERSIÓN: Avisa a Google antes de abrir WhatsApp
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

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
      descripcion: "Asesoría y defensa para empresas que venden al Estado y enfrentan problemas en procesos de licitación o ejecución contractual.",
      beneficios: [
        "Evitar ser proveedor incumplido: Impedir que te suspendan del RUP por problemas en un contrato.",
        "Cobro de planillas atrasadas: Acciones legales para que el Estado te pague lo que te debe por tus servicios.",
        "Impugnación de descalificaciones: Reclamar legalmente si te sacaron de un concurso de forma injusta.",
        "Levantamiento de sanciones: Eliminar multas mal aplicadas por administradores de contrato.",
        "Seguridad en la firma: Revisión de contratos para que no firmes cláusulas que te perjudiquen a futuro."
      ]
    },
    {
      titulo: "Sumarios administrativos (LOSEP)",
      descripcion: "Protección legal para funcionarios públicos que enfrentan procesos disciplinarios que podrían terminar en su destitución.",
      beneficios: [
        "Mantener tu puesto de trabajo: Defensa firme para que no pierdas tu cargo ni tu sueldo.",
        "Anular sanciones injustas: Eliminar amonestaciones que manchan tu expediente laboral.",
        "Derecho a la defensa: Asegurar que la institución respete los tiempos y pruebas a tu favor.",
        "Reintegro inmediato: Si ya fuiste destituido, luchamos por tu regreso y el pago de sueldos caídos.",
        "Limpieza de historial: Asegurar que puedas seguir trabajando en cualquier otra institución del Estado."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Derecho Administrativo</title>
      </Head>

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/servicios/abogado-administrativo-ecuador-cardenas-saltos.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Derecho Administrativo" 
        />
        <div className="absolute inset-0 bg-[#051d40]/70 z-10"></div>
        <div className="relative z-20 max-w-5xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Derecho Administrativo</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto font-light italic">Defendemos tus derechos frente a los abusos del poder estatal.</p>
          <div className="mt-10">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-2xl"
            >
              Consulta legal urgente
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {servicios.map((servicio, index) => (
          <div key={index} className="flex flex-col lg:flex-row mb-16 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
            {/* PARTE IZQUIERDA: TÍTULO Y BOTÓN */}
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

            {/* PARTE DERECHA: BENEFICIOS */}
            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">Posibles beneficios</h4>
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
