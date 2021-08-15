import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { message, Steps } from 'antd';

import MainBannerHeader from '../../components/HomeThree/MainBannerHeader';
import Footer from '../../components/_App/Footer';
import Preloader from '../../components/_App/Preloader'
import { GetByIdInsuranceService, GetMasterAllDataService, GetMasterInsuranceCategoryService } from '../../service';

const { Step } = Steps;

/* page */
import InsuranceProduct from '../../routes/insurance/product'
import AssuredProduct from '../../routes/insurance/assured'
import moment from 'moment';

export default () => {
    const router = useRouter()
    const { id, page = 1 } = router.query
    const initialStateModel = {}
    const [headPage, setHeadPage] = useState(null);
    const [model, setModel] = useState(initialStateModel);
    const [pageSteps, setPageSteps] = useState(1)
    const [category, setCategory] = useState(null)
    const [master, setMaster] = useState({})
    const [formData, setFormData] = useState({})

    useEffect(() => {
        if (id) GetByIdInsuranceData(id)
    }, [id])

    useEffect(() => {
        const __page = Number(page) - 1
        setPageSteps(__page)
        setFormDataPage(__page)
    }, [page])


    const setFormDataPage = (_page) => {
        if (_page == 0) {
            const item = {
                protection_date_start: moment(new Date()), //วันที่เริ่มคุ้มครอง
                protection_date_end: moment(new Date()).add(1, 'years'), //วันสิ้นสุดความคุ้มครอง
                prefix_id: "", //คำนำหน้า
                first_name: "", //ชื่อ
                last_name: "", //นามสกุล
                mobile_phone: "", //โทรศัพท์มือ
                phone: "", // เบอร์โทรศัพท์
                email: "", //อีเมล
                birthday: "", //วันเดือนปีเกิด (ค.ศ.)
                age: "", //อายุ
                occupation_id: "", //อาชีพ
                occupation_risk_class: "", //ขั้นอาชีพ
                height: "", //ส่วนสูง
                weight: "", //น้ำหนัก
                bmi: "", //BMI
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
                // console.log('_model :>> ', _model);
                setCategory(_model.category_name)

                /* Get Master */
                const res = await GetMasterAllDataService({ search: _model.data.category_name });
                // console.log('res :>> ', res.data.items);
                setMaster(res.data.items)

            }
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    /* steps */
    const steps = [
        { title: 'ผู้เอาประกันภัย' },
        { title: 'แผนประกันภัย' },
        { title: 'รายละเอียด' },
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
                        {/* ผู้เอาประกันภัย */}
                        {page == 1 ? <AssuredProduct model={model} title={steps[pageSteps].title} category={category} master={master} formData={formData} /> :
                            <InsuranceProduct model={model} />}
                    </div>
                </div>

                <Footer />
            </>
        ) : <Preloader />
    )
};

