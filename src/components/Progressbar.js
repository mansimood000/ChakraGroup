import React, { useState, useEffect } from 'react';
import '../components/ProgressBar.css';

const Progressbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (totalScrollHeight === 0) return;

    const scrollPercentage = (scrollTop / totalScrollHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-container fixed">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
