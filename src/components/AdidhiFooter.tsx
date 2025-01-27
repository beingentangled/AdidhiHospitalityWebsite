'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdidhiFooter: React.FC = () => {
  return (
    <footer className="bg-gray-50 px-6 py-10">
      {/* Grid Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left lg:grid-cols-5">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <Image
              src="/assets/images/logo.svg" // Replace with actual logo path
              alt="Adidhi Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <Image
              src="/assets/images/headset.png" // Replace with actual headset icon path
              alt="Support Icon"
              width={20}
              height={20}
            />
            <span className="text-gray-700">Call +91 97461 91919</span>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-orange-500">Company</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/about-us" className="hover:text-gray-900">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-900">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/coming-soon" className="hover:text-gray-900">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>

        {/* Employer Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-orange-500">Employer</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/coming-soon" className="hover:text-gray-900">
                Post a job
              </Link>
            </li>
            <li>
              <Link href="/coming-soon" className="hover:text-gray-900">
                Get Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Job Seeker Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-orange-500">Job Seeker</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/coming-soon" className="hover:text-gray-900">
                Download App
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect & Search Section */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <h3 className="font-bold text-orange-500">Connect with us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/icons/youtube.svg"
                alt="Youtube"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
          <h3 className="font-bold text-orange-500">Search Jobs</h3>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/assets/images/google-play-badge.svg" // Replace with actual Play Store badge path
              alt="Download App"
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Copyright © 2025. Adidhi. All rights reserved.
      </div>
    </footer>
  );
};

export default AdidhiFooter;
