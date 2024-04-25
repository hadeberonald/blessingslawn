import React from 'react';
import styles from './imageSlider.module.css';
import Link from 'next/link';
import HeroSlider from '../HeroSlider/HeroSlider';

const ImageSlider = () => {
  const slides = [
    {url: '/1.jpg', title: 'Blessings'},
    {url: '/2.jpg', title: 'Blessings'},
    {url: '/3.jpg', title: 'Blessings'},
    {url: '/4.jpg', title: 'Blessings'},
    {url: '/5.jpg', title: 'Blessings'},
    {url: '/6.jpg', title: 'Blessings'}
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Our Recent Work</h3>
      </div>
      <div className={styles.slider}>
      <div className={styles.containerStyles}>
      <HeroSlider slides={slides}/>
      </div>
      </div>
    </div>
  )
}

export default ImageSlider