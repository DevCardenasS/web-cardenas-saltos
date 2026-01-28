import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; 
import { WHATSAPP_NUMBER } from '../constants'; 

export default function Home() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  // --- FUNCIÓN DE CONVERSIÓN GOOGLE ADS ---
  const handleConversion = () => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick();
    }
  };

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION */}
      <section className="w-full bg-[#051d40] flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end px-6 md:pr-16 py-12 md:py-24 z-20">
          <div className="max-w-[550px] w-full text-left">
            <h1 className="text-white">
              <span 
                className="block font-black tracking-tight text-4xl md:text-[3.2rem]" 
                style={{ marginBottom: '0rem', lineHeight: '1.1' }}
              >
                Nos importas,
              </span>
              <span 
                className="block font-medium text-white/90 text-[1.7rem] md:text-[2.2rem] mt-0"
                style={{ lineHeight: '1' }}
              >
                tu estabilidad también.
              </span>
            </h1>
            
            <p className="text-gray-300 mt-6 md:mt-8 text-sm md:text-base font-normal leading-relaxed max-w-[450px]">
              Más de 19 años defendiendo los derechos de ciudadanos, funcionarios públicos y empresas frente a las injusticias del Estado. Estrategia legal de alto nivel para tu tranquilidad.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                onClick={handleConversion} // <--- RASTREO ACTIVADO
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffbd4a] text-[#051d40] px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
              >
                Consulta gratuita
              </a>
              <Link href="/nosotros" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white/10 transition-colors">
                Conoce al equipo
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <img src="/cardenas-saltos-abogados-ecuador.jpg" alt="Cárdenas Saltos Abogados" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051d40] via-transparent to-transparent md:hidden"></div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-16 md:mb-24 text-left">
          <h2 className="text-[#051d40] text-sm font-black uppercase tracking-[0.3em] mb-4">Áreas de Especialidad</h2>
          <div className="h-1 w-20 bg-[#ffbd4a]"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-20">
          <ServiceCard 
            img="/Home/abogado-administrativo-ecuador.jpg"
            title="Derecho Administrativo"
            link="/administrativo"
            desc="Defensa contra glosas de Contraloría, sumarios administrativos LOSEP, multas de GADS y procesos ante el SERCOP. Protegemos tu carrera y tu patrimonio frente al poder estatal."
            whatsappNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={handleConversion} // <--- PASAMOS LA FUNCIÓN AL COMPONENTE
          />
          
          <ServiceCard 
            img="/Home/abogado-constitucional-ecuador.jpg"
            title="Derecho Constitucional"
            link="/constitucional"
            desc="Acciones de Protección, Habeas Data y Medidas Cautelares. Somos expertos en frenar vulneraciones de derechos fundamentales de forma inmediata y efectiva."
            whatsappNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={handleConversion} // <--- PASAMOS LA FUNCIÓN AL COMPONENTE
          />
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="w-full bg-[#ffbd4a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h2 className="text-[#051d40] text-3xl md:text-6xl mb-10 leading-[1.1]">
            <span className="block font-black uppercase tracking-tighter">¿Listo para resolver</span>
            <span className="block font-normal">tu situación legal?</span>
          </h2>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            onClick={handleConversion} // <--- RASTREO ACTIVADO
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#051d40] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
          >
            Escríbenos ahora
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ img, title, desc, link, whatsappNumber, whatsappMessage, onConvert }) {
  return (
    <div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[380px] shadow-2xl group border border-white/5">
      <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-[#051d40] order-first lg:order-last">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-8 lg:w-1/2 text-white flex flex-col justify-between order-last lg:order-first">
        <div>
          <h3 className="text-xl font-medium mb-4 leading-tight text-[#ffbd4a] uppercase tracking-wide">{title}</h3>
          <p className="text-[13px] text-gray-300 leading-relaxed mb-8 font-normal">{desc}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* BOTÓN "Ver más": SIN RASTREO, ES SOLO NAVEGACIÓN */}
          <Link href={link} className="border border-white/50 text-white px-6 py-3 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase tracking-wider text-center">
            Ver más
          </Link>
          {/* BOTÓN "Consultar": CON RASTREO ACTIVADO */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            onClick={onConvert} // <--- RASTREO ACTIVADO
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffbd4a] text-[#051d40] px-6 py-3 text-[11px] rounded-full font-bold hover:bg-white transition w-full sm:w-auto uppercase tracking-wider text-center"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}
