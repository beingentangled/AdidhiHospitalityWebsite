'use client';

import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-800 md:text-4xl">
        Contact
        {' '}
        <span className="text-orange-500">Us</span>
      </h1>

      {/* Main Content */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-md md:grid-cols-2">
        {/* Left Section: Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                +91
              </span>
              <input
                type="text"
                id="phone"
                placeholder=" "
                className="block w-full rounded-md border-gray-300 pl-12 shadow-sm focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>

        {/* Right Section: Contact Info */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              {/* Placeholder for phone icon */}
              📞
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">Call Us</h3>
              <p className="text-sm text-gray-600">+91 97461 91919</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              {/* Placeholder for email icon */}
              📧
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">E-Mail</h3>
              <p className="text-sm text-gray-600">contact@adidhi.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              {/* Placeholder for location icon */}
              📍
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">Address</h3>
              <p className="text-sm text-gray-600">
                Adidhi Hospitality Solutions Pvt Ltd
                <br />
                Malabar Innovation Entrepreneurship Zone,
                <br />
                Building No:446, Mangattuparamba,
                <br />
                Near Kannur University Centre,
                <br />
                Kalliasseri, Kannur, Kerala - 670 567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
