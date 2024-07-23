import React, { useState, useEffect } from "react";
import Buttonbox from "../button/Button";
import './Style.css'; 

const Navigation = () => {
  let navLinks = [
    {
      linkName: "Accueil",
      linkUrl: "#home",
    },
    {
      linkName: "À Propos",
      linkUrl: "#a-propos",
    },
    {
      linkName: "Service",
      linkUrl: "#service",
    },
    {
      linkName: "Testimonials",
      linkUrl: "#testimonials",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const [activeSection, setActiveSection] = useState("");
 

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 10;
    setScrolling(scrollPosition > scrollThreshold);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.linkUrl);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveSection(link.linkUrl);
        }
      }
    });
  };

  const handleNavClick = (event, linkUrl) => {
    event.preventDefault();
    const section = document.querySelector(linkUrl);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(linkUrl);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setSlideOut(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setSlideOut(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <div
      className={`${
        scrolling
          ? "drop-shadow-2xl bg-[#03051b86] p-0 ease-soft-spring duration-400 transition-all lg:px-0 lg:mt-0"
          : "drop-shadow-none px-2 lg:px-[2%] ease-soft-spring duration-400 transition-all lg:mt-[20px]"
      } text-black z-50 flex w-full fixed justify-between  items-center 2xl:px-[20%] `}
    >
      <a className="w-fit flex gap-3 items-center bg-[#D6E6FF] px-8 py-4  rounded-full animate__animated animate__fadeInLeft" href="/">
        <img
          className="object-cover w-[19px] lg:w-[2vw] 2xl:w-[1vw] rounded-full "
          src="./assets/logo.png"
          alt="Aerial yoga experience"
        />
        <h1 className=" text-[10px] lg:text-lg max-lg:hidden">
          Awaken yoga
        </h1>
      </a>

      {/* Desktop Navigation Links */}
      <ul className="flex gap-5 max-sm:hidden items-center bg-white px-8 py-4  rounded-full animate__animated animate__fadeInUp">
        {navLinks.map((link, index) => (
          <li key={index} className="p-2">
            <a
              href={link.linkUrl}
              onClick={(e) => handleNavClick(e, link.linkUrl)}
              className={
                activeSection === link.linkUrl
                  ? " text-blue-600 pb-2 font-bold text-sm uppercase"
                  : " text-sm uppercase"
              }
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="flex items-center">
        <div className="animate__animated animate__fadeInRight">
          <Buttonbox />
        </div>

        <div
          className="animate__animated animate__fadeInRight text-white text-sm not-italic leading-[normal] whitespace-nowrap justify-center items-stretch flex flex-col  md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <img
            className="object-contain px-8 py-4 bg-[#D6E6FF] rounded-full"
            src="./assets/plus.svg"
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`fixed flex-col top-0 left-0 w-1/3 h-[100vh] z-20 shadow-2xl rounded-r-2xl bg-[#ffffffc7] flex items-center justify-between ${slideOut ? 'slide-out' : 'slide-in'}`}>
          <ul className="text-left mt-[40%]">
            {navLinks.map((link, index) => (
              <li key={index} className="py-4">
                <a
                  href={link.linkUrl}
                  onClick={(e) => handleNavClick(e, link.linkUrl)}
                  className={
                    activeSection === link.linkUrl
                      ? "text-blue-800 pb-2 font-extrabold shadow-lg py-2 px-8 bg-blue-200 rounded-r-2xl"
                      : " text-lg text-blue-500 py-2 px-8"
                  }
                >
                  {link.linkName}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="p-5 mb-10 bg-blue-400 rounded-full flex t-[100%]  b-0 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <img src="./assets/chevron-up.svg" alt="exit" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
