import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { message } from 'antd';
import InsuranceProduct from '../../routes/insurance/product'
import MainBannerHeader from '../../components/HomeThree/MainBannerHeader';
import Footer from '../../components/_App/Footer';
import Preloader from '../../components/_App/Preloader'
import { GetByIdInsuranceService } from '../../service';

export default () => {
    const router = useRouter()
    const { id } = router.query
    const initialStateModel = {}
    const [headPage, setHeadPage] = useState(null);
    const [model, setModel] = useState(initialStateModel);

    useEffect(() => {
        if (id) GetByIdInsuranceData(id)
    }, [id])

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
            }
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    return (
        model.data ? (
            <>
                <Head>
                    <title>{headPage}</title>
                </Head>

                <MainBannerHeader src={`${process.env.NEXT_PUBLIC_SERVICE}/${model.data.img_header.path}`} alt={headPage} />

                {/* เนื้อหา */}
                <InsuranceProduct model={model} />

                <Footer />
            </>
        ) : <Preloader />
    )
};

