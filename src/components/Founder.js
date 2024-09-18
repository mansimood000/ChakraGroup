import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import founder1 from '../Assets/founder-1.jpg';
import founder2 from '../Assets/founder-2.jpg';
import founder3 from '../Assets/founder-3.jpg';
import founder4 from '../Assets/founder-4.jpg';
import { useIntersection } from '../hooks/useIntersection';

function Founders() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='founders' className="bg-gray-100 md:p-10 mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-8" data-aos="fade-down">FOUNDERS</h2>
      <div ref={ref} className={`flex justify-around items-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center max-w-xs mx-4">
          <img
            src={founder1}
            alt="Founder 1"
            className="w-32 h-32 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          />
          <p className="text-lg font-semibold">John Doe</p> 
          <p className="text-gray-600">Organiser</p> 
        </div>
        <div className="text-center max-w-xs mx-4">
          <img
            src={founder2}
            alt="Founder 2"
            className="w-32 h-32 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          />
          <p className="text-lg font-semibold">Ameena</p> 
          <p className="text-gray-600">Co-Organiser</p> 
        </div>
        <div className="text-center max-w-xs mx-4">
          <img
            src={founder3}
            alt="Founder 3"
            className="w-32 h-32 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          />
          <p className="text-lg font-semibold">Michael Brown</p> 
          <p className="text-gray-600">Co-Organiser</p> 
        </div>
        <div className="text-center max-w-xs mx-4">
          <img
            src={founder4}
            alt="Founder 4"
            className="w-32 h-32 mx-auto rounded-full mb-4"
            data-aos="fade-up"
          />
          <p className="text-lg font-semibold">Jhonny</p> 
          <p className="text-gray-600">Co-Organiser</p> 
        </div>
      </div>
    </div>
  );
}

export default Founders;
