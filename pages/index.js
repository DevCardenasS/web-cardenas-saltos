import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "5939984851296";

  // Nombres de tus archivos en la carpeta /public/home/
  // AJUSTA LOS NOMBRES EXACTOS SI SON DIFERENTES (ej: .png o .jpg)
  const imgAbogada = "public/home/home-hero-Cardenas-saltos-Abogados-trabajemos-juntos.png"; 
  const imgEdificio = "/home/edificio.jpg"; 
  const logoLeal = "public/home/home-experiencia-Cardenas-Saltos-abogados-leal.png";
  const logoAsoc = "/home/logo-asociacion.png";

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Cárdenas Saltos | Soluciones Legales</title>
      </Head>

      {/* SECCIÓN HERO - DISEÑO PIXEL PERFECT DEL PDF */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] items-stretch">
        
        {/* Lado Izquierdo: Contenido */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 bg-white">
          <h1 className="text-5xl md:text-[85px] font-serif leading-[0.9] text-cs-navy mb-8">
            Nos importas, <br />
            <span className="text-4xl md:text-5xl font-light italic text-gray-400 block my-4">por eso te ofrecemos</span>
            las mejores <br />
            soluciones <br />
            <span className="font-bold italic">legales</span>
          </h1>

          <div className="flex flex-col gap-10">
            <a href={`https://wa.me/${phoneNumber}`} 
               className="self-start inline-flex items-center gap-4 bg-cs-gold text-cs-navy px-10 py-5 font-bold text-xs uppercase tracking-[0.3em] hover:bg-cs-navy hover:text-white transition-all shadow-xl">
              Consulta gratis <ArrowRight size={16} />
            </a>

            {/* Logos de Respaldo */}
            <div className="pt-10 border-t border-gray-100">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">Nuestra experiencia nos avala</p>
              <div className="flex items-center gap-8 grayscale opacity-70">
                <img src={logoLeal} alt="Leal" className="h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                <div className="h-10 w-[1px] bg-gray-200"></div>
                <img src={logoAsoc} alt="Asociación" className="h-12 object-contain" onError={(e) => e.target.style.display='none'} />
                {/* Fallback si no cargan las imágenes todavía */}
                <span className="text-xl font-serif italic font-bold text-cs-navy">Leal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Imagen de Marca */}
        <div className="md:w-1/2 relative overflow-hidden bg-gray-50">
          <img 
            src={imgAbogada} 
            alt="Abogada Cárdenas Saltos" 
            className="w-full h-full object-cover"
            onError={(e) => {e.target.src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000'}}
          />
          {/* Badge 10+ Años */}
          <div className="absolute bottom-10 left-0 bg-white p-10 shadow-2xl border-l-[12px] border-cs-gold">
            <p className="text-6xl font-serif font-bold text-cs-navy leading-none">10+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-2">Años de <br/>experiencia</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS - CUADRÍCULA LIMPIA */}
      <section className="bg-[#fcfcfc] py-24 px-8 md:px-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif italic text-cs-navy mb-20 text-center">¿En qué te podemos ayudar?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-12 border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative">
                <div className="h-1 w-0 bg-cs-gold absolute top-0 left-0 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold text-cs-navy mb-6 leading-tight uppercase tracking-tighter">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-10 h-24 overflow-hidden">{s.desc}</p>
                <a href={`https://wa.me/${phoneNumber}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-cs-navy border-b-2 border-cs-gold pb-1 hover:text-cs-gold transition">
                  Escríbenos
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href={`https://wa.me/${phoneNumber}`} className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-[100]">
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </div>
  );
}

const services = [
  { title: "Derecho Administrativo", desc: "Especialistas en recursos para recuperar empleos, frenar abusos estatales y proteger tu patrimonio." },
  { title: "Derecho Constitucional", desc: "Protegemos tus derechos con Habeas Data para limpiar tu historial y acciones de protección urgente." },
  { title: "Notarial", desc: "SAS en tiempo récord, escrituras y promesas de compraventa con total respaldo y agilidad." },
  { title: "Mediación", desc: "Resuelve pensiones, deudas y liquidaciones hoy mismo sin juicios largos y costosos." }
];
