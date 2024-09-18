import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MediaCorner.css';
import { useIntersection } from '../hooks/useIntersection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MediaCorner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div id='media' className='text-center mb-32'>
      <h1 className='text-2xl font-bold text-blue-900 mb-10'data-aos="fade-down">
        MEDIA CORNER
      </h1>
      <div className='mx-6'>
        <div 
          ref={ref} 
          className={`transform transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Slider {...settings} className='space-x-8'> 
            <div className='slide-container'>
              <div className='content bg-blue-100'>
                <p className='text-xl font-bold text-blue-900 mb-4'>
                  ALGO WORKS
                </p>
                <p className='text-base text-blue-800'>
                  Your Next Tech Innovation Hub in Banjara Hills! Get ready to embark on a journey of innovation and collaboration with our new startup venture, AlgosWork. Nestled in the vibrant Banjara Hills district, we're here to revolutionize the tech landscape with cutting-edge solutions and boundless creativity. Stay tuned for updates as we pave the way for a brighter, tech-driven future! Stay tuned
                </p>
              </div>
            </div>
            <div className='slide-container'>
              <div className='content bg-yellow-100'>
                <p className='text-xl font-bold text-yellow-900 mb-4'>
                  JOY BHARATH
                </p>
                <p className='text-base text-yellow-800'>
                  Your Next Tech Innovation Hub in Banjara Hills! Get ready to embark on a journey of innovation and collaboration with our new startup venture, AlgosWork. Nestled in the vibrant Banjara Hills district, we're here to revolutionize the tech landscape with cutting-edge solutions and boundless creativity. Stay tuned for updates as we pave the way for a brighter, tech-driven future! Stay tuned
                </p>
              </div>
            </div>
            <div className='slide-container'>
              <div className='content bg-green-100'>
                <p className='text-xl font-bold text-green-900 mb-4'>
                  NEW VIDEO ALERT !!
                </p>
                <p className='text-base text-green-800'>
                  Check Out Our Latest Release on YouTube! Watch Our New Video!
                </p>
              </div>
            </div>
            <div className='slide-container'>
              <div className='content bg-red-100'>
                <p className='text-xl font-bold text-red-900 mb-4'>
                  AMIGO DOLLS AWAITS !!
                </p>
                <p className='text-base text-red-800'>
                  Launching Soon. Check Our Progress.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MediaCorner;
