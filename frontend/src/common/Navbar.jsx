import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* component */}
      <nav className="bg-white shadow ">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <a
                className=" text-xl font-bold md:text-2xl text-rose-600"
                href="/"
              >
                Onstara
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="flex  md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`md:flex items-center  ${isOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col md:flex-row md:mx-6  items-center gap-3 ">
              <a
                className="my-1 text-sm text-rose-600 font-medium hover:text-rose-600 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-1 text-sm text-gray-700 font-medium hover:text-rose-600 md:mx-4 md:my-0"
                href="#"
              >
                Shop
              </a>
              <a
                className="my-1 text-sm text-gray-700 font-medium hover:text-rose-600 md:mx-4 md:my-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="my-1 text-sm text-gray-700 font-medium hover:text-rose-600 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
            </div>
            <div className="flex justify-center md:block gap-1">
              <a
                className="my-1 text-sm text-gray-700 font-medium hover:text-rose-600 vmd:mx-4 md:my-0"
                href="#"
              >
                Login
              </a>
              <span className="px-1">/</span>
              <a
                className="my-1 text-sm text-gray-700 font-medium hover:text-rose-600 vmd:mx-4 md:my-0"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
