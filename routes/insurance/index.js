import { useEffect, useState } from 'react';
import { message, Select, Modal, Form, Input, Checkbox, Button } from 'antd';
import Link from 'next/link';
import { GetAllInsuranceService, GetMasterAllDataService, GetMasterInsuranceService, MangeInsuranceOrderService } from '../../service';
import Router from 'next/router'
import moment from 'moment';
import { Decrypt, Encrypt } from '../../utils/SecretCode';

const { Option } = Select;

const InsuranceHome = (props) => {

    const initModelSearch = {
        mas_insurance_type_id: null,
        order_by: "suggest",
        insurance_category_id: "2bf5864d-68f6-4cb6-b14d-7999ca213306", //falcon
    }
    const [modelSearch, setModelSearch] = useState(initModelSearch)

    const [master, setMaster] = useState({})
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
            const _res = await GetMasterInsuranceService("2bf5864d-68f6-4cb6-b14d-7999ca213306")
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
            ...modelSearch,
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
            // console.log('search :>> ', item);
            const { data } = await GetAllInsuranceService(item);
            // console.log('data :>> ', data.items);
            const _data = data.items.map(e => {
                e.img_cover = e.img_cover ? (JSON.parse(e.img_cover)).path : null;
                return {
                    id: e.id,
                    name: e.name,
                    details: e.details,
                    installment_name: e.installment_name,
                    price: e.price,
                    img: e.img_cover ? process.env.NEXT_PUBLIC_SERVICE + e.img_cover : "/images/no-img.png",
                    category_id: e.category_id,
                    category_name: e.category_name,
                }
            });
            setliat(_data)

        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }


    const selectInsurance = async (item) => {
        try {
            const { data } = await GetMasterAllDataService({ search: item.category_name });
            setMaster(data.items)
            setVisibleSelect(true)
            setInsuranceId(item.id)
            setCategoryName(item.category_name)
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    /* Modal Select Insurance */
    const [visibleSelect, setVisibleSelect] = useState(false)
    const [checked, setChecked] = useState(false)
    const [insuranceId, setInsuranceId] = useState(null)
    const [categoryName, setCategoryName] = useState(null)
    const [form] = Form.useForm();
    const [loadingForm, setLoadingForm] = useState(false)


    const handleCancelSelect = () => {
        form.resetFields()
        setVisibleSelect(false)
        setLoadingForm(false)
        setChecked(false)
        setInsuranceId(null)
        setCategoryName(null)
    }

    const onFinish = async (value) => {
        try {
            // console.log('value :>> ', value);
            setLoadingForm(true)
            const _model = {
                id: null,
                insurance_id: insuranceId,
                protection_date_start: moment(new Date()).format("YYYY-MM-DD"),
                protection_date_end: moment(new Date()).add(1, 'years').format("YYYY-MM-DD"),
                prefix_id: value.prefix_id,
                first_name: value.first_name,
                last_name: value.last_name,
                mobile_phone: value.mobile_phone,
                email: value.email,
                type_card_number_id: 1,
                category_name: categoryName,
            }
            // console.log('_model :>> ', _model);

            const token = Encrypt(_model)
            const { data } = await MangeInsuranceOrderService({ token });
            // console.log('data :>> ', data);
            setLoadingForm(false)
            Router.push({
                pathname: '/insurance/product',
                query: { id: data.items }
            })
        } catch (error) {
            setLoadingForm(false)
            message.error('มีบางอย่างผิดพลาดผิดพลาด!');
        }
    }

    const onFinishFailed = (error) => {
        message.error('กรอกข้อมูลให้ครบถ้วน!');
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

                                    <a onClick={() => selectInsurance(e)}><img src={e.img} alt="Image" width={300} height={300} /></a>

                                    <div className="blog-content">
                                        <div style={{ paddingTop: 15 }}>

                                            <a onClick={() => selectInsurance(e)}><h5>{e.name}</h5></a>

                                            <div style={{ textAlign: "left" }}>
                                                <span dangerouslySetInnerHTML={{ __html: e.details }} />
                                            </div>


                                            <div className="price">
                                                <h2><sup>฿</sup> {e.price.toLocaleString()} <sub> / {e.installment_name}</sub></h2>
                                                <h2 style={{ fontSize: 16, paddingTop: 5 }}><s>1,058</s> บาท <span style={{ color: "red", fontSize: 16 }}>-15%</span></h2>
                                            </div>

                                            <div className="text-end">
                                                <a className="default-btn" style={{ backgroundColor: "#ff9400" }} onClick={() => selectInsurance(e)}>ชื้อเลย</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>


                </div>


                {/* Modal Select Insurance */}
                <Modal
                    maskClosable={false}
                    visible={visibleSelect}
                    title="รายละเอียดผู้เอาประกันภัย"
                    onCancel={handleCancelSelect}
                    footer={(
                        <div className="text-center">
                            <Button className="btn btn-md btn-orange" disabled={!checked} onClick={() => form.submit()} loading={loadingForm}>ดำเนินการต่อ</Button>
                        </div>
                    )}
                >
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item label="คำนำหน้า" name="prefix_id" rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้าของคุณ!' }]}>
                            <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {master.GetAllPrefix ? master.GetAllPrefix.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                            </Select>
                        </Form.Item>

                        <Form.Item label="ชื่อ" name="first_name" rules={[{ required: true, message: 'กรุณากรอกชื่อจริงของคุณ!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="นามสกุล" name="last_name" rules={[{ required: true, message: 'กรุณากรอกนามสกุลของคุณ!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="โทรศัพท์มือ" name="mobile_phone" rules={[{ required: true, message: 'กรุณากรอกโทรศัพท์มือของคุณ!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="อีเมล" name="email" rules={[{ type: "email", required: true, message: 'กรุณากรอกอีเมลของคุณ!' }]}>
                            <Input />
                        </Form.Item>

                        <div style={{ padding: 20 }}>
                            <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
                                ข้าพเจ้ายอมรับให้บริษัทฯ เก็บรวบรวม ใช้ข้อมูลส่วนบุคคลที่ให้ไว้ข้างต้น สำหลับแจ้งข้อมูลข่าวสาร แนะนำผลิตภัณฑ์และบริการ กิจกรรมส่งเสริมการขาย รวมถึงข้มูลทางการตลาด
                                ตลอดจนข้อมูลอื่นๆ ที่เกี่ยวกับบริษัทฯ
                            </Checkbox>
                        </div>

                    </Form>
                </Modal>
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