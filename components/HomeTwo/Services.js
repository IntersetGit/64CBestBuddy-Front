import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="service-area-two pt-100 pb-35">
            <div className="container">
                <div className="section-title">
                    <span>Our Services</span>
                    <h2>Types of flexa Insurance</h2>
                    <p>Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mua. Quis ipsum suspendices gravida.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-car-insurance"></i>
                                <h3>Car Insurance</h3>
                                <p>Startup ipsum dolor sit amet consuring elised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>Leadership Work</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-salesman"></i>
                                <h3>Business Insurance</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-insurance-1"></i>
                                <h3>Travel Insurance</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-health-care"></i>
                                <h3>Health Insurance</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-service mb-65">
                            <div className="service-content">
                                <i className="icon-style flaticon-life-insurance-1"></i>
                                <h3>Life Insurance</h3>
                                <p>Leader ipsum dolor sit amet consuring lised faisism dolor sit amet.</p>

                                <Link href="/insurance-details">
                                    <a><i className="bx bx-chevrons-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    )
}

export default Services;