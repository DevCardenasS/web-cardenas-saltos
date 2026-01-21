import { WHATSAPP_NUMBER } from '../constants'; // Importamos el número

export default function Footer() {
  return (
    <footer className="bg-[#051d40] text-white pt-16 pb-6 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        <div className="grid md:grid-cols-3 gap-12 w-full max-w-4xl text-sm text-gray-400">
          <div className="flex flex-col items-center">
            <h4 className="text-[#ffbd4a] font-black uppercase tracking-widest mb-3 text-xs">Dirección</h4>
            <p className="text-white/80">Edificio La Previsora</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[#ffbd4a] font-black uppercase tracking-widest mb-3 text-xs">Email</h4>
            <p className="text-white/80">atencion@cardenassaltos.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[#ffbd4a] font-black uppercase tracking-widest mb-3 text-xs">Teléfono</h4>
            {/* Aquí usamos el número centralizado */}
            <p className="text-white/80 font-medium">{WHATSAPP_NUMBER}</p>
          </div>
        </div>
        <div className="w-full pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          © {new Date().getFullYear()} Cárdenas Saltos | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
