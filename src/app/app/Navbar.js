'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { LuLogIn } from 'react-icons/lu';
import { IoHomeOutline } from 'react-icons/io5';
import { TbCategory } from 'react-icons/tb';
import { BiSolidOffer } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-700 tracking-wide">
          <Link href="/" className="hover:underline hover:text-blue-800 transition-colors duration-200">
            E-Mart
          </Link>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
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

        {/* Auth Buttons (desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 px-4 text-gray-700">
          <Link href="/" className="block py-2 flex items-center gap-2 hover:text-blue-600">
            <IoHomeOutline size={18} />
            Home
          </Link>
          <Link href="/categories" className="block py-2 flex items-center gap-2 hover:text-blue-600">
            <TbCategory size={18} />
            Categories
          </Link>
          <Link href="/deals" className="block py-2 flex items-center gap-2 hover:text-blue-600">
            <BiSolidOffer size={18} />
            Deals
          </Link>
          <Link href="/cart" className="block py-2 flex items-center gap-2 hover:text-blue-600">
            <FaCartArrowDown size={18} />
            Cart
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="/signup"
              className="w-full text-center text-blue-600 border border-blue-600 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="w-full text-center text-blue-600 border border-blue-600 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
