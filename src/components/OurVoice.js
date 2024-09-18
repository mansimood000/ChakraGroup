import React, { useEffect } from 'react';
import { useIntersection } from '../hooks/useIntersection'; // Import the Intersection Observer hook
import ceoPhoto from '../Assets/Picture.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


function OurVoice() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-6 mt-8 bg-gradient-to-r from-blue-300 to-blue-200 rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-full text-center mb-6 transition-opacity duration-700 ease-in-out hover:opacity-90">
        <h2 className="text-4xl font-bold text-black" data-aos="fade-down">Our Voice</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 transition duration-500 ease-in-out hover:shadow-2xl">
        <div className="flex-1 transition-colors duration-300 ease-in-out hover:text-blue-500">
          <h3 className="text-3xl font-bold mb-4 text-black">
            "Empowering Innovation, Transforming Futures"
          </h3>
          <p className="text-lg text-gray-700  mb-4 leading-relaxed transition-all duration-500 ease-in-out hover:text-gray-900">
            Reflecting on our journey, I'm immensely proud of what we've achieved together. Our company's success is a testament to your hard work, dedication, and innovative spirit. As we navigate the ever-changing landscape, let's remain agile and forward-thinking.
            Our commitment to excellence and integrity must never waver. Together, we can overcome challenges and seize new opportunities. Let's continue to prioritize sustainability, diversity, and community engagement.
            These values are not just aspirations; they're integral to who we are as a company. Thank you for your unwavering commitment and passion. Together, we will write the next chapter of our success story.
            Warm regards,
            Chakra Group
            Director, Venkata Ratnam Dhaveji
          </p>
          <blockquote className="italic text-gray-600 border-l-4 border-pink-300 pl-4 mb-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:border-pink-500">
            "The only way to do great work is to love what you do." – Steve Jobs
          </blockquote>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed transition-all duration-500 ease-in-out hover:text-gray-900">
            Our approach is simple: combine passion with expertise, and you get results that matter. Join us in our journey towards innovation and success.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={ceoPhoto}
            alt="CEO"
            className="w-full h-auto rounded-lg border-4 border-purple-300 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default OurVoice;
