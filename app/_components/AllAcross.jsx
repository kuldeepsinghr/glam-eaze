import Image from 'next/image';
import React from 'react';
import { Tag } from './Tag';
import { ServiceFeature } from './ServiceFeature';
import { Strip } from './Strip';

export const AllAcross = () => {
  return (
    <section className=" lg:bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-col gap-4 md:flex-row md:items-center md:gap-3">
          <Image
            src="/Ahmedbad.png"
            width={300}
            height={300}
            className="rounded"
            alt="ahmedabad"
          />

          <div className="text-center flex flex-col items-center justify-center md:text-left text-secondary md:px-6">
            <div className="max-w-lg md:max-w-none relative">
              <h2 className="text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                Serving All Across
              </h2>
              <div className="absolute inset-8 rotate-6 top-[120%] left-[30%]">
                <Tag name="#Ahmedabad" />
              </div>
            </div>
            <p className="mt-14 lg:mt-20">
              From Gota, Maninagar and Bhopal to Navrangpura, SG Highway, and
              Nikol we cover the entire city and surrounding areas.
            </p>
          </div>
        </div>
        <ServiceFeature />
      </div>
      <Strip />
    </section>
  );
};
