import React from 'react';
import styles from './navbarContact.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NavbarContact = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="" fill/>
        </div>
        <div className={styles.links}>
            
            <div className={styles.inactive}>
            <Link href="/" className={styles.link}>Home</Link>
            </div>
            <div className={styles.active}>
                <div className={styles.activeLinkContainer}>
            <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.underline}></div>
            </div>
        </div>
    </div>
  )
}

export default NavbarContact