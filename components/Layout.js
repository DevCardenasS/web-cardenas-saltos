import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-cs-navy">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
