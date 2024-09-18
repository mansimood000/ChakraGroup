import React, { useEffect } from 'react';
import Carousel from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      className="p-6"
      id="about"
      style={{ scrollMarginTop: '80px' }}
      data-aos="fade-up"
    >
      <div className="flex flex-col md:grid grid-cols-2 gap-8">
        <div
          className="bg-gradient-to-r from-blue-200 to-blue-200 rounded-2xl shadow-2xl border border-gray-300 p-6 flex flex-col items-center"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-bold text-black mb-6 text-center" data-aos="fade-down">
            ABOUT
          </h1>
          <p
            className="text-lg text-black  text-center mb-6"
            data-aos="fade-up"
          >
            Reflecting on our journey, I'm immensely proud of what we've achieved together. Our company's success is a testament to your hard work, dedication, and innovative spirit. As we navigate the ever-changing landscape, let's remain agile and forward-thinking. Our commitment to excellence and integrity must never waver. Together, we can overcome challenges and seize new opportunities. Let's continue to prioritize sustainability, diversity, and community engagement. These values are not just aspirations; they're integral to who we are as a company. Thank you for your unwavering commitment and passion. Together, we will write the next chapter of our success story. Warm regards, Chakra Group Director, Venkata Ratnam Dhaveji
          </p>
        </div>
        <div
          className="bg-white rounded-2xl shadow-lg border border-gray-300 p-6"
          data-aos="fade-left"
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default About;
