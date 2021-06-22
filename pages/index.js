import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import MainBanner from '../components/HomeTwo/MainBanner';
import OurFeatures from '../components/HomeTwo/OurFeatures';
import Services from '../components/HomeTwo/Services';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <NavbarTwo />
            <MainBanner />
            <OurFeatures />
            <Services />

            <TestimonialStyleTwo />

            <div className="pb-100">
             
            </div>

            <BlogPost />

            <Footer />
        </>
    )
}

export default Index;