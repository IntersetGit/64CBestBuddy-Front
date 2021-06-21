import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo2.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>บัดดี้กรุ๊ป ภายใต้การรวมตัวของบริษัท บัดดี้ ดี โบรคเกอร์ จำกัด และ บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด นายหน้าประกันชีวิตและวินาศภัยนิติบุคคล.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>ติดต่อเรา</h3>

                                <ul>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Hotline:</span>
                                        <a href="tel:02 276 2245-47">
                                            Phone: 02 276 2245-47
                                        </a>
                                    </li>

                                    <li>
                                        <i className="flaticon-email"></i>
                                        <span>Email:</span>
                                        <a href="mailto:hello@flexa.com">
                                            admin@buddybroker.co.th
                                        </a>
                                    </li>

                                    <li>
                                        <i className="flaticon-maps-and-flags"></i>
                                        <span>บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด</span>
                                        เลขที่ 288,288/1 อาคารบัดดี้ ดี โบรคเกอร์ ซอยรุ่งเรือง แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร 10310
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>บริการด้านประกันภัย</h3>

                                <ul>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>ประกัน รถยนต์</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/car-insurance">
                                            <a>ประกันสุขภาพ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home-insurance">
                                            <a>ประกันชีวิต</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/insurance-details">
                                            <a>ประกันอุบัติเหตุ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/health-insurance">
                                            <a>ประกันโรคร้ายแรง</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-insurance">
                                            <a>ประกันมะเร็ง</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Newsletter</h3>

                                <p className="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                <div className="subscribe-wrap">
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
                </div>
            </footer>

            <div className="footer-bottom-area footer-bottom-electronics-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy;{currentYear} The Best BUDDY 19 By <a href="https://envytheme.com/" target="blank">EnvyTheme</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;