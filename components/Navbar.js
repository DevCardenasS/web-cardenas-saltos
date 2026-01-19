import Link from 'next/link';

export default function Navbar() {
  // Ruta exacta según tu estructura de carpetas en Git
  const logoBlanco = "/Logos/CS-logo-blanco-pequeño.png";
  const phoneNumber = "5939984851296";

  return (
    <nav className="bg-[#051d40] w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src={logoBlanco} 
            alt="Cárdenas Saltos" 
            className="h-10 md:h-14 object-contain"
            onError={(e) => {
                // Fallback por si la 'L' de Logos fuera minúscula en el servidor
                e.target.src = "/logos/CS-logo-blanco-pequeño.png";
            }}
          />
        </Link>
        
        <div className="hidden lg:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 items-center">
          <Link href="/" className="hover:text-[#ffbd4a] transition">Inicio</Link>
          <Link href="/nosotros" className="hover:text-[#ffbd4a] transition">Nosotros</Link>
          <Link href="/administrativo" className="hover:text-[#ffbd4a] transition">Derecho administrativo</Link>
          <Link href="/constitucional" className="hover:text-[#ffbd4a] transition">Derecho constitucional</Link>
          <Link href="/notarial" className="hover:text-[#ffbd4a] transition">Notarial</Link>
          <Link href="/mediacion" className="hover:text-[#ffbd4a] transition">Mediación</Link>
          <a href={`https://wa.me/${phoneNumber}`} className="border-2 border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#051d40] transition-all font-bold">
            Consulta gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
