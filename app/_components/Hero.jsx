import React from 'react';
import { Tag } from './Tag';
import Image from 'next/image';
import { Strip } from './Strip';

export const Hero = () => {
  return (
    <>
      <section className="bg-white lg:bg-background lg:grid text-secondary">
        <div className="mx-auto w-screen max-w-screen-xl px-4 pt-20 sm:pt-10 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:pt-0">
          <div className="max-w-prose text-left relative">
            <div className="text-2xl border border-secondary py-1 mb-3 w-fit px-3 rounded-4xl">
              <p>
                Welcome to <span className="font-bold italic">GlamEase</span>
              </p>
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-5xl lg:text-7xl">
              Salon, Mehendi & Makeup Services at Home in
            </h1>

            <div className="-rotate-6 m-auto absolute left-[15%] lg:left-[15%] sm:bottom-[-18%] sm:left-[14%] bottom-[-25%] lg:bottom-[-18%] md:bottom-[-25%] right-0 ">
              <Tag name="#Ahmedabad" />
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-20">
            <Image
              src={'/Ahmedbad.png'}
              width={300}
              height={300}
              alt="ahmedabad"
              className="lg:w-full"
            />

            <div className="absolute lg:w-full inset-0 flex items-center justify-center">
              <Image
                src={'/Model.png'}
                width={200}
                height={200}
                alt="model"
                className="md:w-[50%] lg:w-[70%]"
              />
            </div>
          </div>
        </div>

        <Strip />
      </section>
    </>
  );
};
