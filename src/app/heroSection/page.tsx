import React from 'react';
import Image from 'next/image';
import RightArrow from '@/app/assets/right-arrow.png';
import p1 from '@/app/assets/p1.png';

export default function HeroSection() {
  return (
    <div className="bg-[#F0F2F3] font-inter items-center mx-4 sm:mx-6 md:mx-28 lg:mx-32 py-8 rounded-bl-[48px] mb-5 sm:mb-7 md:mb-10 lg:mb-[53px]">
      <div className="text-[#272343] flex flex-col lg:flex-row lg:justify-around lg:items-center">
        {/* Left Section */}
        <div className="flex flex-col text-center lg:text-left sm:ml-3">
          <p className="font-normal text-sm lg:text-base mt-4 lg:mt-16">Welcome to chairy</p>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-4 lg:mt-6">
            Best Furniture <br />Collection for your <br />interior.
          </h1>
          <button className="mt-6 lg:mt-10 flex justify-center sm:justify-center lg:justify-start items-center mx-auto lg:mx-0 bg-[#029FAE] text-white text-sm sm:text-base w-[140px] sm:w-[160px] lg:w-[171px] h-[40px] sm:h-[45px] lg:h-[51px] rounded-lg">
            <h1 className="ml-2">Shop Now</h1>
            <Image src={RightArrow} alt="Right Arrow" className="w-3 h-[6px] sm:w-4 sm:h-[9px]" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center mt-6 lg:mt-0">
          <Image
            src={p1}
            alt="Product Image"
            className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[434px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

