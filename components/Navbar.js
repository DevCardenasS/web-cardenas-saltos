import Link from 'next/link';

export default function Navbar() {
  const logoBlanco = "/Logos/CS-logo-blanco-pequeño.png";
  const phoneNumber = "5939984851296";

  return (
    <nav className="bg-[#051d40] w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/">
          <img src={logoBlanco} alt="Cárdenas Saltos" className="h-10 md:h-12 object-contain" />
        </Link>
        
        <div className="hidden lg:flex gap-6 text-[11px] font-medium uppercase tracking-widest text-white/90 items-center">
          <Link href="/" className="hover:text-[#ffbd4a] transition">Inicio</Link>
          <Link href="/nosotros" className="hover:text-[#ffbd4a] transition">Nosotros</Link>
          <Link href="/administrativo" className="hover:text-[#ffbd4a] transition">Derecho administrativo</Link>
          <Link href="/constitucional" className="hover:text-[#ffbd4a] transition">Derecho constitucional</Link>
          <Link href="/notarial" className="hover:text-[#ffbd4a] transition">Notarial</Link>
          <Link href="/mediacion" className="hover:text-[#ffbd4a] transition">Mediación</Link>
          <a href={`https://wa.me/${phoneNumber}`} className="border border-white px-4 py-2 hover:bg-white hover:text-[#051d40] transition ml-4">
            Consulta gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
