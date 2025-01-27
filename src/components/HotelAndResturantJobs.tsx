'use client';

import Image from 'next/image';
import React from 'react';

import AdidhiButton from './AdidhiButton';

const HotelAndRestaurantJobs: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
      {/* Header */}
      <h1 className="text-center text-2xl font-semibold text-gray-800 md:text-4xl">
        India's #1 App for
        {' '}
        <span className="text-orange-500">Hotel & Restaurant</span>
        {' '}
        Jobs
      </h1>

      {/* Content Section */}
      <div className="mt-44 grid w-full max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {/* Left Card */}
        <div className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
          <div className="absolute -top-56 mr-20 flex size-96 items-center justify-center">
            <Image
              src="/assets/images/jobseeker.png" // Replace with actual path
              alt="jobseeker"
              className="rounded-full object-cover"
              layout="intrinsic"
              width={360} // Adjust size
              height={360} // Adjust size
            />
          </div>
          <div className="mt-36">
            <p className="text-3xl font-bold text-gray-800">Find the latest hotel jobs</p>
          </div>
          <div className="mt-5">
            <AdidhiButton text="Find latest Hotel Jobs" />
          </div>
        </div>

        {/* Right Card */}
        <div className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
          <div className="absolute -top-56 ml-10  flex size-96 items-center justify-center">
            <Image
              src="/assets/images/employer.png" // Replace with actual path
              alt="manager"
              className="rounded-full object-cover"
              layout="intrinsic"
              width={340} // Adjust size
              height={340} // Adjust size
            />
          </div>
          <div className="mt-36">
            <p className="text-3xl font-bold text-gray-800">I'm looking for Staff</p>
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
