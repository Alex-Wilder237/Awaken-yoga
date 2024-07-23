// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <Navigation />
      <div className='lg:mx-6 mx-2 2xl:mx-[15%]'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
    <ScrollToTopButton/>
    </Router>
  );
};

export default App;
