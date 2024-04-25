import React from 'react';
import styles from './hero.module.css';
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.heading}>
          <h1>THE GRASS IS ALWAYS GREENER ... THIS SIDE</h1>
        </div>
        <div className={styles.para}>
          <p> Because we make sure of it by providing the best instant lawns for your property.</p>
          <p>Contact us today to get yourself all-season green grass!</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button1}>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.button2}>
            <div className={styles.image}>
              <Image src="/telephone (1).png" alt="" fill/>
            </div>
            <div>
              <p>078 708 5439</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero