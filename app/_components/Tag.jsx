import React from 'react';

export const Tag = ({ name }) => {
  return (
    <div className="bg-primary text-white font-bold p-3 rounded-4xl text-2xl w-fit px-7 md:px-10">
      <p>{name}</p>
    </div>
  );
};
