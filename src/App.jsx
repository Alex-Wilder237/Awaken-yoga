// src/App.js
import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import './styles/App.css';
import RippleLoading from './components/magicui/RippleLoading';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/return/ReturnButton';




const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  

  if (loading) {
    return <RippleLoading/> ;
  }

  return (
    <>
      <Navigation />
      <div className='lg:mx-6 mx-2 2xl:mx-[15%]'>
<Home />
    </div>
    <Footer />
    <ScrollToTopButton/>
    </>
  );
};

export default App;
