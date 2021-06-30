import Head from 'next/head'
import InsuranceManage from '../../routes/insurance/manage'
import MainBannerHeader from '../../components/HomeThree/MainBannerHeader';
import Footer from '../../components/_App/Footer';
export default () => (
    <>

        <Head>
            <title>เพิ่มประกันออนไลน์</title>
        </Head>


        <MainBannerHeader src={"../../images/footer-bg.png"} alt="เพิ่มประกันออนไลน์" />

        {/* เนื้อหา */}
        <InsuranceManage />

        <Footer />
    </>
);
