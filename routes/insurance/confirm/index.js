import { useState, useEffect } from 'react'
import { Row, Col, Space, Collapse, Radio, Button, message, Modal, Input } from 'antd';
import { FormOutlined, DoubleLeftOutlined, DoubleRightOutlined, SyncOutlined } from '@ant-design/icons';
import Router from 'next/router'
import moment from 'moment';

const { Panel } = Collapse;

const Confirm = ({ model }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    // console.log('model :>> ', model);
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
    try {
      setLoading(true)



      setLoading(false)
    } catch (error) {
      message.error('มีบางอย่างผิดพลาดผิดพลาด!');
      setLoading(false)
    }
  }

  /* Modal OTP Email */
  const timeSent = 120
  const [loadingVerificat, setSetLoadingVerificat] = useState(false)
  const [setModalVerificat, setSetModalVerificat] = useState(false)
  const [otp, setOtp] = useState({ otp: null, ref: null })
  const [num, setnum] = useState(timeSent);
  var setTime;

  const cancelVerificat = async () => {
    clearInterval(setTime);
    await setSetModalVerificat(false)
    setnum(timeSent);
    setSetLoadingVerificat(false)
    setOtp(null);
  }

  const onFinishVerificat = async () => {
    try {
      if (otp.otp != otpMe) {
        message.error('OTP ไม่ถูกต้อง');
      } else {

        const newPassword = GeneratePassword()
        const title = `
            <p>Dear user
            <p>Your password K-iDrone is : ${newPassword}</p>`
        setSetLoadingVerificat(true)
        const _res = await SendEmail(modelReset.e_mail, "[K-iDrone] Your Password", title)
        // console.log('_res :>> ', _res);
        if (_res == "OK") {
          await changePasswordService({
            id: modelReset.id,
            password: newPassword,
          })
          message.error('รหัสผ่านใหม่ของคุณถูกส่งไปที่ Email ของคุณแล้ว');
          setTimeout(() => {
            setnum(timeSent);
            clearInterval(setTime);
            setSetLoadingVerificat(false)
            setOtp({ otp: null, ref: null });
            setSetModalVerificat(false)
          }, 1000);
        } else {
          setSetLoadingVerificat(false)
          message.error('ระบบมีบางอย่างผิดพลาด กรุณาติดต่อผู้ดูแลระบบ');
        }
      }
    } catch (error) {
      message.error('ระบบมีบางอย่างผิดพลาด กรุณาติดต่อผู้ดูแลระบบ');
    }
  }

  const VerificationSendEmail = async (value) => {
    try {
      // console.log('value :>> ', value);
      const __res = await CheckUserOrEmailIsSysmService(value);
      // console.log('__res :>> ', __res.data.items);
      if (__res.data.items) {
        const getOtp = GenerateOTP(6)
        setOtp(getOtp)
        setModelReset(__res.data.items)

        const title = `
                <p>Dear user
    
                <p>You are currently changing your K-iDrone password.
                Verification code: <span stype="color: #ee5109; font-size: 30px;">${getOtp.otp} (Ref. ${getOtp.ref})</span></p>
              `
        setSetLoadingVerificat(true)
        const _res = await SendEmail(__res.data.items.e_mail, "[K-iDrone] Verification", title)
        // console.log('_res :>> ', _res);
        if (_res == "OK") {
          setSetModalVerificat(true)
          setSetLoadingVerificat(false)
          enterLoading()
        } else {
          setSetLoadingVerificat(false)
          Notifications("ระบบมีบางอย่างผิดพลาด กรุณาติดต่อผู้ดูแลระบบ", "warning")
        }

      } else {
        setSetLoadingVerificat(false)
        Notifications("ไม่พบข้อมูลในระบบนี้ กรุณาตรวจสอบใหม่ หรือติดต่อผู้ดูแลระบบ", "warning")
      }

    } catch (error) {
      setSetLoadingVerificat(false)
      alert("error")
    }
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
                      <td className="td-min-width">{model.form.prefix} {model.form.first_name} {model.form.last_name}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">เลขที่บัตร :</td>
                      <td className="td-min-width">{model.form.type_card_number} / {model.form.card_number}</td>
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
                      <td className="td-min-width">{model.form.gender}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">BMI :</td>
                      <td className="td-min-width">{model.form.bmi}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">อาชีพ :</td>
                      <td className="td-min-width">{model.form.occupation}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">โทรศัพท์มือถือ :</td>
                      <td className="td-min-width">{model.form.mobile_phone}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">เบอร์โทรศัพท์ :</td>
                      <td className="td-min-width">{model.form.phone ?? "-"}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">อีเมล :</td>
                      <td className="td-min-width">{model.form.email}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">ที่อยู่ :</td>
                      <td className="td-min-width">{model.form.house_no} {model.form.village_no} {model.form.lane} {model.form.village} {model.form.road} {model.form.provicne_name} {model.form.district_insured} {model.form.sub_district_name} {model.form.postal_code}</td>
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
                    <td className="text-center">{e.relationship}</td>
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
                      <td className="td-min-width">{model.form.prefix_insured} {model.form.first_name_insured} {model.form.last_name_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">เลขที่บัตร :</td>
                      <td className="td-min-width">{model.form.type_card_number_insured} / {model.form.card_number_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">เพศ :</td>
                      <td className="td-min-width">{model.form.gender_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">โทรศัพท์มือถือ :</td>
                      <td className="td-min-width">{model.form.mobile_phone_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">เบอร์โทรศัพท์ :</td>
                      <td className="td-min-width">{model.form.phone_insured ?? "-"}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">อีเมล :</td>
                      <td className="td-min-width">{model.form.email_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">ความสัมพันธ์กับผู้เอาประกันภัย :</td>
                      <td className="td-min-width">{model.form.beneficiary_insured}</td>
                    </tr>
                    <tr>
                      <td className="td-min-width td-main">ที่อยู่ :</td>
                      <td className="td-min-width">{model.form.house_no_insured} {model.form.village_no_insured} {model.form.lane_insured} {model.form.village_insured} {model.form.road_insured} {model.form.province_insured} {model.form.district_insured} {model.form.sub_district_insured} {model.form.postal_code_insured}</td>
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

      {/* OTP */}
      <Modal centered width={350} style={{ textAlign: 'center' }} title={`กรุณากรอกเลข OTP ที่ส่งไปยัง ${model.form.email}`} visible={setModalVerificat} onCancel={cancelVerificat} footer={null}>
        <h3>Ref. {otp.ref}</h3>
        <Input onChange={(e) => setOtpME(e.target.value)} />
        {loadingVerificat ? <p> <SyncOutlined spin={loadingVerificat} />   กรุณาลองใหม่อีกครั้งใน {num} วินาที </p> : <p><a onClick={() => VerificationSendEmail({ text: model.form.email })}>ขอรหัส OTP อีกครั้ง</a></p>}

        <Button style={{ width: '100%' }} onClick={onFinishVerificat}>ยืนยัน OTP</Button>
      </Modal>

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
