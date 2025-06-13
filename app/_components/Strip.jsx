'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export const Strip = () => {
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(0);

  const imagePairWidth = 70 + 8 + 30 + 8; // Approximate total width of image pair

  useEffect(() => {
    const updateRepeatCount = () => {
      requestAnimationFrame(() => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const count = Math.ceil(containerWidth / imagePairWidth);
          setRepeatCount(count);
        }
      });
    };

    updateRepeatCount();

    window.addEventListener('resize', updateRepeatCount);
    return () => window.removeEventListener('resize', updateRepeatCount);
  }, []);

  const repeatedImages = Array.from({ length: repeatCount });

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="bg-secondary text-white text-xl overflow-hidden text-center py-3 -skew-y-3 transform">
        <div className="flex items-center justify-center gap-12">
          {repeatedImages.map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-center transform -skew-y-3"
            >
              <Image
                src="/Logo/Glameaze-07.png"
                width={70}
                height={70}
                alt="logo"
                className="transform -skew-y-3"
              />
              <Image
                src="/Flower.png"
                width={30}
                height={30}
                alt="flower"
                className="transform -skew-y-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
