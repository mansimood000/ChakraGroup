import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backVideo from '../Assets/Back.mp4';
import backImage from '../Assets/backImage.png';
import { useIntersection } from '../hooks/useIntersection';

function Home() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='home'>
      {/* Wrapper div for the intersection observer */}
      <div
        ref={ref}
        className={` transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        data-aos="fade-down"
      ></div>

      {/* Background video for larger screens */}
      <video
        src={backVideo}
        autoPlay
        loop
        muted
        className="hidden sm:block object-cover"
        data-aos="fade-up"
      ></video>

      {/* Background image for smaller screens */}
      <img
        src={backImage}
        alt="Background"
        className="block sm:hidden  h-full md:mt-0  mt-10 object-cover"
        data-aos="fade-up"
      />
    </div>
  );
}

export default Home;
