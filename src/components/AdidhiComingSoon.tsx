'use client';

import React, { useEffect, useState } from 'react';

const ComingSoonPage: React.FC = () => {
  // State to hold time left
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date (modify this date as needed)
  const targetDate = new Date('2025-04-15T00:00:00'); // Example: Feb 15, 2025, midnight

  // Calculate time left based on the current time
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Time is up
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="mt-64 flex min-h-full flex-col items-center justify-center bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl">
        Coming Soon
      </h1>
      <p className="mb-8 max-w-lg text-center text-gray-600">
        We’re working hard to bring you something amazing. Stay tuned for
        updates!
      </p>

      {/* Countdown Section */}
      <div className="mb-8 flex space-x-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-orange-500">
            {timeLeft.days}
          </div>
          <div className="text-sm text-gray-500">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-orange-500">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-orange-500">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-orange-500">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>

      {/* Email Subscription */}
      <div className="w-full max-w-md">
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-l-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none"
          />
          <button
            type="submit"
            className="h-full rounded-r-md bg-orange-500 px-6 text-sm font-medium text-white shadow-sm hover:bg-orange-600"
          >
            Notify Me
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Adidhi Hospitality. All rights reserved.
      </div>
    </div>
  );
};

export default ComingSoonPage;
