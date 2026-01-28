import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Notarial() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  // FUNCIÓN DE CONVERSIÓN: Avisa a Google antes de abrir WhatsApp
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

  const servicios = [
    {
      titulo: "Posesión efectiva de bienes",
      descripcion: "El trámite legal indispensable para que los herederos puedan disponer de los bienes (casas, carros, cuentas) de una persona fallecida.",
      beneficios: [
        "Cobrar dinero en bancos: Desbloquear y retirar los fondos de las cuentas bancarias del familiar que faltó.",
        "Evitar peleas familiares: Dejar claro quiénes son los herederos legales según la ley.",
        "Rapidez total: Un trámite que se resuelve en días, no en meses de juicio.",
        "Seguridad jurídica: Registro oficial ante el Registro de la Propiedad o Mercantil."
      ]
    },
    {
      titulo: "Divorcio por mutuo consentimiento, liquidación conyugal o unión de hecho",
      descripcion: "La forma más rápida y pacífica de terminar un matrimonio cuando ambos están de acuerdo y la situación de los hijos está resuelta.",
      beneficios: [
        "Solución en días: Estar legalmente soltero en una fracción del tiempo que toma un juicio.",
        "Menos estrés emocional: Evitar audiencias largas y confrontaciones frente a un juez.",
        "Cero complicaciones: El acta notarial tiene la misma validez que una sentencia judicial.",
        "Reparto justo de bienes: Escriturar de una vez quién se queda con qué (casas, vehículos, etc.)."
      ]
    },
    {
      titulo: "Extinción de Patrimonio Familiar",
      descripcion: "El proceso para liberar una propiedad de la prohibición de venta que se puso originalmente para proteger a los hijos.",
      beneficios: [
        "Libertad para vender: Poder vender o hipotecar tu casa sin trabas legales en el Registro.",
        "Trámite para herederos: Indispensable cuando los padres fallecen y los hijos quieren vender la casa.",
        "Rapidez Notarial: Evitas pedir permiso a un juez, lo cual tarda meses; aquí se resuelve pronto.",
        "Valorización del bien: Una casa sin gravámenes es mucho más fácil de comercializar."
      ]
    },
    {
      titulo: "Poderes generales y especiales",
      descripcion: "Documento legal para que otra persona pueda actuar, firmar o realizar trámites en tu nombre cuando tú no puedes estar presente.",
      beneficios: [
        "Vender propiedades a distancia: Si estás fuera del país o ciudad, alguien de confianza lo hace por ti.",
        "Trámites bancarios y públicos: Cobrar bonos, jubilaciones o gestionar documentos en el IESS o SRI.",
        "Poderes para pleitos: Autorizar a tu abogado para que te represente en juicios sin que tengas que ir.",
        "Seguridad total: Tú decides exactamente qué puede y qué no puede hacer la persona autorizada."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Trámites Notariales</title>
      </Head>

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Soluciones rápidas para tus trámites legales. Te ayudamos con posesiones efectivas, 
              divorcios por mutuo consentimiento, extinción de patrimonio familiar y elaboración de poderes. 
              Eficacia notarial con el respaldo jurídico de Cárdenas Saltos Abogados.
            </p>
            
            <p className="text-[#051d40] text-xl md:text-2xl font-bold mb-8">
              ¡Escríbenos y recibe una consulta gratis!
            </p>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
              onClick={handleConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-[#051d40] hover:text-white transition-all shadow-lg"
            >
              Iniciar trámite ahora
            </a>
          </div>

          <div className="lg:w-1/2 order-2">
            <h1 className="text-[#051d40] text-4xl md:text-[5rem] uppercase tracking-tighter leading-[0.85] lg:text-right">
              <span className="block font-black">Servicios</span>
              <span className="block font-medium">notariales</span>
            </h1>
          </div>
          
        </div>
      </section>

      {/* IMAGEN FULL WIDE */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/notarial/tramites-notariales-ecuador.jpg" 
          className="w-full h-full object-cover"
          alt="Servicios Notariales Cárdenas Saltos"
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
                  onClick={handleConversion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Agendar consulta
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
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             onClick={handleConversion}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
