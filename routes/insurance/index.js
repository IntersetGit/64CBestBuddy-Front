import { useEffect, useState } from 'react';
import { message, Select } from 'antd';
import Link from 'next/link';
import { GetAllInsuranceService, GetMasterInsuranceService } from '../../service';

const { Option } = Select;

const InsuranceHome = (props) => {

    const initModelSearch = {
        mas_insurance_type_id: null,
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
        const mas_insurance_type_id = item ? item.id : null
        setModelSearch({ ...modelSearch, mas_insurance_type_id })
        await searchInsurance({
            mas_insurance_type_id,
            order_by: modelSearch.order_by
        })
    }

    /* เรียงประกันตาม */
    const sortInsurance = async (item) => {
        setModelSearch({ ...modelSearch, order_by: item })
        await searchInsurance({
            mas_insurance_type_id: modelSearch.mas_insurance_type_id,
            order_by: item
        })
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
                    details: e.details,
                    installment_name: e.installment_name,
                    price: e.price,
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
                                                <li onClick={() => filterTypeInsurance(null)}><a>ทั้งหมด <span>({masterdata.Type.all_count.count})</span></a></li>
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
                            <div className="col-lg-4 col-md-12" key={i}>
                                <div className="single-blog" >
                                    <Link href={`/insurance/product?id=${e.id}`} >
                                        <a><img src={e.img} alt="Image" width={300} height={300} /></a>
                                    </Link>

                                    <div className="blog-content">
                                        <div style={{ paddingTop: 15 }}>
                                            <Link href={`/insurance/product?id=${e.id}`}>
                                                <a>
                                                    <h5>{e.name}</h5>
                                                </a>
                                            </Link>

                                            <div style={{ textAlign: "left" }}>
                                                <span dangerouslySetInnerHTML={{ __html: e.details }} />
                                            </div>


                                            <div className="price">
                                                <h2><sup>฿</sup> {e.price} <sub> / {e.installment_name}</sub></h2>
                                                {/* <h2 style={{ fontSize: 16, paddingTop: 5 }}><s>1,058</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2> */}
                                            </div>

                                            <div className="text-end">
                                                <Link href={`/insurance/product?id=${e.id}`} >
                                                    <a className="default-btn" style={{ backgroundColor: "#ff9400" }}>ชื่อเลย</a>
                                                </Link>
                                            </div>



                                        </div>

                                    </div>

                                </div>
                            </div>
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