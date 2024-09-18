import React, { useEffect } from 'react';
import AOS from 'aos';                   
import 'aos/dist/aos.css';                
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import OurVoice from './components/OurVoice';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import MediaCorner from '../src/components/MediaCorner';
import CompanyLogo from './components/Companylogo';
import ContactUs from './components/Contact';
import Founders from './components/Founder';
import Whyus from './components/Whyus';
import FloatingButtons from './components/FloatingButtons';
import ProgressBar from './components/Progressbar';function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: false,  
    });
  }, []);
  return (
    
    <div>
      <ProgressBar/>
      <Header />
      <Home/>
      <FloatingButtons/>
      <div id="home">
        <VideoPlayer />
      </div>
      <About />
      <Services />
      <OurVoice />
      <Founders/>
      <CompanyLogo />
      <MediaCorner />
      <ContactUs /> 
  <Whyus/>
      <Footer />
    </div>
  );
}

export default App;
