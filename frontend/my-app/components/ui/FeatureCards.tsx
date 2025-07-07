'use client';
import React from 'react';
import {
  ClipboardCheck,
  RefreshCcw,
  ShieldCheck,
} from 'lucide-react'; // new icons

const FeatureCards = () => {
  const features = [
    {
      icon: <ClipboardCheck className="text-green-400 lg:h-20 lg:w-20 sm:h-10 sm:w-10 mb-4" />,
      title: 'Stay on Track',
      desc: 'Organize your tasks into manageable steps and never miss a deadline again.',
    },
    {
      icon: <RefreshCcw className="text-blue-400 lg:h-20 lg:w-20 sm:h-10 sm:w-10 mb-4" />,
      title: 'Real-time Sync',
      desc: 'Your tasks stay updated across all your devices — instantly.',
    },
    {
      icon: <ShieldCheck className="text-purple-400 lg:h-20 lg:w-20 sm:h-10 sm:w-10 mb-4" />,
      title: 'Secure & Private',
      desc: 'Your data is encrypted and accessible only to you. No compromises.',
    },
  ];

  return (
    <section className="w-full h-screen py-12 px-4 bg-[#020617] text-white">
      <div className="max-w-6xl h-[40%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl p-6 text-center shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div>Get Started Now. </div>
    </section>
  );
};

export default FeatureCards;
