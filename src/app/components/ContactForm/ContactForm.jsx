"use client"

import React, { useRef } from 'react';
import styles from './contactForm.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_94xb3ir', 'template_fs2bf6j', form.current, {
        publicKey: 'pqei6qbcmZQsBFq9p',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
<form ref={form} onSubmit={sendEmail}>
      <div className={styles.input}>
      <label> Full Name:</label>
      
      <input type="text" name="user_name" className={styles.field} />
      
      </div>
      <div className={styles.input}>
      <label>Email:</label>     
      
      <input type="email" name="user_email" className={styles.field}/>
     
      </div>
      <div className={styles.input}>
      <label>Message:</label>
      <textarea name="message" rows={12} className={styles.fieldT}/>
      </div>
      <input type="submit" value="Send" className={styles.button}/>
    </form>
    </div>
      </div>
  );
};

export default ContactForm;