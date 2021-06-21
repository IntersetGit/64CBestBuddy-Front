import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/FAQ/FaqContent';
import FaqForm from '../components/FAQ/FaqForm';
import Footer from '../components/_App/Footer';

const FAQ = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
            /> 

            <FaqContent />

            <FaqForm />
            
            <Footer />
        </>
    )
}

export default FAQ;