'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-skyblue p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Eco-Friendly Sandals</h1>
        <div className="flex gap-4">
          {/* Home Link */}
          <Link href="/">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">
              Home
            </button>
          </Link>

          {/* About Link */}
          <Link href="/about">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">
              About
            </button>
          </Link>

          {/* Contact Link */}
          <Link href="/contact">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
