'use client';

import { categories } from '@/app/categories/data';

export default function DealsPage() {
  const dealProducts = categories.flatMap((cat) =>
    cat.products.filter((p) => p.deal)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">🔥 Hot Deals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dealProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-xl rounded-lg p-6 border border-purple-200 flex flex-col justify-between transition-transform transform hover:scale-105">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-blue-600 font-semibold">{product.price}</p>
            <p className="text-sm text-gray-600 italic mt-1">{product.deal}</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-all duration-200">
              View Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
