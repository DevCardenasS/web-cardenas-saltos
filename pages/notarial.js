import React from 'react';
import Head from 'next/head';
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Notarial() {
  // Definimos el mensaje predeterminado para WhatsApp codificado para URL
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

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
        "Costos fijos: Un proceso notarial tiene valores establecidos, sin sorpresas de honorarios procesales interminables.",
        "División de bienes justa: Dejar por escrito quién se queda con qué, evitando problemas futuros."
      ]
    },
    {
      titulo: "Escrituras de compraventa de bienes (Casas, terrenos, departamentos)",
      descripcion: "Formalización legal de la transferencia de propiedad para que tu inversión esté 100% protegida ante la ley.",
      beneficios: [
        "Protección de tu dinero: Garantizar que la compra sea legal y nadie pueda reclamarte la propiedad después.",
        "Hacer válida tu herencia: Solo con la escritura inscrita la casa es realmente tuya y de tus hijos.",
        "Evitar estafas: Confirmar que la casa no tenga embargos o multas antes de que pagues.",
        "Transferencia legal: El paso definitivo para que la propiedad pase a tu nombre legalmente."
      ]
    },
    {
      titulo: "Constitución de empresas (SAS y Compañías)",
      descripcion: "Creación legal de tu empresa o emprendimiento para que puedas contratar con el Estado o empresas privadas.",
      beneficios: [
        "RUC de empresa rápido: Obtener la identidad legal de tu negocio para empezar a facturar de inmediato.",
        "Proteger tu patrimonio personal: Separar tus deudas personales de las de tu empresa.",
        "Acceso a créditos pyme: Las empresas legales consiguen mejores tasas y montos en los bancos.",
        "Imagen profesional: Dar confianza a tus clientes y proveedores con una estructura formal."
      ]
    },
    {
      titulo: "Poderes especiales y generales",
      descripcion: "Documentos que permiten que otra persona haga trámites, cobre dinero o venda bienes en tu nombre si no puedes estar presente.",
      beneficios: [
        "Trámites desde el extranjero: Ideal para ecuatorianos fuera del país que necesitan vender o comprar algo aquí.",
        "Cobro de bonos o pensiones: Permitir que un familiar ayude a personas de la tercera edad con sus trámites bancarios.",
        "Gestión de juicios: Autorizar a tu abogado para que actúe por ti sin que tengas que ir a cada audiencia.",
        "Venta de vehículos: El poder necesario para que un tercero traspase tu auto si tú no tienes tiempo."
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Notarial</title>
      </Head>

      {/* HERO SECTION - 2 COLUMNAS ALINEADAS SUPERIOR */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* Columna de Texto: Primero en móvil, Izquierda en Desktop */}
          <div className="lg:w-1/2 order-1">
            <p className="text-[#051d40] text-lg md:text-xl leading-relaxed mb-8 font-normal pt-2">
              Soluciones legales rápidas para formalizar tus contratos y trámites sin juicio. Expertos en posesiones efectivas, divorcios inmediatos, liquidación conyugal o unión de hecho, creación de empresas SAS y escrituras. Garantizamos seguridad jurídica y validez legal con total agilidad.
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

          {/* Columna de Título: Segundo en móvil, Derecha en Desktop */}
          <div className="lg:w-1/2 order-2">
            <h1 className="text-[#051d40] text-5xl md:text-[5rem] uppercase tracking-tighter leading-[0.85] lg:text-right">
              <span className="block font-black">Notarial</span>
            </h1>
          </div>
          
        </div>
      </section>

      {/* IMAGEN FULL WIDE */}
      <section className="w-full h-[40vh] md:h-[70vh]">
        <img 
          src="/notarias/cardenas-saltos-notarias.jpg" 
          className="w-full h-full object-cover"
          alt="Servicios Notariales Cárdenas Saltos"
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
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
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
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span>
          </h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
