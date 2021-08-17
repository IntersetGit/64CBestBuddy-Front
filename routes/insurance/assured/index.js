import { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Modal, Input, DatePicker, Select, InputNumber } from 'antd';
import moment from 'moment';

const { Option } = Select

/* ผู้เอาประกันภัย */
const Assured = ({ title, formData, page, category, master, model, address }) => {

    // console.log('master :>> ', master);
    console.log('address :>> ', address);

    const [form] = Form.useForm();
    const [dateStart, setDateStart] = useState(null)
    const [dateEnd, setDateEnd] = useState(null)

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


    return (
        <>
            <h2>{title}</h2>
            <Row gutter={[24, 24]}>
                <Col span={24} sm={{ span: 24, order: 2 }} lg={{ span: 18, order: 1 }} order={2}>
                    <Form
                        form={form}
                        layout="vertical"
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
                </Col>
                <Col span={24} sm={{ span: 24, order: 1 }} lg={{ span: 6, order: 2 }} order={1}>
                    <Row gutter={[24, 24]}>
                        <Col span={24} order={2}>
                            <Card title={"สรุปใบเสนอราคา"} type="inner">
                                <p>
                                    <b>วันที่สร้างรายการ</b> <br />
                                    {moment().format("DD/MM/YYYY")}
                                </p>
                            </Card>
                        </Col>
                        <Col span={24} order={2}>
                            <Card title={"ผลิตภัณฑ์โดยสรุป"} type="inner">
                                <p>
                                    <b>ผลิตภัณฑ์</b> <br />
                                    iPerfect
                                </p>

                                <p>
                                    <b>ระยะเวลาประกันภัย</b> <br />
                                    {dateStart} -  {dateEnd}
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

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
