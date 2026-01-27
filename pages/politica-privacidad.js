import React from 'react';
import Head from 'next/head';

export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-['Gantari'] text-[#051d40]">
      <Head>
        <title>Política de Privacidad | Cárdenas Saltos Abogados</title>
      </Head>
      <h1 className="text-3xl font-black mb-8 uppercase">Política de Privacidad</h1>
      
      <section className="space-y-6 text-lg leading-relaxed text-gray-700">
        <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
        
        <p>En <strong>Cárdenas Saltos Abogados</strong>, la privacidad de nuestros clientes es prioridad. Esta política explica cómo manejamos la información cuando usas nuestra <strong>web</strong> de servicios legales.</p>

        <h2 className="text-xl font-bold text-[#051d40]">1. Recolección de Datos</h2>
        <p>No recolectamos datos automáticamente en nuestra <strong>web</strong>, a menos que decidas contactarnos vía WhatsApp. En ese caso, solo recibimos la información que tú voluntariamente compartes.</p>

        <h2 className="text-xl font-bold text-[#051d40]">2. Uso de la Información</h2>
        <p>Tu información se utiliza exclusivamente para brindarte la asesoría legal solicitada. No compartimos tus datos con terceros fuera de nuestra <strong>web</strong> y estudio jurídico.</p>

        <h2 className="text-xl font-bold text-[#051d40]">3. Publicidad y Cookies</h2>
        <p>Utilizamos herramientas como Google Ads para mostrar nuestros servicios. Estas plataformas pueden usar cookies para medir la efectividad de nuestros anuncios en la <strong>web</strong>.</p>
      </section>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <a href="https://cardenassaltos.com" className="text-[#ffbd4a] font-bold hover:underline">← Volver a la página principal</a>
      </div>
    </div>
  );
}
