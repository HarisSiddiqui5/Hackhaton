import React from 'react';
import Image from 'next/image';
import p10 from '@/app/assets/p10.png';
import p11 from '@/app/assets/p11.png';
import p12 from '@/app/assets/p12.png';
import p9 from '@/app/assets/p9.png';
import Side from '@/app/assets/sideText.png';

export default function PopularStyles() {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-20 lg:mt-[229px] px-4 sm:px-8 lg:px-16 mx-auto">
      {/* Left Aligned Image */}
      <div>
        <Image src={Side} alt="Side Text" className="w-[58px] h-[600px] sm:w-[80px] sm:h-[600px] lg:w-[58px] lg:h-[648px]" />
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center w-full">
        {/* Large Image */}
        <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[648px] lg:h-[648px]">
          <Image
            src={p10}
            alt="Popular Style Large"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grid of Smaller Images */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-6 justify-center mx-auto w-full">
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[312px] lg:h-[312px] mx-auto">
            <Image
              src={p11}
              alt="Popular Style 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[312px] lg:h-[312px] mx-auto">
            <Image
              src={p12}
              alt="Popular Style 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[312px] lg:h-[312px] mx-auto">
            <Image
              src={p9}
              alt="Popular Style 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[312px] lg:h-[312px] mx-auto">
            <Image
              src={p12}
              alt="Popular Style 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
