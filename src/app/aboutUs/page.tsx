import React from 'react';
import Image from 'next/image';
import p14 from '@/app/assets/p14.png';
import delivery from '@/app/assets/Delivery.png';
import p15 from '@/app/assets/p15.png';
import p16 from '@/app/assets/p-16.png';
import p17 from '@/app/assets/p16.png';
import check2 from '@/app/assets/Check2.png'
import tree from '@/app/assets/tree.png'
import purchase from '@/app/assets/Purchase.png'


export default function About() {
  return (
    <div className="font-inter">

      {/* About Us Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-10 mt-10 px-4 lg:px-10 mx-auto">
        {/* Text Section */}
        <div className="bg-[#007580] text-white w-full lg:w-[672px] h-auto lg:h-[478px] pt-6 lg:pt-[64px] px-6 lg:px-[64px]">
          <h1 className="font-bold text-[24px] lg:text-[32px] mt-3">About Us - Comforty</h1>
          <p className="font-normal text-[14px] lg:text-[16px] mt-4 leading-relaxed">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort.
            Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="px-6 lg:px-8 py-3 lg:py-4 mt-8 lg:mt-[130px] bg-[#F9F9F926] hover:bg-[#90dfe6] transition">
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
      <div className="text-[#007580] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4 lg:px-10">
  {/* First Grid Item */}
  <div className="bg-[#F9F9F9] p-6 lg:p-12 space-y-2 text-center">
    <Image src={tree} alt="Delivery" className="mx-auto" />
    <h1 className="font-normal text-lg lg:text-xl">Next day as standard</h1>
    <p className="font-normal text-sm lg:text-base">
      Order before 3pm and get your order the next day as standard
    </p>
  </div>

  {/* Second Grid Item */}
  <div className="bg-[#F9F9F9] p-6 lg:p-12 space-y-2 text-center">
    <Image src={delivery} alt="Delivery" className="mx-auto" />
    <h1 className="font-normal text-lg lg:text-xl">Free Shipping</h1>
    <p className="font-normal text-sm lg:text-base">
      Enjoy free shipping on all orders above $50.
    </p>
  </div>

  {/* Third Grid Item */}
  <div className="bg-[#F9F9F9] p-6 lg:p-12 space-y-2 text-center">
    <Image src={check2} alt="Delivery" className="mx-auto" />
    <h1 className="font-normal text-lg lg:text-xl">24/7 Support</h1>
    <p className="font-normal text-sm lg:text-base">
      Our customer service is available round the clock.
    </p>
  </div>

  {/* Fourth Grid Item */}
  <div className="bg-[#F9F9F9] p-6 lg:p-12 space-y-2 text-center">
    <Image src={purchase} alt="Delivery" className="mx-auto" />
    <h1 className="font-normal text-lg lg:text-xl">Satisfaction Guaranteed</h1>
    <p className="font-normal text-sm lg:text-base">
      We ensure quality with a 30-day return policy.
    </p>
  </div>
</div>


      {/* Popular Products Section */}
      <div className="font-semibold text-[24px] lg:text-[32px] mt-16 mb-6 px-4 lg:px-10">
        Our Popular Products
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4 lg:px-10">
        {/* First image with double width */}
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-[700px]">
          <Image
            src={p15}
            alt=""
            className="w-full h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px] text-center">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg text-center">$99.00</p>
        </div>

        {/* Second image with single width */}
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-[350px]">
          <Image
            src={p16}
            alt=""
            className="w-full h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px] text-center">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg text-center">$99.00</p>
        </div>

        {/* Third image with single width */}
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-[350px]">
          <Image
            src={p17}
            alt=""
            className="w-full h-auto lg:h-[350px] object-cover"
          />
          <h1 className="font-normal text-[16px] lg:text-[20px] text-center">
            The Poplar suede sofa
          </h1>
          <p className="font-normal text-lg text-center">$99.00</p>
        </div>
      </div>
    </div>
  );
}
