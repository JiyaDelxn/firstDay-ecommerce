import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-3xl font-extrabold text-blue-700 tracking-wide">
          <Link href="/" className="hover:underline hover:text-blue-800 transition-colors duration-200">
            E-Mart
          </Link>
        </div>

        {/* Center - Nav Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium items-center">
          <li>
            <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition">
              <IoHomeOutline size={18} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/categories" className="flex items-center gap-2 hover:text-blue-600 transition">
              <TbCategory size={18} />
              <span>Categories</span>
            </Link>
          </li>
          <li>
            <Link href="/deals" className="flex items-center gap-2 hover:text-blue-600 transition">
              <BiSolidOffer size={18} />
              <span>Deals</span>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="flex items-center gap-2 hover:text-blue-600 transition">
              <FaCartArrowDown size={18} />
              <span>Cart</span>
            </Link>
          </li>
        </ul>

        {/* Right - Auth */}
        <div className="flex items-center space-x-4">
          <Link
            href="/signup"
            className="flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-3 py-1 rounded-full transition"
          >
            <FaRegUser size={16} />
            <span>Sign Up</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-3 py-1 rounded-full transition"
          >
            <LuLogIn size={16} />
            <span>Log In</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
