import React from 'react';
import styles from './navbarHome.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NavbarHome = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="" fill/>
        </div>
        <div className={styles.links}>
            <div className={styles.active}>
                <div className={styles.activeLinkContainer}>
            <Link href="/" className={styles.link}>Home</Link>
            </div>
            <div className={styles.underline}></div>
            </div>
            <div className={styles.inactive}>
            <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarHome