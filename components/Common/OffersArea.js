import React from 'react';
import Link from 'next/link';

const OffersArea = () => {
    return (
        <div className="business-contact-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 p-0">
						<div className="business-img">
							<img src="/images/business-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-6 p-0">
						<div className="business-content">
							<h3>Save up to 30% when you buy small business insurance in online</h3>

                            <Link href="/contact">
                                <a className="default-btn active ml-0">
                                    Contact Us
                                </a>
                            </Link>

							<p>Call Us Today: <br /> +82546-564-234</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OffersArea;