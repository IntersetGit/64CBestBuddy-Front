import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
            /> 

            <ContactForm />
            
            <Map />
            
            <Footer />
        </>
    )
}

export default Contact;