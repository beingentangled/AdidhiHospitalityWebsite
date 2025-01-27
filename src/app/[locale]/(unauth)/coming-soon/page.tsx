import React from 'react';

import ComingSoonPage from '@/components/AdidhiComingSoon';
// Adjust the path as per your folder structure
import AdidhiFooter from '@/components/AdidhiFooter';
import { Navbar } from '@/templates/Navbar';

const ComingSoon: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <ComingSoonPage />
      <AdidhiFooter />
    </main>
  );
};

export default ComingSoon;
