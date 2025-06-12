import Image from 'next/image';
import React from 'react';

export const ChooseUsCard = ({ item }) => {
  const { name, image } = item;
  return (
    <div
      className="flex px-5 py-2 gap-2 rounded-4xl items-center justify-center flex-col"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 50%, #ffe6eb 100%)', // light pink gradient
      }}
    >
      <Image src={image} width={100} height={100} alt={name} />

      <div className="text-center">
        <p className="text-primary font-bold">{name}</p>
      </div>
    </div>
  );
};
