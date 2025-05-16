'use client';

import { useParams, useRouter } from 'next/navigation';
import { categories } from '@/app/categories/data';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const { productID } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const allProducts = categories.flatMap((cat) => cat.products);
  const product = allProducts.find((p) => p.id === productID);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600 text-lg font-semibold">
        Product not found.
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-sky-100 to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 border-4 border-blue-200">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-white rounded-xl p-4 shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-96 object-contain rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-6">
          <h1 className="text-4xl font-extrabold text-blue-700">{product.name}</h1>
          <p className="text-3xl text-green-600 font-bold">{product.price}</p>

          {product.description && (
            <p className="text-md text-gray-600 italic border-l-4 border-indigo-400 pl-4 bg-indigo-50 rounded-md py-2">
              {product.description}
            </p>
          )}

          {product.rating && (
            <div className="text-yellow-500 text-lg font-medium">
              {'★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '½' : '')}
              <span className="ml-2 text-sm text-gray-500">({product.rating}/5)</span>
            </div>
          )}

          <div className="bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-200 space-y-2 text-sm">
            {product.deal && <p><strong className="text-blue-800">🔥 Deal:</strong> {product.deal}</p>}
            {product.emi && <p><strong className="text-blue-800">💳 EMI:</strong> {product.emi}</p>}
            {product.cashback && <p><strong className="text-blue-800">💰 Cashback:</strong> {product.cashback}</p>}
            {product.warranty && <p><strong className="text-blue-800">🛡 Warranty:</strong> {product.warranty}</p>}
          </div>

          <button
            onClick={handleBuyNow}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 shadow-md"
          >
            Buy Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
