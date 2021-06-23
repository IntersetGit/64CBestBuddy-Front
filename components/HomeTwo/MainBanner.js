import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <div className="main-banner-area-two jarallax">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="banner-text">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
							    <span>Investment Retirement Insurance</span>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
							    <h1>Take The Worry Out of Life with Insurance Protection</h1>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
							    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.</p>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="banner-btn">
                                    <Link href="/contact">
                                        <a className="default-btn">Get Started</a>
                                    </Link>
                                    <Link href="/contact">
                                        <a className="default-btn active">Find An Agent</a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
						</div>	
					</div>

					<div className="col-lg-6 pr-0">
                        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                            <div className="banner-img"></div>
                        </ScrollAnimation>
					</div>
				</div>
			</div>
		</div>
    )
}

export default MainBanner;