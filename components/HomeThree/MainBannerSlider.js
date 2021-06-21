import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:0,
    nav:false,
    items:1,
    dots: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>",
    ],
};

const MainBannerSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="hero-slider-area">
            {display ? <OwlCarousel 
                className="hero-slider-wrap owl-carousel owl-theme"
                {...options}
            > 
				<div className="slider-item slider-item-bg-1">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="slider-text one">
									<span>Life Insurance</span>
									<h1>Reliable Insurance for Any Purpose</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
									
									<div className="slider-btn">
                                        <Link href="/contact">
                                            <a className="default-btn">Contact Us</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="slider-item slider-item-bg-2">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="slider-text two">
									<span>Life Insurance</span>
									<h1>Insurance for Any Purpose Reliable</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
									
									<div className="slider-btn">
                                        <Link href="/contact">
                                            <a className="default-btn">Contact Us</a>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </OwlCarousel> : ''}
		</div>
    )
}

export default MainBannerSlider;