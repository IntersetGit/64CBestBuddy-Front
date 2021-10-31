import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd';
import Head from 'next/head'

function demo() {

    const [form] = Form.useForm();
    const [text, setText] = useState("")
    const initForm = {
        email_host: "mail.diabetescru.com",
        email_port: 587,
        email_username: "buy@diabetescru.com",
        email_password: "x+XT@s0Ezx80T7",
        to: "",
        email_from: "buy@diabetescru.com",
        body: "",
    }
    useEffect(() => {
        form.setFieldsValue(initForm)
    }, [])


    const onFinish = async (valur) => {
        try {
            const config = {
                Host: valur.email_host,
                Port: valur.email_port,
                Username: valur.email_username,
                Password: valur.email_password,
                To: valur.to,
                From: valur.email_from,
                Subject: "ทดสอบส่ง Email",
                Body: valur.body,
            }
            const res = await Email.send(config)
            setText(res)

            form.resetFields()
            form.setFieldsValue(initForm)

        } catch (error) {
            alert("Error")
        }
    }

    const onFinishFailed = (error) => {

    }

    return (
        <div className="blog-details-area ptb-100">
            <Head>
                <title>ทดสอบส่ง Mail</title>
            </Head>
            <div className="container">
                <div className="section-title">
                    <h2>ทดสอบส่ง Mail</h2>
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="NEXT_PUBLIC_EMAIL_HOST"
                        name="email_host"
                        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="NEXT_PUBLIC_EMAIL_PORT"
                        name="email_port"
                        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="NEXT_PUBLIC_EMAIL_USERNAME"
                        name="email_username"
                        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="NEXT_PUBLIC_EMAIL_PASSWORD"
                        name="email_password"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="NEXT_PUBLIC_EMAIL_FROM"
                        name="email_from"
                        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="ส่งหา"
                        name="to"
                        rules={[{ type: "email", required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="ข้อความ"
                        name="body"
                        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            ส่ง Email
                        </Button>
                    </Form.Item>
                    <Form.Item label="สถานะส่ง Mail">
                        <h4 style={{ color: "red" }}>{text}</h4>
                    </Form.Item>
                </Form>


            </div>
        </div>
    )
}

export default demo
