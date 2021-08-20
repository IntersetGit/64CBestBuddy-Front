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
                                <div className="col-3 text-center"  >
                                <img src="/images/logo2.png" alt="Image" width="45%"/>
                                </div>
                                <div className="col-9">
                                    บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด <br />
                                    288,288/1 อาคารบัดดี้ ดี โบรคเกอร์<br />
                                    ซอยรุ่งเรือง แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพฯ 10310
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            โทร : <span style={{ color: "#00ccff" }}>02 276 2245-47</span><br />
                            โทรสาร : <span style={{ color: "#00ccff" }}>02 276 2248</span> <br />
                            Email : <span style={{ color: "#00ccff" }}>admin@buddybroker.co.th</span>
                        </div>

                    </div>
                </div>
            </footer>

            <footer className="footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-3 text-center"  >
                                    <img src="/images/สำนักงาน-คปภ.jpg" alt="Image" />
                                </div>
                                <div className="col-9">
                                    <p style={{ paddingTop: 5 }}>
                                        บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด<br />
                                        ใบอนุญาตนายหน้าประกันวินาศภัย เลขที่ ว00018/2558
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-3 text-center"  >
                                    <img src="/images/สำนักงาน-คปภ.jpg" alt="Image" />
                                </div>
                                <div className="col-9">
                                    <p style={{ paddingTop: 5 }}>
                                        บริษัท บัดดี้ ดี โบรคเกอร์ จำกัด<br />
                                        ใบอนุญาตนายหน้าประกันชีวิต เลขที่ ช00005/2552
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