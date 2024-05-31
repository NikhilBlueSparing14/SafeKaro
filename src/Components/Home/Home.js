import React, { useState, useEffect } from 'react';
import './Home.css';
import imgSrc from '../../assets/banner.jpg';

// Define the list of text content
const TextList = [
  {
    id: 1,
    topLine: 'Marketing Agency',
    title: 'Lead Generation Specialist for Online Businesses',
    description: 'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  },
  {
    id: 2,
    topLine: 'Car Agency',
    title: 'Lead Generation Specialist for Car Agency',
    description: 'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  },
  {
    id: 3,
    topLine: 'Home Agency',
    title: 'Lead Generation Specialist for Home Agency',
    description: 'We help business owners increase their revenue. Our team of unique specialists can help you achieve your business goals.',
  },
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Automatically switch to the next text every 4 seconds with fade animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TextList.length);
        setFadeIn(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='Home' className='home'>
      <img className='background-image' src={imgSrc} alt='background' />
      <div className='overlay'></div>
      <div className='content'>
        <div className={`hero-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <h3 className='top-line'>{TextList[currentTextIndex].topLine}</h3>
          <h1 className='title'>{TextList[currentTextIndex].title}</h1>
          <h3 className='description'>{TextList[currentTextIndex].description}</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
