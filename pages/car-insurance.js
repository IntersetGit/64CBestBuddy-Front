import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import OurServices from '../components/HomeThree/OurServices';
import AchievementContent from '../components/About/AchievementContent';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import OffersArea from '../components/Common/OffersArea';
import OurVision from '../components/About/OurVision';
import Footer from '../components/_App/Footer';

const CarInsurance = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Car Insurance" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Car Insurance" 
            /> 

            <OurServices />

            <AchievementContent />

            <GetAFreeQuoteFormStyleTwo />

            <div className="pt-100">
                <OffersArea />
            </div>

            <OurVision />
            
            <Footer />
        </>
    )
}

export default CarInsurance;