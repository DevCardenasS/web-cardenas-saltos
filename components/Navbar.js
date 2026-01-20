import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Navbar({ transparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const phoneNumber = "5939984851296";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DETERMINACIÓN DEL TIPO DE MENÚ
  const isHome = router.pathname === "/";
  const servicePages = ["/administrativo", "/constitucional", "/notarial", "/mediacion"];
  const isServicePage = servicePages.includes(router.pathname);

  // 1. Lógica de visualización para las 3 versiones:
  
  // Versión 2: Transparente (Nosotros en el tope)
  const isTransparentActive = transparent && !isScrolled && !isOpen;
  
  // Versión 3: Blanco (Páginas de Servicios)
  // Se mantiene blanco a menos que se haga scroll (donde pasa a ser azul)
  const isWhiteMenu = isServicePage && !isScrolled && !isOpen;
  
  // Versión 1: Azul (Home, Scroll de cualquier página, o Menú móvil abierto)
  const isBlueMenu = isHome || (isScrolled && !isWhiteMenu) || isOpen;

  // RECURSOS SEGÚN EL TIPO DE MENÚ
  // Usamos la URL exacta que enviaste (sin la ñ para evitar errores)
  const logoPath = isWhiteMenu 
    ? "/Logos/CS-logo-color-pequeno.png" 
    : "/Logos/CS-logo-blanco.png";

  const textColor = isWhiteMenu ? "text-[#051d40]" : "text-white/90";
  const borderColor = isWhiteMenu ? "border-[#051d40]/20" : "border-white/10";
  
  // Fondo: Blanco para servicios, Transparente para nosotros(tope), Azul para el resto
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
          <Link href="/administrativo" className={`${textColor} hover:text-[#ffbd4a] transition`}>Derecho administrativo</Link>
          <Link href="/constitucional" className={`${textColor} hover:text-[#ffbd4a] transition`}>Derecho constitucional</Link>
          <Link href="/notarial" className={`${textColor} hover:text-[#ffbd4a] transition`}>Notarial</Link>
          <Link href="/mediacion" className={`${textColor} hover:text-[#ffbd4a] transition`}>Mediación</Link>
          
          <a 
            href={`https://wa.me/${phoneNumber}`} 
            className="bg-[#ffbd4a] text-[#051d40] px-6 py-2.5 rounded-full hover:scale-105 transition-all font-black ml-4 text-center uppercase tracking-wider shadow-md"
          >
            Consulta gratis
          </a>
        </div>

        {/* MÓVIL */}
        <div className="flex lg:hidden items-center gap-3">
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
          <Link href="/administrativo" onClick={() => setIsOpen(false)}>Derecho administrativo</Link>
          <Link href="/constitucional" onClick={() => setIsOpen(false)}>Derecho constitucional</Link>
          <Link href="/notarial" onClick={() => setIsOpen(false)}>Notarial</Link>
          <Link href="/mediacion" onClick={() => setIsOpen(false)}>Mediación</Link>
        </div>
      )}
    </nav>
  );
}
