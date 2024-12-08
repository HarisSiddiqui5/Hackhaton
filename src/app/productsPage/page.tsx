import React from 'react'
import Image from 'next/image';
import Card from '../components/card'
import p2 from '@/app/assets/p2.png';
import p3 from '@/app/assets/p3.png'; // Importing image
import p4 from '@/app/assets/p4.png';
import p5 from '@/app/assets/p5.png';
import p7 from '@/app/assets/p7.png'
import p9 from '@/app/assets/p9.png'
import p13 from '@/app/assets/p13.png'
import p8 from '@/app/assets/p8.png'
import p1 from '@/app/assets/p1.png'

export default function ProductPage() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 font-inter'>
      <div className='text-[32px] font-semibold mt-[61.5px]'>
        <h1> All Products</h1>
      </div>
      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-5">
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p2} // Passing the imported image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p3} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p4} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p5} // Another image
          addToCartLink="/cart"
        />
      </div>

       {/* Responsive Card Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-10">
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p7} // Passing the imported image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p9} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p13} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p2} // Another image
          addToCartLink="/cart"
        />

      </div>

       {/* Responsive Card Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-8">
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p1} // Passing the imported image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p3} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p4} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p8} // Another image
          addToCartLink="/cart"
        />

      </div>
      <div className='bg-[#1E28320D] flex flex-col items-center px-4 py-8'>
       
        <h1 className='text-5xl font-medium mt-[100px]'>Or subscribe to the newsletter</h1>
        <form className="w-full max-w-sm flex gap-4 items-center mt-[74px]">
        <input 
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-2 border-b-2 border-[#000000] focus:outline-none  focus:border-black bg-[#1E28320D] "
          required
        />
        <button
          type="submit"
          className="text-black underline font-medium hover:no-underline focus:outline-none mt-2"
        >
          Submit
        </button>
      </form>
      <div>
        <h1 className='text-5xl font-medium mt-[70px] text-center'>Follow products and discounts on Instagram</h1>
        <div className='flex gap-2 mt-[60px] mb-[60px]'>
            <Image src={p1} alt='' className='w-[186px] h-[186px]'/>
            <Image src={p3} alt='' className='w-[186px] h-[186px]'/>
            <Image src={p4} alt='' className='w-[186px] h-[186px]'/>
            <Image src={p5} alt='' className='w-[186px] h-[186px]'/>
            <Image src={p7} alt='' className='w-[186px] h-[186px]'/>
            <Image src={p9} alt='' className='w-[186px] h-[186px]'/>
        </div>

      </div>

      </div>

      

    </div>
  )
}
