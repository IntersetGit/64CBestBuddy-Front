import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurVision = () => {
    return (
        <div className="our-vision-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-img">
							<ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
								<img src="/images/vision-img.png" alt="Image" />
							</ScrollAnimation>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="vision-content">
							<span>Our Vision</span>
							<h2>We are Committed to Help Clients to Reach The Goals</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>	

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>

							<div className="vision-list">
								<ul>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Save Money
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Fast Application
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Flexible Insurance
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										No Brokers, No Upselling
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Investment Planning
									</li>
									<li>
										<i className="bx bx-chevrons-right"></i>
										Professional Advisor
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurVision;