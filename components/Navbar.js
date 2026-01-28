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

  // --- FUNCIÓN DE CONVERSIÓN MEJORADA ---
  // Ahora acepta una "ubicacion" para que Google Ads te lo detalle
  const handleConversion = (ubicacion) => {
    if (typeof window !== 'undefined' && window.reportWhatsAppClick) {
      // Enviamos la etiqueta personalizada: "Navbar Desktop" o "Navbar Mobile"
      window.reportWhatsAppClick(ubicacion);
    }
  };

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

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[#051d40] py-4 shadow-xl' : 'py-6'
    } ${isTransparentActive ? 'bg-transparent' : isWhiteMenu ? 'bg-white' : 'bg-[#051d40]'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <img src={logoPath} alt="Cárdenas Saltos Abogados" className="h-10 md:h-12 w-auto transition-all" />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className={`hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] ${textColor}`}>
          <Link href="/" className="hover:text-[#ffbd4a] transition-colors">Inicio</Link>
          <Link href="/nosotros" className="hover:text-[#ffbd4a] transition-colors">Nosotros</Link>
          
          {/* DROPDOWN SERVICIOS */}
          <div className="relative group" 
               onMouseEnter={() => setShowSubMenu(true)} 
               onMouseLeave={() => setShowSubMenu(false)}>
            <button className="flex items-center gap-1 hover:text-[#ffbd4a] transition-colors uppercase">
              Servicios <ChevronDown size={14} />
            </button>
            
            {showSubMenu && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 mt-2 border border-slate-100 flex flex-col z-50">
                <Link href="/administrativo" className="px-6 py-3 text-[#051d40] hover:bg-slate-50 transition-colors normal-case text-sm font-medium">Derecho administrativo</Link>
                <Link href="/constitucional" className="px-6 py-3 text-[#051d40] hover:bg-slate-50 transition-colors normal-case text-sm font-medium">Derecho constitucional</Link>
                <Link href="/notarial" className="px-6 py-3 text-[#051d40] hover:bg-slate-50 transition-colors normal-case text-sm font-medium">Notarial</Link>
                <Link href="/mediacion" className="px-6 py-3 text-[#051d40] hover:bg-slate-50 transition-colors normal-case text-sm font-medium border-t border-slate-50">Centro de Mediación</Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-[#ffbd4a] transition-colors">Blog</Link>
          
          {/* BOTÓN WHATSAPP DESKTOP CON RASTREO ESPECÍFICO */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            onClick={() => handleConversion("Navbar Desktop")} // <--- SABRÁS QUE FUE DESDE PC
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 ${isWhiteMenu ? 'border-[#051d40] text-[#051d40]' : 'border-[#ffbd4a] text-white'} px-6 py-2.5 rounded-full hover:bg-[#ffbd4a] hover:text-[#051d40] hover:border-[#ffbd4a] transition-all`}
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={isWhiteMenu && !isOpen ? "text-[#051d40]" : "text-white"}
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
            <Link href="/constitucional" onClick={() => setIsOpen(false)}>Derecho constitucional</Link>
            <Link href="/notarial" onClick={() => setIsOpen(false)}>Notarial</Link>
            <Link href="/mediacion" onClick={() => setIsOpen(false)}>Centro de Mediación</Link>
          </div>

          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>

          {/* BOTÓN WHATSAPP MÓVIL CON RASTREO ESPECÍFICO */}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            onClick={() => {
              handleConversion("Navbar Mobile"); // <--- SABRÁS QUE FUE DESDE MÓVIL
              setIsOpen(false);
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffbd4a] text-[#051d40] text-center py-4 rounded-full"
          >
            WhatsApp Urgente
          </a>
        </div>
      )}
    </nav>
  );
}
