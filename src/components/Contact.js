import React from 'react';
import { useIntersection } from '../hooks/useIntersection';
import mapmark from '../Assets/mapmark.png';

function Contact() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-blue-300 p-4 transform transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div id="contact" className="md:p-32">
        <div className="md:grid grid-cols-3 md:gap-20 text-black">
          <div className="col-span-1 text-xl">
            <h1 className="font-bold">Write Us</h1>
            <form className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full p-2 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-2 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-2 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Message"
                  className="w-full p-1 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-transparent text-black font-bold py-1 px-4 border border-gray-300 rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1 text-xl">
            <h1 className="font-bold">Meet Us</h1>
            <p className="mt-4 text-black">
              403, Alcazar Plaza, Rd Number 1, Dwarakapuri, Banjara Hills, Hyderabad, Telangana 500034
            </p>
            <div className="mt-10 flex items-center">
              <img src={mapmark} className="h-20 w-20" alt="Map Marker" />
              <a
                className="hover:text-black"
                href="https://maps.google.com?q=403,+Alcazar+Plaza,+Rd+Number+1,+Dwarakapuri,+Banjara+Hills,+Hyderabad,+Telangana+500034"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to view in the map
              </a>
            </div>
          </div>
          <div className="col-span-1 text-xl">
            <h1 className="font-bold">Call Us</h1>
            <p className="mt-4 text-black">
              <a
                href="tel:9246536373"
                className="cursor-pointer hover:underline"
              >
                Phone: 9246536373<br />
                Email: chakragroup.hyd@gmail.com
              </a>
            </p>
            <div className="mt-8">
              <h1 className="font-bold">Visit Us</h1>
              <p className="mt-4 text-black">
                <a
                  href="https://www.chakragroup.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  ChakraGroup
                </a>
                <br />
                <a
                  href="https://www.joybharath.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  Joy Bharath
                </a>
                <br />
                <a
                  href="https://www.algoworks.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  Algo Works
                </a>
                <br />
                <a
                  href="https://www.amigosdolls.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  Amigo Dolls
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
