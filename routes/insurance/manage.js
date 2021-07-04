import { useEffect, useState } from 'react';
import { Form, Input, Select, message, Button, InputNumber, Switch, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { GetMasterInsuranceService } from '../../service';
import XLSX from 'xlsx'

const { Option } = Select;

const InsuranceManage = (props) => {
    const [form] = Form.useForm();

    const [masPlan, setMasPlan] = useState([])  // แผนประกัน
    const [masProtection, setMasProtection] = useState([]) //ความคุ้มครอง
    const [checkModel, setCheckModel] = useState({
        percentage: null,
        is_one_price: true,
    })
    const [masterdata, setMasterdata] = useState({
        Type: [],
        AgeRang: [],
        Installment: [],
    })


    useEffect(() => {
        onInit()
    }, [])

    /* Init */
    const onInit = async () => {
        try {
            const _res = await GetMasterInsuranceService()
            setMasterdata(_res.data.items)

        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    const onFinish = (value) => {

    }

    const onFinishFailed = (error) => {
        message.error('กรอกข้อมูลไม่ครบ!');
    }

    const generateTablePlan = (item) => {
        const _masPlan = item.map((e, i) => {
            return {
                id: uuidv4(),
                name: e,
                sort: i + 1
            }
        })
        setMasPlan(_masPlan)
    }


    /* Protection ความคุ้มครอง */
    const [isModalVisibleProtection, setIsModalVisibleProtection] = useState(false)
    const [formProtection] = Form.useForm();

    const onClickAddProtection = () => {
        setIsModalVisibleProtection(true)
        formProtection.resetFields()
    }

    /* Modal Protection ความคุ้มครอง */

    const handleOkProtection = () => {
        formProtection.submit()
    }

    const handleCancelProtection = () => {
        setIsModalVisibleProtection(false)
        formProtection.resetFields()
    }

    const onFinishProtection = (value) => {
        try {
            const id = uuidv4()
            const _model = {
                id,
                details: value.details,
                sort: masProtection.length + 1,
                match: []
            }
            masPlan.forEach((x, index) => {
                _model.match.push({
                    id: uuidv4(),
                    mas_plan_id: x.id,
                    mas_protection_id: id,
                    value: value[`value-${index}`]
                })
            })

            setMasProtection([...masProtection, _model])
            setIsModalVisibleProtection(false)
            formProtection.resetFields()
        } catch (error) {
            message.error('มีบางอย่างผิดพลาด!');
        }
    }

    const onFinishFailedProtection = (error) => {
        message.error('กรอกข้อมูลไม่ครบ!');
    }

    /*  งวด ระยะเวลา*/
    const [installmentList, setInstallmentList] = useState([])

    const generateInstallment = (arr) => {
        const value = []
        const _data = masterdata.Installment
        arr.forEach(x => {
            const Index = _data.findIndex(e => e.id === x)
            if (Index != -1) value.push(_data[Index])
        })
        setInstallmentList(value)
    }

    /* ช่วงอายุ */
    const [ageRangeList, setAgeRangList] = useState([])

    const generateAgeRange = (arr) => {
        const value = []
        const _data = masterdata.AgeRang
        arr.forEach(x => {
            const Index = _data.findIndex(e => e.id === x)
            if (Index != -1) value.push(_data[Index])
        })
        console.log('value :>> ', value);
        setAgeRangList(value)
    }


    /* Excel */
    const downloadTemplateExcel = () => {

        const ageRange_arr = ageRangeList //ช่วงอายุ 
        const installmentList_arr = installmentList //งวด ระยะเวลา
        const masPlan_arr = masPlan //แผ่นประกัน 
        const gender_arr = (checkModel.is_one_price) ? ["-"] : ["ชาย", "หญิง"] //เพศ 

        console.log('1. ageRange_arr :>> ', ageRange_arr);
        console.log('2. installmentList_arr :>> ', installmentList_arr);
        console.log('3. masPlan_arr :>> ', masPlan_arr);
        console.log('4. gender_arr :>> ', gender_arr);
        const arr = []
        ageRange_arr.forEach(a => {
            installmentList_arr.forEach(b => {
                masPlan_arr.forEach(c => {
                    gender_arr.forEach(d => {
                        arr.push({
                            "ช่วงอายุ": a.age_range,
                            "งวดระยะเวลา": b.name,
                            "แผน": c.name,
                            "เพศ": d,
                            "ราคา": null,
                            "ราคาส่วนลด": checkModel.percentage ? "" : "-",
                        })
                    });
                });
            });
        })
        console.log('arr :>> ', arr);

        /* gen encel */
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(arr);
        workbook.SheetNames.push("data");
        workbook.Sheets["data"] = worksheet;
        XLSX.writeFile(workbook, "Template_เบี้ยประกันภัย.xlsx");
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
                            initialValues={{ is_one_price: true }}
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
                                rules={[{ required: true, message: 'กรุณาเลือก' }]}
                            >
                                <Select style={{ width: 200 }} >
                                    {masterdata.Type.map((e) => <Option key={e.id} value={e.id}>{e.name}</Option>)}
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
                                <InputNumber style={{ width: 200 }} value={checkModel.percentage} onChange={e => setCheckModel({ ...checkModel, percentage: e })} />
                            </Form.Item>

                            <Form.Item
                                label="ราคาเพศ ช กับ ญ"
                                name="is_one_price"
                            >
                                <Switch checkedChildren="เท่ากัน" unCheckedChildren="ไม่เท่ากัน"
                                    checked={checkModel.is_one_price} onChange={e => setCheckModel({ ...checkModel, is_one_price: e })} />
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
                                    <button type="button" className="btn btn-sm btn-light" onClick={onClickAddProtection}>เพิ่ม</button>
                                </Form.Item>
                            ) : null}

                            <Form.Item
                                label="ช่วงอายุ"
                                name="installment"
                            >

                                <Select mode="multiple" style={{ width: '100%' }} onChange={generateAgeRange} disabled={false} >
                                    {masterdata.AgeRang.map((e) => <Option key={e.id} value={e.id}>{e.age_range}</Option>)}
                                </Select>

                            </Form.Item>

                            <Form.Item
                                label="งวด ระยะเวลา"
                                name="ageRang"
                            >

                                <Select mode="multiple" style={{ width: '100%' }} onChange={generateInstallment} disabled={false} >
                                    {masterdata.Installment.map((e) => <Option key={e.id} value={e.id}>{e.name}</Option>)}
                                </Select>

                            </Form.Item>


                            {installmentList.length > 0 && masPlan.length > 0 && ageRangeList.length > 0 ? (
                                <Form.Item
                                    label="เบี้ยประกันภัย"
                                    name="premium"
                                >
                                    <button type="button" className="btn btn-sm btn-light" onClick={downloadTemplateExcel} >โหลด Excel</button>
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

            {/* ความคุ้มครอง */}
            <Modal
                centered
                maskClosable={false}
                title="ความคุ้มครอง"
                visible={isModalVisibleProtection}
                onOk={handleOkProtection}
                onCancel={handleCancelProtection}>
                <>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        form={formProtection}
                        name="formProtection"
                        onFinish={onFinishProtection}
                        onFinishFailed={onFinishFailedProtection}
                    >
                        <Form.Item
                            label="รายละเอียด"
                            name="details"
                        >
                            <Input.TextArea Rows={6} />
                        </Form.Item>

                        {masPlan.map((e, index) =>

                            <Form.Item
                                key={index}
                                label={e.name}
                                name={`value-${index}`}
                            >
                                <Input />
                            </Form.Item>

                        )}

                    </Form>
                </>
            </Modal>

            {/* เบี้ยประกันภัย */}


            <style dangerouslySetInnerHTML={{
                __html: `
				
              
			`}} />
        </>
    )
}

export default InsuranceManage;