import React, { useEffect } from 'react'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useIntersection } from '../hooks/useIntersection'; 
import Chakralogo from '../Assets/ChakraLogo.png';
import JoyBharathlogo from '../Assets/JoyBharath.png';
import AlgoWorkslogo from '../Assets/AlgoWorks.png';
import AmigoDollslogo from '../Assets/AmigoDolls.png';

function CompanyLogos() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 transform transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="h-42 flex items-center flex-col">
        <div className="text-2xl text-center font-bold text-blue-900 mt-4" data-aos="fade-down">
          COMPANY LOGOS
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
  <img src={Chakralogo} alt="Chakra logo" className="w-24 h-24 sm:w-40 sm:h-40" data-aos="fade-up" />
  <img src={JoyBharathlogo} alt="Joy Bharath logo" className="w-24 h-24 sm:w-40 sm:h-40" data-aos="fade-up" />
  <img src={AlgoWorkslogo} alt="Algo Works logo" className="w-24 h-24 sm:w-40 sm:h-40" data-aos="fade-up" />
  <img src={AmigoDollslogo} alt="Amigo Dolls" className="w-24 h-24 sm:w-40 sm:h-40" data-aos="fade-up" />
</div>

      </div>
    </div>
  );
}

export default CompanyLogos;
