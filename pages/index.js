import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const phoneNumber = "593998485129";

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-orange-100">
      
      {/* NAVBAR ESTILO PDF */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-serif font-bold tracking-tight text-[#0A1D37]">Cárdenas</span>
          <span className="text-2xl font-light tracking-[0.2em] text-gray-400 uppercase ml-1">Saltos</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] items-center text-[#0A1D37]">
          <a href="#" className="hover:text-orange-500 transition">Inicio</a>
          <a href="#" className="hover:text-orange-500 transition">Nosotros</a>
          <a href="#" className="hover:text-orange-500 transition">Derecho Administrativo</a>
          <a href="#" className="hover:text-orange-500 transition">Derecho Constitucional</a>
          <button className="bg-[#0A1D37] text-white px-6 py-3 hover:bg-orange-500 transition duration-300">
            CONSULTA GRATIS
          </button>
        </div>
      </nav>

      {/* HERO SECTION - EXACTO AL PDF */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 space-y-8">
          <h1 className="text-5xl md:text-[80px] font-serif leading-[0.9] text-[#0A1D37]">
            Nos importas, <br />
            <span className="italic font-light text-gray-400">por eso te ofrecemos</span> <br />
            las mejores <br />
            soluciones <br />
            legales
          </h1>
          
          <div className="pt-4">
            <a href={`https://wa.me/${phoneNumber}`} 
               className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#0A1D37] transition-all duration-500 shadow-lg">
              Consulta gratis <ArrowRight size={16} />
            </a>
          </div>

          <div className="pt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Nuestra experiencia nos avala</p>
            <div className="flex gap-8 opacity-60 filter grayscale">
               <span className="font-serif italic text-xl">Leal</span>
               <span className="font-sans font-bold text-sm leading-tight text-center">Asociación de <br/> PROFESIONALES</span>
            </div>
          </div>
        </div>

        {/* IMAGEN HERO - Aquí irá tu foto de la carpeta Web CS */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-[500px] md:h-[700px] bg-gray-100 overflow-hidden shadow-2xl border-white border-[16px]">
             <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
              alt="Abogada Cárdenas Saltos"
              className="w-full h-full object-cover opacity-90"
             />
          </div>
          {/* Badge de Años */}
          <div className="absolute -bottom-8 left-0 bg-white p-8 shadow-xl border-t-4 border-orange-500">
            <p className="text-5xl font-serif font-bold text-[#0A1D37]">10+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Años de <br/>experiencia</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS - DISEÑO DE TARJETAS LIMPIAS */}
      <section className="bg-[#fcfcfc] py-24 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#0A1D37] mb-16 text-center">¿En qué te podemos ayudar?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 hover:border-orange-200 transition-all duration-500 group relative overflow-hidden">
                <div className="h-1 w-0 bg-orange-500 absolute top-0 left-0 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold text-[#0A1D37] mb-6 leading-tight uppercase tracking-tighter">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">{s.desc}</p>
                <a href={`https://wa.me/${phoneNumber}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1D37] border-b-2 border-orange-400 pb-1 hover:text-orange-600 transition">
                  Escríbenos
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1D37] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-2xl font-serif font-bold italic mb-8">Cárdenas Saltos</div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">Estrategia legal que genera resultados. Tu confianza es nuestro mayor activo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-orange-500 mb-4 text-xs">Ubicación</h4>
              <p className="text-gray-300">Edificio La Previsora<br/>Guayaquil, Ecuador</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-orange-500 mb-4 text-xs">Contacto</h4>
              <p className="text-gray-300">09984851296<br/>atencion@cardenassaltos.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href={`https://wa.me/${phoneNumber}`} className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-6 transition-all z-[100]">
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </div>
  );
}

const services = [
  { title: "Derecho Administrativo", desc: "Problemas con el Estado o Contraloría. Especialistas en recursos para recuperar tu empleo o patrimonio." },
  { title: "Derecho Constitucional", desc: "Protegemos tus derechos con Habeas Data y defensa urgente contra daños inminentes." },
  { title: "Servicios Notariales", desc: "SAS en tiempo récord, escrituras y promesas de compraventa con total respaldo legal." },
  { title: "Mediación y Acuerdos", desc: "Resuelve pensiones, deudas y liquidaciones hoy mismo sin necesidad de juicios largos." }
];
