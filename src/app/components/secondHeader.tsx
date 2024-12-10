import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/Logo.png'
import carticon from '@/app/assets/carticon.png'
import number from '@/app/assets/Number.png'
import Link from 'next/link'

function SecondHeader() {
  return (
    <div className='bg-[#F0F2F3] flex items-center w-full h-[60px] sm:h-[84px] justify-around font-inter'>
      <div className='flex items-center gap-2 font-medium text-[26px]'> 
        <Image src={logo} alt='Logo' className='w-10 h-10'/>
        <h1>Comforty</h1>
      </div>
      <div className='bg-[#FFFFFF] flex items-center gap-3 p-3 rounded-lg font-medium text-xs'>
        <Link href="/shop" className='hover:bg-slate-400 rounded-md p-1'>
        <Image src={carticon} alt='cart icon' className='w-[22px] h-[22px]'/> 
        </Link>
        <Link href="/cart">
         <h1 className='hover:bg-slate-400 rounded-md p-1'>Cart</h1>
         </Link>
         <Image src={number}alt='Number of cart items' className='w-[22px] h-[22px]'/>
      </div>
    </div>
  )
}

export default SecondHeader
