import React from 'react';
import NavbarThree from '../components/_App/NavbarThree';
import MainBannerSlider from '../components/HomeThree/MainBannerSlider';
import OurFeatures from '../components/HomeThree/OurFeatures';
import AboutUs from '../components/HomeThree/AboutUs';
import OurServices from '../components/HomeThree/OurServices';
import FunFacts from '../components/Common/FunFacts';
import OffersArea from '../components/Common/OffersArea';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import TeamSlider from '../components/Common/TeamSlider';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/_App/Footer';

const Index3 = () => {
    return (
        <>
            <NavbarThree />

            <MainBannerSlider />

            <OurFeatures />

            <AboutUs />

            <OurServices />

            <FunFacts />

            <TestimonialStyleTwo />

            <GetAFreeQuoteFormStyleTwo />

            <TeamSlider />

            <div className="pb-100">
                <OffersArea />
            </div>

            <BlogPost />
            
            <Footer />
        </>
    )
}

export default Index3;