import React from 'react'

const PortfolioSidebar = () => {
    return (
        <div className="service-sidebar-area">
            <div className="service-list service-card">
                <h3 className="service-details-title">Facilities</h3>
                <ul>
                    <li>
                        Business Insurance
                        <i className='bx bx-check'></i>
                    </li>
                    <li>
                        Health Insurance
                        <i className='bx bx-check'></i>
                    </li>
                    <li>
                        Home Insurance
                        <i className='bx bx-check'></i>
                    </li>
                    <li>
                        Car Insurance 
                        <i className='bx bx-check'></i>
                    </li>
                </ul>
            </div>

            <div className="service-list service-card">
                <h3 className="service-details-title">Contact Info</h3>
                <ul>
                    <li>
                        <a href="tel:+822456974">
                            +822456974
                            <i className='bx bx-phone-call bx-rotate-270'></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hello@flexa.com">
                            hello@flexa.com
                            <i className='bx bx-envelope'></i>
                        </a>
                    </li>
                    <li>
                        9:00 AM – 8:00 PM
                        <i className='bx bx-time'></i>
                    </li>
                </ul>
            </div>

            <div className="service-list service-card">
                <h3 className="service-details-title">Download Brochures</h3>
                <ul>
                    <li>
                        <a href="#">
                            PDF File (1)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (2)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (3)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PDF File (4)
                            <i className='bx bxs-cloud-download'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioSidebar;