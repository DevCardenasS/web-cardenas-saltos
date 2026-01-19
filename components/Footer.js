export default function Footer() {
  return (
    <footer className="bg-[#051d40] text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left text-sm text-gray-400">
        <div><h4 className="text-white font-bold">Dirección</h4><p>Edificio La Previsora</p></div>
        <div><h4 className="text-white font-bold">Email</h4><p>atencion@cardenassaltos.com</p></div>
        <div><h4 className="text-white font-bold">Teléfono</h4><p>09984851296</p></div>
      </div>
    </footer>
  );
}
