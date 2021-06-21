import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContentTwo from '../components/About/AboutUsContentTwo';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Pricing = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="หน้าแรก" 
                activePageText="Pricing" 
            /> 

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>Basic</h3>
                                    <p>Retirement Plan</p>
                                </div>
                                <div className="price">
                                    <h2><sup>$</sup> 250 <sub>/ month</sub></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <Link href="#">
                                    <a className="default-btn">Contact Us</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>Standard</h3>
                                    <p>Retirement Plan</p>
                                </div>
                                <div className="price">
                                    <h2><sup>$</sup> 350 <sub>/ month</sub></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <Link href="#">
                                    <a className="default-btn">Contact Us</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-pricing">
                                <div className="price-header">
                                    <h3>Premium</h3>
                                    <p>Retirement Plan</p>
                                </div>
                                <div className="price">
                                    <h2><sup>$</sup> 650 <sub>/ month</sub></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                <Link href="#">
                                    <a className="default-btn">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            <AboutUsContentTwo />
            
            <Footer />
        </>
    )
}

export default Pricing;