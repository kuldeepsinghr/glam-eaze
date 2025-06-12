import { serviceFeature } from '@/utils/menuList';
import Image from 'next/image';
import React from 'react';

export const ServiceFeature = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      {/* line*/}
      <div className="w-full h-[2px] my-6 bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_12px_4px_white] lg:shadow-[0_0_12px_4px_#fee3e5] rounded-full" />

      {/* contant */}
      <div className="flex lg:gap-20 my-7 lg:relative">
        <div className="hidden w-[80%] mx-auto h-[5px] left-[10%] top-[40%] bg-white lg:block z-10 lg:absolute"></div>
        {/* Card */}
        {serviceFeature.map((item, index) => {
          const { name, image } = item;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-secondary z-30 font-semibold gap-5"
            >
              <div className="bg-white rounded-full p-3 lg:p-8">
                <Image src={image} width={60} height={60} alt={name} />
              </div>
              <p className="text-center">{name}</p>
            </div>
          );
        })}
      </div>

      {/* line */}
      <div className="w-full h-[2px] my-6 bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_12px_4px_white] lg:shadow-[0_0_12px_4px_#fee3e5] rounded-full"></div>
    </div>
  );
};
