'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Pramela Nair',
    position: 'Cashier',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: '/assets/images/employee1.png',
  },
  {
    id: 2,
    name: 'Goutham Kumar',
    position: 'Executive Chef',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: '/assets/images/employee2.png',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    position: 'Waiter',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: '/assets/images/employee3.png',
  },
  {
    id: 4,
    name: 'Anita Sharma',
    position: 'Manager',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: '/assets/images/employee4.png',
  },
];

const EmployeesReview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 2 : (prevIndex - 2 + reviews.length) % reviews.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 2) % reviews.length);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
        We found our dream job in
        {' '}
        <span className="text-orange-500">adidhi</span>
      </h1>

      {/* Reviews Section */}
      <div className="relative flex w-full max-w-5xl items-center justify-center">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none sm:left-4"
          aria-label="Previous"
        >
          <ArrowLeftIcon className="size-5 text-gray-600" />
        </button>

        {/* Current Reviews */}
        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 sm:px-6 lg:px-12">
          {[0, 1].map((offset) => {
            const reviewIndex = (currentIndex + offset) % reviews.length;
            const review = reviews[reviewIndex]!;

            return (
              <div
                key={review.id}
                className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md"
              >
                {/* Image */}
                <div className="mb-4 size-24">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="rounded-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                {/* Name and Position */}
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.position}</p>
                {/* Review Text */}
                <p className="mt-4 text-sm text-gray-600">{review.review}</p>
                {/* Rating */}
                <div className="mt-4 flex space-x-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <span key={`${review.id}-star-${starIdx}`}>★</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none sm:right-4"
          aria-label="Next"
        >
          <ArrowRightIcon className="size-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default EmployeesReview;
