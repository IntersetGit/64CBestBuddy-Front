import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioColumnsFourCard from '../components/Portfolio/PortfolioColumnsFourCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsFour = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Portfolio Columns Four" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Columns Four" 
            /> 

            <PortfolioColumnsFourCard />
            
            <Footer />
        </>
    )
}

export default PortfolioColumnsFour;