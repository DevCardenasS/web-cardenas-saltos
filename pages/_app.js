import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head'; // 1. Importación necesaria agregada

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 2. El bloque Head debe ir dentro del return y envuelto en fragmentos <> */}
      <Head>
        <title>Cárdenas Saltos | Abogados</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout>
        <Component {...pageProps} transparentNavbar={Component.transparentNavbar} />
      </Layout>
    </>
  );
}

export default MyApp;
