import Image from 'next/image';
import React from 'react';

export const ServicesCard = ({ item }) => {
  const { name, image } = item;
  return (
    <div className="bg-primary cursor-pointer text-white gap-3 rounded-t-full p-1 flex flex-col items-center">
      <div className="w-full bg-background rounded-t-full rounded-b-full mx-auto flex items-center justify-center pb-3">
        <Image
          src={image} // replace with your image
          alt={name}
          width={120}
          height={120}
          className="w-full aspect-[5/6] object-cover overflow-visible"
        />
      </div>
      <div className="text-centers text-lg font-semibold">{name}</div>
    </div>
  );
};
