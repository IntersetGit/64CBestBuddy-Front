import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import GetAFreeQuoteFormStyleTwo from '../components/Common/GetAFreeQuoteFormStyleTwo';
import OffersArea from '../components/Common/OffersArea';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const HealthInsurance = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner 
                pageTitle="Health Insurance" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Health Insurance" 
            /> 

            <div className="choose-us-area-three pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Features</span>
                        <h2>อุ่นใจ ปลอดภัย เมื่อมีเรา <br/>The Best Buddy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-hand"></span>
                                <h3>Peace Of Mind</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-life-insurance-1"></span>
                                <h3>Set For Life</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-choose">
                                <span className="flaticon-insurance-1"></span>
                                <h3>Tailored Covered</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/insurance-details">
                                    <a><i className="flaticon-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutUsContent />

            <OurVision />
            
            <GetAFreeQuoteFormStyleTwo />

            <div className="ptb-100">
                <OffersArea />
            </div>

            <Footer />
        </>
    )
}

export default HealthInsurance;