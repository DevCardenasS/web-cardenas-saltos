<Head>
  <title>Cárdenas Saltos | Abogados</title>
  {/* Esta es la línea que debes agregar */}
  <link rel="icon" href="/favicon.png" /> 
</Head>
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // Pasamos Component.transparentNavbar como una prop al hijo del Layout
  return (
    <Layout>
      <Component {...pageProps} transparentNavbar={Component.transparentNavbar} />
    </Layout>
  );
}

export default MyApp;
