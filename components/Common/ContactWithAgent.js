import React from 'react';

const ContactWithAgent = () => {
    return (
        <div className="agent-now-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Not Sure What You Need <br /> Find Agent Now</h2>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="call-now">
							<i className="flaticon-call"></i>
							<p>Call Us</p>
							<span>+123-465-789</span>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="subscribe-wrap">
							<p>Subscribe Now</p>

							<form className="newsletter-form">
								<input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
								<button className="default-btn" type="submit">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="agent-shape">
				<img src="/images/agent-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default ContactWithAgent;