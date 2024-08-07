import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS
import Footer from '../components/Footer';
import Header from "../components/Header";
import NavbarItem from '../components/NavbarItem';
import ProductShow from '../components/ProductShow';

export default function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <main className="min-w-full">
      <Header data-aos="fade-down" />
      <NavbarItem data-aos="fade-up" />
      <ProductShow data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </main>
  );
}
