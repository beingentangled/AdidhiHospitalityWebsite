'use client';

import Image from 'next/image';
import React from 'react';

const HelloEmployers: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-gray-50 px-6 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-500 md:text-5xl">
          Hello Employers
        </h1>
        <p className="mt-4 text-lg text-gray-800 md:text-2xl">
          Hire hotel and restaurant staff. Instantly.
        </p>
      </div>

      {/* Background Decoration */}
      <div className="absolute right-0 top-1/3 hidden w-4/5 -translate-y-1/2 rounded-lg md:block">
        <Image
          src="/assets/images/backgroundMacbook.svg"
          alt="Background Decoration"
          layout="responsive"
          width={600} // Adjust for responsiveness
          height={300} // Maintain aspect ratio
        />
      </div>

      {/* Laptop Placeholder */}
      <div className="relative z-10 mt-10 flex w-full max-w-4xl items-center justify-center">
        {/* Space for the laptop image */}
        <div className="h-auto w-full max-w-2xl">
          <Image
            src="/assets/images/macbook.svg" // Replace with actual Play Store badge path
            alt="Download App"
            width={750}
            height={750}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 mt-10 grid w-full max-w-xl grid-cols-1 gap-6 text-gray-800 md:grid-cols-2">
        {/* Feature 1 */}
        <div className="flex items-center space-x-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>Hire staff for FREE</span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center space-x-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>Post a job in 2 minutes</span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center space-x-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span>Talk Directly with Candidates</span>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center space-x-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
          </div>
          <span>Get applicant resume on SMS</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-10">
        <button
          type="button"
          className="rounded-md bg-orange-500 px-6 py-3 text-white shadow-sm transition hover:bg-orange-600 focus:outline-none"
        >
          Post Jobs for FREE
        </button>
      </div>
    </div>
  );
};

export default HelloEmployers;
