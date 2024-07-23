import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show button when user is at the bottom of the page
    setShowButton(scrollY + windowHeight >= documentHeight - 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className='shadow-pink-100 shadow-md  '
      onClick={scrollToTop}
      style={{
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'skyblue',
        color: '#fff',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        zIndex: '100'
        
      }}
    >
<img src="./assets/arrow-up-circle.svg" alt="" srcset="" />
    </button>
  );
};

export default ScrollToTopButton;

