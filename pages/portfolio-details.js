import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioSidebar from '../components/Portfolio/PortfolioSidebar';
import Footer from '../components/_App/Footer';
import QuestionForm from '../components/Portfolio/QuestionForm';

const PortfolioDetails = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Details" 
            /> 

            <div className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Portfolio Sidebar */}
                            <PortfolioSidebar />
                        </div>

                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/portfolio-details/portfolio-details1.jpg" alt="Image" />
                                </div>
                                <h2>We have been Thriving in 37 Years The Area</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ducimus rerum sunt dignissimos libero et eum modi! Consequuntur rem incidunt et ducimus magnam sunt rerum hic beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores eos obcaecati nostrum sed, corporis placeat quasi pariatur id, est iure, minus quibusdam.</p>

                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                                
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn.</p>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta a fugit, nisi id, commodi hic saepe impedit maxime facere officia voluptates laborum aliquid? Facilis, quisquam consectetur? Id possimus ex fugit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta a fugit, nisi id, commodi hic saepe impedit maxime facere officia voluptates laborum aliquid? Facilis.</p>

                                <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/portfolio-details/portfolio-details2.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Engine bay cleaned and dressed
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Door card panels cleaned
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Plastic Trim Enhanced
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Paint surface clay barred
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Alloy wheel treatment inside and out
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Door card panels cleaned
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Question Form */}
                                <QuestionForm /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <Footer />
        </>
    )
}

export default PortfolioDetails;