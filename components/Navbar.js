import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const logoPath = "/Logos/CS-logo-blanco.png";
  const phoneNumber = "5939984851296";

  return (
    <nav className="bg-[#051d40] w-full z-50 font-['Gantari'] font-normal border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* LOGOTIPO */}
        <Link href="/" className="flex items-center">
          <img 
            src={logoPath} 
            alt="Cárdenas Saltos" 
            className="h-9 md:h-12 object-contain"
          />
        </Link>

        {/* CONTENEDOR DERECHO: Desktop Menú / Móvil Botón + Hamburguesa */}
        <div className="flex items-center gap-4">
          
          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.15em] text-white/90 items-center">
            <Link href="/" className="hover:text-[#ffbd4a] transition">Inicio</Link>
            <Link href="/nosotros" className="hover:text-[#ffbd4a] transition">Nosotros</Link>
            <Link href="/administrativo" className="hover:text-[#ffbd4a] transition">Derecho administrativo</Link>
            <Link href="/constitucional" className="hover:text-[#ffbd4a] transition">Derecho constitucional</Link>
            <Link href="/notarial" className="hover:text-[#ffbd4a] transition">Notarial</Link>
            <Link href="/mediacion" className="hover:text-[#ffbd4a] transition">Mediación</Link>
            <a href={`https://wa.me/${phoneNumber}`} className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#051d40] transition-all font-bold ml-4 text-center">
              Consulta gratis
            </a>
          </div>

          {/* BOTÓN "CONSULTA" EN MÓVIL (Visible solo en responsive junto a la hamburguesa) */}
          <div className="flex lg:hidden items-center gap-3">
            <a href={`https://wa.me/${phoneNumber}`} className="bg-[#ffbd4a] text-[#051d40] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Consulta gratis
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden bg-[#051d40] border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest text-white animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link href="/administrativo" onClick={() => setIsOpen(false)}>Derecho administrativo</Link>
          <Link href="/constitucional" onClick={() => setIsOpen(false)}>Derecho constitucional</Link>
          <Link href="/notarial" onClick={() => setIsOpen(false)}>Notarial</Link>
          <Link href="/mediacion" onClick={() => setIsOpen(false)}>Mediación</Link>
        </div>
      )}
    </nav>
  );
}
