import { useEffect, useState } from 'react'
import Router from 'next/router'
import { Collapse, Radio, Space, Checkbox, Row, Col, Button, Form, Select, Input } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select

const Beneficiary = ({ model, master }) => {

    // console.log('model :>> ', model);
    // console.log('master :>> ', master);

    const [beneficiaryStatus, setBeneficiaryStatus] = useState(1)
    const [insuredStatus, setInsuredStatus] = useState(1)

    const [beneficiary, setBeneficiary] = useState([])

    useEffect(() => {
        if (model.form) {
            setBeneficiary(model.form.beneficiary)
            setBeneficiaryStatus(Number(model.form.beneficiary_status))
            setInsuredStatus(Number(model.form.insured_status))
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
        console.log('value :>> ', value);
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
    const insuredRadio = (value) => {
        setInsuredStatus(value)
    }

    const nextPage = () => {

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
                                                <label className="label-form">คำนำหน้า</label> <br />
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
                                                <label className="label-form">ชื่อ</label> <br />
                                                <Input value={e.first_name} onChange={(x) => changeBeneficiaryValue(x.target.value, i, "first_name")} />
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 6 }}>
                                                <label className="label-form">นามสกุล</label> <br />
                                                <Input value={e.last_name} onChange={(x) => changeBeneficiaryValue(x.target.value, i, "last_name")} />
                                            </Col>
                                        </Row>

                                        <Row gutter={[24, 24]}>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <label className="label-form">ความสัมพันธ์กับผู้เอาประกันภัย</label> <br />
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
                                                    {master.GetAllBeneficiaryRelationship ? master.GetAllBeneficiaryRelationship.map(e => <Option value={e.id} key={e.id}>{e.name}</Option>) : null}
                                                </Select>
                                            </Col>
                                            <Col span={24} sm={{ span: 24 }} lg={{ span: 12 }}>
                                                <label className="label-form">อัตราส่วน</label> <br />
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
                        <p>sdsd</p>
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
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>ไม่มีความประสงค์</Radio>
                        <Radio value={2}>
                            มีความประสงค์ และยินยอมให้บริษัทประกันวินาศภัยส่งและเปิดเผยข้อมูลเกี่ยวกับเบี้ยประกันภัยต่อกรมสรรพากร
                            ตามหลักเกณฑ์วิธีการที่กรมสรรพากรกำหนด และหากผู้ขอเอาประกันภัยเป็นชาวต่างชาติ (Non-Thai Residence)
                            ซึ่งเป็นผู้มีหน้าที่ต้องเสียภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรโปรดระบุเลขประจำตัวผู้เสียภาษีที่ได้รับจากกรมสรรพากรเลขที่: (ตามที่ระบุไว้)
                        </Radio>
                    </Space>
                </Radio.Group>

                <Checkbox className="pt-3">ยอมรับข้อตกลงและเงื่อนไข</Checkbox>
            </div>

            <div className="pt-4">
                <Row>
                    <Col span={12} order={1} style={{ textAlign: "start" }} >
                        <Button shape="round" onClick={backPage}><DoubleLeftOutlined /> <span>ก่อนหน้า</span> </Button>
                    </Col>
                    <Col span={12} order={2} style={{ textAlign: "end" }}>
                        <Button type="primary" shape="round" onClick={nextPage}><span>ถัดไป</span> <DoubleRightOutlined /></Button>
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
