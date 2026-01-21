import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head'; 
import WhatsAppButton from '../components/WhatsAppButton';
import { WHATSAPP_NUMBER } from '../constants'; // <-- Importamos la constante aquí también

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cárdenas Saltos | Abogados</title>
        {/* Favicon global con la ruta correcta */}
        <link rel="icon" href="/Logos/Favicon-cardenas-saltos-abogados.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Pasamos Component.transparentNavbar como prop al Layout si es necesario */}
        <Component {...pageProps} transparentNavbar={Component.transparentNavbar} />
      </Layout>

      {/* Colocamos el botón aquí para que aparezca en TODAS las páginas.
          Al estar centralizado, el componente WhatsAppButton interno 
          ya debería estar leyendo de constants.js 
      */}
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
