import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
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

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
