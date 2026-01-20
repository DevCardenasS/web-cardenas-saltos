import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  // Buscamos si el componente hijo tiene la propiedad de navbar transparente
  const isTransparent = children.props?.transparentNavbar || false;

  return (
    <div className="min-h-screen bg-white text-cs-navy">
      {/* Pasamos la propiedad al Navbar global */}
      <Navbar transparent={isTransparent} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
