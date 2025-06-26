"use client";
import Link from 'next/link';
import React from 'react';
import { Unlink } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo with icon */}
        <Link href="/" className="flex items-center gap-2 text-white text-xl font-semibold">
          <Unlink size={22} className="text-blue-400" />
          QuickURL
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link href="/" className="text-gray-200 hover:text-white hover:underline transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-200 hover:text-white hover:underline transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/shorten" className="text-gray-200 hover:text-white hover:underline transition">
              Generate
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-200 hover:text-white hover:underline transition">
              Contact
            </Link>
          </li>

          {/* Action Buttons */}
          <li className="flex gap-2 ml-4">
            <Link
              href="/shorten"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition"
            >
              Try Now
            </Link>
            <Link
              href="/github"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm font-medium transition"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
