import React from 'react';

const DownloadButton: React.FC = () => {
  return (
    <a
      href="https://play.google.com/store" // Replace with the actual Play Store URL
      className="flex items-center space-x-2 rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:shadow-md"
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      {/* SVG Icon */}
      <svg
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.620088 0.810015C0.227309 1.18478 0 1.76826 0 2.52388V29.4766C0 30.2322 0.227309 30.8157 0.620088 31.1904L0.717031 31.2727L17.2873 16.1754V15.8189L0.717031 0.721659L0.620088 0.810015Z"
          fill="url(#paint0_linear_226_975)"
        />
        <path
          d="M22.8046 21.2104L17.2874 16.1755V15.819L22.8113 10.784L22.935 10.8496L29.4769 14.2422C31.3438 15.2051 31.3438 16.7894 29.4769 17.7583L22.935 21.1449L22.8046 21.2104Z"
          fill="url(#paint1_linear_226_975)"
        />
        <path
          d="M22.935 21.1453L17.2873 15.9976L0.620117 31.1908C1.24021 31.7849 2.2514 31.8566 3.40133 31.2624L22.935 21.1453Z"
          fill="url(#paint2_linear_226_975)"
        />
        <path
          d="M22.935 10.8496L3.40133 0.732461C2.2514 0.144413 1.24021 0.216014 0.620117 0.810154L17.2873 15.9973L22.935 10.8496Z"
          fill="url(#paint3_linear_226_975)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_226_975"
            x1="15.8161"
            y1="29.7572"
            x2="-4.54996"
            y2="7.41321"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="0.0066" stopColor="#00A1FF" />
            <stop offset="0.2601" stopColor="#00BEFF" />
            <stop offset="0.5122" stopColor="#00D2FF" />
            <stop offset="0.7604" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_226_975"
            x1="31.908"
            y1="15.9955"
            x2="-0.446212"
            y2="15.9955"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE000" />
            <stop offset="0.4087" stopColor="#FFBD00" />
            <stop offset="0.7754" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_226_975"
            x1="19.864"
            y1="13.1992"
            x2="-7.75399"
            y2="-17.1011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_226_975"
            x1="-3.57537"
            y1="40.1576"
            x2="8.7573"
            y2="26.6273"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="0.0685" stopColor="#2DA771" />
            <stop offset="0.4762" stopColor="#15CF74" />
            <stop offset="0.8009" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>

      {/* Button Text */}
      <span className="font-medium text-gray-800">Download App</span>
    </a>
  );
};

export default DownloadButton;
