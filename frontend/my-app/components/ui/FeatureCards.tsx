'use client';
import React from 'react';
import {
  ClipboardCheck,
  RefreshCcw,
  ShieldCheck,
  Github
} from 'lucide-react';
import { useRouter } from 'next/navigation'; // ✅ for Next.js App Router

const FeatureCards = () => {
  const router = useRouter(); // ✅ called at top level

  const handlePush = () => {
    router.push('/dashboard');
  };

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
    <section className="w-full min-h-screen py-12 px-4 bg-[#020617] text-white flex flex-col justify-between">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

      {/* Call to Action */}
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handlePush}
          className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition duration-300"
        >
          Get Started Now.
        </button>
      </div>

      {/* Minimalist Footer */}
      <footer className="mt-20 border-t border-gray-700 text-center text-sm text-gray-400 py-6">
        <a href='https://github.com/merrrrrick' className='gap-10'>
          <Github className="inline-block" />merrrrrick
          </a>
      </footer>
    </section>
  );
};

export default FeatureCards;
