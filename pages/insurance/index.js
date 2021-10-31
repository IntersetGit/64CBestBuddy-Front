import Head from 'next/head'
import Insurance from '../../routes/insurance'
import MainBannerSlider from '../../components/HomeThree/MainBannerSlider';
import Footer from '../../components/_App/Footer';
import { useEffect, useState } from 'react';
import { GetImagesHeaderInsuranceService } from '../../service';
import { message } from 'antd';

export default () => {

    const [sliderList, setSliderList] = useState([])
    useEffect(() => {
        GetImagesHeaderInsuranceData()
    }, [])

    const GetImagesHeaderInsuranceData = async () => {
        try {
            const { data } = await GetImagesHeaderInsuranceService("2bf5864d-68f6-4cb6-b14d-7999ca213306")
            setSliderList(data.items)
        } catch (error) {
            message.error('เรียกข้อมูลผิดพลาด!');
        }
    }

    return (
        <>
            <Head>
                <title>ซื้อประกันออนไลน์</title>
            </Head>

            <MainBannerSlider slider={sliderList} />

            {/* เนื้อหา */}
            <Insurance />

            <Footer />
        </>
    );
}
