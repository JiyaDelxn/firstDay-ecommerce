export default function FeaturedSection() {
  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-8">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Card Component */}
        {[
          { name: 'Smart Watch', price: '₹1,999', image: '/images/fasttrack_watch.jpeg' },
          { name: 'Bluetooth Speaker', price: '₹999', image: '/images/bluetooth_speaker.jpeg' },
          { name: 'Earphones', price: '₹799', image: '/images/earphone.jpeg' },
          { name: 'Laptop', price: '₹49,999', image: '/images/laptop.jpeg' }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 sm:h-44 object-cover rounded-lg mb-3 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
            <p className="text-green-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
