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

          <div className="text-center md:text-left text-secondary md:px-6">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-semibold sm:text-3xl lg:text-5xl">
                Serving All Across
              </h2>
              <Tag name="#Ahmedabad" />
              <p className="mt-4">
                From Gota, Maninagar and Bhopal to Navrangpura, SG Highway, and
                Nikol we cover the entire city and surrounding areas.
              </p>
            </div>
          </div>
        </div>
        <ServiceFeature />
      </div>
      <Strip />
    </section>
  );
};
