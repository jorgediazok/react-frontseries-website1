import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   window.scroll(0, 140);
  // }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
