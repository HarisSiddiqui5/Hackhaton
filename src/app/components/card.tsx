import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import vector from '@/app/assets/Vector.png';

interface CardProps {
  title: string;
  price: string;
  label?: string; // Optional label
  image: StaticImageData | string; // Allow both StaticImageData and string
  addToCartLink: string;
}

const Card: React.FC<CardProps> = ({ title, price, label, image, addToCartLink }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] hover:shadow-xl w-full max-w-[312px] h-auto">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image} // Dynamic image path
          alt={title}
          className="w-full h-64 object-cover"
          width={312}
          height={312}
        />
        {/* Conditionally render label */}
        {label && (
          <div
            className={`absolute top-3 left-3 text-white text-xs py-1 px-2 rounded ${
              label === 'New' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {label}
          </div>
        )}
      </div>
      
      {/* Title and Price */}
      <div className="flex justify-between items-center p-4">
        <div>
          <h2 className="text-base font-normal text-[#007580]">{title}</h2>
          <p className="text-lg font-semibold text-[#272343]">{price}</p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center">
          <Link href={addToCartLink}>
            <a className="bg-[#029FAE] w-[44px] h-[44px] rounded-lg flex justify-center items-center">
              <Link href='/cart'>
              <Image src={vector} alt="Add to Cart" className="w-[18.5px] h-[13.49px]" />
              </Link>
            </a> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
