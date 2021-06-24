import React from 'react';

import Bestinsurance from '../../components/Bestinsurance';
import BlogPost from '../../components/Common/BlogPost';

const InsuranceHome = (props) => {
    return (
        <>
            <Bestinsurance /> {/* แนะนำประกัน ขายดี */}
            <BlogPost /> {/* แผนประกันออนไลน์ซิกน่า */}
        </>
    )
}

export default InsuranceHome;