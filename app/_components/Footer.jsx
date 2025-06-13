import Image from 'next/image';
import React from 'react';
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { menuList } from '@/utils/menuList';

export const Footer = () => {
  return (
    <footer className="container text-secondary list-none my-5 mx-auto w-full">
      <div className="px-3 py-3 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-0">
        {/* logo and social media icon */}
        <div className="flex items-center justify-center gap-6 flex-col">
          <Image
            src="/Logo/Glameaze-08.png"
            width={180}
            height={100}
            alt="logo"
          />
          <div className="flex items-center justify-center gap-6">
            <IconBrandInstagram stroke={2} />
            <IconBrandFacebook stroke={2} />
            <IconBrandX stroke={2} />
            <IconBrandLinkedin stroke={2} />
          </div>
          <p>
            Design & Developed by{' '}
            <span className="font-bold italic">UrbanMitraa</span>
          </p>
        </div>

        <div className="flex items-center font-semibold justify-center gap-10 md:justify-around">
          {/* Home */}
          <div className="flex flex-col gap-3">
            {menuList.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <li>Support</li>
            <li>Help</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </div>
        </div>
      </div>
    </footer>
  );
};
