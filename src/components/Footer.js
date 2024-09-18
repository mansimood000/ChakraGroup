import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faFacebook, faYoutube, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer1 = () => {
  return (
    <div className='bg-blue-950 h-28 flex flex-col justify-center'>
      <div className='flex justify-center space-x-4 mt-4'>
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
           className=" hover:bg-green-600 transition"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-blue-800 hover:rounded-sm transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white w-6 h-6" />
        </a>
       
        <a
          href="https://x.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
           className="shadow-sm hover:bg-gray-900 "
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6" />
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
           className=" hover:ease-in-out hover:bg-blue-900 transition"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-white w-6 h-6" />
        </a>
        <a
          href="https://youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
           className="hover:bg-red-700 hover:rounded-lg"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-white w-6 h-6" />
        </a>
      </div>
      <div className='text-white text-center mt-2'>
        All rights are reserved chakragroup @2024
      </div>
    </div>
  );
};

export default Footer1;