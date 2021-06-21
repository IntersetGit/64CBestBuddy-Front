import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioColumnsThreeCard from '../components/Portfolio/PortfolioColumnsThreeCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsThree = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Portfolio Columns Three" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Columns Three" 
            /> 

            <PortfolioColumnsThreeCard />
            
            <Footer />
        </>
    )
}

export default PortfolioColumnsThree;