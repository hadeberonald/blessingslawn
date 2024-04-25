"use client"

import { useState, useRef, useEffect } from 'react';

const HeroSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const timerRef = useRef(null);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '2vw',
    fontSize: '5vw',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };
  
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '2vw',
    fontSize: '5vw',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const dotStyles = {
    margin: '0 1vw',
    cursor: 'pointer',
    fontSize: '5vw',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    console.log("use effect");
    timerRef.current = setTimeout (() => {
      goToNext();
    }, 4000);
  },);
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
      
      </div>
      <div style={rightArrowStyles} onClick={goToNext} >
      
      </div>
      <div style={slideStyles}></div> 
      <div style={dotsContainerStyles}>
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}></div>
      ))}
      </div>
    </div>
  );
};

export default HeroSlider;