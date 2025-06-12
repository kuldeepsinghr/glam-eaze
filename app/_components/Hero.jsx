import React from 'react';
import { Tag } from './Tag';

export const Hero = () => {
  return (
    <>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center text-secondary">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left relative">
            <div className="text-2xl border border-secondary p-2 mb-3 w-fit px-3 rounded-4xl">
              <p>
                Welcome to <span className="font-bold italic">GlamEaze</span>
              </p>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Salon, Mehendi & Makeup Services at Home in
            </h1>

            <div className="-rotate-6 m-auto absolute left-[15%] lg:left-[15%] sm:bottom-[-18%] sm:left-[14%] bottom-[-25%] lg:bottom-[-18%] md:bottom-[-18%] right-0 ">
              <Tag name="#Ahmedabad" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
