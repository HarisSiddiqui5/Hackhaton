import React from 'react';
import Card from '../components/card';
import p2 from '@/app/assets/p2.png';
import p3 from '@/app/assets/p3.png';
import p4 from '@/app/assets/p4.png';
import p5 from '@/app/assets/p5.png';
import p7 from '@/app/assets/p7.png';
import p9 from '@/app/assets/p9.png';
import p13 from '@/app/assets/p13.png';

export default function OurProducts() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 font-inter">
      <div className="text-[32px] font-semibold ml-4 sm:ml-0 mb-8 text-center mt-24 md:mt-[170px]">
        Our Products
      </div>

      {/* First Grid - 2 items visible on small screens, all on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p2}
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p3}
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p4}
          addToCartLink="/cart"
           
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p5}
          addToCartLink="/cart"
          
        />
      </div>

      {/* Second Grid - Visible only on medium screens and larger */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-8">
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p7}
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p9}
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p13}
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p2}
          addToCartLink="/cart"
        />
      </div>
    </div>
  );
}
