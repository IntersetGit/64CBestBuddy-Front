import Head from 'next/head'
import Insurance from '../../routes/insurance'
import NavbarThree from '../../components/_App/NavbarThree';
import MainBannerSlider from '../../components/HomeThree/MainBannerSlider';
import Footer from '../../components/_App/Footer';
export default () => (
    <>

        <Head>
            <title>ซื้อประกันออนไลน์</title>
        </Head>

        <NavbarThree />
        <MainBannerSlider />

        {/* เนื้อหา */}
        <Insurance />

        <Footer />
    </>
);
