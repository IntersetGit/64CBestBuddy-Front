import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const AboutUs = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="about-area about-area-three ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6">
						<div className="about-content">
							<span>About Us</span>
							<h2>Insurance Always Ready to Protect your Life & Business</h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis</p>	

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.</p>
                            
                            <Link href="/about">
                                <a className="default-btn">Know Details</a>
                            </Link>

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="default-btn active popup-youtube"
                                > 
                                    Video Play
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-6">
						<div className="about-img-3">
							<img src="/images/about-img-5.jpg" alt="Image" />
						</div>
					</div>
				</div>
			</div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
		</div>
    )
}

export default AboutUs;