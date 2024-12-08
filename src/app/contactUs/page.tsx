import React from 'react';
import Image from 'next/image';
import map from '@/app/assets/map.png';
import telephone from '@/app/assets/telephone.png';
import watch from '@/app/assets/watch.png';
import trophy from '@/app/assets/trophy.png';
import check1 from '@/app/assets/check1.png';
import customer from '@/app/assets/customer-support.png';

export default function ContactUs() {
  return (
    <div className="font-inter bg-white px-4 py-8 md:px-16">
      {/* Heading */}
      <div className="text-center mt-[98px] mb-16 space-y-4">
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <p className="mt-2 text-lg text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Address Section */}
          <div className="flex items-center">
            <Image src={map} alt="Map" width={40} height={40} />
            <p className="ml-3">236 5th SE Avenue, New York NY10000, United States</p>
          </div>

          {/* Phone Section */}
          <div className="flex items-center">
            <Image src={telephone} alt="Telephone" width={40} height={40} />
            <p className="ml-3"> Mobile: +123 456 7890  <br /> Hotline: +123 456 7890</p>
          </div>

          {/* Working Time Section */}
          <div className="flex items-center">
            <Image src={watch} alt="Working Time" width={40} height={40} />
            <p className="ml-3">
              Monday-Friday: 9:00 <br />
              - 22:00 <br />
              Saturday-Sunday: 9:00 <br />
              - 21:00
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="w-full md:w-[273px] mt-6 py-3 bg-[#029FAE] text-white font-medium rounded-md">
            Submit
          </button>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="bg-[#F4F4F4] w-full mx-auto flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 h-[270px] mt-[63px] px-4">
        <div className="flex items-center justify-center">
          <Image src={trophy} alt="High Quality" className="w-[52px] h-[60px]" />
          <div className="mx-2 text-center md:text-left">
            <h1 className="text-2xl font-semibold">High Quality</h1>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={check1} alt="Warranty Protection" className="w-[60px] h-[60px]" />
          <div className="mx-2 text-center md:text-left">
            <h1 className="text-2xl font-semibold">Warranty Protection</h1>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={customer} alt="Customer Support" className="w-[52px] h-[60px]" />
          <div className="mx-2 text-center md:text-left">
            <h1 className="text-2xl font-semibold">24 / 7 Support</h1>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
