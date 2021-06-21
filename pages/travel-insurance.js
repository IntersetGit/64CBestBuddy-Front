import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import OffersArea from '../components/Common/OffersArea';
import OurVision from '../components/About/OurVision';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const TravelInsurance = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Travel Insurance" 
                homePageUrl="/" 
                homePageText="หน้าแรก" 
                activePageText="Travel Insurance" 
            />

            <div className="choose-us-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>We are Dedicated to Support You </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-kindness"></span>
                                <h3>Service With Love</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>

                                <span className="choose-icon flaticon-kindness"></span>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-target"></span>
                                <h3>Clients Focused</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>

                                <span className="choose-icon flaticon-target"></span>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-support"></span>
                                <h3>Awesome Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>

                                <span className="choose-icon flaticon-support"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutUsContent />

            <GetAFreeQuoteFormStyleTwo />

            <div className="pt-100">
                <OffersArea />
            </div>

            <OurVision />
            
            <Footer />
        </>
    )
}

export default TravelInsurance;