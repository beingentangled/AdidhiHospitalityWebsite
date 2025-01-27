'use client';

import React from 'react';

type AdidhiButtonProps = {
  text: string; // Button text
  className?: string; // Optional additional styles
};

const AdidhiButton: React.FC<AdidhiButtonProps> = ({ text, className = '' }) => {
  return (
    <button
      type="button"
      className={`h-12 rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default AdidhiButton;
