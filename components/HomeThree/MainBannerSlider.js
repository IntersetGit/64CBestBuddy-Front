import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>",
    ],
};

const MainBannerSlider = ({ slider }) => {
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
                {slider ? slider.length > 0 ?
                     slider.map((e) => <div className="slider-item" style={{ backgroundImage: "url(" + `${e}` + ")" }} />) 
                    : (
                        <>
                            <div className="slider-item" style={{ backgroundImage: "url(" + `../images/img1-1500x430.png` + ")" }} />
                            <div className="slider-item" style={{ backgroundImage: "url(" + `../images/img2-1500x430.png` + ")" }} />
                            <div className="slider-item" style={{ backgroundImage: "url(" + `../images/img3-1500x430.png` + ")" }} />
                            <div className="slider-item" style={{ backgroundImage: "url(" + `../images/img4-1500x430.png` + ")" }} />
                            <div className="slider-item" style={{ backgroundImage: "url(" + `../images/cigna/Job_16_03_WFH_1500x430px_01_0.jpg` + ")" }} />
                        </>
                    ) : null}


            </OwlCarousel> : ''
            }
        </div >
    )
}

export default MainBannerSlider;