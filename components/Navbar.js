import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold text-cs-navy font-serif">Cárdenas</span>
          <span className="text-xl font-light tracking-[0.2em] text-gray-400 uppercase">Saltos</span>
        </Link>
        
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest items-center">
          <Link href="/" className="hover:text-cs-gold transition">Inicio</Link>
          <Link href="/nosotros" className="hover:text-cs-gold transition">Nosotros</Link>
          <Link href="/administrativo" className="hover:text-cs-gold transition">D. Administrativo</Link>
          <Link href="/constitucional" className="hover:text-cs-gold transition">D. Constitucional</Link>
          <Link href="/notarial" className="hover:text-cs-gold transition">Notarial</Link>
          <Link href="/mediacion" className="hover:text-cs-gold transition">Mediación</Link>
          <Link href="https://wa.me/5939984851296" className="bg-cs-navy text-white px-5 py-2 hover:bg-cs-gold transition">
            CONSULTA GRATIS
          </Link>
        </div>
      </div>
    </nav>
  );
}
