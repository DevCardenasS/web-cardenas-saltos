import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ transparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = "5939984851296";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solo es transparente si la página lo solicita Y no hay scroll Y el menú móvil está cerrado
  const isTransparentNow = transparent && !isScrolled && !isOpen;

  // Selección dinámica de Logo
  const logoPath = isTransparentNow 
    ? "/Logos/CS-logo-blanco.png" 
    : "/Logos/CS-logo-color-pequeño.png";

  return (
    <nav 
      className={`w-full z-[100] font-['Gantari'] font-normal transition-all duration-500 border-b ${
        isTransparentNow 
          ? 'bg-transparent fixed top-0 left-0 border-transparent' 
          : 'bg-white sticky top-0 border-[#051d40]/20 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* LOGOTIPO */}
        <Link href="/" className="flex items-center">
          <img src={logoPath} alt="Cárdenas Saltos" className="h-9 md:h-12 object-contain cursor-pointer" />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="flex items-center gap-4">
          <div className={`hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.15em] items-center ${
            isTransparentNow ? 'text-white/90' : 'text-[#051d40] font-bold'
          }`}>
            <Link href="/" className="hover:text-[#ffbd4a] transition cursor-pointer">Inicio</Link>
            <Link href="/nosotros" className="hover:text-[#ffbd4a] transition cursor-pointer">Nosotros</Link>
            <Link href="/administrativo" className="hover:text-[#ffbd4a] transition cursor-pointer">Derecho administrativo</Link>
            <Link href="/constitucional" className="hover:text-[#ffbd4a] transition cursor-pointer">Derecho constitucional</Link>
            <Link href="/notarial" className="hover:text-[#ffbd4a] transition cursor-pointer">Notarial</Link>
            <Link href="/mediacion" className="hover:text-[#ffbd4a] transition cursor-pointer">Mediación</Link>
            <a href={`https://wa.me/${phoneNumber}`} className="bg-[#ffbd4a] text-[#051d40] px-6 py-2.5 rounded-full hover:bg-[#051d40] hover:text-white transition-all font-bold ml-4 text-center uppercase tracking-wider shadow-md">
              Consulta gratis
            </a>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={() => setIsOpen(!isOpen)} className={isTransparentNow ? "text-white" : "text-[#051d40]"}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className={`lg:hidden border-t px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest font-bold ${
          isTransparentNow ? 'bg-[#051d40] text-white border-white/10' : 'bg-white text-[#051d40] border-slate-100'
        }`}>
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
