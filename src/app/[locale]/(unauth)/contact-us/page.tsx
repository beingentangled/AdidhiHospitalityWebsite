import React from 'react';

import ContactUsPage from '@/components/AdidhiContactUs'; // Adjust the path as per your folder structure
import AdidhiFooter from '@/components/AdidhiFooter';
import { Navbar } from '@/templates/Navbar';

const ContactUs: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactUsPage />
      <AdidhiFooter />
    </main>
  );
};

export default ContactUs;
