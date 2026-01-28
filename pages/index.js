import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; // Se añade esta importación necesaria para navegar
import { WHATSAPP_NUMBER } from '../constants'; // Importamos la constante centralizada

export default function Home() {
@@ -78,27 +79,31 @@ export default function Home() {
title="Derecho administrativo" 
desc="¿Problemas con el Estado? Te ayudamos a recuperar tu empleo, anular glosas de Contraloría, impugnar multas injustas y cobrar planillas del SERCOP. Somos especialistas en recursos administrativos para revocar sanciones, frenar abusos de autoridad y proteger tu patrimonio con total seguridad legal."
img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-administrativo.png"
            link="/administrativo" // <-- Conectado
phoneNumber={WHATSAPP_NUMBER}
whatsappMessage={whatsappMessage}
/>
<ServiceCard 
title="Derecho constitucional" 
desc="Protegemos tus derechos con resultados reales. Recupera tu puesto de trabajo, limpia tu historial crediticio con Habeas Data o borra datos que dañan tu reputación (Derecho al Olvido). Defensa urgente con medidas cautelares en menos de 48 horas para evitar daños inminentes a tu vida y bienes."
img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-constitucional.png"
            link="/constitucional" // <-- Conectado
phoneNumber={WHATSAPP_NUMBER}
whatsappMessage={whatsappMessage}
/>
<ServiceCard 
title="Notarías" 
desc="Trámites legales rápidos sin ir a juicio. Resolvemos herencias (posesión efectiva), divorcios inmediatos y creación de empresas SAS en tiempo récord. Garantizamos seguridad jurídica en tus escrituras y promesas de compraventa de casas o carros, con total respaldo legal y agilidad en cada proceso."
img="/home/home-ayudar-Cardenas-saltos-Abogados-derecho-notarial-notarias.png"
            link="/notarial" // <-- Conectado
phoneNumber={WHATSAPP_NUMBER}
whatsappMessage={whatsappMessage}
/>
<ServiceCard 
title="Mediación" 
desc="Resuelve tus conflictos hoy mismo de forma económica y sin peleas. Acuerdos legales sobre pensiones de alimentos, visitas, tenencia, deudas bancarias y liquidaciones laborales. Evita juicios de años con un acta de mediación que tiene la misma fuerza de una sentencia y garantiza tu paz mental."
img="/home/home-ayudar-Cardenas-saltos-Abogados-mediacion-pension-alimenticia.png"
            link="/mediacion" // <-- Conectado
phoneNumber={WHATSAPP_NUMBER}
whatsappMessage={whatsappMessage}
/>
@@ -125,7 +130,7 @@ export default function Home() {
);
}

function ServiceCard({ title, desc, img, phoneNumber, whatsappMessage }) {
function ServiceCard({ title, desc, img, link, phoneNumber, whatsappMessage }) {
return (
<div className="bg-[#051d40] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[380px] shadow-2xl group border border-white/5">
<div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-[#051d40] order-first lg:order-last">
@@ -137,9 +142,10 @@ function ServiceCard({ title, desc, img, phoneNumber, whatsappMessage }) {
<p className="text-[13px] text-gray-300 leading-relaxed mb-8 font-normal">{desc}</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
          <button className="border border-white/50 text-white px-6 py-3 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase tracking-wider">
          {/* El botón ahora es un Link que usa la prop 'link' */}
          <Link href={link} className="border border-white/50 text-white px-6 py-3 text-[11px] rounded-full font-normal hover:bg-white hover:text-[#051d40] transition w-full sm:w-auto uppercase tracking-wider text-center">
Ver más
          </button>
          </Link>
<a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
className="bg-[#ffbd4a] text-[#051d40] px-6 py-3 text-[11px] rounded-full font-bold hover:bg-white transition text-center w-full sm:w-auto uppercase tracking-wider">
Escríbenos
