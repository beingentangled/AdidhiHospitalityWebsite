'use client';

import Image from 'next/image';
import React from 'react';

import AdidhiButton from './AdidhiButton';

const HotelAndRestaurantJobs: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
      {/* Header */}
      <h1 className="px-4 text-center text-2xl font-semibold text-gray-800 md:text-4xl">
        India's #1 App for
        {' '}
        <span className="text-orange-500">Hotel & Restaurant</span>
        {' '}
        Jobs
      </h1>

      {/* Content Section */}
      {/* On mobile (default), it stacks vertically (1 column).
          On md and above, it becomes a 2-column grid. */}
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 px-4 md:mt-44 md:grid-cols-2">

        {/* Left Card */}
        <div className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
          {/*
            We apply absolute positioning only at md: breakpoint.
            For mobile, the image appears in normal flow.
          */}
          <div className="flex items-center justify-center md:absolute md:-top-36 md:mr-20">
            <Image
              src="/assets/images/jobseeker.png"
              alt="jobseeker"
              className="rounded-full object-cover"
              layout="intrinsic"
              width={360}
              height={360}
            />
          </div>

          {/*
            For mobile, add some top margin so the text doesn't overlap the image.
            For md and above, we keep the existing margin.
          */}
          <div className="mt-16 md:mt-36">
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">
              Find the latest hotel jobs
            </p>
          </div>
          <div className="mt-5">
            <AdidhiButton text="Find latest Hotel Jobs" />
          </div>
        </div>

        {/* Right Card */}
        <div className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
          {/*
            Same pattern as left card,
            only absolute on md and above.
          */}
          <div className="flex items-center justify-center md:absolute md:-top-44 md:ml-10">
            <Image
              src="/assets/images/employer.png"
              alt="manager"
              className="rounded-full object-cover"
              layout="intrinsic"
              width={340}
              height={340}
            />
          </div>

          <div className="mt-16 md:mt-36">
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">
              I&apos;m looking for Staff
            </p>
          </div>
          <div className="mt-5">
            <AdidhiButton text="Post jobs for free" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAndRestaurantJobs;
