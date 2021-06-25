import { useEffect, useState } from 'react';
import { Select } from 'antd';
import Link from 'next/link';

const { Option } = Select;

const BlogLeftSidebar = () => {

    const [liat, setliat] = useState([])
    useEffect(() => {
        const data = []
        for (let x = 0; x < 8; x++) {
            if (x % 2 == 0) {
                data.push({
                    id: x,
                    name: "ประกันสุขภาพมิติใหม่ ซูเปอร์แพลนสมาร์ทโกลด์",
                    img: "/demo/192436271_2871784416415361_7734800754901153282_n.jpg"
                })
            } else {
                data.push({
                    id: x,
                    name: "ประกันสุขภาพ Super Save",
                    img: "/demo/Product image_SmartOffice_S.jpg"
                })
            }

        }
        setliat(data)
    }, [])

    return (
        <>
            <div className="blog-details-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>แผนประกันออนไลน์</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-left-sidebar">
                                <div className="widget-area" id="secondary">

                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">เรียงประกันตาม: <Select defaultValue="suggest" style={{ width: 120 }} >
                                            <Option value="suggest">ประกันแนะนำ</Option>
                                            <Option value="asc">ราคาต่ำสุด</Option>
                                            <Option value="desc">ราคาสูงสุด</Option>
                                        </Select>
                                        </h3>
                                        <div className="post-wrap">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a>ทั้งหมด <span>(17)</span></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>ประกันอุบัติเหตุ <span>(6)</span></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>ประกันโรครายแรง <span>(4)</span></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>ประกันชดเชยรายได้ <span>(4)</span></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a>ประกันสุขภาพมิติใหม่ <span>(3)</span></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {liat.map(e => (
                            <>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-blog" >
                                        <Link href="/blog-details" >
                                            <a><img src={e.img} alt="Image" width={300} height={300} /></a>
                                        </Link>

                                        <div className="blog-content">
                                            <div style={{ paddingTop: 15 }}>
                                                <Link href="/blog-details">
                                                    <a>
                                                        <h5>{e.name}</h5>
                                                    </a>
                                                </Link>


                                                <div style={{ textAlign: "left" }}>
                                                    <p className="blog-p">o โรคยอดฮิตคนออฟฟิต  </p>
                                                    <p className="blog-p">o วงเงินรักษาพยาบาล OPD&IPD  </p>
                                                    <p className="blog-p">o หมดห่วงไม่ต้องสำรองจ่าย  ปี </p>
                                                </div>


                                                <div className="price">
                                                    <h2><sup>฿</sup> 250 <sub> / เดือน</sub></h2>
                                                    <h2 style={{ fontSize: 16, paddingTop: 5 }}><s>1,058</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
                                                </div>

                                                <div className="text-end">
                                                    <a className="default-btn" style={{ backgroundColor: "#ff9400" }}>ชื่อเลย</a>
                                                </div>



                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </>
                        ))}


                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
				.single-blog {
					text-align: center;
				}
				.blog-content {
					text-align: left;
				}
                .single-blog .blog-content {
                    z-index: -1;
                }
                .blog-p {
                    padding: 0 0 0 15px !important;
                    margin: 0 !important;
                }

                .price {
                    padding-top: 15px !important;
                    margin: 0 !important;
                }

                .text-end {
                    text-align: end;
                }
              
                
			`}} />
        </>
    )
}

export default BlogLeftSidebar;