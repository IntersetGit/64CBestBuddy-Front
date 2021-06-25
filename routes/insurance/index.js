import React from 'react';

import Bestinsurance from '../../components/Bestinsurance';
import Insurance from '../../components/Insurance';

const InsuranceHome = (props) => {
    return (
        <>
            <Bestinsurance /> {/* แนะนำประกัน ขายดี */}
            <Insurance /> {/* แผนประกันออนไลน์ซิกน่า */}

        </>
    )
}

export default InsuranceHome;