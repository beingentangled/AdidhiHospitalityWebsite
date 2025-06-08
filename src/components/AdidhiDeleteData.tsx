'use client';

import React from 'react';

const DeleteDataPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-800 md:text-4xl">
        Delete
        {' '}
        <span className="text-orange-500">Your Data</span>
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
              placeholder="Your Full Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address (used in our app)
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email used in the app"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason (Optional)
            </label>
            <textarea
              id="reason"
              placeholder="Reason for data deletion"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-red-500 px-6 py-2 font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Request Data Deletion
          </button>
        </div>

        {/* Right Section: Info */}
        <div className="space-y-6">
          <div className="text-sm leading-relaxed text-gray-700">
            <h3 className="text-md mb-2 font-bold text-gray-800">How Data Deletion Works</h3>
            <p>
              By submitting this request, your account and all associated data will be permanently deleted within 7 working days.
              Please ensure the email you provide matches the one used in our app.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                📧
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">Email Support</h3>
                <p className="text-sm text-gray-600">privacy@adidhi.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                📍
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800">Registered Address</h3>
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
    </div>
  );
};

export default DeleteDataPage;
