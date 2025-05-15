export default function FeaturedSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Smart Watch */}
        <div className="bg-white p-4 shadow rounded border border-black transition transform hover:shadow-lg hover:-translate-y-1">
          <img
            src="/images/fasttrack_watch.jpeg"
            alt="Smart Watch"
            className="w-full h-40 object-cover mb-2 rounded hover:scale-105 transition-transform duration-300"
          />
          <h3 className="font-medium text-lg">Smart Watch</h3>
          <p className="text-green-600 font-semibold">₹1,999</p>
        </div>

        {/* Bluetooth Speaker */}
        <div className="bg-white p-4 shadow rounded border border-black transition transform hover:shadow-lg hover:-translate-y-1">
          <img
            src="/images/bluetooth_speaker.jpeg"
            alt="Bluetooth Speaker"
            className="w-full h-40 object-cover mb-2 rounded hover:scale-105 transition-transform duration-300"
          />
          <h3 className="font-medium text-lg">Bluetooth Speaker</h3>
          <p className="text-green-600 font-semibold">₹999</p>
        </div>

        {/* Earphones */}
        <div className="bg-white p-4 shadow rounded border border-black transition transform hover:shadow-lg hover:-translate-y-1">
          <img
            src="/images/earphone.jpeg"
            alt="Earphones"
            className="w-full h-40 object-cover mb-2 rounded hover:scale-105 transition-transform duration-300"
          />
          <h3 className="font-medium text-lg">Earphones</h3>
          <p className="text-green-600 font-semibold">₹799</p>
        </div>

        {/* Laptop */}
        <div className="bg-white p-4 shadow rounded border border-black transition transform hover:shadow-lg hover:-translate-y-1">
          <img
            src="/images/laptop.jpeg"
            alt="Laptop"
            className="w-full h-40 object-cover mb-2 rounded hover:scale-105 transition-transform duration-300"
          />
          <h3 className="font-medium text-lg">Laptop</h3>
          <p className="text-green-600 font-semibold">₹49,999</p>
        </div>
      </div>
    </section>
  );
}
