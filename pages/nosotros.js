import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Nosotros() {
  const phoneNumber = "5939984851296";

  return (
    <div className="w-full bg-[#051d40] font-['Gantari']">
      <Head>
        <title>Cárdenas Saltos | Nosotros</title>
      </Head>

      {/* NAVBAR TRANSPARENTE */}
      <Navbar transparent={true} />

      {/* HERO NOSOTROS con Overlay Negro */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden -mt-[92px]">
        {/* Imagen de fondo */}
        <img 
          src="/nosotros/cardenas-saltos-abogados-share-nowatts.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Cárdenas Saltos"
        />
        {/* Overlay Negro */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Contenido Hero */}
        <div className="relative z-20 max-w-4xl px-6 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight">
            Nuestro compromiso es acompañarte en el proceso <br />
            y darte las mejores los mejores resultados 
          </h1>
        </div>
      </section>

      {/* SECCIÓN ESTRATEGIA LEGAL */}
      <section className="w-full bg-[#051d40] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado Izquierdo: Logotipo */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end border-r-0 lg:border-r border-white/10 pr-0 lg:pr-16">
            <img 
              src="/nosotros/nosotros-logo-blanco-CS.png" 
              className="h-32 md:h-40 object-contain mb-6" 
              alt="Logo Cárdenas Saltos" 
            />
            <h2 className="text-white text-2xl font-black tracking-tighter text-center lg:text-right">
              Cárdenas <br /> Saltos <br /> <span className="font-light tracking-[0.3em] text-sm uppercase">Abogados</span> [cite: 39]
            </h2>
          </div>

          {/* Lado Derecho: Iconos y Texto */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-[#ffbd4a] text-3xl md:text-4xl font-medium mb-12">
              Es clave para tu estrategia legal [cite: 13, 43]
            </h3>
            
            <div className="grid gap-10">
              {/* Item 1 */}
              <div className="flex gap-6 items-start">
                <img src="/nosotros/procesos .cardenas saltos abogados.svg" className="w-12 h-12 flex-shrink-0" alt="Icono procesos" />
                <p className="text-white/80 text-lg leading-relaxed pt-2">
                  Experiencia en procesos legales de instituciones como ministerios gubernamentales [cite: 42]
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex gap-6 items-start">
                <img src="/nosotros/asesoramientos entidades ecuatorianas cardenas saltos abogados.svg" className="w-12 h-12 flex-shrink-0" alt="Icono asesoramiento" />
                <p className="text-white/80 text-lg leading-relaxed pt-2">
                  Experiencia en asesoramiento jurídico de alto nivel en diversas entidades del Estado Ecuatoriano [cite: 47]
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex gap-6 items-start">
                <img src="/nosotros/litigio cardenas saltos abogados.svg" className="w-12 h-12 flex-shrink-0" alt="Icono litigio" />
                <p className="text-white/80 text-lg leading-relaxed pt-2">
                  Experiencia en Litigios de sanciones estatales y representación en juzgados y tribunales [cite: 49]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPERIENCIA (Reutilizada) */}
      <section className="w-full py-24 px-6 bg-white text-center">
        <h2 className="font-medium text-[#051d40] mb-20 leading-tight text-[2.25rem]">
          Nuestra experiencia nos avala [cite: 17, 50]
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32 grayscale opacity-80">
          <img src="/home/asociacion-de-profesionales-de-gestion-de-riesgos-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-28 md:h-36 object-contain" alt="Asociación" />
          <img src="/home/leal-importaciones-Cardenas-Saltos-Abogados-Ecuador.jpg" className="h-24 md:h-32 object-contain" alt="Leal" />
          <img src="/home/kunnaxport-Cardenas-Saltos-Abogados-ecuador.jpg" className="h-20 md:h-28 object-contain" alt="Kunnaxport" />
        </div>
      </section>

      {/* BANNER FINAL (Reutilizado) */}
      <section className="w-full bg-[#ffbd4a] py-24">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-[#051d40] text-4xl md:text-6xl mb-10" style={{ lineHeight: '1' }}>
            <span className="block font-black">Estrategia legal</span>
            <span className="block font-normal">que genera resultados</span> [cite: 19, 20, 52, 53]
          </h2>
          <a href={`https://wa.me/${phoneNumber}`} 
             className="inline-block bg-[#051d40] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            Consulta gratis
          </a>
        </div>
      </section>
    </div>
  );
}
