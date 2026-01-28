import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '../constants';

export default function Home() {
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  // FUNCIÓN DE CONVERSIÓN CON ETIQUETA PERSONALIZADA
  const handleConversion = (etiqueta) => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      window.reportWhatsAppClick(etiqueta);
    }
  };

  return (
    <div className="w-full bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION - INTERLINEADO CORREGIDO PARA MÓVIL */}
      <section className="w-full bg-[#051d40] flex flex-col md:flex-row items-stretch overflow-hidden">
        
        {/* TEXTO HERO */}
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
                className="block font-medium text-white/90 text-[1.7rem] md:text-[2.3rem] tracking-tight leading-tight"
              >
                protegemos tu futuro.
              </span>
            </h1>
            <p className="text-white/70 text-base md:text-lg mt-6 mb-10 font-light leading-relaxed max-w-[480px]">
              Estrategia legal de alto nivel para resolver tus problemas más complejos en Derecho Administrativo y Constitucional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                onClick={() => handleConversion("Home - Hero Principal")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffbd4a] text-[#051d40] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl text-center"
              >
                Consulta gratuita
              </a>
              <Link 
                href="/nosotros" 
                className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Conócenos
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGEN HERO */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <img 
            src="/home/abogados-especialistas-ecuador-cardenas-saltos.jpg" 
            alt="Cárdenas Saltos Abogados" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay gradiente para que el texto respire en desktop */}
          <div className=\"absolute inset-0 bg-gradient-to-r from-[#051d40] via-transparent to-transparent md:block hidden\"></div>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS - RESUMEN */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[#051d40] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Defensa legal <br />
              <span className="text-[#ffbd4a]">sin fronteras</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
              Somos una firma boutique especializada en litigio complejo. No solo aplicamos la ley, creamos soluciones innovadoras para proteger lo que más valoras: tu libertad, tu patrimonio y tu tranquilidad.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="block text-4xl font-black text-[#051d40]">+15</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Años de experiencia</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-[#051d40]">98%</span>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Casos de éxito</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="/home/nosotros-cardenas-saltos.jpg" className="w-full h-full object-cover" alt="Firma de abogados" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#ffbd4a] p-8 rounded-3xl hidden md:block shadow-xl">
              <p className="text-[#051d40] font-black text-2xl uppercase leading-none">Resultados <br /> reales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS CON TARJETAS DETALLADAS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="text-center mb-20">
          <h2 className="text-[#051d40] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Especialidades</h2>
          <div className="w-20 h-1.5 bg-[#ffbd4a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SERVICIO 1: ADMINISTRATIVO */}
          <ServiceCard 
            title="Derecho Administrativo"
            img="/servicios/administrativo-home.jpg"
            desc="Expertos en impugnación de glosas de Contraloría, defensa ante el SERCOP y sumarios administrativos. Protegemos tu carrera y patrimonio frente al Estado."
            link="/administrativo"
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={() => handleConversion("Home - Tarjeta Administrativo")}
          />

          {/* SERVICIO 2: CONSTITUCIONAL */}
          <ServiceCard 
            title="Derecho Constitucional"
            img="/servicios/constitucional-home.jpg"
            desc="Defendemos tus derechos fundamentales mediante Acciones de Protección, Medidas Cautelares y Habeas Data. Tu seguridad jurídica es nuestra prioridad."
            link="/constitucional"
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={() => handleConversion("Home - Tarjeta Constitucional")}
          />

          {/* SERVICIO 3: NOTARIAL */}
          <ServiceCard 
            title="Asesoría Notarial"
            img="/servicios/notarial-home.jpg"
            desc="Gestión ágil de trámites notariales, contratos, testamentos y legalizaciones. Seguridad y validez en cada uno de tus documentos."
            link="/notarial"
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={() => handleConversion("Home - Tarjeta Notarial")}
          />

          {/* SERVICIO 4: MEDIACIÓN */}
          <ServiceCard 
            title="Centro de Mediación"
            img="/servicios/mediacion-home.jpg"
            desc="Resolvemos conflictos de familia, laborales y civiles de forma rápida y económica. Acuerdos con validez de sentencia judicial."
            link="/mediacion"
            phoneNumber={WHATSAPP_NUMBER}
            whatsappMessage={whatsappMessage}
            onConvert={() => handleConversion("Home - Tarjeta Mediacion")}
          />
        </div>
      </section>

      {/* SECCIÓN DE CONFIANZA */}
      <section className="w-full bg-[#051d40] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              ¿Por qué <br /> confiar en <br /> <span className="text-[#ffbd4a]">nosotros?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex items-center justify-center shrink-0 text-[#051d40] font-black italic">01</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">Transparencia absoluta en cada etapa del proceso judicial.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex items-center justify-center shrink-0 text-[#051d40] font-black italic">02</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">Atención personalizada: no eres un número de expediente, eres nuestra prioridad.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex items-center justify-center shrink-0 text-[#051d40] font-black italic">03</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">Estrategias agresivas y éticas para garantizar el mejor resultado posible.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
                <h4 className="text-[#ffbd4a] font-black text-4xl mb-2">100%</h4>
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Compromiso ético</p>
             </div>
             <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition mt-8">
                <h4 className="text-[#ffbd4a] font-black text-4xl mb-2">24/7</h4>
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Respuesta inmediata</p>
             </div>
          </div>
        </div>
      </section>

      {/* BANNER DE CIERRE */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h2 className="text-[#051d40] text-4xl md:text-7xl mb-10 leading-none">
            <span className="block font-black uppercase tracking-tighter">¿Listo para</span>
            <span className="block font-light italic text-[0.8em] md:text-[1em]">resolver tu caso?</span>
          </h2>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            onClick={() => handleConversion("Home - Banner Final")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#051d40] text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
          >
            Hablar con un experto
          </a>
        </div>
      </section>

    </div>
  );
}

// COMPONENTE DE TARJETA MEJORADO PARA INDEX
function ServiceCard({ title, img, desc, link, phoneNumber, whatsappMessage, onConvert }) {
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
          <Link 
            href={link} 
            className="border border-white/50 text-white px-6 py-3 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase tracking-wider text-center"
          >
            Ver más
          </Link>
          <a 
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
            onClick={onConvert}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffbd4a] text-[#051d40] px-6 py-3 text-[11px] rounded-full font-bold hover:bg-white transition w-full sm:w-auto uppercase tracking-wider text-center"
          >
            Chatear ahora
          </a>
        </div>
      </div>
    </div>
  );
}
