import React from 'react';
import Link from 'next/link';

const ServicesStyleOne = () => {
    return (
        <div className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Our Services</span>
					<h2>Types of Flexa Insurance</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-car-insurance"></i>
							<h3>Car Insurance</h3>
							
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

                            <Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-health-care"></i>
							<h3>Health Insurance</h3>
							
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-life-insurance"></i>
							<h3>Life Insurance</h3>
								
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-salesman"></i>
							<h3>Travel Insurance</h3>
								
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-travel-insurance"></i>
							<h3>Business Insurance</h3>
							
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
						
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<i className="flaticon-social-care-1"></i>
							<h3>Home Insurance</h3>
								
							<p>Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>

							<Link href="/insurance-details">
                                <a className="read-more">Read More</a>
                            </Link>
						</div>
					</div>
				</div>
			</div>

			<div className="services-shape">
				<img src="/images/services-shape-1.png" alt="Image" />
			</div>
		</div>
    )
}

export default ServicesStyleOne;