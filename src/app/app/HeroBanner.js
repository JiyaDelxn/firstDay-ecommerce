export default function HeroBanner() {
    return (
      <div className="bg-indigo-100 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between mt-6 shadow-md">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
            Best Deal Online on Smart Watches
          </h2>
          <p className="text-gray-700 mt-2">SMART WEARABLE - Up to 50% OFF</p>
        </div>
        <img
          src="/images/smart_watch.jpeg" 
          alt="Smart Watch"
          className="mt-4 md:mt-0 w-32 h-32 object-contain"
        />
      </div>
    );
  }
  