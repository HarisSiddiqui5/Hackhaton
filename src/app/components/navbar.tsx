'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar Container */}
      <div className="flex items-center justify-between sm:justify-around px-4 sm:px-8 py-4 bg-white shadow-md">
        {/* Logo or Title */}
        <div className="text-lg font-bold text-[#007580] mr-2 sm:hidden">Menu</div>

        {/* Hamburger Icon for Small Screens */}
        <div className="sm:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-1 bg-[#636270] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#636270] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#636270] rounded"></div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-8 text-[#636270]">
          <Link href="/" className="text-[#007580]">
            Home  
          </Link>
          <Link href="/shop">Shop</Link>
          <Link href="/productsPage">Product</Link>
          <Link href="/productsPage">Pages</Link>
          <Link href="/aboutUs">About</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden sm:flex space-x-2 text-[#636270]">
          <h1>Contact:</h1>
          <h1 className="text-[#272343]">(808) 555-0111</h1>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-[250px] bg-white shadow-lg z-10 p-4 flex flex-col text-[#636270] space-y-4">
          <Link href="#" className="text-[#007580]">
            Home
          </Link>
          <Link href="">Shop</Link>
          <Link href="">Product</Link>
          <Link href="">Pages</Link>
          <Link href="">About</Link>
          <div className="flex flex-col space-y-1 text-sm">
            <h1>Contact:</h1>
            <h1 className="text-[#272343]">(808) 555-0111</h1>
          </div>
        </div>
      )}
    </div>
  );
}
