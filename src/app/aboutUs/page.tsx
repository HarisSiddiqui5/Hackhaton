import React from 'react';
import Image from 'next/image';
import p14 from '@/app/assets/p14.png';
import delivery from '@/app/assets/Delivery.png';
import p15 from '@/app/assets/p15.png';
import p16 from '@/app/assets/p-16.png';
import p17 from '@/app/assets/p16.png';

export default function About() {
  return (
    <div className="font-inter">
      {/* About Us Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-4 mt-10 px-4 lg:px-0">
  {/* Text Section */}
  <div className="bg-[#007580] text-white w-full lg:w-[672px] h-auto lg:h-[478px] pt-6 lg:pt-[64px] px-6 lg:px-[64px]">
    <h1 className="font-bold text-[24px] lg:text-[32px] mt-3">About Us - Comforty</h1>
    <p className="font-normal text-[14px] lg:text-[16px] mt-4 leading-relaxed">
      At Comforty, we believe that the right chair can transform 
      your space and elevate your comfort. Specializing in 
      ergonomic design, premium materials, and modern 
      aesthetics, we craft chairs that seamlessly blend style 
      with functionality.
    </p>
    <button className="px-6 lg:px-8 py-3 lg:py-4 mt-8 lg:mt-[130px] bg-[#F9F9F926] hover:bg-[#ffffff26] transition">
      View collection
    </button>
  </div>
  {/* Image Section */}
  <div className="w-full lg:w-[672px] h-auto">
    <Image
      src={p14}
      alt="About Us Image"
      className="w-full h-auto lg:h-[478px] object-cover"
    />
  </div>
</div>

      {/* What Makes Us Different Section */}
      <div className="text-center mt-16 px-4">
        <h1 className="font-semibold text-[24px] lg:text-[32px]">
          What makes our Brand Different
        </h1>
      </div>
      <div className="text-[#007580] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4 lg:px-0">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] p-6 lg:p-12 space-y-2 text-center"
            >
              <Image src={delivery} alt="" className="mx-auto" />
              <h1 className="font-normal text-lg lg:text-xl">Next day as standard</h1>
              <p className="font-normal text-sm lg:text-base">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          ))}
      </div>

      {/* Popular Products Section */}
      <div className="font-semibold text-[24px] lg:text-[32px] mt-16 mb-6 px-4 lg:px-10">
        Our Popular Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-10">
        <div className="space-y-3">
          <Image
            src={p15}
            alt=""
            className="w-full lg:w-[600px] h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px]">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg">$99.00</p>
        </div>
        <div className="space-y-3">
          <Image
            src={p16}
            alt=""
            className="w-full lg:w-[350px] h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px]">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg">$99.00</p>
        </div>
        <div className="space-y-3">
          <Image
            src={p17}
            alt=""
            className="w-full lg:w-[350px] h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px]">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg">$99.00</p>
        </div>
      </div>
    </div>
  );
}
