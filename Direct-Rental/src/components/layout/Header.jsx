'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black p-4 w-full shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-around">
        
        {/* Logo */}
        <div className="text-blue-600 text-3xl font-bold whitespace-nowrap">
          DirectRental
        </div>

        {/* Navigation List - Centered on desktop */}
        <nav className="hidden lg:flex justify-center">
          <ul className="flex gap-6">
            <li className="hover:text-blue-500"><Link href="#">Home</Link></li>
            <li className="hover:text-blue-500"><Link href="#">About Us</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Listings</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Owners</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Blog</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4 whitespace-nowrap">
          <Link href="/login" className="px-4 py-2 border border-blue-500 rounded">Sign In</Link>
          <Link href="/signup" className=" hover:bg-blue-700 px-4 py-2 bg-blue-600 text-white rounded">Sign Up</Link>
        </div>

        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden block text-black focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white p-4 z-40">
          <ul className="flex flex-col gap-4 text-center">
            <li className="hover:text-blue-500"><Link href="#">Home</Link></li>
            <li className="hover:text-blue-500"><Link href="#">About Us</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Listings</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Owners</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Blog</Link></li>
            <li className="hover:text-blue-500"><Link href="#">Contact Us</Link></li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/login" className="px-4 py-2 border border-blue-500 rounded">Sign In</Link>
            <Link href="/signup" className="hover:bg-blue-700 px-4 py-2 bg-blue-600 text-white rounded">Sign Up</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;