import { useEffect, useState } from 'react';
import { message, Select } from 'antd';
import Link from 'next/link';
import { GetAllInsuranceService, GetMasterInsuranceService } from '../../service';

const { Option } = Select;

const InsuranceHome = (props) => {

    const initModelSearch = {
        insurance_type_id: null,
        order_by: "suggest"
    }
    const [modelSearch, setModelSearch] = useState(initModelSearch)

    const [liat, setliat] = useState([]);
    const [masterdata, setMasterdata] = useState({
        Type: {
            all_count: { count: 0 },
            data: []
        },
        AgeRang: [],
        Installment: [],
    })
    useEffect(() => {
        // const data = []
        // for (let x = 0; x < 4; x++) {
        //     if (x % 2 == 0) {
        //         data.push({
        //             id: x,
        //             name: "ประกันสุขภาพมิติใหม่ ซูเปอร์แพลนสมาร์ทโกลด์",
        //             img: "/images/cigna/192436271_2871784416415361_7734800754901153282_n.jpg"
        //         })
        //     } else {
        //         data.push({
        //             id: x,
        //             name: "ประกันสุขภาพ Super Save",
        //             img: "/images/cigna/Product image_SmartOffice_S.jpg"
        //         })
        //     }

        // }
        // setliat(data)
        onInit()
    }, []);


    /* Init */
    const onInit = async () => {
        try {
            const _res = await GetMasterInsuranceService()
            setMasterdata({
                ...masterdata,
                Type: _res.data.items.Type,
                AgeRang: _res.data.items.AgeRang,
                Installment: _res.data.items.Installment,
            })

            await searchInsurance(modelSearch)

        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    /* ประเภทประกัน */
    const filterTypeInsurance = async (item) => {
        console.log('filterType :>> ', item);
    }

    /* เรียงประกันตาม */
    const sortInsurance = async (item) => {
        console.log('sort :>> ', item);
    }

    /* ค้นหาประกัน */
    const searchInsurance = async (item) => {
        try {
            console.log('search :>> ', item);
            const { data } = await GetAllInsuranceService(item);
            console.log('data :>> ', data.items);
            const _data = data.items.map(e => {
                e.img_cover = e.img_cover ? (JSON.parse(e.img_cover)).path : null;
                return {
                    id: e.id,
                    name: e.name,
                    img: e.img_cover ? process.env.NEXT_PUBLIC_SERVICE + e.img_cover : "/images/no-img.png"
                }
            });
            setliat(_data)

        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }



    return (
        <>
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>แผนประกันออนไลน์</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-left-sidebar">
                                <div className="widget-area" id="secondary">

                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">เรียงประกันตาม: <Select defaultValue="suggest" style={{ width: 120 }} onChange={sortInsurance}>
                                            <Option value="suggest">ประกันแนะนำ</Option>
                                            <Option value="asc">ราคาต่ำสุด</Option>
                                            <Option value="desc">ราคาสูงสุด</Option>
                                        </Select>
                                        </h3>
                                        <div className="post-wrap">
                                            <ul>
                                                <li><a>ทั้งหมด <span>({masterdata.Type.all_count.count})</span></a></li>
                                                {masterdata.Type.data.map(e =>
                                                    <li key={e.id} onClick={() => filterTypeInsurance(e)}><a>{e.name} <span>({e.count})</span></a></li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {liat.map((e, i) => (
                            <>
                                <div className="col-lg-4 col-md-12" key={i}>
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

export default InsuranceHome;