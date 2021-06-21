import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <div className="services-area-three pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Our Services</span>
					<h2>Types of flexa Insurance</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-hand"></span>
							<h3>Car Insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                            <Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-insurance"></span>
							<h3>Home Insurence</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

							<Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-salesman"></span>
							<h3>Business Insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

							<Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-insurance-1"></span>
							<h3>Auto Insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

							<Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-life-insurance"></span>
							<h3>Health Insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

							<Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-choose">
							<span className="flaticon-travel-insurance"></span>
							<h3>Life Insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

							<Link href="/insurance-details">
                                <a>
                                    <i className="flaticon-right"></i>
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurServices;