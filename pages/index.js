import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeTwo/MainBanner';
import OurFeatures from '../components/HomeTwo/OurFeatures';
import AboutUs from '../components/HomeTwo/AboutUs';
import Services from '../components/HomeTwo/Services';
import OffersArea from '../components/Common/OffersArea';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import TeamSlider from '../components/Common/TeamSlider';
import FunFactsStyleTwo from '../components/Common/FunFactsStyleTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import ContactWithUs from '../components/HomeTwo/ContactWithUs';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <NavbarTwo />

            <MainBanner />

            <OurFeatures />

            {/* <AboutUs /> */}

            <Services />

            {/* <div className="pb-100">
                <OffersArea />
            </div> */}

            {/* <WhyChooseUs /> */}

            {/* <TeamSlider /> */}

            {/* <FunFactsStyleTwo /> */}

            <TestimonialStyleTwo />

            <div className="pb-100">
                {/* <ContactWithUs /> */}
            </div>

            <BlogPost />
            
            <Footer />
        </>
    )
}

export default Index;