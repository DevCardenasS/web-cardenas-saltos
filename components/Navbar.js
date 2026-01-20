import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ transparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const logoPath = "/Logos/CS-logo-blanco.png"; [cite: 28, 38]
  const phoneNumber = "5939984851296";

  return (
    <nav className={`w-full z-[100] font-['Gantari'] font-normal transition-all duration-300 ${
      transparent && !isOpen 
        ? 'bg-transparent absolute top-0 left-0' 
        : 'bg-[#051d40] sticky top-0 border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* LOGOTIPO */}
        <Link href="/" className="flex items-center">
          <img src={logoPath} alt="Cárdenas Saltos" className="h-9 md:h-12 object-contain cursor-pointer" /> [cite: 1, 28]
        </Link>

        {/* CONTENEDOR DERECHO */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.15em] text-white/90 items-center">
            <Link href="/" className="hover:text-[#ffbd4a] transition cursor-pointer">Inicio</Link> [cite: 2, 29]
            <Link href="/nosotros" className="hover:text-[#ffbd4a] transition cursor-pointer">Nosotros</Link> [cite: 3, 30]
            <Link href="/administrativo" className="hover:text-[#ffbd4a] transition cursor-pointer">Derecho administrativo</Link> [cite: 3, 31]
            <Link href="/constitucional" className="hover:text-[#ffbd4a] transition cursor-pointer">Derecho constitucional</Link> [cite: 4, 32]
            <Link href="/notarial" className="hover:text-[#ffbd4a] transition cursor-pointer">Notarial</Link> [cite: 5, 33]
            <Link href="/mediacion" className="hover:text-[#ffbd4a] transition cursor-pointer">Mediación</Link> [cite: 6, 34]
            <a href={`https://wa.me/${phoneNumber}`} className="bg-[#ffbd4a] text-[#051d40] px-6 py-2.5 rounded-full hover:bg-white transition-all font-bold ml-4 text-center uppercase tracking-wider shadow-md">
              Consulta gratis [cite: 7, 35]
            </a>
          </div>

          {/* MÓVIL */}
          <div className="flex lg:hidden items-center gap-3">
            <a href={`https://wa.me/${phoneNumber}`} className="bg-[#ffbd4a] text-[#051d40] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Consulta gratis [cite: 7, 35]
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="lg:hidden bg-[#051d40] border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link> [cite: 2, 29]
          <Link href="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link> [cite: 3, 30]
          <Link href="/administrativo" onClick={() => setIsOpen(false)}>Derecho administrativo</Link> [cite: 3, 31]
          <Link href="/constitucional" onClick={() => setIsOpen(false)}>Derecho constitucional</Link> [cite: 4, 32]
          <Link href="/notarial" onClick={() => setIsOpen(false)}>Notarial</Link> [cite: 5, 33]
          <Link href="/mediacion" onClick={() => setIsOpen(false)}>Mediación</Link> [cite: 6, 34]
        </div>
      )}
    </nav>
  );
}
