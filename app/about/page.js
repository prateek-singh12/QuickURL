import React from 'react';
import { Unlink } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-blue-800 mb-3">About <span className="text-blue-600">QuickURL</span></h1>

      {/* Icon */}
      <Unlink size={64} className="text-blue-600 mb-6 animate-pulse" />

      {/* Description */}
      <p className="text-xl text-blue-900 font-medium max-w-2xl mb-6">
        Your one-stop solution for shortening URLs quickly and efficiently — designed for developers, marketers, and everyday users.
      </p>

      <p className="text-md text-blue-800 max-w-2xl mb-3">
        QuickURL is a fast, reliable, and modern URL shortening tool that makes managing, tracking, and sharing links easier than ever.
      </p>

      <p className="text-md text-blue-800 max-w-2xl mb-3">
        Built with <span className="font-semibold">Next.js</span>, QuickURL leverages cutting-edge web technology to ensure your experience is seamless and secure.
      </p>

      <p className="text-md text-blue-800 max-w-2xl mb-3">
        Whether you want cleaner links, better tracking, or simpler sharing, QuickURL is here to help.
      </p>

      {/* Call to action block */}
      <div className="mt-8 bg-white border border-blue-200 shadow-lg rounded-xl p-6 max-w-lg">
        <p className="text-blue-700 text-lg font-semibold">📬 Have questions or feedback?</p>
        <p className="text-blue-600 text-md mt-1">We’d love to hear from you at <a className="underline font-medium" href="mailto:prateeksinghpspk@gmail.com">prateeksinghpspk@gmail.com</a></p>
        <p className="text-blue-600 mt-1">Or call us at <span className="font-medium">+91 8528265116</span></p>
      </div>

      <p className="mt-10 text-sm text-gray-500">🚀 Thank you for choosing QuickURL. Happy shortening!</p>
    </div>
  );
};

export default About;
