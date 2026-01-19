export default function Footer() {
  return (
    <footer className="bg-cs-navy text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-serif italic text-2xl mb-2">Cárdenas Saltos</h3>
          <p className="text-gray-400 text-xs tracking-widest uppercase">Estrategia legal que genera resultados</p>
        </div>
        <div className="text-sm space-y-2 text-gray-300">
          <p>📍 Edificio La Previsora, Guayaquil</p>
          <p>📧 atencion@cardenassaltos.com</p>
          <p>📞 09984851296</p>
        </div>
      </div>
    </footer>
  );
}
