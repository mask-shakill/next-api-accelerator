// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="text-white text-lg font-semibold cursor-pointer">Next API Accelerator</div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</div>
              </Link>
              <Link href="/about">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</div>
              </Link>
              <Link href="/contact">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
