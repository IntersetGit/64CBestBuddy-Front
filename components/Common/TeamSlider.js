import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:30,
    nav:false,
    mouseDrag: false,
    touchDrag: false,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
	center: true,
	
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

const TeamSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="team-area ptb-100">
            <div className="container">
                <div className="section-title">
					<span>Team</span>
                    <h2>Our Expert Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
				</div>

                {display ? <OwlCarousel 
                    className="team-wrap owl-carousel owl-theme"
                    {...options}
                >
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
							<span>Marketer</span>
						</div>
					</div>
				
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
							<h3>Jeck Dew</h3>
							<span>Founder</span>
						</div>
					</div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default TeamSlider;