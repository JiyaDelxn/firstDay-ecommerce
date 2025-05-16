'use client';

import { useState } from 'react';
import { categories } from './data';
import Link from 'next/link';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('smartphones');

  const category = categories.find((cat) => cat.id === selectedCategory);
  const products = category?.products || [];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Browse Categories
      </h1>

      {/* Category Row */}
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center">
          <div className="flex flex-nowrap gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-40 h-48 cursor-pointer bg-white border ${
                  selectedCategory === cat.id ? 'border-blue-600' : 'border-gray-200'
                } rounded-xl shadow hover:shadow-md transition p-4 text-center flex flex-col items-center`}
              >
                <div className="w-24 h-24 mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <p className="text-md font-semibold text-gray-800">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <Link href={`/product-detail/${product.id}`} key={product.id}>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition cursor-pointer flex flex-col h-[380px]">
              {/* Product Image */}
              <div className="w-full h-40 mb-3 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain rounded"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-center">
                  <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-blue-600 font-bold mt-1">{product.price}</p>
                </div>

                {/* Dynamic Description */}
                <div className="text-xs text-gray-600 mt-3 text-left space-y-1">
                  <p><strong>Deal:</strong> {product.deal}</p>
                  <p><strong>EMI:</strong> {product.emi}</p>
                  <p><strong>Cashback:</strong> {product.cashback}</p>
                  <p><strong>Warranty:</strong> {product.warranty}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
