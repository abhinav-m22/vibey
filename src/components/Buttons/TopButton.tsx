"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import './TopButton.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className="fixed bottom-10 right-10 z-999 w-10 h-10 rounded-full bg-[#555] text-white border-none flex cursor-pointer outline-none opacity-80 justify-center items-center text-sm ease-in-out duration-75 flex-row hover:opacity-100" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTopIcon" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;