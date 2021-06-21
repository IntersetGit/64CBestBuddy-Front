import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                        <div className="header-content-left">
                            <p>Welcome To Best Buddy Broker!</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="tel:022762245">
                                    <i className="bx bx-phone-call"></i>
                                    Call Center : 02 276 2245-47
                                </a>
                            </li>

                            <li>
                                <a href="mailto:admin@buddybroker.co.th">
                                    <i className="bx bx-envelope"></i>
                                    Email: admin@buddybroker.co.th
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;