import React from 'react';
import styles from './services.module.css';
import Image from 'next/image';

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>We Provide</h2>
      </div>
      <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/capture1.jpg" alt="" fill className={styles.img}/>
          </div>
          <div className={styles.text}>
            <div className={styles.subhead}>
              <h3>All Season Green Grass</h3>
            </div>
            <div className={styles.list}>
              <ul>
                <li><b>Berea:</b> Easy growing even in shady areas (very low maintenance)</li>
                <li><b>Kikuyu:</b> Fast-growing and drought tolerant</li>
                <li><b>Cynodon:</b> Fine-textured and wearing perfect for sports fields and golf greens</li>
                <li><b>Royal Blue:</b> Perfect for moist areas with ample sunshine</li>
              </ul>
            </div>
          </div>
      </div>
    
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/capture.jpg" alt="" fill className={styles.img}/>
          </div>
          <div className={styles.text}>
            <div className={styles.subhead}>
              <h3>Lawn Care</h3>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Top soil to keep your green grass healthy</li>
                <li>Compost to aid the growing of all season green grass</li>
              </ul>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Services