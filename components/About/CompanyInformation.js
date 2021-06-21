import React from 'react'
import { Image } from 'antd';
import { Row, Col } from 'antd';
const CompanyInformation = () => {
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Image
                        width={"50%"}
                        src="/images/banner/company.jpg"
                        preview={false}
                    />
                </Col>
                <Col span={12}>
                    <p>
                        บัดดี้กรุ๊ป ภายใต้การรวมตัวของบริษัท บัดดี้ ดี โบรคเกอร์ จำกัด และ บริษัท เดอะ เบสท์ บัดดี้ 19 จำกัด
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default CompanyInformation
