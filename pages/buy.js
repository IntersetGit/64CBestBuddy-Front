import React from 'react'
import { Row, Col, Input, Checkbox, Button, Select, Form } from 'antd';



const { Option } = Select;
const options = [
    { label: <span style={{ color: "white" }}>9.00-12.00</span>, value: '9.00-12.00' },
    { label: <span style={{ color: "white" }}>12.00-15.00</span>, value: '12.00-15.00' },
    { label: <span style={{ color: "white" }}>15.00-19.00</span>, value: '15.00-19.00', },
];
function Formbuy() {
    const [form] = Form.useForm();
    const [checksubmit, setChecksubmit] = React.useState(false);

    const onsubmit = (value) => {
        console.log('value :>> ', value);
    }

    return (
        <div style={{ padding: "15px 15px", backgroundColor: "#048abe", height: "100%", }}>
            <div style={{ textAlign: "center" }}>
                <h4 style={{ color: "white" }}>ปรึกษาผู้เชียวชาญเพื่อปรึกษารายละเอียดแผนประกัน</h4>
                <h6 style={{ color: "white" }}>กรุณากรอกข้อมูลสำหรับติดต่อกลับให้ครบถ้วน</h6>
            </div>
            <br />
            <Form
                name="basic"
                onFinish={onsubmit}
            >
                <Row gutter={[10, 10]}>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="username"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="*ชื่อ" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="lastname"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="*นามสกุล" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="tel"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input type="number" placeholder="*เบอร์โทรศัพท์" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="email"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input type="email" placeholder="*อีเมล" size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="sex"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Select placeholder="เพศ" size="large" style={{ width: "100%" }} allowClear>
                                <Option value="ชาย">ชาย</Option>
                                <Option value="หญิง">หญิง</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label=""
                            name="age"
                            rules={[{ required: false, message: 'Please input your username!' }]}
                        >
                            <Input type="number" placeholder="อายุ" size="large" />
                        </Form.Item>
                    </Col>
                </Row>
            <br />
            <div>
                <p style={{ color: "white" }}>*เวลาที่สะดวกให้ติดต่อกลับ</p>
                <Form.Item
                    label=""
                    name="time"
                >
                    <Checkbox.Group style={{ color: "white" }} options={options} />
                </Form.Item>
            </div>
            <br />
            <div style={{ height: 200, overflow: "auto" }}>
                <Checkbox onChange={(e)=>setChecksubmit(e.target.checked)} style={{ color: "white" }}>ข้าพเจ้ามีความประสงค์ขอเอาประกันภัยกับบริษัทตามเงื่อนไขของกรมธรรม์ประกันภัยที่บริษัทได้ใช้สำหรับการประกันภัยนี้และข้าพเจ้าขอรับรองว่ารายละเอียดต่างๆ ที่ข้าพเจ้าแถลงข้างต้นนี้มีความถูกต้องและสมบูรณ์ ข้าพเจ้าตกลง ที่จะให้คำขอเอาประกันภัยนี้เป็นมูลฐานสัญญาประกันภัยระหว่างข้าพเจ้าและบริษัท

                    ข้าพเจ้ายินยอมให้บริษัทฯ จัดเก็บ ใช้ และเปิดเผยข้อเท็จจริงเกี่ยวกับสุขภาพและข้อมูลของข้าพเจ้าต่อสำนักงานคณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัย เพื่อประโยชน์ในการกำกับดูแลธุรกิจประกันภัย

                    ข้าพเจ้ายินยอมให้ บมจ. ซิกน่า ประกันภัย บจ. ซิกน่า โบรกเกอเรจ แอนด์ มาร์เก็ตติ้ง (ประเทศไทย) และบจ. ซิกน่า อินเตอร์เนชั่นแนล มาร์เก็ตติ้ง (ประเทศไทย) (รวมเรียกว่า “บริษัทฯ”) จัดเก็บ ใช้และวิเคราะห์ข้อมูลการเข้าทำประกันภัยที่ข้าพเจ้าได้ให้ไว้ผ่านช่องทางนี้ เพื่อวัตถุประสงค์ในการนำเสนอสิทธิประโยชน์ ผลิตภัณฑ์ประกันภัยอื่น หรือบริการต่างๆ รวมถึงแจ้งข่าวสารของบริษัทฯ

                    *คำเตือน ของสำนักงานคณะกรรมการกำกับและส่งเสริมการประกอบธุรกิจประกันภัยให้ตอบคำถามข้างต้นตามความเป็นจริงทุกข้อ หากผู้เอาประกันภัยปกปิดข้อความจริง หรือแถลงข้อความอันเป็นเท็จจะมีผลให้สัญญานี้ตกเป็นโมฆียะ ซึ่งบริษัทมีสิทธิบอกล้างสัญญาประกันภัยได้ ตามประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 865.</Checkbox>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button type="primary" size="large"
                    style={{ width: "50%", borderRadius: "50px", backgroundColor: "orange", margin: 15 }}
                    disabled={!checksubmit}
                    htmlType="submit"
                >
                    ส่งข้อมูล
                </Button>
            </div>
            </Form>

            <style jsx global>{`
                body{
                    background-color: #048abe;
                }
                .ant-form-item{
                    margin-bottom: 0;
                }
            `}</style>
        </div>
    )
}

export default Formbuy
