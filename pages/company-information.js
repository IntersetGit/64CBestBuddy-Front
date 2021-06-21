import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CompanyInformation from '../components/About/CompanyInformation';
import Footer from '../components/_App/Footer';
import { Image } from 'antd';

const companyinformation = () => {
    return (
        <div>
            <NavbarTwo />

            <PageBanner
                pageTitle="ข้อมูลบริษัท"
                homePageUrl="/about"
                homePageText="เกี่ยวกับเรา"
                activePageText="ข้อมูลบริษัท"
            />

            <div className="pt-100">
                <CompanyInformation />
            </div>

            <Footer />
        </div>
    )
}

export default companyinformation


