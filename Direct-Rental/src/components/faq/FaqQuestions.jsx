"use client";

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I schedule a virtual apartment tour?',
    answer: 'You can book a virtual tour by clicking the "Schedule Tour" button on any listing and selecting a convenient time.',
  },
  {
    question: 'Is there a fee to list my property?',
    answer: 'No, listing your property is completely free. You only pay a commission if your property is successfully rented.',
  },
  {
    question: 'Can I filter listings by budget and location?',
    answer: 'Yes! Use the search bar to filter by city or neighborhood, and refine your results by amount range and property type.',
  },
  {
    question: 'Is customer support available 24/7?',
    answer: 'Our support team is available from 8am to 10pm daily via live chat, email, or phone call.',
  },
];

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto mt-12">
      {faqs.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <div
            key={index}
            className="bg-white rounded px-3 border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm md:text-base font-semibold text-gray-700">
                {item.question}
              </h3>
              {isOpen ? (
                <FaMinus className="text-red-500" />
              ) : (
                <FaPlus className="text-blue-500" />
              )}
            </div>
            {isOpen && (
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqQuestions;




//    <div className="w-full h-70 max-h-[625px] max-w-[500px]">
