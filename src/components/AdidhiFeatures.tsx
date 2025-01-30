'use client';

import Image from 'next/image';
import React from 'react';

const AdidhiFeatures: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white px-6 py-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-orange-500 md:text-3xl">
          Dear Jobseekers
        </h2>
        <p className="mt-2 text-lg font-medium text-gray-800 md:text-xl">
          Discover your next hotel job with Adidhi
        </p>
      </div>

      {/* Content */}
      <div className="mt-10 flex w-full max-w-6xl flex-col md:flex-row md:items-start md:justify-between">
        {/* Features Section */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          {/* Feature 1 */}
          <div className="flex items-start space-x-3">
            <span className="text-xl text-orange-500">✔</span>
            <p className="text-base text-gray-700 md:text-lg">
              <strong>Adidhi is completely FREE!</strong>
              {' '}
              No payments are required.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-3">
            <span className="text-xl text-orange-500">✔</span>
            <p className="text-base text-gray-700 md:text-lg">
              Discover
              {' '}
              <strong>Part-Time & Full-Time</strong>
              {' '}
              hospitality job opportunities near you.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-3">
            <span className="text-xl text-orange-500">✔</span>
            <p className="text-base text-gray-700 md:text-lg">
              Build your resume effortlessly with our
              {' '}
              <strong>Free Resume Maker</strong>
              .
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start space-x-3">
            <span className="text-xl text-orange-500">✔</span>
            <p className="text-base text-gray-700 md:text-lg">
              Access  Adidhi in
              {' '}
              <strong>Hindi, English</strong>
              {' '}
              or
              {' '}
              <strong>മലയാളം</strong>
              .
            </p>
          </div>

          {/* Google Play Button */}
          <div>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Image
                src="/assets/images/google-play-badge.png" // Replace with the actual path to the Play Store badge image
                alt="Get it on Google Play"
                width={180}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* Mobile App Image */}
        <div className="mt-10 flex justify-center md:mt-0 md:w-1/2">
          <div className="relative h-auto w-72">
            <Image
              src="/assets/images/adidhi-app-mockup.png" // Replace with the actual path to the mobile app mockup
              alt="Adidhi App Mockup"
              layout="responsive"
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdidhiFeatures;
