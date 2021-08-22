import { useState, useEffect } from 'react'
import { Row, Col, Space, Collapse, Radio, Button } from 'antd';
import { FormOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import Router from 'next/router'

const { Panel } = Collapse;

const Confirm = ({ model }) => {


    const goPageEdit = (_page) => {
        Router.push({
            pathname: '/insurance/product',
            query: {
                id: model.form.id,
                page: _page
            }
        })
    }

    /* backPage nextPage */
    const backPage = () => {
        Router.push({
            pathname: '/insurance/product',
            query: {
                id: model.form.id,
                page: 3
            }
        })
    }

    const nextPage = () => {

    }

    return (
        <>

            <div>
                <Collapse activeKey={1} >
                    <Panel
                        header={<label className="label-radio">ความคุ้มครอง</label>} showArrow={false} key={1}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(2)} >แก้ไข</Button>}
                    >
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={1} >
                    <Panel
                        header={<label className="label-radio">ผู้เอาประกันภัย</label>} showArrow={false} key={1}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(1)} >แก้ไข</Button>}
                    >
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={1} >
                    <Panel
                        header={
                            <>
                                <label className="label-radio">ข้อมูลผู้รับผลประโยชน์ : &nbsp;</label>
                                <Radio.Group value={1} disabled>
                                    <Radio value={1}>ทายาทตามกฎหมาย</Radio>
                                    <Radio value={2}>อื่น ๆ</Radio>
                                </Radio.Group>
                            </>
                        } showArrow={false} key={2}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(3)} >แก้ไข</Button>}
                    >
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={1} >
                    <Panel
                        header={
                            <>
                                <label className="label-radio">ผู้ถือกรมธรรม์ : &nbsp;</label>
                                <Radio.Group value={1} disabled>
                                    <Radio value={1}>เหมือนผู้เอาประกันภัย</Radio>
                                    <Radio value={2}>บุคคลอื่น</Radio>
                                </Radio.Group>
                            </>
                        } showArrow={false} key={2}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(3)} >แก้ไข</Button>}
                    >
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={1} >
                    <Panel
                        header={
                            <>
                                <label className="label-radio">รูปแบบการจัดส่งกรมธรรม์ : &nbsp;</label>
                                <Radio.Group value={1} disabled>
                                    <Radio value={1}>By e-mail</Radio>
                                </Radio.Group>
                            </>
                        } showArrow={false} key={1}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(3)} >แก้ไข</Button>}
                    >
                        <p>
                            <b>อีเมล</b> <br />
                            {model.form.email}
                        </p>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <p>ผู้ขอเอาประกันภัยประสงค์จะใช้สิทธิขอยกเว้นภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรหรือไม่</p>
                <Radio.Group value={1} disabled>
                    <Space direction="vertical" >
                        <Radio value={1}>ไม่มีความประสงค์</Radio>
                        <Radio value={2}>
                            มีความประสงค์ และยินยอมให้บริษัทประกันวินาศภัยส่งและเปิดเผยข้อมูลเกี่ยวกับเบี้ยประกันภัยต่อกรมสรรพากร
                            ตามหลักเกณฑ์วิธีการที่กรมสรรพากรกำหนด และหากผู้ขอเอาประกันภัยเป็นชาวต่างชาติ (Non-Thai Residence)
                            ซึ่งเป็นผู้มีหน้าที่ต้องเสียภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรโปรดระบุเลขประจำตัวผู้เสียภาษีที่ได้รับจากกรมสรรพากรเลขที่: (ตามที่ระบุไว้)
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>

            <div className="pt-4">
                <Row>
                    <Col span={12} order={1} style={{ textAlign: "start" }} >
                        <Button shape="round" onClick={backPage}><DoubleLeftOutlined /> <span>ก่อนหน้า</span> </Button>
                    </Col>
                    <Col span={12} order={2} style={{ textAlign: "end" }}>
                        <Button type="primary" shape="round" onClick={nextPage} ><span>ถัดไป</span> <DoubleRightOutlined /></Button>
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

                    .ant-radio-disabled + span {
                        color: rgb(0 0 0);
                    }
                `}
            </style>
        </>
    )
}

export default Confirm
