import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">E-Mart</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your one-stop shop for everything electronic. Grab the best deals now!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/categories" className="hover:text-blue-400 transition">Categories</Link></li>
            <li><Link href="/deals" className="hover:text-blue-400 transition">Deals</Link></li>
            <li><Link href="/cart" className="hover:text-blue-400 transition">Cart</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
            <li><Link href="/return-policy" className="hover:text-blue-400 transition">Return Policy</Link></li>
            <li><Link href="/shipping" className="hover:text-blue-400 transition">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 px-4">
        &copy; {new Date().getFullYear()} E-Mart. All rights reserved.
      </div>
    </footer>
  );
}
