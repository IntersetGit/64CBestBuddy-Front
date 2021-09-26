import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="container p-4">
                    <div className="row">

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3">
                                    <p>BBD Group</p>
                                    288,288/1 ซอยรุ่งเรือง<br />
                                    แขวงสามเสนนอก<br />
                                    เขตห้วยขวาง กรุงเทพฯ 10310
                                </div>
                                <div className="col-md-3">
                                    <p style={{ color: "#61CE70" }}>รู้จักกับ BBD</p>
                                    เกี่ยวกับเรา<br />
                                    ข่าวสาร/บทความ<br />
                                    บริการลูกค้า<br />
                                    ร่วมงานกับเรา<br />
                                    ติดต่อเรา<br />
                                </div>
                                <div className="col-md-3">
                                    <p style={{ color: "#61CE70" }}>แบบประกัน</p>
                                    288,288/1 ซอยรุ่งเรือง<br />
                                    แขวงสามเสนนอก<br />
                                    เขตห้วยขวาง กรุงเทพฯ 10310
                                </div>
                                <div className="col-md-3">
                                    <p style={{ color: "#0a2540" }}>แบบประกัน</p>
                                    ประกันโควิด<br />
                                    ประกันเดินทาง<br />
                                    ประกันรถยนต์<br />
                                    พ.ร.บ. รถยนต์<br />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <img src="/images/unnamed.jpeg" alt="Image" width={"30%"} /><br />
                            บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด<br />
                            ใบอนุญาตนายหน้าประกันวินาศภัย เลขที่ ว00018/2558<br />
                            บริษัท บีบีดี อินชัวรันส์ โบรกเกอร์ จำกัด<br />
                            ใบอนุญาตนายหน้าประกันชีวิต เลขที่ ช00011/2564<br />
                        </div>

                    </div>
                </div>
            </footer>

            <footer className="footer-bottom" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <p style={{ paddingTop: 5 }} style={{ color: "#fff" }}>
                                        ©2021 bbd.co.th สงวนลิขสิทธิ์.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">

                                <div className="col-12">
                                    <p style={{ paddingTop: 5 }} style={{ color: "#fff" }}>
                                        เงื่อนไขและข้อกำหนดในการใช้งาน | นโยบายความเป็นส่วนตัว
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;