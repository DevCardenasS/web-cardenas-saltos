import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const phoneNumber = "5939984851296";

  return (
    <div className="min-h-screen font-sans bg-white">
      
      {/* SECCIÓN HERO (PRINCIPAL) - Pantalla Dividida Azul/Foto */}
      <section className="flex flex-col md:flex-row min-h-[90vh]">
        {/* Mitad Izquierda: Azul Oscuro */}
        <div className="md:w-1/2 bg-[#0A1D37] text-white flex flex-col justify-center px-10 md:px-20 py-20 relative">
          {/* Logo Navegación */}
          <nav className="absolute top-8 left-10 md:left-20 text-white z-20">
             <span className="font-serif italic text-2xl font-bold">Cárdenas Saltos</span>
             <br/><span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Abogados</span>
          </nav>

          <div className="space-y-6 z-10 mt-10">
            <h1 className="text-5xl md:text-[70px] font-serif leading-[1.1]">
              Nos importas, <br/>
              <span className="font-light italic text-gray-300">por eso te ofrecemos</span> <br/>
              las mejores <br/>
              soluciones legales
            </h1>
            <div className="pt-8">
              <a href={`https://wa.me/${phoneNumber}`} className="bg-[#F59E0B] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white hover:text-[#0A1D37] transition-all duration-300 shadow-lg inline-flex items-center gap-2">
                CONSULTA GRATIS <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>

        {/* Mitad Derecha: Foto de la Abogada */}
        <div className="md:w-1/2 relative min-h-[50vh] md:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
            alt="Abogada Cárdenas" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1D37] opacity-20"></div>
        </div>
      </section>

      {/* BARRA DE LOGOS (Gris claro) */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold mb-8">Nuestra experiencia nos avala</p>
          <div className="flex justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-serif text-[#0A1D37] font-bold">Leal</div>
            <div className="border-l-2 border-gray-300 pl-4 text-left">
              <p className="text-[10px] font-bold uppercase leading-tight text-gray-600">Asociación de<br/>Profesionales</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN SERVICIOS (Tarjetas Oscuras como el PDF) */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <h2 className="text-center text-4xl font-serif text-[#0A1D37] mb-16 italic">¿En qué te podemos ayudar?</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="bg-[#0A1D37] text-white p-10 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">Derecho Administrativo</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
                Impugnación de glosas de Contraloría, recuperación de empleos públicos y defensa ante multas injustas.
              </p>
              <button className="border border-[#F59E0B] text-[#F59E0B] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition">Ver más</button>
            </div>
            {/* Círculo decorativo */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F59E0B] rounded-full opacity-10 blur-2xl"></div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-[#0A1D37] text-white p-10 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">Derecho Constitucional</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
                Acciones de protección, Habeas Data para limpieza de buró y medidas cautelares urgentes.
              </p>
              <button className="border border-[#F59E0B] text-[#F59E0B] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition">Ver más</button>
            </div>
          </div>
          
           {/* Tarjeta 3 */}
           <div className="bg-[#0A1D37] text-white p-10 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">Notarial</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
                Constitución de SAS, divorcios notariales, posesiones efectivas y promesas de compraventa.
              </p>
              <button className="border border-[#F59E0B] text-[#F59E0B] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition">Ver más</button>
            </div>
          </div>

           {/* Tarjeta 4 */}
           <div className="bg-[#0A1D37] text-white p-10 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">Mediación</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md">
                Acuerdos rápidos en pensiones, deudas y liquidaciones sin necesidad de juicio.
              </p>
              <button className="border border-[#F59E0B] text-[#F59E0B] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition">Ver más</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION (Amarillo/Naranja) */}
      <section className="bg-[#F59E0B] py-20 px-6 text-center">
        <h2 className="text-[#0A1D37] text-4xl md:text-5xl font-bold font-serif mb-6">Estrategia legal <br/> que genera resultados</h2>
        <a href={`https://wa.me/${phoneNumber}`} className="inline-block bg-[#0A1D37] text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
          CONSULTA GRATIS AHORA
        </a>
      </section>

      {/* DATOS DE CONTACTO (Azul Footer) */}
      <footer className="bg-[#0A1D37] text-gray-400 py-10 px-6 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold mb-1">Cárdenas Saltos Abogados</p>
            <p>Edificio La Previsora, Guayaquil</p>
          </div>
          <div className="text-center md:text-right">
             <p>099 848 51296</p>
             <p>atencion@cardenassaltos.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
