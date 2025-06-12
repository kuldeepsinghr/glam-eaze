import React from 'react';
import { Tag } from './Tag';
import { ServicesCard } from './ServicesCard';
import { services } from '@/utils/menuList';

export const OurServices = () => {
  return (
    <section className="my-10 md:my-16">
      <div className="flex items-center justify-center gap-7 md:gap-10 flex-col">
        {/* Titles */}
        <div className="flex items-center justify-center gap-2 flex-col md:gap-5">
          <h2 className="text-secondary font-bold text-xl md:text-5xl">
            Your Personal <span className="font-dancing mx-1">Beauty</span>
            Destination
          </h2>
          <Tag name="Anytime, Anywhere" />
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <h2 className="font-extrabold text-2xl text-primary md:text-5xl">
            Our Services at Home
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 gap-y-12">
            {services.map((item, index) => (
              <ServicesCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
