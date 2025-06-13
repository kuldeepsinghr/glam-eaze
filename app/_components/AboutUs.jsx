import Image from 'next/image';
import React from 'react';

export const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row md:text-left md:gap-10 text-center gap-4 items-center justify-center">
      <Image
        src="/Logo/Glameaze-10.png"
        width={200}
        height={100}
        alt="logo"
        className=""
      />
      <div className="md:text-primary">
        <h2 className="text-primary font-bold text-5xl lg:text-6xl mb-3">
          About Us
        </h2>
        <p>
          Bringing the Salon to Your Doorstep Safely, Comfortably, Beautifully
          Welcome to <span className="font-bold italic">GlameEase</span>{' '}
          Ahmedabad's trusted choice for premium salon, makeup, and mehendi
          services at home. We believe that looking and feeling your best should
          be easy, relaxing, and personal. That's why we bring expert beauty
          services right to your home - with no stress, no travel, and no
          compromises on quality.
        </p>
      </div>
    </div>
  );
};
