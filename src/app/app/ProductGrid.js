import ProductCard from './ProductCard';

const products = [
  {
    title: 'Galaxy S23 Ultra',
    price: 99999,
    oldPrice: 124999,
    save: 25000,
    image: '/images/galaxy_S23.jpeg',
  },
  {
    title: 'Galaxy M13 (4GB)',
    price: 9999,
    oldPrice: 14999,
    save: 5000,
    image: '/images/galaxy_m13.jpeg',
  },
  {
    title: 'Galaxy M53 (6GB)',
    price: 19999,
    oldPrice: 24999,
    save: 5000,
    image: '/images/galaxy_m35.jpeg',
  },
  {
    title: 'Galaxy A13',
    price: 12999,
    oldPrice: 17999,
    save: 5000,
    image: '/images/galaxy_a13.jpeg',
  },
];

export default function ProductGrid() {
  return (
    <section className="mt-10 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
        Grab the Best Deals on Smartphones
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
            save={p.save}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
