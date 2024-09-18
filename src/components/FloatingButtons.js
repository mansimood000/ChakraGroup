import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FloatingButtons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="z-50 fixed bottom-4 right-4 flex flex-col space-y-4 md:bottom-10 ">
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-2 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://linkedin.com/in/chakra-group-46351931a"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-2 md:p-3 rounded-full shadow-lg hover:bg-black transition"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-900 transition"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>
      <a
        href="https://youtube.com/your-channel"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 p-2 md:p-3 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        <FontAwesomeIcon icon={faYoutube} className="text-white w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
