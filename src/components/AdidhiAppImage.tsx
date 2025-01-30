'use client';

import Image from 'next/image';
import React from 'react';

const AdidhiAppImage: React.FC = () => {
  return (
    <div className="flex min-h-36 flex-col items-center justify-center bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Welcome to Adidhi
      </h1>

      {/* SVG Image */}
      <div className="w-full max-w-4xl">
        <Image
          src="/assets/images/app_image.svg" // Path to your SVG file
          alt="Adidhi App Illustration"
          className="h-auto w-full"
          layout="intrinsic" // Keeps the aspect ratio intact
          width={800} // Adjust the width for large screens
          height={600} // Adjust the height for large screens
        />
      </div>
    </div>
  );
};

export default AdidhiAppImage;
