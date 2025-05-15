import HeroBanner from './app/HeroBanner';
import ProductGrid from './app/ProductGrid';
import FeaturedSection from './app/FeaturedSection';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroBanner />
      <ProductGrid />
      <FeaturedSection />
    </div>
  );
}
