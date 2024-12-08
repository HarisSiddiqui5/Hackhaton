import React from 'react';
import Image from 'next/image';
import p4 from '@/app/assets/p4.png';
import heart from '@/app/assets/heart.png';
import delet from '@/app/assets/delet.png';
import p5 from '@/app/assets/p5.png'

export default function Cart() {
  return (
    <div className="px-8 py-10">
      <h1 className="text-[22px] font-medium mb-6">Bag</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Cart Items */}
        <div className="flex-1 space-y-8">
          {/* First Item */}
          <div className="flex items-start">
            <Image src={p4} alt="Product Image" className="w-[150px] h-[150px] object-cover" />
            <div className="ml-6">
              <h1 className="font-normal text-base text-[#272343]">Library Stool Chair</h1>
              <p className="mt-4 text-[#757575] text-[15px]">Ashen Slate/Cobalt Bliss</p>
              <div className="text-[#757575] text-[15px] flex gap-4 mt-2">
                <p>Size L</p>
                <p>Quantity 1</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image src={heart} alt="Favorite" className="w-6 h-6" />
                <Image src={delet} alt="Delete" className="w-6 h-6" />
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="font-medium">MRP: $99</p>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex items-start">
            <Image src={p5} alt="Product Image" className="w-[150px] h-[150px] object-cover" />
            <div className="ml-6">
              <h1 className="font-normal text-base text-[#272343]">Library Stool Chair</h1>
              <p className="mt-4 text-[#757575] text-[15px]">Ashen Slate/Cobalt Bliss</p>
              <div className="text-[#757575] text-[15px] flex gap-4 mt-2">
                <p>Size L</p>
                <p>Quantity 1</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image src={heart} alt="Favorite" className="w-6 h-6" />
                <Image src={delet} alt="Delete" className="w-6 h-6" />
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="font-medium">MRP: $99</p>
            </div>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="lg:w-[30%] p-6  rounded-lg shadow-sm">
          <h1 className="font-medium text-[21px] mb-4">Summary</h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="font-normal text-[15px]">Subtotal</p>
              <p className="font-medium text-sm">$198.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-[15px]">Estimated Delivery & Handling</p>
              <p className="font-medium text-sm">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-[15px]">Total</p>
              <p className="font-medium text-sm">$198.00</p>
            </div>
          </div>
          <button className="w-full text-[15px] font-medium py-3 mt-6 border bg-[#029FAE] text-white transition-all rounded-full">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
