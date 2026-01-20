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
