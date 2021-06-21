import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
            /> 

            <div className="team-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team1.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Denial Vetori</h3>
                                    <span>Team Lead</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team2.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>David Jon Korola</h3>
                                    <span>Business Man</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team3.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Merris Polar</h3>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team4.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Jenu Polar</h3>
                                    <span>Marketer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team5.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Killv Smith</h3>
                                    <span>Regional Leader</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/team6.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Thomas Olsen</h3>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            {/* Pagination */}
                            <div className="page-navigation-area text-center">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link page-links">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link href="#">
                                            <a className="page-link">1</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">2</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">3</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link">
                                                <i className='bx bx-chevrons-right'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Team;