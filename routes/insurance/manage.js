import { useEffect, useState } from 'react';
import { Form, Input, Select, message, Button, InputNumber, Switch } from 'antd';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const InsuranceManage = (props) => {
    const [form] = Form.useForm();

    const [masPlan, setMasPlan] = useState([])  // แผนประกัน
    const [masProtection, setMasProtection] = useState([]) //ความคุ้มครอง


    const onFinish = (value) => {

    }

    const onFinishFailed = (error) => {
        message.error('กรอกข้อมูลไม่ครบ!');
    }

    const generateTablePlan = (item) => {
        console.log('item :>> ', item);
        const _masPlan = item.map((e, i) => {
            return {
                id: uuidv4(),
                name: e,
                sort: i + 1
            }
        })
        setMasPlan(_masPlan)
    }

    return (
        <>
            <div className="blog-details-area pt-70 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>เพิ่มแผนประกันออนไลน์</h2>
                    </div>
                    <div className="row">

                        <Form
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 8 }}
                            form={form}
                            name="InsuranceManage"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="รหัสประกัน"
                                name="product_code"
                                rules={[{ required: true, message: 'กรุณากรอกรหัสประกัน' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ชื่อประกัน"
                                name="name"
                                rules={[{ required: true, message: 'กรุณากรอกชื่อประกัน' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ประเภทประกัน"
                                name="mas_insurance_type_id"
                            >
                                <Select style={{ width: 200 }} >
                                    <Option value="lucy">Lucy</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="รายละเอียด"
                                name="details"
                            >
                                <Input.TextArea Rows={6} />
                            </Form.Item>

                            <Form.Item
                                label="ส่วนลด (%)"
                                name="percentage"
                            >
                                <InputNumber style={{ width: 200 }} />
                            </Form.Item>

                            <Form.Item
                                label="ราคาเพศ ช กับ ญ"
                                name="is_one_price"
                            >
                                <Switch checkedChildren="เท่ากัน" unCheckedChildren="ไม่เท่ากัน" defaultChecked />
                            </Form.Item>
                            {/* 
                            <Form.Item
                                label="จำนวนแผ่นประกัน"
                                name="sum_plan"
                            >
                                <InputNumber onBlur={(e) => console.log(e.target.value)} style={{ width: 200 }} />
                            </Form.Item> */}

                            <Form.Item
                                label="จำนวนแผ่นประกัน"
                                name="sum_plan"
                            >
                                <Select mode="tags" style={{ width: '100%' }} onChange={generateTablePlan} />
                            </Form.Item>

                        </Form>


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    {masPlan.map((e, i) => <th key={e.id} scope="col">{e.name}</th>)}
                                </tr>
                            </thead>
                            <tbody>


                            </tbody>
                        </table>



                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
				
              
			`}} />
        </>
    )
}

export default InsuranceManage;