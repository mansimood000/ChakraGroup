import React, { useState } from 'react';
import Chakralogo from '../Assets/Picture.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed z-50 top-0 w-full">
      <div className="mx-auto ">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={Chakralogo} 
              alt="Logo" 
              className="h-16 w-16 rounded-full mr-2 object-cover" 
            />
            <div className="text-2xl font-bold text-blue-900">CHAKRA GROUP</div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="bg-blue-800 text-white p-2 rounded-md inline-flex items-center justify-center focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className={`hidden md:flex space-x-8`}>
            <a onClick={() => scrollToSection('home')} className="text-blue-900 font-bold hover:text-gray-300 hover:border-b-2 border-white transition cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} className="text-blue-900 font-bold hover:text-gray-300 hover:border-b-2 border-white transition cursor-pointer">About Us</a>
            <a onClick={() => scrollToSection('contact')} className="text-blue-900 font-bold hover:text-gray-300 hover:border-b-2 border-white transition cursor-pointer">Contact Us</a>
            <a onClick={() => scrollToSection('media')} className="text-blue-900 font-bold hover:text-gray-300 hover:border-b-2 border-white transition cursor-pointer">Media Corner</a>
            <a onClick={() => scrollToSection('founders')} className="text-blue-900 font-bold hover:text-gray-300 hover:border-b-2 border-white transition cursor-pointer">Founders</a>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a onClick={() => scrollToSection('home')} className="text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('about')} className="text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition cursor-pointer">About Us</a>
          <a onClick={() => scrollToSection('contact')} className="text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition cursor-pointer">Contact Us</a>
          <a onClick={() => scrollToSection('media')} className="text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition cursor-pointer">Media Corner</a>
          <a onClick={() => scrollToSection('founders')} className="text-blue-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition cursor-pointer">Founders</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
