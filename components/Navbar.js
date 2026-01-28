import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';
import { WHATSAPP_NUMBER } from '../constants';

export default function Navbar({ transparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();

  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicePages = ["/administrativo", "/constitucional", "/notarial", "/mediacion"];
  const isServicePage = servicePages.includes(router.pathname);

  const isTransparentActive = transparent && !isScrolled && !isOpen;
  const isWhiteMenu = isServicePage && !isScrolled && !isOpen;
  
  const logoPath = isWhiteMenu 
    ? "/Logos/CS-logo-color-pequeno.png" 
    : "/Logos/CS-logo-blanco.png";

  const textColor = isWhiteMenu ? "text-[#051d40]" : "text-white/90";
  const borderColor = isWhiteMenu ? "border-[#051d40]/20" : "border-white/10";
  
  const bgColor = isWhiteMenu 
    ? "bg-white" 
    : (isTransparentActive ? "bg-transparent" : "bg-[#051d40]");

  return (
    <nav 
      className={`w-full z-[100] font-['Gantari'] transition-all duration-500 border-b ${bgColor} ${borderColor} ${
        isTransparentActive ? 'fixed top-0 left-0 border-transparent' : 'sticky top-0 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img 
            src={logoPath} 
            alt="Cárdenas Saltos" 
            className="h-9 md:h-12 object-contain cursor-pointer" 
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.15em] items-center font-bold">
          <Link href="/" className={`${textColor} hover:text-[#ffbd4a] transition`}>Inicio</Link>
          <Link href="/nosotros" className={`${textColor} hover:text-[#ffbd4a] transition`}>Nosotros</Link>
          
          {/* ITEM CON SUBMENÚ */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <div className={`flex items-center gap-1 cursor-pointer ${textColor} hover:text-[#ffbd4a] transition py-2`}>
              <Link href="/administrativo">Derecho administrativo</Link>
              <ChevronDown size={14} className={`transition-transform duration-300 ${showSubMenu ? 'rotate-180 text-[#ffbd4a]' : ''}`} />
            </div>
            
            {/* SUBMENÚ DESKTOP - Sin espacios vacíos que corten el hover */}
            {showSubMenu && (
              <div className="absolute top-[100%] left-0 w-64 bg-[#051d40] border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                <Link href="/defensa-losep" className="px-6 py-4 text-white text-[10px] hover:text-[#ffbd4a] hover:bg-white/5 transition border-b border-white/5">
                  Defensa LOSEP
                </Link>
                <Link href="/SancionesAdministrativas-DefensaSancionatoria" className="px-6 py-4 text-white text-[10px] hover:text-[#ffbd4a] hover:bg-white/5 transition">
                  Sanciones Administrativas
                </Link>
              </div>
            )}
          </div>

          <Link href="/constitucional" className={`${textColor} hover:text-[#ffbd4a] transition`}>Derecho constitucional</Link>
          <Link href="/notarial" className={`${textColor} hover:text-[#ffbd4a] transition`}>Notarial</Link>
          <Link href="/mediacion" className={`${textColor} hover:text-[#ffbd4a] transition`}>Mediación</Link>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
            className="bg-[#ffbd4a] text-[#051d40] px-6 py-2.5 rounded-full hover:scale-105 transition-all font-black ml-4 text-center uppercase tracking-wider shadow-md"
          >
            Consulta gratis
          </a>
        </div>

        {/* CONTROLES MÓVIL */}
        <div className="flex lg:hidden items-center gap-3">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} 
            className="bg-[#ffbd4a] text-[#051d40] px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-wider shadow-sm"
          >
            Consulta gratis
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={isWhiteMenu ? "text-[#051d40]" : "text-white"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className={`lg:hidden border-t px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest font-bold ${
          isWhiteMenu ? 'bg-white text-[#051d40] border-slate-100' : 'bg-[#051d40] text-white border-white/10'
        }`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          
          <div className="flex flex-col gap-4">
            <Link href="/administrativo" onClick={() => setIsOpen(false)}>Derecho administrativo</Link>
            <div className="flex flex-col gap-4 pl-4 border-l border-[#ffbd4a]/40 text-[11px] font-medium tracking-normal normal-case">
                <Link href="/defensa-losep" onClick={() => setIsOpen(false)} className="text-[#ffbd4a]">Defensa LOSEP</Link>
                <Link href="/SancionesAdministrativas-DefensaSancionatoria" onClick={() => setIsOpen(false)}>Sanciones Administrativas</Link>
            </div>
          </div>

          <Link href="/constitucional" onClick={() => setIsOpen(false)}>Derecho constitucional</Link>
          <Link href="/notarial" onClick={() => setIsOpen(false)}>Notarial</Link>
          <Link href="/mediacion" onClick={() => setIsOpen(false)}>Mediación</Link>
        </div>
      )}
    </nav>
  );
}
