import React from 'react';
import Link from 'next/link';
import { Badge, Select, Row, Col, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const BlogThreeGrid = () => {

    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);

    }

    return (
        <>

            <div className="blog-area ptb-100">
                <div className="container">

                    <div className="row">
                        <div className="page-title-content" >
                            <Row >
                                <Col span={3} >
                                    <h3>เรียกตามหมวดหมู่ :</h3>
                                </Col>
                                <Col span={5} style={{ marginTop: '-0.5%', marginLeft: '0.5%', borderRadius: '10%', marginBottom: '2%' }}>
                                    <Select
                                        showSearch
                                        size="large"
                                        style={{ width: 250 }}
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="ทุกเรื่องรถยนต์">ทุกเรื่องรถยนต์</Option>
                                        <Option value="เรื่องบ้านน่ารู้">เรื่องบ้านน่ารู้</Option>
                                        <Option value="สุขภาพ">สุขภาพ</Option>
                                        <Option value="การเดินทาง">การเดินทาง</Option>
                                    </Select>
                                </Col>
                                {/* <Col  span={15} style={{ marginTop: '-0.5%', marginLeft: '0.5%', borderRadius: '10%' }}>
                                    <p  id="selec-option">
                                        <label><input style={{ width: '50%' }} type="checkbox" name="option-all" defaultValue={1} /><span>ทั้งหมด</span></label>
                                        <label style={{ marginLeft: '1%' }}><input style={{ marginLeft: '1%' }} type="checkbox" name="option-selec" defaultValue={2} /><span>สุขภาพ</span></label>
                                        <label style={{ marginLeft: '1%' }}><input style={{ marginLeft: '1%' }} type="checkbox" name="option-selec" defaultValue={3} /><span>การเดินทาง</span></label>
                                        <label style={{ marginLeft: '1%' }}><input style={{ marginLeft: '1%' }} type="checkbox" name="option-selec" defaultValue={4} /><span>เรื่องบ้านน่ารู้</span></label>
                                        <label style={{ marginLeft: '1%' }}><input style={{ marginLeft: '1%' }} type="checkbox" name="option-selec" defaultValue={4} /><span>ทุกเรื่องรถยนต์</span></label>
                                    </p>

                                </Col> */}
                                <Col span={5} style={{ marginTop: '-0.5%', marginLeft: '0.5%', borderRadius: '10%', marginBottom: '2%', alignItems: 'flex-end' }}>
                                    <Button size={"large"}>เพิ่มบล็อก<PlusOutlined /></Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog1.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>
                                <div className="blog-content">
                                    <ul>
                                        <li >
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>ทุกเรื่องรถยนต์</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>ปลอดภัยทุกปลายทาง ด้วยประกันชั้น 1</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog2.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        {/* <li>เขียนเมื่อวันที่ 25/08/2020</li> */}
                                        <li>
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>ทุกเรื่องรถยนต์</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>Buddy 19 : บิ๊กไบค์คู่ใจ ประกันแบบไหนคู่ควร</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog6.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        {/* <li>เขียนเมื่อวันที่ 17/06/2019</li> */}
                                        <li>
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>เรื่องบ้านน่ารู้</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>ประกันคอนโดเรื่องสำคัญที่ชาวคอนโดต้องรู้</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog4.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        {/* <li>เขียนเมื่อวันที่ 25/08/2020</li> */}
                                        <li>
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>สุขภาพ</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>เบี้ยต่ำกว่าแสน ให้ค่าตรวจสุขภาพ เหมาจ่ายแผนไหนให้สูงสุด ?</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog5.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        {/* <li>เขียนเมื่อวันที่ 25/08/2020</li> */}
                                        <li>
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>การเดินทาง</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>ไขข้อสงสัย คำถามคาใจที่พบบ่อยกับประกันเดินทาง</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog">
                                <Link href="/blog/blog-details">
                                    <a><img src="/images/blog/blog3.jpg" alt="Image" style={{ height: '290px', width: '100%', position: 'static' }} /></a>
                                </Link>

                                <div className="blog-content">
                                    <ul>
                                        {/* <li>เขียนเมื่อวันที่ 17/06/2019</li> */}
                                        <li>
                                            <Link href="#"><a><span style={{ color: "#262566" }}>หมวดหมู่</span> : <u>ทุกเรื่องรถยนต์</u></a></Link>
                                        </li>
                                    </ul>

                                    <Link href="/blog/blog-details">
                                        <a>
                                            <h3>เทคนิคเลือกซื้อประกันรถยนต์ ผ่านโบรกเกอร์อย่างไรให้รุ่ง!</h3>
                                        </a>
                                    </Link>

                                    <Link href="/blog/blog-details">
                                        <a className="read-more">
                                            รายละเอียดเพิ่มเติม <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link href="#">
                                            <a className="page-link page-links">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link href="#">
                                            <a className="page-link" href="#">1</a>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <style jsx global>{`
            #selec-option input[type="checkbox"] {
                display: none;
              }
              
              #selec-option span {
                display: inline-block;
                width:100%;
                padding: 8px 30px 8px;
                text-transform: uppercase;
                border: 0px solid #074983;
                background-color: #495057;
                border-radius: 20px 20px 20px 20px;
                color: #fff;
                font-family: 'Prompt', sans-serif;
              }
              
              #selec-option input[type="checkbox"]:checked + span {
                background-color: #074983;
                color: #fff;
                font-family: 'Prompt', sans-serif;
              }
            `}</style>
        </>
    )
}

export default BlogThreeGrid;