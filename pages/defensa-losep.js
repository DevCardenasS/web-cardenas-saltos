import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants';

export default function DefensaLosep() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, necesito defensa urgente por un tema de LOSEP / Sumario...");

  const servicios = [
    {
      titulo: "Defensa en Sumarios Administrativos",
      descripcion: "Protección legal integral desde la notificación inicial para evitar sanciones o la pérdida de tu cargo público.",
      beneficios: [
        "Frenamos la destitución: Analizamos el expediente para encontrar errores técnicos que anulen el proceso.",
        "Derecho a la defensa: Garantizamos que presentes pruebas y testigos clave a tu favor.",
        "Anulación por errores de trámite: Ganamos el caso si el Estado no cumplió con los pasos legales obligatorios.",
        "Seguridad familiar: Protegemos la estabilidad y el sueldo de tu hogar frente a decisiones arbitrarias.",
        "Asesoría técnica: Te preparamos para las audiencias y toma de versiones en la institución."
      ]
    },
    {
      titulo: "Acciones de Reintegro Laboral",
      descripcion: "Procesos legales para recuperar tu puesto de trabajo si ya fuiste destituido ilegalmente.",
      beneficios: [
        "Regreso al cargo: Logramos mediante sentencia que seas restituido a tus funciones originales.",
        "Cobro de sueldos caídos: Peleamos para que se te pague todo el dinero dejado de percibir desde el despido.",
        "Reparación integral: Exigimos que se restablezcan todos tus beneficios de ley y seguridad social.",
        "Eliminación de manchas legales: Borramos el registro de destitución de los sistemas públicos.",
        "Victoria ante la injusticia: Revertimos actos administrativos viciados por persecución política o personal."
      ]
    },
    {
      titulo: "Limpieza de Historial y Récord",
      descripcion: "Gestión para eliminar sanciones de tu expediente profesional que impiden tu crecimiento en el sector público.",
      beneficios: [
        "Hoja de vida limpia: Evitamos que las sanciones aparezcan en el sistema del Ministerio de Trabajo.",
        "Habilitación para cargos públicos: Eliminamos impedimentos legales para que puedas volver a postular a empleos estatales.",
        "Protección de ascensos: Que una sanción injusta no detenga tu carrera profesional de años.",
        "Impugnación de evaluaciones: Defendemos tu rendimiento frente a evaluaciones de desempeño amañadas.",
        "Paz profesional: Recuperas el prestigio y la tranquilidad en tu entorno laboral."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Defensa LOSEP y Sumarios</title>
      </Head>

      {/* HERO SECTION - Basado en tu template exacto */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          <div className="lg:w-1/2 order-1">
            <h1 className="text-[#051d40] text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              ¿Te abrieron un <span className="text-[#ffbd4a]">Sumario Administrativo</span> o fuiste Destituido?
            </h1>
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Protege tu cargo y tu hoja de vida. Tienes poco tiempo para defenderte, no dejes que el Estado vulnere tus derechos. No eres solo un expediente, es tu estabilidad familiar la que está en juego.
            </p>
            
            <p className="text-[#051d40] text-xl md:text-2xl font-bold mb-8">
              ¡Escríbenos y recibe una consulta gratis!
            </p>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Escríbenos ahora
            </a>
          </div>

          <div className="lg:w-1/2 order-2 flex justify-center lg:justify-end">
            <img 
              src="/losep/losep.png" 
              className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              alt="Defensa LOSEP Cárdenas Saltos"
            />
          </div>
          
        </div>
      </section>

      {/* SECCIÓN AGITADORES (Efecto Espejo) */}
      <section className="w-full py-12 bg-slate-50 border-y border-gray-100 italic">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-[#051d40] font-medium">
          <p>"Tu récord de años no puede ser borrado por una decisión política."</p>
          <p>"Sabemos que el Estado suele ser juez y parte."</p>
          <p>"Un error técnico de ellos puede ser tu salvación legal."</p>
          <p>"No estás solo contra el sistema, peleamos por ti."</p>
        </div>
      </section>

      {/* CARDS HORIZONTALES - Estructura solicitada */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        {servicios.map((servicio, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row bg-white border-2 border-[#051d40] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 min-h-[450px]"
          >
            <div className="lg:w-2/5 bg-[#051d40] p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-[#ffbd4a] text-3xl md:text-4xl font-black leading-tight uppercase">
                  {servicio.titulo}
                </h3>
                <p className="text-white/80 mt-6 text-base font-normal leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
                  className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Defensa urgente
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 p-10 md:p-14 flex flex-col justify-center bg-white border-l border-[#051d40]">
              <h4 className="text-[#ffbd4a] font-black uppercase text-sm tracking-[0.2em] mb-8">
                Lo que lograremos por ti
              </h4>
              <ul className="grid grid-cols-1 gap-5">
                {servicio.beneficios.map((beneficio, bIndex) => (
                  <li key={bIndex} className="flex gap-4 items-start text-slate-700 text-[0.95rem] font-normal leading-snug">
                    <div className="w-2 h-2 rounded-full bg-[#ffbd4a] mt-1.5 flex-shrink-0"></div>
                    {beneficio}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[0.8rem] text-slate-400 italic">Expertos en normativa LOSEP, Contraloría y Ministerio de Trabajo.</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* BANNER FINAL - Basado en el PDF */}
      <section className="relative w-full py-32 overflow-hidden">
        <img 
          src="/losep/DCS-Cardenas-Saltos-Abogados.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Fondo Resultados" 
        />
        <div className="absolute inset-0 bg-[#051d40]/85 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-4xl md:text-7xl mb-12">
            <span className="block font-black uppercase">Estrategia legal</span>
            <span className="block font-light">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#ffbd4a] text-[#051d40] px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            Consulta gratis ahora
          </a>
        </div>
      </section>
    </div>
  );
}
