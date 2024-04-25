import React from 'react';
import NavbarContact from '../components/NavbarContact/NavbarContact';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const page = () => {
  return (
    <div>
        <NavbarContact/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page