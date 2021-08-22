import { useState, useEffect } from 'react'
import { Row, Col, Space, Collapse, Radio, Button } from 'antd';
import { FormOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import Router from 'next/router'
import moment from 'moment';

const { Panel } = Collapse;

const Confirm = ({ model }) => {

    console.log('model :>> ', model);
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (model.table) {
            const index = model.table.head.findIndex(e => e.id === model.form.insurance_plan_id)
            if (index != -1) model.table.data.forEach(e => e.match = [e.match[index]]);
        }
    }, [model.table])

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
                        header={<label className="label-radio">ความคุ้มครอง ({model.form.insurance_plan_name})</label>} showArrow={false} key={1}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(2)} >แก้ไข</Button>}
                    >
                        <>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ minWidth: 300 }}>ชื่อความคุ้มครอง</th>
                                            <th className="text-center" style={{ minWidth: 500 }}>ทุนประกันสูงสุดไม่เกิน</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(model.table.data) ? model.table.data.map(e => (
                                            <tr key={e.id}>
                                                <td dangerouslySetInnerHTML={{ __html: e.details }} />
                                                {e.match.map((x, i) => <td className="text-center" key={i}>{x.value}</td>)}
                                            </tr>
                                        )) : null}

                                    </tbody>
                                </table>
                            </div>
                        </>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse defaultActiveKey={1} >
                    <Panel
                        header={<label className="label-radio">ผู้เอาประกันภัย</label>} key={1}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(1)} >แก้ไข</Button>}
                    >
                        <>
                            <div className="table-responsive">
                                <table className="table table-bordered ">
                                    <tbody>
                                        <tr>
                                            <td className="td-min-width td-main">ชื่อ :</td>
                                            <td className="td-min-width">{model.form.first_name} {model.form.last_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เลขที่บัตร :</td>
                                            <td className="td-min-width"> / {model.form.card_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">วันเดือนปีเกิด :</td>
                                            <td className="td-min-width">{moment(model.form.birthday).format("DD/MM/YYYY")}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">อายุ :</td>
                                            <td className="td-min-width">{model.form.age}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เพศ :</td>
                                            <td className="td-min-width"></td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">BMI :</td>
                                            <td className="td-min-width">{model.form.bmi}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">อาชีพ :</td>
                                            <td className="td-min-width"></td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">โทรศัพท์มือถือ :</td>
                                            <td className="td-min-width">{model.form.mobile_phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เบอร์โทรศัพท์ :</td>
                                            <td className="td-min-width">{model.form.phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">อีเมล :</td>
                                            <td className="td-min-width">{model.form.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">ที่อยู่ :</td>
                                            <td className="td-min-width"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={Number(model.form.beneficiary_status)} >
                    <Panel
                        header={
                            <>
                                <label className="label-radio">ข้อมูลผู้รับผลประโยชน์ : &nbsp;</label>
                                <Radio.Group value={Number(model.form.beneficiary_status)} disabled>
                                    <Radio value={1}>ทายาทตามกฎหมาย</Radio>
                                    <Radio value={2}>อื่น ๆ</Radio>
                                </Radio.Group>
                            </>
                        } showArrow={false} key={2}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(3)} >แก้ไข</Button>}
                    >
                        <table className="table table-bordered ">
                            <thead>
                                <tr className={"td-main"}>
                                    <th className="text-center">ลำดับ</th>
                                    <th className="text-center">ชื่อ</th>
                                    <th className="text-center">ความสัมพันธ์กับผู้เอาประกันภัย</th>
                                    <th className="text-center">อัตราส่วน</th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.form.beneficiary.map((e, i) => (
                                    <tr key={e.id}>
                                        <td className="text-center">{e.sort}</td>
                                        <td>{e.prefix_name} {e.first_name} {e.last_name}</td>
                                        <td className="text-center"></td>
                                        <td className="text-center">{e.ratio}%</td>
                                    </tr>
                                ))}
                            </tbody>


                        </table>
                    </Panel>
                </Collapse>
            </div>

            <div className="pt-4">
                <Collapse activeKey={Number(model.form.insured_status)} >
                    <Panel
                        header={
                            <>
                                <label className="label-radio">ผู้ถือกรมธรรม์ : &nbsp;</label>
                                <Radio.Group value={Number(model.form.insured_status)} disabled>
                                    <Radio value={1}>เหมือนผู้เอาประกันภัย</Radio>
                                    <Radio value={2}>บุคคลอื่น</Radio>
                                </Radio.Group>
                            </>
                        } showArrow={false} key={2}
                        extra={<Button icon={<FormOutlined />} onClick={() => goPageEdit(3)} >แก้ไข</Button>}
                    >
                        <>
                            <div className="table-responsive">
                                <table className="table table-bordered ">
                                    <tbody>
                                        <tr>
                                            <td className="td-min-width td-main">ชื่อ :</td>
                                            <td className="td-min-width">{model.form.first_name_insured} {model.form.last_name_insured}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เลขที่บัตร :</td>
                                            <td className="td-min-width"> / {model.form.card_number_insured}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เพศ :</td>
                                            <td className="td-min-width"></td>
                                        </tr>  
                                        <tr>
                                            <td className="td-min-width td-main">โทรศัพท์มือถือ :</td>
                                            <td className="td-min-width">{model.form.mobile_phone_insured}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">เบอร์โทรศัพท์ :</td>
                                            <td className="td-min-width">{model.form.phone_insured}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">อีเมล :</td>
                                            <td className="td-min-width">{model.form.email_insured}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">ความสัมพันธ์กับผู้เอาประกันภัย :</td>
                                            <td className="td-min-width"></td>
                                        </tr>
                                        <tr>
                                            <td className="td-min-width td-main">ที่อยู่ :</td>
                                            <td className="td-min-width"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
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
                <Radio.Group value={Number(model.form.status_tax)} disabled>
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

                    .td-min-width {
                        min-width: 100px
                    }

                    .td-main {
                        background-color: #f2f2f2 !important;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    )
}

export default Confirm
