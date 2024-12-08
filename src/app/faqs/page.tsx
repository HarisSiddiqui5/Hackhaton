import React from 'react';
import { FaPlus } from 'react-icons/fa'; // For plus icon

export default function Faqs() {
  return (
    <div className="font-inter bg-white px-4 py-8 md:px-16 text-[#333333]">
      {/* Heading */}
      <div className="text-center mt-[98px] mb-16 space-y-4">
        <h1 className="text-5xl font-bold">Questions Looks Here</h1>
        <p className="mt-2 text-lg text-[#9F9F9F]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        </p>
      </div>

      {/* FAQs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ 1 */}
        <div className="flex flex-col bg-[#F9F9F9] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">What types of chairs do you offer?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        {/* FAQ 2 */}
        <div className="flex flex-col bg-[#F7F7F7] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">How can we get in touch with you?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        {/* FAQ 3 */}
        <div className="flex flex-col bg-[#F7F7F7] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Do your chairs come with a warranty?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?.</p>
        </div>

        {/* FAQ 4 */}
        <div className="flex flex-col bg-[#F7F7F7] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">What will be delivered? And When?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        {/* FAQ 5 */}
        <div className="flex flex-col bg-[#F7F7F7] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Can I try a chair before purchasing?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>

        {/* FAQ 6 */}
        <div className="flex flex-col bg-[#F7F7F7] p-6 rounded-md shadow-md space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">How do I clean and maintain my Comforty chair?</h3>
            <FaPlus className="text-[#333333] text-base" />
          </div>
          <p className="text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>
    </div>
  );
}
