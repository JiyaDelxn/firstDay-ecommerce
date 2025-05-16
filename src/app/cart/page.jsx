'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => {
    // Remove non-numeric characters from price string
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + numericPrice;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between border border-blue-200"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded-lg bg-gray-50"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-blue-800">{item.name}</h2>
                      <p className="text-lg text-green-600 font-semibold">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total & Proceed */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-blue-200 text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Total: ₹{totalAmount.toLocaleString()}
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                Proceed to Pay 💳
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
