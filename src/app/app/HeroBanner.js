export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between mt-6 shadow-md gap-6">
      
      {/* Text Section */}
      <div className="text-center md:text-left space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 leading-snug">
          Best Deal Online on Smart Watches
        </h2>
        <p className="text-gray-700 text-sm sm:text-base font-medium">
          SMART WEARABLE - <span className="text-indigo-600 font-semibold">Up to 50% OFF</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <img
          src="/images/smart_watch.jpeg"
          alt="Smart Watch"
          className="w-28 sm:w-36 md:w-40 h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
