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

    const generateTableProtection = (item) => {
        console.log('item :>> ', item);
        const _masProtection = item.map((e, i) => {
            const id = uuidv4()
            const _model = {
                id,
                details: e,
                sort: i + 1,
                match: []
            }
            masPlan.forEach(x => {
                _model.match.push({
                    id: uuidv4(),
                    mas_plan_id: x.id,
                    mas_protection_id: id,
                    value: 0
                })
            })
            return _model
        })
        setMasProtection(_masProtection)
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

                            <Form.Item
                                label="แผ่นประกัน"
                                name="plan"
                            >
                                <Select mode="tags" style={{ width: '100%' }} onChange={generateTablePlan} disabled={masProtection.length > 0} />
                            </Form.Item>

                            {masPlan.length > 0 ? (
                                <Form.Item
                                    label="ความคุ้มครอง"
                                    name="protection"
                                >
                                    <Select mode="tags" style={{ width: '100%' }} onChange={generateTableProtection} />
                                </Form.Item>
                            ) : null}


                        </Form>


                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {masPlan.map((e) => <th key={e.id}>{e.name}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {masProtection.map(e => (
                                    <tr kry={e.id}>
                                        <th>{e.details}</th>
                                        {e.match.map(x => <td>{x.value}</td>)}
                                    </tr>
                                ))}
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