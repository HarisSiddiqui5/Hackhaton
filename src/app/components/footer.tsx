import React from 'react';
import Image from 'next/image';
import twitter from '@/app/assets/twitter.png';
import facebook from '@/app/assets/facebook.png';
import insta from '@/app/assets/insta.png';
import pintrest from '@/app/assets/pintrest.png';
import youtube from '@/app/assets/youtube.png';
import mastercard from '@/app/assets/Mastercard.png';
import paypal from '@/app/assets/Paypal.png';
import googlepay from '@/app/assets/google.pay.png';
import applepay from '@/app/assets/apple.pay.png';
import Logo from '@/app/assets/Logo.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="px-4 mt-20">
      <div className=" md:flex py-8 w-full "> {/* Use flex-wrap for better mobile handling */}
        {/* Left Section */}
        <div className="flex flex-col ml-10 md:w-1/3 mb-8 md:mb-0 ">
          <div className="flex items-center space-x-4 mb-6 mt-11 ">
            <Image src={Logo} alt="Logo" className="w-[26.67px] h-[27.33px]" />
            <h1 className="font-inter font-extrabold text-[28px]">Comforty</h1>
          </div>
          <p className="font-inter font-normal text-sm text-[#272343] w-full md:w-[258px]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-5 space-x-4 ">
            <Link href="#" className="w-[22px] h-[22px]">
              <Image src={facebook} alt="Facebook" className="mt-2" />
            </Link>
            <Link href="#" className="w-[38px] h-[38px]">
              <Image src={twitter} alt="Twitter" />
            </Link>
            <Link href="#" className="w-[38px] h-[38px]">
              <Image src={insta} alt="Instagram" />
            </Link>
            <Link href="#" className="w-[38px] h-[38px]">
              <Image src={pintrest} alt="Pinterest" />
            </Link>
            <Link href="#" className="w-[38px] h-[38px]">
              <Image src={youtube} alt="YouTube" />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mt-8 md:mt-[50px] md:space-x-12 items-start">
      <div className="text-sm space-y-3 text-[#272343]">
       <h1 className="font-semibold text-[#9A9CAA]">Category</h1>
        <Link href="/productsPage" className="block">Sofa</Link>
        <Link href="/productsPage" className="block">Armchair</Link>
        <Link href="/productsPage" className="block">Wing Chair</Link>
        <Link href="/productsPage" className="block">Desk Chair</Link>
        <Link href="/productsPage" className="block">Wooden Chair</Link>
        <Link href="/productsPage" className="block">Park Bench</Link>
      </div>
    <div className="text-sm space-y-3 w-24 text-[#272343]">
      <h1 className="font-semibold text-[#9A9CAA]">Support</h1>
       <Link href="/faqs" className="block">Help & Support</Link>
       <Link href="/aboutUs" className="block">Terms & Conditions</Link>
       <Link href="/aboutUs" className="block">Privacy Policy</Link>
       <Link href="/faqs" className="block">Help</Link>
    </div>
   </div>

        {/* Newsletter Form and Lorem Text */}
        <div className="mt-5 mb-8 flex flex-col justify-items-start w-full md:w-[424px] mx-auto">
          <form className="flex flex-col p-6 w-full">
            <h2 className="text-xl text-[#9A9CAA] mb-4">Newsletter</h2>
            <div className="flex gap-2 w-full">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full md:w-[285px] h-[46px] p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full md:w-[127px] h-[46px] bg-[#029FAE] hover:bg-[#90dfe6] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Lorem Text */}
          <div className="mt-3 ml-5 text-start">
            <h1 className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Possimus aspernatur libero
            </h1>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="border-t border-gray-400 mt-8 mx-auto w-full"></div>

      {/* Bottom Section */}
      <div className="sm:flex justify-between items-center py-4">
        <div className="text-sm text-gray-600 text-center sm:text-left">
          @ 2021 - Blogy - Designed & Developed by Zakirsoft
        </div>
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 space-x-4">
          <Link href="#">
            <Image src={mastercard} alt="Payment Methods" className="bg-white p-1" />
          </Link>
          <Link href="#">
            <Image src={paypal} alt="Payment Methods" className="bg-white p-1" />
          </Link>
          <Link href="#">
            <Image src={googlepay} alt="Payment Methods" className="bg-white p-1" />
          </Link>
          <Link href="#">
            <Image src={applepay} alt="Payment Methods" className="bg-white p-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
