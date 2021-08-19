import { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Modal, Input, DatePicker, Select, Button, message, Radio, Checkbox } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import Router from 'next/router'
import { MangeInsuranceOrderService } from '../../../service';
import { Encrypt } from '../../../utils/SecretCode';
import { DiffDateMoment } from '../../../utils/DiffDate';

const { Option } = Select

/* ผู้เอาประกันภัย */
const Assured = ({ formData, page, category, master, model, address, setDateStart, setDateEnd }) => {

    // console.log('master :>> ', master);
    // console.log('address :>> ', address);

    const [form] = Form.useForm();

    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [subdistrictList, setSubdistrictList] = useState([]);

    useEffect(() => {
        if (formData) {
            initialForm()
        }
    }, [formData])

    useEffect(() => {
        if (address) {
            setProvinceList(address.GetAllProvince)
            setDistrictList(address.GetAllDistrict)
            setSubdistrictList(address.GetAllSubDistrict)
        }
    }, [address])


    const initialForm = () => {
        form.setFieldsValue(formData)
        setDateStartEnd(formData.protection_date_start)
    }

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && (current < moment(moment().format('YYYY-MM-DD')) || current > moment(moment().add(30, 'days').format('YYYY-MM-DD')));
    }

    const changeProtectionDateStart = (value) => {
        // console.log('value :>> ', value.format('YYYY-MM-DD'));
        form.setFieldsValue({ ...form.getFieldValue(), protection_date_end: moment(value).add(1, 'years') })
        setDateStartEnd(value)
    }

    /* หาอายุ */
    const onChangeDateBirthday = (value) => {
        const age = moment().format('YYYY') - value.format('YYYY')
        if (age < model.data.age_start || age > model.data.age_end) {
            Modal.warning({
                title: 'แผนประกันแนะนำ',
                content: `แผนประกันนี้คุ้มครองช่วงอายุแรกเข้า ${model.data.age_start} - ${model.data.age_end} ปี `,
            });
            form.setFieldsValue({ ...form.getFieldValue(), birthday: null, age: null })
        } else {
            form.setFieldsValue({ ...form.getFieldValue(), age })
            onChangeCalBMI()
        }
    }

    /* หา BMI */
    const onChangeCalBMI = () => {
        const _form = form.getFieldValue()
        if (_form.weight && _form.height && _form.age) {

            const bmi = Math.ceil(parseFloat(_form.weight / Math.pow((_form.height / 100), 2)));
            const reg_l = (_form.age >= 1 && _form.age <= 2) ? 11 : (_form.age >= 3 && _form.age <= 9) ? 12 : (_form.age >= 10 && _form.age <= 15) ? 11 : (_form.age >= 16) ? 17 : 0;
            const reg_h = (_form.age >= 1 && _form.age <= 2) ? 18 : (_form.age >= 3 && _form.age <= 9) ? 22 : (_form.age >= 10 && _form.age <= 15) ? 30 : (_form.age >= 16) ? 35 : 0;

            if ((bmi < reg_l) || (bmi > reg_h)) {
                Modal.warning({
                    title: 'ขออภัยค่ะ...',
                    content: `ข้อมูล BMI ของท่าน ${bmi} ไม่ผ่านเกณฑ์การพิจารณารับประกันภัย`,
                });
                form.setFieldsValue({ ..._form, bmi: null, weight: null, height: null })
            } else {
                form.setFieldsValue({ ..._form, bmi })
            }
        }
    }

    /* เลือกอาชีพ */
    const selectOccupation = (e) => {
        const index = master.GetAllOccupation.findIndex(x => x.id == e)
        const { risk_class_falcon } = master.GetAllOccupation[index];
        if (risk_class_falcon == 4) {
            Modal.warning({
                title: 'ขออภัยค่ะ...',
                content: `ข้อมูลของท่านไม่ผ่านเกณฑ์การพิจารณารับประกันภัย`,
            });
            form.setFieldsValue({ ...form.getFieldValue(), occupation_risk_class: null, occupation_id: null })
        }
        form.setFieldsValue({ ...form.getFieldValue(), occupation_risk_class: risk_class_falcon })
    }

    /* setDateStartEnd */
    const setDateStartEnd = (value) => {
        setDateStart(moment(value).format('DD/MM/YYYY'))
        setDateEnd(moment(value).add(1, 'years').format('DD/MM/YYYY'))
    }


    /* changeSelectAddress จังหวัด อำเภอ ตำบล */

    const changeSelectAddress = async (id, type) => {
        // console.log('id :>> ', id, type);
        const district = address.GetAllDistrict, subdistrict = address.GetAllSubDistrict
        const data = form.getFieldsValue()
        if (type === "prov") {
            await setDistrictList(district.filter(e => e.provicne_id === id))
            await setSubdistrictList(subdistrict.filter(e => e.provicne_id === id))
            form.setFieldsValue({ ...data, district_id: null, sub_district_id: null })

        } else if (type === "dist") {

            await setSubdistrictList(subdistrict.filter(e => e.district_id === id))
            form.setFieldsValue({ ...data, sub_district_id: null, provicne_id: await ChangeSelectDist(id), })

        } else if (type === "subdist") {

            const index = subdistrictList.findIndex(e => e.id == id);
            if (index !== -1) {
                form.setFieldsValue({ ...data, district_id: subdistrictList[index].district_id, province_id: await ChangeSelectDist(subdistrictList[index].district_id), postal_code: subdistrictList[index].postal_code })
            }
        }
    }

    const ChangeSelectDist = async (id) => {
        const filterIndex = districtList.filter(e => e.id == id);
        return filterIndex.length > 0 ? filterIndex[0].provicne_id : null
    }



    /* Page Back Page */
    const nextPage = () => {
        form.submit()
    }


    /* form*/
    const [loadingForm, setLoadingForm] = useState(false)
    const onFinish = async (value) => {
        try {
            // console.log('value :>> ', value);
            if (page == 0) {
                const _diffDate = DiffDateMoment(new Date(), value.protection_date_start._d)
                if (_diffDate < 0) {
                    // console.log('Erroe :>> ');
                    Modal.warning({
                        title: 'ขออภัยค่ะ...',
                        content: `วันที่เริ่มคุ้มครองไม่ถูกต้อง`,
                    });
                    form.setFieldsValue({ ...value, protection_date_start: null, protection_date_end: null })
                } else {
                    await FinishPage0(value)
                }
            }
        } catch (error) {
            setLoadingForm(false)
            message.error('มีบางอย่างผิดพลาดผิดพลาด!');
        }
    }

    const onFinishFailed = (error) => {
        message.error('กรอกข้อมูลให้ครบถ้วน!');
    }

    const FinishPage0 = async (value) => {
        setLoadingForm(true)
        const _model = {
            id: model.form.id,
            protection_date_start: moment(new Date(value.protection_date_start)).format("YYYY-MM-DD"), //วันที่เริ่มคุ้มครอง
            protection_date_end: moment(new Date(value.protection_date_end)).format("YYYY-MM-DD"), //วันสิ้นสุดความคุ้มครอง
            prefix_id: value.prefix_id, //คำนำหน้า
            first_name: value.first_name, //ชื่อ
            last_name: value.last_name, //นามสกุล
            type_card_number_id: value.type_card_number_id, //ประเภทบัตร
            card_number: value.card_number, //เลขที่บัตร
            gender_id: value.gender_id, //เพศ
            mobile_phone: value.mobile_phone, //โทรศัพท์มือ
            phone: value.phone, // เบอร์โทรศัพท์
            email: value.email, //อีเมล
            birthday: value.birthday, //วันเดือนปีเกิด (ค.ศ.)
            age: value.age, //อายุ
            height: value.height, //ส่วนสูง
            weight: value.weight, //น้ำหนัก
            bmi: value.bmi, //BMI
            occupation_id: value.occupation_id, //อาชีพ
            occupation_risk_class: value.occupation_risk_class, //ขั้นอาชีพ
            card_number: value.card_number, //เลขที่บัตร
            house_no: value.house_no, //บ้านเลขที่
            village_no: value.village_no, //หมู่
            lane: value.lane, //ซอย
            village: value.village, //หมู่บ้าน
            road: value.road, //ถนน
            province_id: value.province_id, //จังหวัด
            district_id: value.district_id, //อำเภอ
            sub_district_id: value.sub_district_id, //ตำบล
            postal_code: value.postal_code, //รหัสไปรษณีย์
            category_name: model.data.category_name, //รcategory_name
        }
        // console.log('_model :>> ', _model);

        const token = Encrypt(_model)
        await MangeInsuranceOrderService(
            { token });
        setLoadingForm(false)
        // console.log('model :>> ', model);
        if (model.form.status == "1") {
            setvisibleQuestion(true)
        } else {
            Router.push({
                pathname: '/insurance/product',
                query: {
                    id: model.form.id,
                    page: 2
                }
            })
        }
    }

    /* Modal */
    const [checked, setChecked] = useState(false)
    const [visibleQuestion, setvisibleQuestion] = useState(false)
    const [formQuestion] = Form.useForm();

    const handleCancelQuestion = () => {
        setvisibleQuestion(false)
    }

    const onFinishQuestion = async (value) => {
        try {
            // console.log('value :>> ', value);
            if (value.question1 === true &&
                value.question2 === true &&
                value.question3 === true &&
                value.question4 === true &&
                value.question5 === true &&
                value.question6 === true) {
                setLoadingForm(true)
                const _model = {
                    id: model.form.id,
                    category_name: model.data.category_name,
                    status: "2",
                }

                const token = Encrypt(_model)
                await MangeInsuranceOrderService({ token });
                setLoadingForm(false)

                Router.push({
                    pathname: '/insurance/product',
                    query: {
                        id: model.form.id,
                        page: 2
                    }
                })
            } else {
               
                Modal.warning({
                    title: 'ขออภัยค่ะ...',
                    content: `ข้อมูลของท่านไม่ผ่านเกณฑ์การพิจารณารับประกันภัย`,
                });
            }

        } catch (error) {
            message.error('มีบางอย่างผิดพลาดผิดพลาด!');
        }
    }

    const onFinishFailedQuestion = (error) => {
        message.error('กรอกข้อมูลให้ครบถ้วน!');
    }


    return (
        <>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row gutter={[24, 24]}>
                    <Col span={24} order={2}>
                        <Card title={"ข้อมูลกรมธรรม์"} type="inner">
                            <Row gutter={[24, 0]}>
                                <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                    <Form.Item label="วันที่เริ่มคุ้มครอง" name="protection_date_start" rules={[{ required: true, message: 'กรุณาเลือกวันที่เริ่มคุ้มครอง!' }]}>
                                        <DatePicker disabledDate={disabledDate} format={"DD/MM/YYYY"} style={{ width: "100%" }} onChange={changeProtectionDateStart} />
                                    </Form.Item>
                                </Col>
                                <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                    <Form.Item label="วันสิ้นสุดความคุ้มครอง" name="protection_date_end">
                                        <DatePicker disabledDate={disabledDate} format={"DD/MM/YYYY"} style={{ width: "100%" }} disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24} order={2}>
                        <Card title={"รายละเอียดผู้เอาประกันภัย"} type="inner">
                            <Row gutter={[24, 0]}>

                                <>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                        <Form.Item label="คำนำหน้า" name="prefix_id" rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า!' }]}>

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
                                        <Form.Item label="ชื่อ" name="first_name" rules={[{ required: true, message: 'กรุณากรอกชื่อ!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="นามสกุล" name="last_name" rules={[{ required: true, message: 'กรุณากรอกนามสกุล!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </>

                                <>

                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="ประเภทบัตร" initialValue="1" name="type_card_number_id" >
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
                                        <Form.Item label="เลขที่บัตร" name="card_number" rules={[{ required: true, message: 'กรุณาเลือกเลขที่บัตร!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                        <Form.Item label="เพศ" name="gender_id" rules={[{ required: true, message: 'กรุณาเลือกเพศ!' }]}>

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
                                        <Form.Item label="โทรศัพท์มือ" name="mobile_phone" rules={[{ required: true, message: 'กรุณากรอกโทรศัพท์มือ!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="เบอร์โทรศัพท์" name="phone">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                        <Form.Item label="อีเมล" name="email" rules={[{ type: "email", required: true, message: 'กรุณากรอกอีเมลของคุณ!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </>

                                <>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 9 }}>
                                        <Form.Item label="วันเดือนปีเกิด (ค.ศ.)" name="birthday" rules={[{ required: true, message: 'กรุณาเลือกวันเดือนปีเกิด!' }]}>
                                            <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} onChange={onChangeDateBirthday} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 3 }}>
                                        <Form.Item label="อายุ" name="age">
                                            <Input placeholder="ปี" disabled />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 9 }}>
                                        <Form.Item label="อาชีพ" name="occupation_id" rules={[{ required: true, message: 'กรุณาเลือกอาชีพ!' }]}>
                                            <Select
                                                showSearch
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                                onChange={selectOccupation}
                                            >
                                                {master.GetAllOccupation ? master.GetAllOccupation.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 3 }}>
                                        <Form.Item label="ขั้นอาชีพ" name="occupation_risk_class">
                                            <Input disabled />
                                        </Form.Item>
                                    </Col>
                                </>

                                <>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="ส่วนสูง" name="height" rules={[{ required: true, message: 'กรุณากรอกส่วนสูง!' }]}>
                                            <Input type="number" placeholder="ซม." onBlur={onChangeCalBMI} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="น้ำหนัก" name="weight" rules={[{ required: true, message: 'กรุณากรอกน้ำหนัก!' }]}>
                                            <Input type="number" placeholder="กิโลกรัม" onBlur={onChangeCalBMI} />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                        <Form.Item label="BMI" name="bmi">
                                            <Input placeholder="ปี" disabled />
                                        </Form.Item>
                                    </Col>
                                </>

                                <>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 4 }}>
                                        <Form.Item label="บ้านเลขที่" name="house_no" rules={[{ required: true, message: 'กรุณากรอกบ้านเลขที่!' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                        <Form.Item label="หมู่" name="village_no">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                        <Form.Item label="ซอย" name="lane">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                        <Form.Item label="หมู่บ้าน" name="village">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 5 }}>
                                        <Form.Item label="ถนน" name="road">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </>

                                <>
                                    <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                        <Form.Item label="จังหวัด" name="province_id" rules={[{ required: true, message: 'กรุณาเลือกจังหวัด!' }]}>
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
                                        <Form.Item label="อำเภอ" name="district_id" rules={[{ required: true, message: 'กรุณาเลือกบ้านเลขที่!' }]}>
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
                                        <Form.Item label="ตำบล" name="sub_district_id" rules={[{ required: true, message: 'กรุณาเลือกบ้านเลขที่!' }]}>
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
                                        <Form.Item label="รหัสไปรษณีย์" name="postal_code">
                                            <Input disabled />
                                        </Form.Item>
                                    </Col>
                                </>

                            </Row>
                        </Card>
                    </Col>

                </Row>
            </Form>

            <div className="pt-4">
                <Row>
                    <Col span={12} order={1} style={{ textAlign: "start" }} />
                    <Col span={12} order={2} style={{ textAlign: "end" }}>
                        <Button type="primary" shape="round" onClick={nextPage}><span>ถัดไป</span> <DoubleRightOutlined /></Button>
                    </Col>
                </Row>
            </div>



            {/* Modal ตำถามสุขภาพ */}
            <Modal

                maskClosable={false}
                visible={visibleQuestion}
                title="คำถามสุขภาพ"
                onCancel={handleCancelQuestion}
                width={800}
                footer={(
                    <div className="text-center">
                        <Button className="btn btn-md btn-orange" disabled={!checked} onClick={() => formQuestion.submit()} loading={loadingForm}>ดำเนินการต่อ</Button>
                    </div>
                )}
            >
                <Form
                    form={formQuestion}
                    layout="vertical"
                    onFinish={onFinishQuestion}
                    onFinishFailed={onFinishFailedQuestion}
                >

                    <Form.Item label="1. ท่านเคยมีประกันภัยสุขภาพ ประกันภัยโรคร้ายแรง ประกันชีวิต หรือประกันภัยอุบัติเหตุ กับบริษัท ฟอลคอนประกันภัย จำกัด (มหาชน) หรือบริษัทประกันภัยอื่นหรือไม่"
                        name="question1" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={true}>ไม่เคย</Radio>
                            <Radio value={2}>ถูกปฏิเสธรับประกัน</Radio>
                            <Radio value={3}>มี ถูกเพิ่มเบี้ยประกันภัย</Radio>
                            <Radio value={4}>มี รับประกันปกติ</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="2. ท่านเคยเป็นโรค หรือ กำลังรักษา หรือ ได้รับการวินิจฉัย ว่าเป็นโรคดังต่อไปนี้ หรือไม่ โรคมะเร็ง ,โรคหลอดเลือดสมอง(Stroke),ความผิดปกติทางสมอง,สมองเสื่อม,โรคพาร์กินสัน,โรคหัวใจและหลอดเลือดหัวใจ,โรคปอดอุดกั้นเรื้อรัง,โรคถุงลมโป่งพอง, โรคไตเรื้อรังหรือไตวาย,โรคตับหรือม้ามโต,โรคตับแข็ง,โรคพิษสุราเรื้อรัง,โรคเอดส์หรือมีเลือดบวกต่อไวรัส HIV,โรคเลือด และโรคเอสแอลอี (SLE) อัมพฤกษ์ อัมพาต,ทุพพลภาพ,พิการ,โรคจิตประสาท และเคยใช้สารเสพติด "
                        name="question2" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={false}>ใช่</Radio>
                            <Radio value={true}>ไม่ใช่</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="3. ท่านเคยเป็น หรือ กำลังรักษา หรือ ได้รับการวินิจฉัย ว่าเป็นโรคความดันโลหิตสูง, โรคเบาหวาน,ไทรอยด์,คอพอก, เนื้องอกหรือถุงน้ำที่ไม่ใช่มะเร็ง,โรคกระเพาะ,โรคกรดไหลย้อน, ปวดศีรษะ ไมเกรน,โรคเก๊าท์,ริดสีดวงทวาร, เส้นเลือดขอดที่ขา,ต้อเนื้อต้อกระจก, ไส้เลื่อน ,นิ่วทุกชนิด,ใส่วัสดุดามกระดูกที่แขน ขา หรือที่อื่นๆ หรือไม่"
                        name="question3" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={false}>ใช่</Radio>
                            <Radio value={true}>ไม่ใช่</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="4. โรคอื่นๆ หรือโรคประจำตัว หรือโรคเรื้อรังอื่นๆ นอกเหนือจากที่กล่าวมาข้างต้น ข้อที่ 3.1, 3.2, 3.3 "
                        name="question4" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={false}>ใช่</Radio>
                            <Radio value={true}>ไม่ใช่</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="5. ท่านเคยสูบหรือเสพบุหรี หรือใช้สารเสพติดอื่นหรือไม่ "
                        name="question5" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={false}>ใช่</Radio>
                            <Radio value={true}>ไม่ใช่</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="6. ปัจจุบันท่านดื่ม สุราหรือของมึนเมาหรือไม่ "
                        name="question6" rules={[{ required: true, message: 'กรุณาเลือกคำถามสุขภาพ !' }]}>
                        <Radio.Group>
                            <Radio value={false}>ใช่</Radio>
                            <Radio value={true}>ไม่ใช่</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
                        ข้าพเจ้าขอรับรองว่าคำแถลงตามรายการข้างบนเป็นความจริงและให้ถือเป็นส่วนหนึ่งของสัญญาระหว่างข้าพเจ้ากับบริษัท
                    </Checkbox>


                </Form>
            </Modal>


            <style jsx global>
                {`
                    .ant-card-head-title {
                        color: #262566;
                        font-size: 18px !important;
                    }
                `}
            </style>
        </>
    )
}

export default Assured
