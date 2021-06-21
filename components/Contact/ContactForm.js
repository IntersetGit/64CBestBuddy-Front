import React from 'react';

const ContactForm = () => {
	return (
		<div className="contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="contact-wrap">
							<div className="contact-form">
								<div className="section-title">
									<h2>Drop Us A Message For Any Query</h2>
								</div>

								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
											</div>
										</div>

										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
											</div>
										</div>

										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Your Phone" />
											</div>
										</div>

										<div className="col-lg-6 col-sm-6">
											<div className="form-group">
												<input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<button type="submit" className="default-btn page-btn">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="quick-contact">
							<h3>Contact Info</h3>
							<ul>
								<li>
									<i className="flaticon-maps-and-flags"></i>
									ที่อยู่ บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด
									<span> เลขที่ 288,288/1 อาคารบัดดี้ ดี โบรคเกอร์ ซอยรุ่งเรือง แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร 10310</span>
								</li>
								<li>
									<i className="bx bx-envelope"></i>
									Email
									<a href="mailto:admin@buddybroker.co.th">admin@buddybroker.co.th</a>
								</li>
								<li>
									<i className="bx bxs-phone-call"></i>
									Phone
									<a href="tel:+66839695466">คุณเบสท์ 083 969 5466</a>
									<a href="tel:+66649699994">คุณต่าย 064 969 9994</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm;