import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'
import Navbar from '../../components/_App/Navbar';
import { ConfigProvider } from 'antd';
import "moment/locale/th";
import locale from "antd/es/locale/th_TH";

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return (
        <ConfigProvider locale={locale}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <Navbar />
            {children}

            {loader ? <Preloader /> : null}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </ConfigProvider>
    );
}

export default Layout;