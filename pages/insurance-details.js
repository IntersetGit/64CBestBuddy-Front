import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AchievementContent from '../components/About/AchievementContent';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import ContactWithAgent from '../components/Common/ContactWithAgent';
import Footer from '../components/_App/Footer';

const InsuranceDetails = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Insurance Details" 
                homePageUrl="/" 
                homePageText="หน้าแรก" 
                activePageText="Insurance Details" 
            /> 

            <div className="pt-100">
                <AchievementContent />
            </div>

            <GetAFreeQuoteFormStyleTwo />
            
            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default InsuranceDetails;