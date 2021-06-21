import React from 'react';
import NavbarTwo from '../../components/_App/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Comments from '../../components/Blog/comments';

const BlogDetails = () => {
    return (
        <>
            <NavbarTwo />

            <PageBanner
                pageTitle="รายละเอียดบทความ"
                homePageUrl="/blog/blog-grid"
                homePageText="บทความ"
                activePageText="รายละเอียดบทความ"
            />

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/blog1.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>โพสต์เมื่อ :</span>
                                                <Link href="#">
                                                    <a>23  กุมภาพันธ์ 2564</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <span>โพสโดย :</span>
                                                <Link href="#">
                                                    <a>อาทิตร์ ตะวันเลือง</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <span>หมวดหมู่ :</span>
                                                <Link href="#">
                                                    <a><u>ทุกเรื่องรถยนต์</u></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>BUDDY | Grab ปลอดภัยทุกปลายทาง ด้วยประกันชั้น 1</h3>

                                    <p>Q:  ทำไมถึงควรเลือกทำประกันภัยชั้น 1 จากเมืองไทยประกันภัยกับ buddy 19 ?</p>

                                    <p>A:  ประกันภัยชั้น 1 ขึ้นชื่อเรื่องความคุ้มครองที่มากกว่าประกันภัยชั้นอื่นๆ อยู่แล้ว และพิเศษยิ่งกว่าด้วยเอกสิทธิ์
                                        2 ต่อสำหรับคนขับ Grab เมื่อซื้อประกันชั้น 1 ซ่อมอู่ จากเมืองไทยประกันภัยผ่าน buddy คือ </p>

                                    <blockquote className="flaticon-quote">
                                        <p>เอกสิทธิ์ 2 ต่อเฉพาะคนขับ Buddy ที่ซื้อประกันชั้น 1 เมื่องไทยประกันภัยผ่าน Buddy</p>
                                    </blockquote>
                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >ต่อ 1 บริการ Roadside Service ตลอด 24 ชม.</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >ต่อ 2 กรณีรถเข้าซ่อม รับบริการ On top จาก buddy สามารถเลือกบริการรถใช้ระหว่างซ่อมได้ 3 วันหรือเงินชดเชยรายได้ 1,500 บาท (1 ครั้งใน 1 ปี)</span></p>
                                        </li>
                                    </ol>

                                    <p>Q: สามารถเลือกซื้อประกันแบบผ่อนได้หรือไม่ ?</p>

                                    <p>A: สามารถทำได้ โดยแจ้งความประสงค์กับพนักงาน buddy ดังนี้ครับ</p>
                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >ผ่อนเงินสดได้ 3 เดือน*</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >ผ่อนผ่านบัตรเครดิตได้ 0% 6 เดือน</span></p>
                                        </li>
                                    </ol>

                                    <p>*กรณีผิดนัดชำระหนี้เกิน 7 วัน จะมีค่าปรับ 200 บาท/งวด/ครั้ง</p>
                                    <br />
                                    <span>
                                        <p>Q: ชำระเงินผ่านช่องทางไหนได้บ้าง ?</p>
                                        <p>A: ท่านสามารถชำระเงินผ่านการโอน, บัตรเครดิต, บัตรเดบิต หรือการผ่อนเงินสดครับ</p>
                                    </span>
                                    <br />
                                    <p>Q:  บริการ Roadside Service คืออะไร พิเศษยังไงบ้าง ?</p>
                                    <p>A:  Roadside service เป็นบริการพิเศษจาก Allianz Worldwide Partners ที่มอบให้คนขับ Grab พร้อมช่วยเหลือทุกเหตุการณ์ฉุกเฉิน ฟรีที่เบอร์ 02-305-8733 ตลอด 24 ชม. ดังนี้</p>

                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการช่วยเหลือรถเสียฉุกเฉิน ฟรีค่าแรงไม่จำกัดครั้ง</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการรถยกฉุกเฉิน ลากรถไปถึงอู่ที่ใกล้ที่สุดครั้งละ 30 กม.</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการให้คำปรึกษาทุกคำถามด้านเทคนิค 24 ชม.</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการช่างกุญแจฉุกเฉิน กรณีประตูรถล็อคเอง </span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการช่างกุญแจฉุกเฉิน กรณีประตูรถล็อคเอง </span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการดูแลค่าที่พัก วันละ 1,500 บาท (ครั้งละไม่เกิน 2 วัน) กรณีรถเสียฉุกเฉินเดินทางต่อไม่ได้ </span></p>
                                        </li>
                                    </ol>

                                    <p>*ผู้ติดต่อขอรับบริการ Roadside Service
                                        ต้องเป็นผู้ขับขี่ในระบบ Grab และมีชื่อตรงกับในกรมธรรม์ หรือเป็นเจ้าของรถ
                                        และมีชื่อตรงกับในกรมธรรม์ เท่านั้น</p>
                                    <p>
                                        Q: บริการรถใช้ระหว่างซ่อมหรือเงินชดเชยรายได้มีเงื่อนไขอะไรบ้าง ?
                                    </p>
                                    <p>
                                        A: บริการพิเศษ top up จาก gettgo ท่านจะได้รับในกรณีเกิดอุบัติเหตุต้องนำรถเข้าซ่อมเกิน 5 วันเท่านั้น โดยท่านสามารถเลือกได้ 1 อย่างใน 1 ปีกรมธรรม์ ดังนี้
                                    </p>
                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >บริการรถใช้ระหว่างซ่อม 3 วัน หรือ</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >เงินชดเชยรายได้ 1,500 บาท*</span></p>
                                        </li>
                                    </ol>
                                    <p>  *buddy ขอสงวนสิทธิ์กำหนดรับไม่เกินเดือนละ 50 คำร้องเท่านั้น</p>
                                    <p>Q: หากเกิดอุบัติเหตุมีคู่กรณี หรือไม่มีคู่กรณี แต่รถเสียหายมาก ต้องการเคลมประกัน ติดต่อที่ไหน ?</p>
                                    <p>A: ติดต่อที่เมืองไทยประกันภัยที่เบอร์ 1484 เท่านั้น เพื่อให้เจ้าหน้าที่มาตรวจสอบพื้นที่เกิดเหตุและประสานงานการจัดซ่อมให้</p>
                                    <br />
                                    <p>5. หากเกิดอุบัติเหตุไม่มีคู่กรณีและรถเสียหายไม่มาก ต้องการซ่อมรถทำยังไงบ้าง ?</p>
                                    <br />
                                    <p>โทรแจ้ง 1484 เพื่อแสดงความประสงค์ว่าต้องการเคลม โดยท่านสามารถเลือกการซ่อมจากเมืองไทยประกันภัยได้ดังนี้</p>

                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >นำรถไปเคลมที่อู่ซ่อมมาตรฐานที่รับงานซ่อมของบริษัทฯ กว่า 400 อู่ทั่วประเทศ พร้อมส่งจัดซ่อมได้เลย</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >แจ้งความประสงค์กับทางบริษัทฯ ได้ว่าให้เจ้าหน้าที่สำรวจภัยไปพบ และทำเคลมให้ตามสถานที่นัดหมายที่สะดวกได้ตามตกลง และนำใบเคลมไปติดต่อซ่อมในภายหลัง</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >สามารถนำรถไปติดต่อเคลมที่บริษัทฯ ได้ ทั้งสำนักงานใหญ่และสาขาย่อยทั่วประเทศ</span></p>
                                        </li>
                                    </ol>
                                    <p>6. ในกรณีอุบัติเหตุ และรถคุณเข้าเงื่อนไขส่งซ่อมเกิน 3 วัน หากต้องการใช้บริการรถใช้ระหว่างซ่อม หรือเคลมเงินชดเชยรายได้ ติดต่อที่ไหน ?</p>
                                    <ol>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >ติดต่อ buddy โดยตรงที่ 02-111-7800 หรือ line @buddy </span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >เตรียมเอกสารในการยื่นเรื่อง ได้แก่ ใบขอรับรถจากอู่ และใบเคลม เพื่อส่งให้เจ้าหน้าที่ buddy ประสานงาน</span></p>
                                        </li>
                                        <li aria-level={1} dir="ltr">
                                            <p dir="ltr" role="presentation"><span >สงวนสิทธิ์เฉพาะคนขับ Grab ที่ซื้อประกันชั้น 1 เมืองไทยประกันภัย ผ่าน buddy เท่านั้น</span></p>
                                        </li>
                                    </ol>
                                </div>

                                <div className="post-navigation">
                                    <div className="navigation-links">
                                        <div className="nav-previous">
                                            <Link href="#">
                                                <a><i className='bx bx-left-arrow-alt'></i> ก่อนหน้า</a>
                                            </Link>
                                        </div>
                                        <div className="nav-next">
                                            <Link href="#">
                                                <a>หน้าถัดไป <i className='bx bx-right-arrow-alt'></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments & Form */}
                                {/* <Comments /> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogDetails;