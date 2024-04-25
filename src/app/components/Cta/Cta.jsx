import React from 'react'; 
import styles from './cta.module.css';
import Image from 'next/image';

const Cta = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.heading}>
          <h3>We are located in Pietermaritzburg!</h3>
          </div>
          <div className={styles.para}>
            <p>... But we service all surrounding areas of Pietermaritzburg including Durban, Stanger, and beyond.</p>
            <p>Contact us to hear if we can help you grow your own healthy lawn.</p>
          </div>
        </div>
        <div className={styles.image}>
         <Image src="/Capture2.png" alt="" fill/>
        </div>
    </div>
  )
}

export default Cta
