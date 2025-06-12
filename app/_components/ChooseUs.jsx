import React from 'react';
import { ChooseUsCard } from './ChooseUsCard';
import { chooseUs } from '@/utils/menuList';
import { Strip } from './Strip';

export const ChooseUs = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col gap-5 items-center justify-center">
        {/* Title */}
        <h2 className="font-extrabold text-2xl text-primary md:text-5xl">
          Why Choose Us?
        </h2>

        {/* Choose us list */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5 md:gap-10">
          {chooseUs.map((item, index) => {
            return <ChooseUsCard key={index} item={item} />;
          })}
        </div>
      </div>
      <Strip />
    </section>
  );
};
