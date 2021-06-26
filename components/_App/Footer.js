import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo2.png" alt="Image" />
                                    </a>
                                </Link>

                                <p>บัดดี้กรุ๊ป ภายใต้การรวมตัวของบริษัท บัดดี้ ดี โบรคเกอร์ จำกัด และ บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด นายหน้าประกันชีวิตและวินาศภัยนิติบุคคล.</p>

                               
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget">
                                <h3>บริการด้านประกันภัย</h3>

                                <ul>
                                    <li>
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">ซื้อแผนประกัน</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://bestbuddy.diabetescru.com/" activeClassName="active">
                                            <a li className="nav-link">บทความ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <a className="nav-link">โปรโมชั่น</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <a className="nav-link">เกี่ยวกับเรา</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <a className="nav-link">ติดต่อเรา</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-bottom-area footer-bottom-electronics-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy;{currentYear} Buddy D Broker Co., Ltd</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;