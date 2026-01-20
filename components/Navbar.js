import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#051d40] sticky top-0 z-[100] border-b border-white/20 font-['Gantari']">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGOTIPO */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-white font-black text-xl tracking-tighter cursor-pointer">
              CÁRDENAS SALTOS
            </span>
          </Link>
        </div>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/">
            <a className="text-white/90 hover:text-[#ffbd4a] text-sm font-medium transition-colors uppercase tracking-widest">Inicio</a>
          </Link>
          <Link href="/nosotros">
            <a className="text-white/90 hover:text-[#ffbd4a] text-sm font-medium transition-colors uppercase tracking-widest">Nosotros</a>
          </Link>
          <Link href="/servicios">
            <a className="text-white/90 hover:text-[#ffbd4a] text-sm font-medium transition-colors uppercase tracking-widest">Servicios</a>
          </Link>
          <Link href="/contacto">
            <a className="text-white/90 hover:text-[#ffbd4a] text-sm font-medium transition-colors uppercase tracking-widest">Contacto</a>
          </Link>
          <a 
            href="https://wa.me/5939984851296" 
            className="bg-[#ffbd4a] text-[#051d40] px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            Consulta Hoy
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-[#051d40] border-t border-white/10 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <Link href="/">
            <a onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">Inicio</a>
          </Link>
          <Link href="/nosotros">
            <a onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">Nosotros</a>
          </Link>
          <Link href="/servicios">
            <a onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">Servicios</a>
          </Link>
          <Link href="/contacto">
            <a onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">Contacto</a>
          </Link>
        </div>
      )}
    </nav>
  );
}
