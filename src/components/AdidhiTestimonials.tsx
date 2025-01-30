'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: 'Adidhi helped us streamline our hiring process, connecting us with the right people for our team. It’s a must-have tool for any manager looking to build a strong workforce!',
    author: 'Mark Garfield',
    role: 'Manager, Orfila Restaurant',
    image: '/assets/images/user1.jpeg', // Replace with the actual path to the user's image
  },
  {
    id: 2,
    text: 'Thanks to Adidhi, I was able to quickly find talented sous chefs for my gourmet kitchen. The platform made the hiring process smooth and efficient, allowing me to build a skilled team that elevates our culinary offerings.',
    author: 'Sophia Williams',
    role: 'Chef, Gourmet Kitchen',
    image: '/assets/images/user2.jpeg', // Replace with the actual path to the user's image
  },
  {
    id: 3,
    text: 'Thanks to Adidhi App, I finally found a staff member who perfectly fits our team! The app\'s features are easy to use and incredibly effective.',
    author: 'John Smith',
    role: 'Owner, Cafe Delight',
    image: '/assets/images/user3.png', // Replace with the actual path to the user's image
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-10">
      {/* Quote Icon */}
      <div className="mb-6 text-9xl text-orange-500">
        <span>“</span>
      </div>

      {/* Testimonial Text */}
      <p className="max-w-2xl text-center text-lg text-gray-700 md:text-xl">
        {testimonials[current]?.text}
      </p>

      {/* Author Info */}
      <div className="mt-8 flex flex-col items-center">
        <Image
          src={testimonials[current]?.image ?? ''}
          alt={testimonials[current]?.author ?? ''}
          className="rounded-full"
          width={80}
          height={80}
        />
        <p className="mt-4 text-lg font-semibold text-orange-500">
          {testimonials[current]?.author}
        </p>
        <p className="text-sm text-gray-600">{testimonials[current]?.role}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex items-center justify-center space-x-6">
        <button
          type="button"
          onClick={handlePrev}
          className="flex size-10 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          ←
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex size-10 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          →
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex items-center space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-6 rounded-full ${
              current === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
