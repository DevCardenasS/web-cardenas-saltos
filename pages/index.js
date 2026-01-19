import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "593998485129";

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-orange-100">
      <Head>
        <title>Cárdenas Saltos Abogados</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        h1, h2, .font-serif { font-family: 'Playfair Display', serif; }
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-8 bg-white sticky top-0 z-50">
        <div className="flex flex-col leading-[0.8]">
          <span className="text-3xl font-bold tracking-tighter text-[#0A1D37]">Cárdenas</span>
          <span className="text-3xl font-light tracking-[0.3em] text-gray-300 uppercase">Saltos</span>
          <span className="text-[8px] font-bold tracking-[0.4em] text-[#0A1D37] mt-1 uppercase">Abogados</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] items-center text-[#0A1D37]">
          <a href="#" className="hover:text-orange-500 transition">Inicio</a>
          <a href="#" className="hover:text-orange-500 transition">Nosotros</a>
          <a href="#" className="hover:text-orange-500 transition">Servicios</a>
          <button className="border-2 border-[#0A1D37] px-6 py-3 hover:bg-[#0A1D37] hover:text-white transition duration-500">
            CONSULTA GRATIS
          </button>
        </div>
      </nav>

      {/* HERO SECTION - CALCADO AL PDF */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-24 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <h1 className="text-6xl md:text-[85px] leading-[0.85] text-[#0A1D37] mb-10">
            Nos importas, <br />
            <span className="text-4xl md:text-5xl italic font-light text-gray-400 block my-4">por eso te ofrecemos</span>
            las mejores <br />
            soluciones <br />
            <span className="font-bold italic">legales</span>
          </h1>
          
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-flex items-center gap-4 bg-orange-500 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#0A1D37] transition-all shadow-xl">
            Consulta gratis <ArrowRight size={16} />
          </a>

          {/* LOGOS DE RESPALDO (IGUAL AL PDF) */}
          <div className="mt-20 flex items-center gap-12 border-t border-gray-100 pt-10">
            <div className="opacity-40 grayscale flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-2 text-gray-500">Nuestra experiencia nos avala</span>
              <div className="flex items-center gap-8">
                <span className="text-2xl font-serif italic text-[#0A1D37]">Leal</span>
                <div className="text-[9px] font-bold leading-tight uppercase border-l border-gray-300 pl-4">
                  Asociación de <br/> PROFESIONALES <br/> de Gestión de Riesgos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGEN HERO - Con el marco blanco y sombra del PDF */}
        <div className="md:w-1/2 mt-16 md:mt-0 relative">
          <div className="relative w-full h-[550px] md:h-[750px] bg-gray-50 shadow-[40px_40px_0px_0px_rgba(241,245,249,1)] overflow-hidden">
             <div className="absolute inset-0 bg-[#0A1D37]/5 mix-blend-multiply"></div>
             <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000" 
              alt="Cárdenas Saltos"
              className="w-full h-full object-cover"
             />
          </div>
          
          {/* BADGE DE AÑOS */}
          <div className="absolute top-10 -left-10 bg-white p-10 shadow-2xl border-l-8 border-orange-500">
            <p className="text-6xl font-serif font-bold text-[#0A1D37] leading-none">10+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-2">Años de <br/>experiencia</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#0A1D37] mb-20">¿En qué te podemos ayudar?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100">
            {services.map((s, i) => (
              <div key={i} className="p-12 border border-gray-50 hover:bg-[#0A1D37] transition-all duration-700 group cursor-default">
                <h3 className="text-xl font-bold text-[#0A1D37] group-hover:text-orange-400 mb-6 uppercase tracking-tighter h-14 leading-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed mb-10 h-32">{s.desc}</p>
                <div className="flex justify-between items-center">
                   <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1D37] group-hover:text-white border-b border-orange-400">Escríbenos</a>
                   <span className="text-gray-100 group-hover:text-orange-500/20 text-6xl font-serif font-bold transition-all">0{i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href={`https://wa.me/${phoneNumber}`} className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-[100]">
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </div>
  );
}

const services = [
  { title: "Derecho Administrativo", desc: "Problemas con el Estado o Contraloría. Especialistas en recursos para recuperar tu empleo, frenar abusos y proteger tu patrimonio." },
  { title: "Derecho Constitucional", desc: "Protegemos tus derechos fundamentales. Habeas Data para limpiar tu historial crediticio y defensa urgente contra daños inminentes." },
  { title: "Notarial", desc: "Creación de empresas SAS en tiempo récord. Seguridad jurídica en tus escrituras y promesas de compraventa con agilidad total." },
  { title: "Mediación", desc: "Resuelve conflictos de forma económica y sin peleas. Acuerdos legales sobre pensiones, deudas y liquidaciones laborales hoy mismo." }
];
