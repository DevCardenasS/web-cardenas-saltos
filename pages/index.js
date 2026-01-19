import React from 'react';
import { MessageCircle, Scale, Building2, Gavel, Handshake, ChevronRight } from 'lucide-react';

export default function Home() {
  const phoneNumber = "593998485129";

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-8 py-5 bg-[#0A1D37] text-white sticky top-0 z-50 shadow-lg">
        <div className="text-2xl font-bold italic tracking-tighter">
          Cárdenas <span className="font-light text-slate-400 font-serif">Saltos</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-orange-400 transition">Inicio</a>
          <a href="#" className="hover:text-orange-400 transition">Nosotros</a>
          <button className="bg-orange-500 px-5 py-2 hover:bg-orange-600 transition">CONSULTA GRATIS</button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-6xl md:text-7xl text-[#0A1D37] leading-[1.1] font-serif italic">
            Nos importas, <br />
            <span className="text-slate-400 not-italic font-sans font-light">las mejores soluciones legales</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-md leading-relaxed">
            Estrategia legal que genera resultados. Especialistas en Derecho Administrativo y Constitucional en Guayaquil.
          </p>
          <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-[#0A1D37] text-white px-10 py-5 font-bold text-sm tracking-widest hover:bg-slate-800 transition shadow-2xl">
            AGENDA UNA CONSULTA →
          </a>
        </div>
        <div className="md:w-1/2 w-full h-[600px] bg-slate-100 rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-slate-200 relative">
           <span className="text-slate-400 italic">Espacio para Foto Principal (Drive)</span>
           <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 shadow-2xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-[10px] uppercase tracking-tighter">Años de experiencia</p>
           </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { t: "D. Administrativo", i: <Building2 /> },
            { t: "D. Constitucional", i: <Scale /> },
            { t: "Notarías", i: <Gavel /> },
            { t: "Mediación", i: <Handshake /> }
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-10 border border-slate-200 hover:shadow-2xl transition group">
              <div className="text-[#0A1D37] mb-6 scale-150 origin-left">{s.i}</div>
              <h3 className="text-lg font-bold text-[#0A1D37] mb-4 uppercase tracking-tighter">{s.t}</h3>
              <p className="text-slate-500 text-sm mb-6">Soluciones efectivas y seguridad jurídica para tus procesos.</p>
              <button className="text-[10px] font-black border-b-2 border-orange-400 pb-1">VER MÁS</button>
            </div>
          ))}
        </div>
      </section>

      <a href={`https://wa.me/${phoneNumber}`} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-[100]">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
