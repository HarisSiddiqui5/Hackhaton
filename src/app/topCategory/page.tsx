import React from 'react';
import Image from 'next/image';
import p6 from '@/app/assets/p6.png';
import p7 from '@/app/assets/p7.png';
import p8 from '@/app/assets/p8.png';


export default function TopCategory() {
  return (
    <div className="mt-[50px] md:mt-[140px]  px-4 sm:px-6 lg:px-8 text-center">
      {/* Title Section */}
      <div className="text-[32px] font-medium ml-4 sm:ml-0 mb-8 text-center sm:text-left">Top categories</div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-items-center">
        {/* First Card */}
        <div className="relative">
          <Image
            src={p6}
            alt="Wing Chair"
            className="w-[300px] md:w-full h-[300px] sm:h-[350px] lg:h-[424px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-[300px] md:w-full h-[85px] flex flex-col justify-center pl-5 rounded-b-md">
            <div className="font-bold text-white">Wing Chair</div>
            <div className="text-sm font-normal text-white">3,584 Products</div>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative">
          <Image
            src={p7}
            alt="Wing Chair"
            className="w-[300px] md:w-full h-[300px] sm:h-[350px] lg:h-[424px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-[300px] md:w-full h-[85px] flex flex-col justify-center pl-5 rounded-b-md">
            <div className="font-bold text-white">Wooden Chair</div>
            <div className="text-sm font-normal text-white">157 Products</div>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative">
          <Image
            src={p8}
            alt="Wing Chair"
            className="w-[300px] md:w-full h-[300px] sm:h-[350px] lg:h-[424px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 w-[300px] md:w-full h-[85px] flex flex-col justify-center pl-5 rounded-b-md">
            <div className="font-bold text-white">Desk Chair</div>
            <div className="text-sm font-normal text-white">154 Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
