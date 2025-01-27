import React from 'react';

// Adjust the path as per your folder structure
import AdidhiFooter from '@/components/AdidhiFooter';
import AdidhiPrivacyPolicy from '@/components/AdidhiPrivacyPolicy';
import { Navbar } from '@/templates/Navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <AdidhiPrivacyPolicy />
      <AdidhiFooter />
    </main>
  );
};

export default PrivacyPolicy;
