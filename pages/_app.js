import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head'; 
import WhatsAppButton from '../components/WhatsAppButton';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cárdenas Saltos | Abogados</title>
        <link rel="icon" href="/Logos/Favicon-cardenas-saltos-abogados.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* --- PILLAR 1: GOOGLE ADS CONFIGURATION --- */}
      {/* Cargamos el script de Google de forma eficiente */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17896545955"
        strategy="afterInteractive"
      />
      
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17896545955');

          // Función robusta para reportar la conversión a Google Ads
          window.reportWhatsAppClick = function() {
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17896545955/1GDSCI2Xg-4bEK093tVc',
                'event_category': 'WhatsApp',
                'event_label': window.location.pathname, // Registra desde qué página escriben
                'value': 1.0,
                'currency': 'USD'
              });
              console.log("Evento enviado a Google Ads desde: " + window.location.pathname);
            }
          };
        `}
      </Script>
      {/* --- END GOOGLE ADS CONFIGURATION --- */}

      <Layout>
        <Component {...pageProps} />
        <WhatsAppButton />
      </Layout>
    </>
  );
}

export default MyApp;
