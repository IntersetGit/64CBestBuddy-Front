import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
	margin:0,
	nav: true,
	mouseDrag: false,
    touchDrag: false,
	dots: false,
	margin: 30,
	autoplay: true,
	smartSpeed:1500,
	autoplayHoverPause: true,
	center: true,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
	responsive:{
		0:{
			items:1,
		},
		576:{
			items:2,
		},
		768:{
			items:2,
		},
		992:{
			items:3,
		}
	}
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonial-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span>Testimonials</span>
					<h2>What Our Clients Say</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
				</div>

                {display ? <OwlCarousel 
                    className="testimonial-wrap owl-carousel owl-theme"
                    {...options}
                >
					<div className="single-client">
						<img src="/images/testimonials/client1.jpg" alt="img" />

						<h3>Denial Peer</h3>
						<span>Marketer</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<div className="quotes">
							<i className="flaticon-left-quotes-sign"></i>
						</div>
					</div>
					
					<div className="single-client">
						<img src="/images/testimonials/client2.jpg" alt="img" />
						
						<h3>Anna Dew</h3>
						<span>Developer</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<div className="quotes">
							<i className="flaticon-left-quotes-sign"></i>
						</div>
					</div>

					<div className="single-client">
						<img src="/images/testimonials/client3.jpg" alt="img" />
						
						<h3>Jecty Smith</h3>
						<span>UI UX Designer</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<div className="quotes">
							<i className="flaticon-left-quotes-sign"></i>
						</div>
					</div>

					<div className="single-client">
						<img src="/images/testimonials/client4.jpg" alt="img" />
						
						<h3>Jonson</h3>
						<span>React Developer</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

						<ul>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
							<li><i className="bx bxs-star"></i></li>
						</ul>	

						<div className="quotes">
							<i className="flaticon-left-quotes-sign"></i>
						</div>
					</div>
                </OwlCarousel> : ''}
			</div>
		</div>
    )
}

export default Testimonials;