import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function MobileNavMenu() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMobileNavOpen(false);
  }; const mobileNavLinks = isMobileNavOpen ? (
    <div
      className="
        fixed right-0 top-0 w-3/4 h-1/2 items-center 
       bg-blue-100 transition-colors hover:bg-blue-200
      "
    >
      <div className="md:hidden text-center text-2xl mt-16">
        <ScrollLink to="home-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={handleCloseMenu}>
          Products
        </ScrollLink>
        <ScrollLink to="products-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={handleCloseMenu}>
          Products
        </ScrollLink>
        <ScrollLink to="usecases-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={handleCloseMenu}>
          Use Cases
        </ScrollLink>
        <ScrollLink to="vision-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={handleCloseMenu}>
          Vision
        </ScrollLink>
        <ScrollLink to="team-section" smooth={true} duration={500} className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer" onClick={handleCloseMenu}>
          Our Team
        </ScrollLink>
      </div>
    </div>
  ) : null;

  return (
    <>
      {isMobileNavOpen && (
        <div className="fixed right-0 top-0 w-3/4 h-1/2 items-center bg-white z-50">
          <div className="flex flex-col items-center justify-center">
            {mobileNavLinks}
          </div>
          <button
            className="absolute top-4 right-4 p-2 focus:outline-none"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          {isMobileNavOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </>
  );
}
