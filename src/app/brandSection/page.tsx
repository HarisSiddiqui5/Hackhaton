import React from 'react';
import Image from 'next/image';
import zapier from '@/app/assets/zapier.png';
import pipedrive from '@/app/assets/pipedrive.png';
import cib from '@/app/assets/cib.png';
import z from '@/app/assets/z.png';
import burntoast from '@/app/assets/burntust.png';
import panda from '@/app/assets/panda.png';
import moz from '@/app/assets/moz.png';

export default function BrandSection() {
  return (
    <div className="hidden sm:flex items-center  sm:gap-6 md:gap-10  justify-center">
      <Image src={zapier} alt="Zapier Logo" className="w-[70px] sm:w-[85px] h-[70px] sm:h-[87px]" />
      <Image src={pipedrive} alt="Pipedrive Logo" className="w-[90px] sm:w-[107px] h-[92px] sm:h-[109px]" />
      <Image src={cib} alt="CIB Logo" className="w-[115px] sm:w-[135px] h-[117px] sm:h-[139px]" />
      <Image src={z} alt="Z Logo" className="w-[50px] sm:w-[63px] h-[52px] sm:h-[65px]" />
      <Image src={burntoast} alt="Burnt Toast Logo" className="w-[80px] sm:w-[98px] h-[83px] sm:h-[101px]" />
      <Image src={panda} alt="Panda Logo" className="w-[90px] sm:w-[113px] h-[92px] sm:h-[115px]" />
      <Image src={moz} alt="Moz Logo" className="w-[70px] sm:w-[84px] h-[72px] sm:h-[87px]" />
    </div>
  );
}
