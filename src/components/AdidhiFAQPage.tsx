'use client';

import React, { useState } from 'react';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const jobSeekerFAQs: FAQItem[] = [
  {
    id: 1,
    question: 'What kind of jobs are available on Adidhi?',
    answer:
      'From Steward to Head Chef and all the jobs in between, you will find jobs fit for all levels of skills and experience on Adidhi.',
  },
  {
    id: 2,
    question: 'What kind of hospitality businesses are hiring on Adidhi?',
    answer:
      'Adidhi connects you with restaurants, hotels, cafes, and other businesses in the hospitality industry.',
  },
  {
    id: 3,
    question: 'I have created my profile on the App. What\'s next?',
    answer:
      'After creating your profile, you can start browsing and applying for jobs directly.',
  },
  {
    id: 4,
    question: 'I did not get OTP, what should I do?',
    answer:
      'Ensure your mobile number is entered correctly. If the issue persists, contact our support team.',
  },
  {
    id: 5,
    question: 'Do I have to pay to apply to jobs?',
    answer: 'No, applying to jobs on Adidhi is completely free.',
  },
  {
    id: 6,
    question: 'What is Adidhi Learn?',
    answer:
      'Adidhi Learn is a feature that helps you improve your skills with free resources and training.',
  },
  {
    id: 7,
    question: 'Are you an agency?',
    answer:
      'No, Adidhi is a platform connecting job seekers with hospitality businesses.',
  },
  {
    id: 8,
    question: 'Is there any commission if I get a job through Adidhi?',
    answer:
      'No, Adidhi does not charge any commission for connecting you with employers.',
  },
];

const employerFAQs: FAQItem[] = [
  {
    id: 1,
    question: 'How to Post a Job on Adidhi?',
    answer:
      'To post a job, register your business, fill in basic information, and click on the \'Post a Job\' option. Provide job details like title, experience, location, type, etc.',
  },
  {
    id: 2,
    question: 'Do I have to pay to Post a Job?',
    answer: 'No, posting jobs on Adidhi is free.',
  },
  {
    id: 3,
    question: 'What kind of candidates can I find on Adidhi?',
    answer:
      'You can find candidates for all positions, from entry-level to experienced professionals in the hospitality industry.',
  },
  {
    id: 4,
    question: 'Are there any paid features or premium services?',
    answer:
      'Yes, Adidhi offers premium features like highlighted job postings for better visibility.',
  },
  {
    id: 5,
    question: 'How can I talk to candidates directly?',
    answer:
      'After candidates apply, you can contact them through the Adidhi platform\'s messaging feature.',
  },
  {
    id: 6,
    question: 'What is Adidhi Learn?',
    answer:
      'Adidhi Learn is a feature that offers learning resources to help candidates enhance their skills.',
  },
];

const AdidhiFAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderFAQs = (faqs: FAQItem[]) => (
    <div className="space-y-4">
      {faqs.map(faq => (
        <div
          key={faq.id}
          className="border-b border-gray-300 pb-4"
        >
          <div
            role="button"
            tabIndex={0}
            className="flex cursor-pointer items-center justify-between font-medium text-gray-800"
            onClick={() => toggleFAQ(faq.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleFAQ(faq.id);
              }
            }}
          >
            <span>{faq.question}</span>
            <span>{expandedId === faq.id ? '×' : '+'}</span>
          </div>
          {expandedId === faq.id && (
            <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="mb-10 text-center text-2xl font-semibold text-gray-800">
        FAQ's
      </h1>

      <div className="w-full max-w-4xl">
        {/* Job Seekers Section */}
        <h2 className="mb-6 text-lg font-bold text-gray-800">Job Seekers</h2>
        {renderFAQs(jobSeekerFAQs)}

        {/* Employers Section */}
        <h2 className="mb-6 mt-10 text-lg font-bold text-gray-800">Employers</h2>
        {renderFAQs(employerFAQs)}
      </div>
    </div>
  );
};

export default AdidhiFAQ;
