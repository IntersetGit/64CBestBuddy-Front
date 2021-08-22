import { useEffect, useState } from 'react'
import Router from 'next/router'
import { Collapse, Radio, Space, Checkbox, Row, Col, Button, Form, Select, Input, message } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Encrypt } from '../../../utils/SecretCode';
import { MangeInsuranceOrderService } from '../../../service';

const { Panel } = Collapse;
const { Option } = Select

const Beneficiary = ({ model, master, address }) => {

    // console.log('model :>> ', model);
    // console.log('master :>> ', master);

    const [beneficiaryStatus, setBeneficiaryStatus] = useState(1)
    const [insuredStatus, setInsuredStatus] = useState(1)
    const [statusTax, setStatusTax] = useState(null)
    const [condition, setCondition] = useState(false)
    const [loading, setLoading] = useState(false)

    const [beneficiary, setBeneficiary] = useState([])

    useEffect(() => {
        if (model.form) {
            setBeneficiary(model.form.beneficiary)
            setBeneficiaryStatus(Number(model.form.beneficiary_status))
            setInsuredStatus(Number(model.form.insured_status))
            setStatusTax(Number(model.form.status_tax))
            setCondition(model.form.status_tax ? true : false)

            if (model.form.insured_status == 2) {
                formInsured.setFieldsValue({
                    prefix_id_insured: model.form.prefix_id_insured,
                    first_name_insured: model.form.first_name_insured,
                    last_name_insured: model.form.last_name_insured,
                    type_card_number_id_insured: model.form.type_card_number_id_insured,
                    card_number_insured: model.form.card_number_insured,
                    gender_id_insured: model.form.gender_id_insured,
                    mobile_phone_insured: model.form.mobile_phone_insured,
                    phone_insured: model.form.phone_insured,
                    email_insured: model.form.email_insured,
                    beneficiary_id_insured: model.form.beneficiary_id_insured,
                    house_no_insured: model.form.house_no_insured,
                    village_no_insured: model.form.village_no_insured,
                    lane_insured: model.form.lane_insured,
                    village_insured: model.form.village_insured,
                    road_insured: model.form.road_insured,
                    province_id_insured: model.form.province_id_insured,
                    district_id_insured: model.form.district_id_insured,
                    sub_district_id_insured: model.form.sub_district_id_insured,
                    postal_code_insured: model.form.postal_code_insured,
                })
            }
        }
    }, [model.form])

    /* ข้อมูลผู้รับผลประโยชน์ */

    const initialBeneficiary = {
        prefix_id: null,
        first_name: null,
        last_name: null,
        beneficiary_id: null,
        ratio: 50,
    }

    const beneficiaryRadio = (value) => {
        // console.log('value :>> ', value);
        if (value == 1) {
            setBeneficiary(model.form.beneficiary)
        } else if (value == 2) {
            const _initialBeneficiary = initialBeneficiary
            _initialBeneficiary.ratio = 100
            setBeneficiary([_initialBeneficiary])
        }
        setBeneficiaryStatus(value)
    }

    const addBeneficiary = () => {
        if (beneficiary.length === 1) {
            const _beneficiary = beneficiary.map(e => {
                return {
                    prefix_id: e.prefix_id,
                    first_name: e.first_name,
                    last_name: e.last_name,
                    beneficiary_id: e.beneficiary_id,
                    ratio: 50,
                }
            });
            setBeneficiary([..._beneficiary, initialBeneficiary])
        }
    }

    const delBeneficiary = (index) => {
        if (beneficiary.length > 0) {
            if (beneficiary.length == 1) {
                setBeneficiary(model.form.beneficiary)
                setBeneficiaryStatus(1)
            } else {
                const _beneficiary = beneficiary.map(e => {
                    return {
                        prefix_id: e.prefix_id,
                        first_name: e.first_name,
                        last_name: e.last_name,
                        beneficiary_id: e.beneficiary_id,
                        ratio: e.ratio,
                    }
                });
                _beneficiary.splice(index, 1)
                _beneficiary[0].ratio = 100
                setBeneficiary(_beneficiary)
            }
        }
    }

    const changeBeneficiaryValue = (value, index, type) => {
        // console.log('object :>> ', value, index, type, beneficiary.length);
        const _beneficiary = beneficiary.map(e => {
            return {
                prefix_id: e.prefix_id,
                first_name: e.first_name,
                last_name: e.last_name,
                beneficiary_id: e.beneficiary_id,
                ratio: e.ratio,
            }
        });
        if (type == "ratio") {
            if (Number(value) > 0 && Number(value) < 100) {
                _beneficiary[index][type] = value
                if (_beneficiary.length == 2) {
                    _beneficiary[index + 1][type] = 100 - Number(_beneficiary[index][type])
                }
            }
        } else {
            _beneficiary[index][type] = value
        }

        setBeneficiary(_beneficiary)
    }



    /* ผู้ถือกรมธรรม์ */

    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [subdistrictList, setSubdistrictList] = useState([]);


    useEffect(() => {
        if (address) {
            setProvinceList(address.GetAllProvince)
            setDistrictList(address.GetAllDistrict)
            setSubdistrictList(address.GetAllSubDistrict)
        }
    }, [address])


    const [formInsured] = Form.useForm();


    const insuredRadio = (value) => {
        // console.log('value :>> ', value);
        if (value == 1) {
            formInsured.resetFields()
        } else {
            // console.log('model.form.prefix_id_insured :>> ', model.form);
            formInsured.setFieldsValue({
                prefix_id_insured: model.form.prefix_id_insured,
                first_name_insured: model.form.first_name_insured,
                last_name_insured: model.form.last_name_insured,
                type_card_number_id_insured: model.form.type_card_number_id_insured,
                card_number_insured: model.form.card_number_insured,
                gender_id_insured: model.form.gender_id_insured,
                mobile_phone_insured: model.form.mobile_phone_insured,
                phone_insured: model.form.phone_insured,
                email_insured: model.form.email_insured,
                beneficiary_id_insured: model.form.beneficiary_id_insured,
                house_no_insured: model.form.house_no_insured,
                village_no_insured: model.form.village_no_insured,
                lane_insured: model.form.lane_insured,
                village_insured: model.form.village_insured,
                road_insured: model.form.road_insured,
                province_id_insured: model.form.province_id_insured,
                district_id_insured: model.form.district_id_insured,
                sub_district_id_insured: model.form.sub_district_id_insured,
                postal_code_insured: model.form.postal_code_insured,
            })
        }
        setInsuredStatus(value)
    }

    const onFinishInsured = async (value) => {
        try {
            // console.log('value :>> ', value);
            setLoading(true)
            let err = false
            if (insuredStatus == 2) {
                beneficiary.forEach(e => {
                    if (!(e.prefix_id && e.first_name && e.last_name && e.beneficiary_id)) {
                        err = true
                    }
                });
            }

            if (err) {
                message.error('กรอกข้อมูลให้ครบถ้วน!');
                setLoading(false)
            } else {
                const _model = {
                    id: model.form.id,

                    insured_status: insuredStatus,
                    prefix_id_insured: insuredStatus == 1 ? null : value.prefix_id_insured,
                    first_name_insured: insuredStatus == 1 ? null : value.first_name_insured,
                    last_name_insured: insuredStatus == 1 ? null : value.last_name_insured,
                    type_card_number_id_insured: insuredStatus == 1 ? null : value.type_card_number_id_insured,
                    card_number_insured: insuredStatus == 1 ? null : value.card_number_insured,
                    gender_id_insured: insuredStatus == 1 ? null : value.gender_id_insured,
                    mobile_phone_insured: insuredStatus == 1 ? null : value.mobile_phone_insured,
                    phone_insured: insuredStatus == 1 ? null : value.phone_insured,
                    email_insured: insuredStatus == 1 ? null : value.email_insured,
                    beneficiary_id_insured: insuredStatus == 1 ? null : value.beneficiary_id_insured,
                    house_no_insured: insuredStatus == 1 ? null : value.house_no_insured,
                    village_no_insured: insuredStatus == 1 ? null : value.village_no_insured,
                    lane_insured: insuredStatus == 1 ? null : value.lane_insured,
                    village_insured: insuredStatus == 1 ? null : value.village_insured,
                    road_insured: insuredStatus == 1 ? null : value.road_insured,
                    province_id_insured: insuredStatus == 1 ? null : value.province_id_insured,
                    district_id_insured: insuredStatus == 1 ? null : value.district_id_insured,
                    sub_district_id_insured: insuredStatus == 1 ? null : value.sub_district_id_insured,

                    beneficiary_status: beneficiaryStatus,
                    insurance_beneficiary: beneficiaryStatus == 1 ? [] : beneficiary,
                    page: 3,
                    category_name: model.data.category_name,
                    status_tax: statusTax,
                }
                // console.log('_model :>> ', _model);
              
                const token = Encrypt(_model)
                await MangeInsuranceOrderService({ token });
                setLoading(false)
                Router.push({
                    pathname: '/insurance/product',
                    query: {
                        id: model.form.id,
                        page: 4
                    }
                })
            }

        } catch (error) {
            message.error('มีบางอย่างผิดพลาดผิดพลาด!');
            setLoading(false)
        }
    }

    const onFinishFailedInsured = (error) => {
        //    console.log('object :>> ', error);
        message.error('กรอกข้อมูลให้ครบถ้วน!');
    }


    /* changeSelectAddress จังหวัด อำเภอ ตำบล */

    const changeSelectAddress = async (id, type) => {
        // console.log('id :>> ', id, type);
        const district = address.GetAllDistrict, subdistrict = address.GetAllSubDistrict
        const data = formInsured.getFieldsValue()
        if (type === "prov") {
            await setDistrictList(district.filter(e => e.provicne_id === id))
            await setSubdistrictList(subdistrict.filter(e => e.provicne_id === id))
            formInsured.setFieldsValue({ ...data, district_id_insured: null, sub_district_id_insured: null })

        } else if (type === "dist") {

            await setSubdistrictList(subdistrict.filter(e => e.district_id === id))
            formInsured.setFieldsValue({ ...data, sub_district_id_insured: null, provicne_id_insured: await ChangeSelectDist(id), })

        } else if (type === "subdist") {

            const index = subdistrictList.findIndex(e => e.id == id);
            if (index !== -1) {
                formInsured.setFieldsValue({ ...data, district_id_insured: subdistrictList[index].district_id, province_id_insured: await ChangeSelectDist(subdistrictList[index].district_id), postal_code_insured: subdistrictList[index].postal_code })
            }
        }
    }

    const ChangeSelectDist = async (id) => {
        const filterIndex = districtList.filter(e => e.id == id);
        return filterIndex.length > 0 ? filterIndex[0].provicne_id : null
    }


    /*  */
    const nextPage = () => {
        if (insuredStatus == 1) {
            onFinishInsured({})
        } else {
            formInsured.submit()
        }
    }

    const backPage = () => {
        Router.push({
            pathname: '/insurance/product',
            query: {
                id: model.form.id,
                page: 2
            }
        })

    }

    return (
        <>
            <div>
                <Collapse activeKey={beneficiaryStatus}>

                    <Panel header={
                        <>
                            <label className="label-radio">ข้อมูลผู้รับผลประโยชน์ : &nbsp;</label>
                            <Radio.Group onChange={(item) => beneficiaryRadio(item.target.value)} value={beneficiaryStatus}>
                                <Radio value={1}>ทายาทตามกฎหมาย</Radio>
                                <Radio value={2}>อื่น ๆ</Radio>
                            </Radio.Group>
                        </>
                    } extra={
                        beneficiary.length === 1 ? <Button icon={<PlusCircleOutlined />} onClick={addBeneficiary}>เพื่มผู้รับผลประโยชน์</Button> : null
                    } showArrow={false} key={2} >



                        <Collapse activeKey={[0, 1]}>

                            {beneficiary.map((e, i) => (
                                <Panel header={<label className="label-radio">{`${i + 1}st ผู้รับผลประโยชน์`}</label>} extra={(
                                    <Button danger icon={<DeleteOutlined />} onClick={() => delBeneficiary(i)}>ลบ</Button>
                                )} key={i} showArrow={false}>
                                    <>

                                        <Row gutter={[24, 24]}>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <label className="label-form"><span className="text-red">*</span> คำนำหน้า</label> <br />
                                                <Select
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                    value={e.prefix_id}
                                                    style={{ width: "100%" }}
                                                    onChange={(x) => changeBeneficiaryValue(x, i, "prefix_id")}
                                                >
                                                    {master.GetAllPrefix ? master.GetAllPrefix.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                                </Select>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <label className="label-form"><span className="text-red">*</span> ชื่อ</label> <br />
                                                <Input value={e.first_name} onChange={(x) => changeBeneficiaryValue(x.target.value, i, "first_name")} />
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <label className="label-form"><span className="text-red">*</span> นามสกุล</label> <br />
                                                <Input value={e.last_name} onChange={(x) => changeBeneficiaryValue(x.target.value, i, "last_name")} />
                                            </Col>
                                        </Row>

                                        <Row gutter={[24, 24]}>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <label className="label-form"><span className="text-red">*</span> ความสัมพันธ์กับผู้เอาประกันภัย</label> <br />
                                                <Select
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                    value={e.beneficiary_id}
                                                    style={{ width: "100%" }}
                                                    onChange={(x) => changeBeneficiaryValue(x, i, "beneficiary_id")}
                                                >
                                                    {master.GetAllBeneficiaryRelationship ? master.GetAllBeneficiaryRelationship.map(x => <Option value={x.id} key={x.id}>{x.name}</Option>) : null}
                                                </Select>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <label className="label-form"><span className="text-red">*</span> อัตราส่วน</label> <br />
                                                <Input type="number" value={e.ratio} suffix="%" disabled={(i != 0) || (beneficiary.length === 1)} onChange={(x) => changeBeneficiaryValue(x.target.value, i, "ratio")} />
                                            </Col>
                                        </Row>


                                    </>
                                </Panel>
                            ))}
                        </Collapse>

                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={insuredStatus} >
                    <Panel header={
                        <>
                            <label className="label-radio">ผู้ถือกรมธรรม์ : &nbsp;</label>
                            <Radio.Group onChange={(item) => insuredRadio(item.target.value)} value={insuredStatus}>
                                <Radio value={1}>เหมือนผู้เอาประกันภัย</Radio>
                                <Radio value={2}>บุคคลอื่น</Radio>
                            </Radio.Group>
                        </>
                    } showArrow={false} key={2}>
                        <div className="p-4">
                            <Form
                                form={formInsured}
                                layout="vertical"
                                onFinish={onFinishInsured}
                                onFinishFailed={onFinishFailedInsured}
                            >
                                <Row gutter={[24, 24]}>


                                    <Row gutter={[24, 0]}>

                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="คำนำหน้า" name="prefix_id_insured" rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า!' }]}>
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
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="ชื่อ" name="first_name_insured" rules={[{ required: true, message: 'กรุณากรอกชื่อ!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="นามสกุล" name="last_name_insured" rules={[{ required: true, message: 'กรุณากรอกนามสกุล!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </>

                                        <>

                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="ประเภทบัตร" name="type_card_number_id_insured" >
                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {master.GetAllTypeCardNumber ? master.GetAllTypeCardNumber.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                                    </Select>

                                                </Form.Item>
                                            </Col>

                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="เลขที่บัตร" name="card_number_insured" rules={[{ required: true, message: 'กรุณาเลือกเลขที่บัตร!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="เพศ" name="gender_id_insured" rules={[{ required: true, message: 'กรุณาเลือกเพศ!' }]}>

                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {master.GetAllGender ? master.GetAllGender.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                                    </Select>

                                                </Form.Item>
                                            </Col>

                                        </>

                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="โทรศัพท์มือ" name="mobile_phone_insured" rules={[{ required: true, message: 'กรุณากรอกโทรศัพท์มือ!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="เบอร์โทรศัพท์" name="phone_insured">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="อีเมล" name="email_insured" rules={[{ type: "email", required: true, message: 'กรุณากรอกอีเมลของคุณ!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </>


                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="ความสัมพันธ์กับผู้เอาประกันภัย" name="beneficiary_id_insured">
                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                        style={{ width: "100%" }}
                                                    >
                                                        {master.GetAllBeneficiaryRelationship ? master.GetAllBeneficiaryRelationship.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }} />
                                        </>




                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 4 }}>
                                                <Form.Item label="บ้านเลขที่" name="house_no_insured" rules={[{ required: true, message: 'กรุณากรอกบ้านเลขที่!' }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                                <Form.Item label="หมู่" name="village_no_insured">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                                <Form.Item label="ซอย" name="lane_insured">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                                <Form.Item label="หมู่บ้าน" name="village_insured">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                                <Form.Item label="ถนน" name="road_insured">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </>

                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="จังหวัด" name="province_id_insured" rules={[{ required: true, message: 'กรุณาเลือกจังหวัด!' }]}>
                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                        onChange={(e) => { changeSelectAddress(e, "prov") }}
                                                    >
                                                        {provinceList ? provinceList.map(e => <Option value={e.id} key={e.id}>{e.provicne_name_th}</Option>) : null}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="อำเภอ" name="district_id_insured" rules={[{ required: true, message: 'กรุณาเลือกบ้านเลขที่!' }]}>
                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                        onChange={(e) => { changeSelectAddress(e, "dist") }}
                                                    >
                                                        {districtList ? districtList.map(e => <Option value={e.id} key={e.id}>{e.district_name_th}</Option>) : null}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="ตำบล" name="sub_district_id_insured" rules={[{ required: true, message: 'กรุณาเลือกบ้านเลขที่!' }]}>
                                                    <Select
                                                        showSearch
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                        onChange={(e) => { changeSelectAddress(e, "subdist") }}
                                                    >
                                                        {subdistrictList ? subdistrictList.map(e => <Option value={e.id} key={e.id}>{e.sub_district_name_th}</Option>) : null}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="รหัสไปรษณีย์" name="postal_code_insured">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                        </>

                                    </Row>

                                </Row>
                            </Form>
                        </div>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={1} >
                    <Panel header={
                        <>
                            <label className="label-radio">รูปแบบการจัดส่งกรมธรรม์ : &nbsp;</label>
                            <Radio.Group value={1}>
                                <Radio value={1}>By e-mail</Radio>
                            </Radio.Group>
                        </>
                    } showArrow={false} key={1}>
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <p>ผู้ขอเอาประกันภัยประสงค์จะใช้สิทธิขอยกเว้นภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรหรือไม่</p>
                <Radio.Group onChange={(e) => setStatusTax(e.target.value)} value={statusTax}>
                    <Space direction="vertical" >
                        <Radio value={1}>ไม่มีความประสงค์</Radio>
                        <Radio value={2}>
                            มีความประสงค์ และยินยอมให้บริษัทประกันวินาศภัยส่งและเปิดเผยข้อมูลเกี่ยวกับเบี้ยประกันภัยต่อกรมสรรพากร
                            ตามหลักเกณฑ์วิธีการที่กรมสรรพากรกำหนด และหากผู้ขอเอาประกันภัยเป็นชาวต่างชาติ (Non-Thai Residence)
                            ซึ่งเป็นผู้มีหน้าที่ต้องเสียภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรโปรดระบุเลขประจำตัวผู้เสียภาษีที่ได้รับจากกรมสรรพากรเลขที่: (ตามที่ระบุไว้)
                        </Radio>
                    </Space>
                </Radio.Group>

                <Checkbox checked={condition} onChange={(e) => setCondition(e.target.checked)} className="pt-3">ยอมรับข้อตกลงและเงื่อนไข</Checkbox>
            </div>

            <div className="pt-4">
                <Row>
                    <Col span={12} order={1} style={{ textAlign: "start" }} >
                        <Button shape="round" onClick={backPage}><DoubleLeftOutlined /> <span>ก่อนหน้า</span> </Button>
                    </Col>
                    <Col span={12} order={2} style={{ textAlign: "end" }}>
                        <Button type="primary" shape="round" onClick={nextPage} disabled={!condition || !statusTax} loading={loading}><span>ถัดไป</span> <DoubleRightOutlined /></Button>
                    </Col>
                </Row>
            </div>

            <style jsx global>
                {`
                    .ant-collapse-header {
                        cursor: context-menu !important;
                    }

                    .ant-input[disabled] {
                        color: rgb(0 0 0);
                    }

                    .ant-input-affix-wrapper-disabled {
                        color: rgb(0 0 0);
                    }
                `}
            </style>
        </>
    )
}

export default Beneficiary
