import React from 'react';
import Head from 'next/head';

export default function Home() {
  const phoneNumber = "5939984851296";
  const imgHero = "/home/home-hero-Cardenas-saltos-Abogados-trabajemos-juntos.png";

  return (
    <div className="bg-white font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Inicio</title>
      </Head>

      {/* HERO SECTION */}
      <section className="bg-[#051d40] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 px-6 py-12 md:py-20 z-10">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-8">
              Nos importas, <br />
              <span className="font-light italic">por eso te ofrecemos <br />
              las mejores soluciones <br />
              legales</span>
            </h1>
            <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-[#ffbd4a] text-[#051d40] px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white transition">
              Consulta gratis
            </a>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src={imgHero} alt="Abogada" className="w-full h-full object-contain object-bottom max-h-[600px]" />
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#051d40] mb-12">Nuestra experiencia nos avala</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10 grayscale opacity-60">
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-asociacion-de-profesionales-de-gestion-de-riesgo.png" className="h-16" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-leal-asociados.png" className="h-12" />
          <img src="/home/home-experiencia-Cardenas-saltos-Abogados-kunak-export.png" className="h-10" />
        </div>
      </section>

      {/* SERVICIOS (Igual al PDF) */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-[#051d40] mb-16 italic font-serif">¿En qué te podemos ayudar?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Tarjeta Simplificada para el ejemplo */}
          <ServiceCard 
            title="Derecho Administrativo" 
            desc="¿Problemas con el Estado? Te ayudamos a recuperar tu empleo, eliminar glosas e impugnar multas."
            img="/home/servicio-home-derecho-administrativo-Cardenas-saltos-Abogados.png"
          />
          <ServiceCard 
            title="Derecho Constitucional" 
            desc="Protegemos tus derechos con resultados reales. Habeas Data y medidas cautelares urgentes."
            img="/home/servicio-home-derecho-constitucional-Cardenas-saltos-Abogados.png"
          />
        </div>
      </section>

      {/* BANNER FINAL */}
      <section className="bg-[#ffbd4a] py-20 text-center">
        <h2 className="text-[#051d40] text-4xl font-bold mb-8">Estrategia legal que genera resultados</h2>
        <a href={`https://wa.me/${phoneNumber}`} className="bg-[#051d40] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#051d40] transition">
          Consulta gratis
        </a>
      </section>
    </div>
  );
}

// Sub-componente para no repetir código de tarjetas
function ServiceCard({ title, desc, img }) {
  return (
    <div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[250px]">
      <div className="p-8 md:w-1/2 text-white flex flex-col justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[11px] text-gray-300 my-4">{desc}</p>
        <button className="bg-[#ffbd4a] text-[#051d40] px-4 py-2 rounded-full text-[10px] font-bold w-fit">Escríbenos</button>
      </div>
      <img src={img} className="md:w-1/2 object-cover" />
    </div>
  );
}
