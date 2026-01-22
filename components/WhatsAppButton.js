import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton = () => {
  // Solo añadimos la lógica del mensaje sin tocar el diseño
  const whatsappMessage = encodeURIComponent("Hola Cárdenas Saltos Abogados, tengo una consulta sobre...");

  return (
    <>
      <style jsx>{`
        @keyframes shine {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
      
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25d366] p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group animate-shine"
        aria-label="Chat on WhatsApp"
      >
        {/* Mantenemos tu SVG exacto y tus clases p-4/p-5 originales */}
        <svg 
          className="w-10 h-10 md:w-8 md:h-8" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.586 4.391 1.696 6.256l-1.015 3.703 3.798-.996zM17.65 19.235c-.26-.13-1.534-.757-1.771-.842-.237-.085-.41-.128-.582.13-.172.258-.667.842-.818 1.015-.15.173-.3.194-.56.065-.26-.13-1.097-.404-2.09-1.288-.773-.69-1.295-1.542-1.446-1.801-.15-.259-.016-.399.114-.528.117-.117.26-.302.39-.454.13-.15.173-.258.26-.432.085-.172.043-.324-.022-.454-.065-.13-.582-1.401-.797-1.919-.21-.506-.418-.437-.582-.445-.15-.007-.323-.008-.495-.008-.173 0-.453.065-.689.324-.237.258-.905.885-.905 2.159 0 1.274.927 2.505 1.056 2.677.129.172 1.825 2.788 4.42 3.911.618.267 1.099.426 1.475.546.621.197 1.185.169 1.631.103.497-.074 1.534-.627 1.751-1.233.216-.605.216-1.123.151-1.233-.066-.111-.237-.173-.497-.302z"/>
        </svg>
      </a>
    </>
  );
};

export default WhatsAppButton;
