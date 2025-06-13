'use client';

import React, { useState } from 'react';
import {
  IconMenuDeep,
  IconShoppingCart,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { menuList } from '@/utils/menuList';
import Image from 'next/image';

export const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <header className="flex fixed w-full z-50 py-6 justify-between md:bg-white lg:bg-background md:w-full items-center bg-primary md:text-secondary text-white rounded-b-4xl lg:rounded-none px-4 md:px-0 md:py-0">
        <div className="md:px-4">
          <Image
            src="/Logo/Glameaze-07.png"
            width={100}
            height={30}
            alt="logo"
            className="block md:hidden"
          />
          <Image
            src="/Logo/Glameaze-08.png"
            width={150}
            height={60}
            alt="logo"
            className="hidden md:block"
          />
        </div>
        <div className="flex gap-3 md:bg-primary md:gap-10 md:px-5 md:py-7 md:w-[80%] md:items-center md:justify-end md:text-white md:rounded-bl-[80px]">
          <div className="hidden lg:flex md:gap-10">
            {menuList.map((menu) => {
              return (
                <li key={menu.id} className="list-none">
                  <Link href={menu.path}>{menu.name}</Link>
                </li>
              );
            })}
          </div>
          <div className="cursor-pointer">
            <IconUser stroke={1} />
          </div>
          <div className="cursor-pointer">
            <IconShoppingCart stroke={1} />
          </div>
          <div
            className="block lg:hidden cursor-pointer"
            onClick={() => setIsSideBarOpen(true)}
          >
            <IconMenuDeep stroke={2} />
          </div>
        </div>
      </header>

      {/* Overlay and Side bar for small screen */}
      {isSideBarOpen && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/30 z-[40] transition-opacity duration-300
              ${isSideBarOpen ? 'opacity-30 pointer-events-auto' : 'opacity-0 pointer-events-none'}
              `}
            onClick={() => setIsSideBarOpen(false)} // clicking overlay closes sidebar
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[70%] bg-white text-black z-[50] flex flex-col gap-2 p-5 transition-all ease-in-out duration-300
              ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div
              className="flex justify-end w-full"
              onClick={() => setIsSideBarOpen(false)}
            >
              <IconX stroke={2} />
            </div>
            {menuList.map((menu) => (
              <li key={menu.id} className="list-none my-4">
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </div>
        </>
      )}
    </>
  );
};
