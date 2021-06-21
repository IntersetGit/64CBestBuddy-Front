import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:30,
    nav:true,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
	autoplayHoverPause: true,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        768:{
            items:1,
        },
        992:{
            items:2,
        },
        1200:{
            items:2,
        }
    }
};

const TestimonialStyleTwo = () => {
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
                    className="testimonial-wrap-two owl-carousel owl-theme"
                    {...options}
                >
					<div className="single-client">
						<div className="client-text">
							<img src="/images/testimonials/client10.jpg" alt="Image" />
							<h3>Denial Peer</h3>
							<span>Marketer</span>
						</div>

						<p>Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus.</p>

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
						<div className="client-text">
                            <img src="/images/testimonials/client11.jpg" alt="Image" />
							<h3>Anna Dew</h3>
							<span>Developer</span>
						</div>
						
						<p>Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus.</p>

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
						<div className="client-text">
                            <img src="/images/testimonials/client12.jpg" alt="Image" />
							<h3>Jecty Smith</h3>
							<span>UI UX Designer</span>
						</div>
						
						<p>Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus.</p>

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

export default TestimonialStyleTwo;