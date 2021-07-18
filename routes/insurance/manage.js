import { useEffect, useState } from 'react';
import { Form, Input, Select, message, Button, InputNumber, Switch, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { AddInsuranceService, GetMasterInsuranceService } from '../../service';
import XLSX from 'xlsx'
import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const { Option } = Select;

const InsuranceManage = (props) => {
    const [form] = Form.useForm();

    const [masPlan, setMasPlan] = useState([])  // แผนประกัน
    const [masProtection, setMasProtection] = useState([]) //ความคุ้มครอง
    const [checkModel, setCheckModel] = useState({
        percentage: null,
        is_one_price: true,
    })
    const [finishConfig, setfinishConfig] = useState(false)
    const [masterdata, setMasterdata] = useState({
        Type: [],
        AgeRang: [],
        Installment: [],
    })

    const [insurancePrice, setInsurancePrice] = useState([])


    useEffect(() => {
        onInit()
    }, [])

    /* Init */
    const onInit = async () => {
        try {
            const _res = await GetMasterInsuranceService()
            setMasterdata({
                ...masterdata,
                Type: _res.data.items.Type.data,
                AgeRang: _res.data.items.AgeRang,
                Installment: _res.data.items.Installment,
            })

        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    const onFinish = async (value) => {
        try {

            const _id = uuidv4();
            const match_protection_plan = []

            /* ตารางแผนประกัน */
            const insurance_mas_plan = masPlan.map(e => {
                return {
                    id: e.id,
                    insurance_id: _id,
                    name: e.name,
                    sort: e.sort,
                }
            })

            /* ตารางความคุ้มครอง */
            const insurance_mas_protection = masProtection.map(e => {
                /* match ข้อมูล */
                e.match.forEach(x => {
                    match_protection_plan.push(x)
                });
                return {
                    id: e.id,
                    insurance_id: _id,
                    details: e.details,
                    sort: e.sort
                }
            })

            /* ตารางราคาประกัน */
            insurancePrice.forEach(e => {
                e.id = uuidv4();
                e.insurance_id = _id;
            });



            if (insurance_mas_plan.length <= 0 || insurance_mas_protection.length <= 0 || match_protection_plan.length <= 0 || insurancePrice.length <= 0) {
                message.error('กรอกข้อมูลไม่ครบ!');
            } else {
                const _model = {
                    id: _id,
                    product_code: value.product_code, //รหัสโค้ดประกัน
                    name: value.name, //ชื่อประกัน
                    details: value.details, //รายละเอียด ui
                    status: value.percentage ? true : false, //true = ลด false = ไม่ลด
                    percentage: value.percentage, //เปอร์เซ็นที่ลดราคา
                    is_one_price: value.is_one_price, //เช็คการส่ง true = ชาย หญิง ราคาเท่ากัน false = ชาย หญิง ราคาต่างกัน
                    mas_insurance_type_id: value.mas_insurance_type_id, //รหัสประเภทประกัน
                    insurance_mas_plan,
                    insurance_mas_protection,
                    match_protection_plan,
                    insurance_price: insurancePrice,
                }

                console.log('_model :>> ', _model);

                const _res = await AddInsuranceService(_model)
                console.log('_res.data :>> ', _res.data);
            }


        } catch (error) {
            message.error('บันทึกข้อมูลไม่สำเร็จ!');
        }
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
        // console.log('value :>> ', value);
        setAgeRangList(value)
    }


    /* Excel */
    const downloadTemplateExcel = () => {
        try {
            const ageRange_arr = ageRangeList //ช่วงอายุ 
            const installmentList_arr = installmentList //งวด ระยะเวลา
            const masPlan_arr = masPlan //แผนประกัน 
            const gender_arr = (checkModel.is_one_price) ? ["-"] : ["ชาย", "หญิง"] //เพศ 

            // console.log('1. ageRange_arr :>> ', ageRange_arr);
            // console.log('2. installmentList_arr :>> ', installmentList_arr);
            // console.log('3. masPlan_arr :>> ', masPlan_arr);
            // console.log('4. gender_arr :>> ', gender_arr);
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
            // console.log('arr :>> ', arr);

            /* gen encel */
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(arr);
            workbook.SheetNames.push("data");
            workbook.Sheets["data"] = worksheet;
            XLSX.writeFile(workbook, "Template_เบี้ยประกันภัย.xlsx");
            setfinishConfig(true)
        } catch (error) {
            setfinishConfig(false)
            message.error('มีบางอย่างผิดพลาด!');
        }

    }

    /* importExcel */
    const [nameFiles, setNameFiles] = useState(null);

    const changeUpload = (event) => {
        let files = event.target.files[0];
        if (files) {
            if (files.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                // appDialog.showAlertCallBack("แนบไฟล์ผิดประเภท กรุณาเลือกไฟล์ตามคำแนะนำ", $scope.clear, $scope.clear)
                alert("แนบไฟล์ผิดประเภท กรุณาเลือกไฟล์ตามคำแนะนำ")
                clear()
            } else {
                setNameFiles(files.name)
                importExcel(files)
            }
        } else {
            clear()
        }
    }

    const importExcel = (files) => {
        if (files) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, {
                    type: "binary"
                });
                // console.log('workbook :>> ', workbook);
                callBackImportExcel(workbook)
                clear()
            };
            fileReader.readAsBinaryString(files);
        }
    }

    const callBackImportExcel = async (workbook) => {
        const sheet_name_list = workbook.SheetNames;
        const JsonList = [];
        sheet_name_list.forEach(async (ws) => {

            workbook.Sheets[ws]['A1'].w = "age_rang";
            workbook.Sheets[ws]['B1'].w = "installment";
            workbook.Sheets[ws]['C1'].w = "plan";
            workbook.Sheets[ws]['D1'].w = "gender";
            workbook.Sheets[ws]['E1'].w = "price_normal";
            workbook.Sheets[ws]['F1'].w = "price_sale";

            const tempJson = XLSX.utils.sheet_to_json(workbook.Sheets[ws]);
            if (tempJson.length > 0) JsonList.push(tempJson)

        });


        // console.log('1. ageRangeList :>> ', ageRangeList);
        // console.log('2. installmentList :>> ', installmentList);
        // console.log('3. masPlan :>> ', masPlan);

        if (JsonList.length > 0) {
            // console.log('JsonList[0] :>> ', JsonList[0]);
            const _data = JsonList[0].map(e => {

                /* ช่วงอายุ */
                const index_age = ageRangeList.findIndex(i => i.age_range === e.age_rang);
                /* งวด ระยะเวลา */
                const index_installment = installmentList.findIndex(i => i.name === e.installment);
                /* แผนประกัน */
                const index_masPlan = masPlan.findIndex(i => i.name === e.plan);

                if (index_age != -1 && index_installment != -1 && index_masPlan != -1) {
                    return {
                        id: null,
                        insurance_id: null,
                        mas_age_range_id: ageRangeList[index_age].id, //ช่วงอายุ 
                        mas_age_range_name: e.age_rang,
                        mas_installment_id: installmentList[index_installment].id, //งวด ระยะเวลา
                        mas_installment_name: e.installment,
                        mas_plan_id: masPlan[index_masPlan].id, //แผนประกัน 
                        mas_plan_name: e.plan,
                        gender: e.gender === "-" ? "0" : e.gender === "ชาย" ? "1" : e.gender === "หญิง" ? "2" : null, //เพศ
                        gender_name: e.gender,
                        price_normal: e.price_normal, //ราคาปกติ
                        price_sale: e.price_sale === "-" ? null : e.price_sale, //ราคาลด
                    }
                }
            })
            // console.log('_data :>> ', _data);
            setInsurancePrice(_data)
        } else {
            message.error('มีบางอย่างผิดพลาด!');
        }
    }

    const clear = () => {
        setNameFiles("")
        document.getElementById('fileUpload').value = null
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
                                <InputNumber style={{ width: 200 }} value={checkModel.percentage} onChange={e => setCheckModel({ ...checkModel, percentage: e })} disabled={finishConfig} />
                            </Form.Item>

                            <Form.Item
                                label="ราคาเพศ ช กับ ญ"
                                name="is_one_price"
                            >
                                <Switch checkedChildren="เท่ากัน" unCheckedChildren="ไม่เท่ากัน"
                                    checked={checkModel.is_one_price} onChange={e => setCheckModel({ ...checkModel, is_one_price: e })} disabled={finishConfig} />
                            </Form.Item>

                            <Form.Item
                                label="แผนประกัน"
                                name="plan"
                            >
                                <Select mode="tags" style={{ width: '100%' }} onChange={generateTablePlan} disabled={masProtection.length > 0 || finishConfig} />
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

                                <Select mode="multiple" style={{ width: '100%' }} onChange={generateAgeRange} disabled={finishConfig} >
                                    {masterdata.AgeRang.map((e) => <Option key={e.id} value={e.id}>{e.age_range}</Option>)}
                                </Select>

                            </Form.Item>

                            <Form.Item
                                label="งวด ระยะเวลา"
                                name="ageRang"
                            >

                                <Select mode="multiple" style={{ width: '100%' }} onChange={generateInstallment} disabled={finishConfig} >
                                    {masterdata.Installment.map((e) => <Option key={e.id} value={e.id}>{e.name}</Option>)}
                                </Select>

                            </Form.Item>

                            {installmentList.length > 0 && masPlan.length > 0 && ageRangeList.length > 0 ? (
                                <Form.Item
                                    label="เบี้ยประกันภัย"
                                    name="premium"
                                >
                                    {finishConfig ?
                                        (
                                            <>
                                                <input className="file-upload__input" type="file" id="fileUpload" accept=".xlsx" style={{ display: "none" }} onChange={e => { changeUpload(e) }}></input>
                                                <label className="btn btn-primary btn-sm" for="fileUpload" style={{ marginBottom: "0px" }}> อัพโหลดข้อมูล </label> &nbsp;&nbsp;
                                                {nameFiles}

                                                <button type="button" className="btn btn-light btn-sm" onClick={() => setfinishConfig(false)} >ยกเลิก</button>
                                            </>
                                        ) :
                                        <button type="button" className="btn btn-sm btn-light" onClick={downloadTemplateExcel} >โหลด Template</button>
                                    }

                                </Form.Item>
                            ) : null}

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    บันทึก
                                </Button>
                            </Form.Item>

                        </Form>

                        {masPlan.length > 0 && masProtection.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width={"50%"}>ผลประโยชน์ความคุ้มครอง</th>
                                        {masPlan.map((e) => <th key={e.id}>{e.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {masProtection.map(e => (
                                        <tr kry={e.id}>
                                            <td dangerouslySetInnerHTML={{ __html: e.details }} />
                                            {e.match.map(x => <td>{x.value}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : null}

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
                onCancel={handleCancelProtection}
                width={1000}
            >
                <>
                    <Form
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 21 }}
                        form={formProtection}
                        name="formProtection"
                        onFinish={onFinishProtection}
                        onFinishFailed={onFinishFailedProtection}
                    >
                        <Form.Item
                            label="รายละเอียด"
                            name="details"
                        >
                            <SunEditor setOptions={{ height: 500 }} />
                        </Form.Item>

                        {masPlan.map((e, index) =>

                            <Form.Item
                                key={index}
                                label={e.name}
                                name={`value-${index}`}
                            >
                                <Input style={{ width: "30%" }} />
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