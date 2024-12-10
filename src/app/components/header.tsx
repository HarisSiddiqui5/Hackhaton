'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Check from '@/app/assets/check.png';
import dropdown from '@/app/assets/dropdown.png';
import alert from '@/app/assets/alert.png';
import Link from 'next/link';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <div className="bg-[#272343] w-full h-[35px] sm:h-[45px] text-[#FFFFFF] flex justify-around items-center px-4 font-inter font-normal text-[13px] relative z-20">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <Image src={Check} alt="Check sign" className="w-[16px] h-[16px]" />
        <h1>Free shipping on all orders over $50</h1>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* 3-dot icon for small screens */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-1 bg-white mb-1 rounded"></div>
          <div className="w-5 h-1 bg-white mb-1 rounded"></div>
          <div className="w-5 h-1 bg-white rounded"></div>
        </div>

        {/* Menu items */}
        <ul
          className={`absolute top-10 right-0 bg-[#272343] p-3 w-[120px] md:w-[300px] rounded-md  shadow-lg md:shadow-none md:space-y-0 md:space-x-6 md:static md:flex md:bg-transparent ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          {/* Language Dropdown */}
          <li
            className="relative flex items-center space-x-2 cursor-pointer"
            onClick={() => setLanguageDropdown(!languageDropdown)}
          >
            <h1>Eng</h1>
            <Image src={dropdown} alt="dropdown icon" className="w-[7px] h-[3.5px]" />
            {languageDropdown && (
              <ul
                className="absolute top-6 right-0 bg-white text-black p-2 rounded-md shadow-lg space-y-1 z-50"
              >
                <li className="hover:bg-gray-200 px-2 py-1">English</li>
                <li className="hover:bg-gray-200 px-2 py-1">French</li>
                <li className="hover:bg-gray-200 px-2 py-1">Spanish</li>
                <li className="hover:bg-gray-200 px-2 py-1">German</li>
              </ul>
            )}
          </li>

          {/* Other Links */}
          <Link href="/faqs">
            <li>Faqs</li>
          </Link>
          <Link href="/contactUs">
            <li className="flex items-center gap-2">
              <Image src={alert} alt="Alert Symbol" className="w-[13.33px] h-[13.33px] hidden md:block" />
              Need Help
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
