import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import { message, Steps, Row, Col, Card } from 'antd';

import MainBannerHeader from '../../components/HomeThree/MainBannerHeader';
import Footer from '../../components/_App/Footer';
import Preloader from '../../components/_App/Preloader'
import { GetByIdInsuranceService, GetMasterAddressService, GetMasterAllDataService } from '../../service';

const { Step } = Steps;

/* page */
import PlanProduct from '../../routes/insurance/plan'
import AssuredProduct from '../../routes/insurance/assured'
import moment from 'moment';

export default () => {
    const router = useRouter()
    const { id, page } = router.query
    const initialStateModel = {}
    const [headPage, setHeadPage] = useState(null);
    const [model, setModel] = useState(initialStateModel);
    const [pageSteps, setPageSteps] = useState(0)
    const [category, setCategory] = useState(null)
    const [master, setMaster] = useState({})
    const [masterAddress, setMasterAddress] = useState({})
    const [formData, setFormData] = useState({})

    const [dateStart, setDateStart] = useState(null)
    const [dateEnd, setDateEnd] = useState(null)

    useEffect(() => {
        if (id && !page) GetByIdInsuranceData(id)
    }, [id])

    useEffect(() => {
        const __page = Number(page ?? 1) - 1
        setPageSteps(__page)
        if (id) GetByIdInsuranceData(id)
    }, [page])


    const setFormDataPage = (_page, form) => {
        if (_page == 1) {
            const item = {
                protection_date_start: moment(new Date(form.protection_date_start)), //วันที่เริ่มคุ้มครอง
                protection_date_end: moment(new Date(form.protection_date_end)), //วันสิ้นสุดความคุ้มครอง
                prefix_id: form.prefix_id, //คำนำหน้า
                first_name: form.first_name, //ชื่อ
                last_name: form.last_name, //นามสกุล
                type_card_number_id: form.type_card_number_id, //ประเภทบัตร
                card_number: form.card_number, //เลขที่บัตร
                gender_id: form.gender_id, //เพศ
                mobile_phone: form.mobile_phone, //โทรศัพท์มือ
                phone: form.phone, // เบอร์โทรศัพท์
                email: form.email, //อีเมล
                birthday: form.birthday ? moment(new Date(form.birthday)) : null, //วันเดือนปีเกิด (ค.ศ.)
                age: form.age, //อายุ
                height: form.height, //ส่วนสูง
                weight: form.weight, //น้ำหนัก
                bmi: form.bmi, //BMI
                occupation_id: form.occupation_id, //อาชีพ
                occupation_risk_class: form.occupation_risk_class, //ขั้นอาชีพ
                card_number: form.card_number, //เลขที่บัตร
                house_no: form.house_no, //บ้านเลขที่
                village_no: form.village_no, //หมู่
                lane: form.lane, //ซอย
                village: form.village, //หมู่บ้าน
                road: form.road, //ถนน
                province_id: form.province_id, //จังหวัด
                district_id: form.district_id, //อำเภอ
                sub_district_id: form.sub_district_id, //ตำบล
                postal_code: form.postal_code, //รหัสไปรษณีย์
            }


            setFormData(item)
        }
    }

    const GetByIdInsuranceData = async (id) => {
        try {
            const { data } = await GetByIdInsuranceService(id)
            if (!data.items.data) message.error('ไม่พบข้อมูลในระบบ!');
            else {
                const _model = data.items
                _model.data.img_cover = _model.data.img_cover ? JSON.parse(_model.data.img_cover) : null
                _model.data.img_header = _model.data.img_header ? JSON.parse(_model.data.img_header) : null
                _model.data.haed_highlight = _model.data.haed_highlight ? JSON.parse(_model.data.haed_highlight) : null
                _model.data.age_start = _model.data.age_start ? parseInt(_model.data.age_start) : 18
                _model.data.age_end = _model.data.age_end ? parseInt(_model.data.age_end) : 100
                setHeadPage(_model.data.name)
                setModel(_model)
                console.log('_model :>> ', _model);
                setCategory(_model.category_name)

                /* Get Master */
                const res = await GetMasterAllDataService({ search: _model.data.category_name });
                // console.log('res :>> ', res.data.items);
                setMaster(res.data.items)

                /* Get Master Address */
                const _res = await GetMasterAddressService({ search: _model.data.category_name });
                // console.log('_res :>> ', _res.data.items);
                setMasterAddress(_res.data.items)


                setFormDataPage(page ?? 1, _model.form)

            }
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
            Router.push({ pathname: '/' })
        }
    }

    /* steps */
    const steps = [
        { title: 'ผู้เอาประกันภัย' },
        { title: 'แผนประกันภัย' },
        { title: 'ข้อมูลผู้รับผลประโยชน์' },
        { title: 'ยืนยัน' },
        { title: 'เสร็จสิ้น' },
    ];



    return (
        model.data ? (
            <>
                <Head>
                    <title>{headPage}</title>
                </Head>

                <MainBannerHeader src={`${process.env.NEXT_PUBLIC_SERVICE}/${model.data.img_header.path}`} alt={headPage} />

                <div className="container-fluid p-5">

                    <Steps current={pageSteps}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>

                    <div className="pt-4">

                        <h2>{steps[pageSteps].title}</h2>

                        <Row gutter={[24, 24]}>

                            <Col span={24} sm={{ span: 24, order: 2 }} lg={{ span: 18, order: 1 }} order={2}>
                                {/* ผู้เอาประกันภัย */}
                                {pageSteps == 0 ? <AssuredProduct model={model} page={pageSteps} category={category} master={master} formData={formData} address={masterAddress} setDateStart={setDateStart} setDateEnd={setDateEnd} /> :
                                    pageSteps == 1 ? <PlanProduct model={model} /> : null}
                            </Col>

                            <Col span={24} sm={{ span: 24, order: 1 }} lg={{ span: 6, order: 2 }} order={1}>
                                <Row gutter={[24, 24]}>
                                    <Col span={24} order={2}>
                                        <Card title={"สรุปใบเสนอราคา"} type="inner">
                                            <p>
                                                <b>วันที่สร้างรายการ</b> <br />
                                                {moment(model.form.created_date).format("DD/MM/YYYY")}
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col span={24} order={2}>
                                        <Card title={"ผลิตภัณฑ์โดยสรุป"} type="inner">
                                            <p>
                                                <b>ผลิตภัณฑ์</b> <br />
                                                {model.data.name}
                                            </p>

                                            <p>
                                                <b>ระยะเวลาประกันภัย</b> <br />
                                                {dateStart} -  {dateEnd}
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Footer />
            </>
        ) : <Preloader />
    )
};

