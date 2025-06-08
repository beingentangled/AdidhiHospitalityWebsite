import React from 'react';

import DeleteDataPage from '@/components/AdidhiDeleteData';
import AdidhiFooter from '@/components/AdidhiFooter';
import { Navbar } from '@/templates/Navbar';

const DeleteData: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <DeleteDataPage />
      <AdidhiFooter />
    </main>
  );
};

export default DeleteData;
