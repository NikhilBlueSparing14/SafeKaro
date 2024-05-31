import React, { useState } from 'react';
import './Services.css';
import insurance1 from '../../assets/insurance1.png';
import insurance2 from '../../assets/insurance2.png';
import insurance3 from '../../assets/insurance3.png';
import insurance4 from '../../assets/insurance1.png';
import insurance5 from '../../assets/insurance2.png';

const Services = () => {
  const images = [
    {
      id: 1,
      img: insurance1,
      title: 'Life Insurance',
      description: 'Protect your loved ones with our life insurance plan',
    },
    {
      id: 2,
      img: insurance2,
      title: 'Car Insurance',
      description: 'Get comprehensive coverage for your vehicle',
    },
    {
      id: 3,
      img: insurance3,
      title: 'Home Insurance',
      description: 'Safeguard your home and belongings with our insurance plans',
    },
    {
      id: 4,
      img: insurance4,
      title: 'Car Insurance',
      description: 'Get comprehensive coverage for your vehicle',
    },
    {
      id: 5,
      img: insurance5,
      title: 'Home Insurance',
      description: 'Safeguard your home and belongings with our insurance plans',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <section id='Services' className='services'>
      <div className='services-provided'>
        <div>
          {currentIndex > 0 && (
            <button className='prev' onClick={handlePrev}>&#10094;</button>
          )}
          <div className='slider-container'>
            <h1 className='title-container'>Services We Provide</h1>
            <div className='slider1'>
              <div className='slider2'>
                {visibleImages.map((image, index) => (
                  <div key={index} className={`service ${index === 1 ? 'active' : ''}`}>
                    <img src={image.img} alt={`Insurance ${index + 1}`} />
                    <div className='caption'>
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {currentIndex < images.length - 3 && (
            <button className='next' onClick={handleNext}>&#10095;</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
