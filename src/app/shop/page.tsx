import React from 'react';
import Image from 'next/image';
import p3 from '@/app/assets/p3.png';
import cart from '@/app/assets/carticon.png';
import p4 from '@/app/assets/p4.png';
import p5 from '@/app/assets/p5.png';
import p7 from '@/app/assets/p7.png';
import p9 from '@/app/assets/p9.png';

export default function Shop() {
  return (
    <div className='font-inter'>
      {/* Product Section */}
      <div className='flex flex-col md:flex-row mt-[132px] justify-around md:px-4'>
        {/* Product Image */}
        <div className='w-full md:w-[675px] h-auto'>
          <Image src={p3} alt='Library Stool Chair' className='w-full h-auto' />
        </div>

        {/* Product Description */}
        <div className='space-y-8 md:w-[521px]'>
          <h1 className='font-bold text-3xl md:text-6xl'>
            Library Stool <br /> Chair
          </h1>
          <button className='bg-[#029FAE] w-full md:w-[144px] h-[44px] rounded-3xl text-white text-center hover:bg-[#90dfe6]'>
            $20.00 USD
          </button>
          <div className='border bg-black h-[1px] w-full md:w-[500px]'></div>
          <p className='text-[#272343] text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eaque aut, ipsam inventore saepe distinctio dicta adipisci <br />
            fugit quis explicabo doloribus architecto omnis placeat animi
          </p>
          <div className='flex text-white bg-[#029FAE] rounded-md w-full md:w-[212px] h-[63px] items-center space-x-2 justify-center hover:bg-[#90dfe6]'>
            <Image src={cart} alt='Add to Cart' className='w-[22px] h-[21px]' />
            <button >Add To Cart</button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <h1 className='font-bold text-[28px] mt-[113px] mb-[69px] text-center'>
        Featured Products
      </h1>

      {/* Featured Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
        <div className='flex flex-col items-center'>
          <Image
            src={p4}
            alt='Library Stool Chair'
            className='w-[210px] h-[223px] rounded-md'
          />
          <div className='flex justify-between w-full'>
            <p className='font-normal text-base'>Library Stool Chair</p>
            <p className='font-bold text-sm'>$99</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={p5}
            alt='Library Stool Chair'
            className='w-[210px] h-[223px] rounded-md'
          />
          <div className='flex justify-between w-full'>
            <p className='font-normal text-base'>Library Stool Chair</p>
            <p className='font-bold text-sm'>$99</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={p7}
            alt='Library Stool Chair'
            className='w-[210px] h-[223px] rounded-md'
          />
          <div className='flex justify-between w-full'>
            <p className='font-normal text-base'>Library Stool Chair</p>
            <p className='font-bold text-sm'>$99</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={p9}
            alt='Library Stool Chair'
            className='w-[210px] h-[223px] rounded-md'
          />
          <div className='flex justify-between w-full'>
            <p className='font-normal text-base'>Library Stool Chair</p>
            <p className='font-bold text-sm'>$99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
