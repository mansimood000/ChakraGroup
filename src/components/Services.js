import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIntersection } from '../hooks/useIntersection';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  const [ref, isVisible] = useIntersection({ threshold: 0.1 }); // Use the intersection observer

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
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
    <div
      ref={ref}
      className={`text-center mb-32 p-6 transform transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h1 className='text-3xl font-bold text-blue-900 mb-10' data-aos="fade-down" >
        OUR SERVICES
      </h1>
      <div className='mx-6'>
        <Slider {...settings} className='space-x-8'>
          <div className='flex flex-col items-center justify-center h-80 w-80 bg-blue-100 rounded-lg shadow-lg p-8'>
            <p className='text-xl font-bold text-blue-900 mb-4'>
              CHAKRA GROUP
            </p>
            <p className='text-base text-blue-800'>
              At Chakra Group, we take great pride in our uncompromising integrity in customer engagement and quality assurance, and we have made it our core mission to provide real-estate development, management, and Entertainment services of the highest calibre.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center h-80 w-80 bg-yellow-100 rounded-lg shadow-lg p-8'>
            <p className='text-xl font-bold text-yellow-900 mb-4'>
              JOY BHARATH
            </p>
            <p className='text-base text-yellow-800'>
              At Joy Bharath, we take great pride in our uncompromising integrity in customer engagement and quality assurance, and we have made it our core mission to provide real-estate development, management, and Entertainment services of the highest calibre.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center h-80 w-80 bg-green-100 rounded-lg shadow-lg p-8'>
            <p className='text-xl font-bold text-green-900 mb-4'>
              ALGO WORKS 
            </p>
            <p className='text-base text-green-800'>
              Chakra Infotainment LLP (“Chakra”) is a media and entertainment business, engaged in production, acquisition, aggregation, and distribution of audio and video content for digital, satellite, and theatrical platforms predominantly in the Telugu language.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center h-80 w-80 bg-red-100 rounded-lg shadow-lg p-8'>
            <p className='text-xl font-bold text-red-900 mb-4'>
              AMIGO DOLLS
            </p>
            <p className='text-base text-red-800'>
              Chakra Infotainment LLP (“Chakra”) is a media and entertainment business, engaged in production, acquisition, aggregation, and distribution of audio and video content for digital, satellite, and theatrical platforms predominantly in the Telugu language.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Services;
