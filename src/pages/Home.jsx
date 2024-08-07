import Header from '../components/Header';
import Hero from '../components/Hero';
import CollectionCards from '../components/CollectionCards';
import TrendingProducts from '../components/TrendingProducts';
import CardShoes from '../components/CardShoes';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div data-aos="fade-up" data-aos-delay="200">
        <CollectionCards />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <TrendingProducts />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <CardShoes />
      </div>
      <Footer />
    </>
  );
}
