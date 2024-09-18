import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Picture1 from '../Assets/picture-1.png';
import Picture2 from '../Assets/picture-2.png';
import Picture3 from '../Assets/picture-3.png';

const Carousel = ({ images, links, autoScrollInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoScrollInterval]);

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <a href={links[index]} target="_blank" rel="noopener noreferrer">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired, // Add PropTypes for links
  autoScrollInterval: PropTypes.number,
};

Carousel.defaultProps = {
  images: [
    Picture1,
    Picture2,
    Picture3,
  ],
  links: [
    'https://www.chakrainfotainment.com/', // Add your URLs here
    'https://joybharath.com/',
    'https://www.algoworks.co.in/',
  ],
  autoScrollInterval: 2000,
};

export default Carousel;
