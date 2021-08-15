import { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Modal, Input, DatePicker, Select, InputNumber } from 'antd';
import moment from 'moment';

const { Option } = Select

/* ผู้เอาประกันภัย */
const Assured = ({ title, formData, page, category, master, model }) => {
    const [form] = Form.useForm();
    const [dateStart, setDateStart] = useState(null)
    const [dateEnd, setDateEnd] = useState(null)

    useEffect(() => {
        if (formData) {
            initialForm()
        }
    }, [formData])


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
        } else {
            form.setFieldsValue({ ...form.getFieldValue(), age })
        }
    }

    /* หา BMI */
    const onChangeCalBMI = () => {
        const _form = form.getFieldValue()
        if (_form.weight && _form.height) {
            const bmi = parseFloat(_form.weight / Math.pow((_form.height / 100), 2)).toFixed(2)
            form.setFieldsValue({ ..._form, bmi })
        }
    }

    /* เลือกอาชีพ */
    const selectOccupation = (e) => {
        const index = master.GetAllOccupation.findIndex(x => x.id == e)
        const { risk_class_falcon } = master.GetAllOccupation[index];
        form.setFieldsValue({ ...form.getFieldValue(), occupation_risk_class: risk_class_falcon })
    }

    /*  */
    const setDateStartEnd = (value) => {
        setDateStart(moment(value).format('DD/MM/YYYY'))
        setDateEnd(moment(value).add(1, 'years').format('DD/MM/YYYY'))
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
                                            <Form.Item label="วันที่เริ่มคุ้มครอง" name="protection_date_start" required>
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
                                                <Form.Item label="คำนำหน้า" name="prefix_id" required>

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
                                                <Form.Item label="ชื่อ" name="first_name" required>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="นามสกุล" name="last_name" required>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </>

                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="โทรศัพท์มือ" name="mobile_phone" required>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="เบอร์โทรศัพท์" name="phone">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="อีเมล" name="email">
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </>

                                        <>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 9 }}>
                                                <Form.Item label="วันเดือนปีเกิด (ค.ศ.)" name="birthday" required>
                                                    <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} onChange={onChangeDateBirthday} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 3 }}>
                                                <Form.Item label="อายุ" name="age">
                                                    <Input placeholder="ปี" disabled />
                                                </Form.Item>
                                            </Col>

                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 9 }}>
                                                <Form.Item label="อาชีพ" name="occupation_id">
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
                                                <Form.Item label="ส่วนสูง" name="height" required>
                                                    <Input type="number" placeholder="ซม." onChange={onChangeCalBMI} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <Form.Item label="น้ำหนัก" name="weight" required>
                                                    <Input type="number" placeholder="กิโลกรัม" onChange={onChangeCalBMI} />
                                                </Form.Item>
                                            </Col>

                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <Form.Item label="BMI" name="bmi">
                                                    <Input placeholder="ปี" disabled />
                                                </Form.Item>
                                            </Col>
                                        </>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={24} order={2}>
                                <Card title={"คำถามสุขภาพมีดังนี้"} type="inner">
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
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
