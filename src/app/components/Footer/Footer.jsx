import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h4>Quick Links</h4>
        </div>
        <div className={styles.links}>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/">Contact</Link></p>
        <p>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.section}>
      <div className={styles.heading}>
          <h4>Address</h4>
        </div>
        <div className={styles.links}>
        <p>156 White Road West Gate</p>
        <p>Pietermaritzburg</p>
        <p>KZN</p>
        </div>
      </div>
      </div>
      <div className={styles.copr}>
        <p>Copyright 2024 © Blessings Grass Lawn Company</p>
      </div>
    </div>
  )
}

export default Footer