import React from 'react';

export const Tag = ({ name }) => {
  return (
    <div className="bg-primary text-white md:font-bold py-2 rounded-4xl md:text-xl w-fit px-7 md:px-10 lg:py-3">
      <p>{name}</p>
    </div>
  );
};
