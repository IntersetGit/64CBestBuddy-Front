import { useEffect, useState } from 'react';
import Link from '../../utils/ActiveLink';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const NavbarThree = () => {
    const [menu, setMenu] = useState(true)
    const [sidebarModal, setSidebar] = useState(false)
    const [searchModal, setSearch] = useState(false)
    const toggleSidebarModal = () => {
        setSidebar(!sidebarModal)
    }
    const toggleSearchModal = () => {
        setSearch(!searchModal)
    }

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    // useEffect(() => {
    //     let elementId = document.getElementById("navbar-top");
    //     document.addEventListener("scroll", () => {
    //         if (window.scrollY > 170) {
    //             elementId.classList.add("is-hide");
    //         } else {
    //             elementId.classList.remove("is-hide");
    //         }
    //     });
    //     window.scrollTo(0, 0);
    // })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>

            <header className="header-area header-area-three fixed-top">

                <div className="navbar-area navbar-three is-sticky">

                    <div className="main-nav">
                        {/* <div className="top-header-area" >
                            <div className="container">
                                <div className="row align-items-center" style={{ padding: "0 0 0 67px" }}>
                                    <div className="col-md-4">
                                        <div className="header-content-left">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`}>
                                                <a onClick={toggleNavbar} className="navbar-brand">
                                                    <img src="/images/logo-bestbuddy.png" alt="logo" style={{ width: "70%", padding: 0, margin: 0 }} />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <ul className="header-content-right">

                                            <li>แบบประกัน</li>

                                            <li>เกี่ยวกับเรา</li>

                                            <li>บทความ</li>

                                            <li>
                                                <Link href={`${process.env.NEXT_PUBLIC_URL_ADMIN}`} >
                                                    <Button type="dashed"><UserOutlined /> เข้าสู่ระบบ</Button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div> */}

                        <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: 0, margin: 0, backgroundColor: "#fff !important" }}>
                            <div className="container">
                                <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`}>
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img src="/images/logo-bestbuddy.png" alt="logo" style={{ width: "40%", padding: 0, margin: 0 }} />
                                    </a>
                                </Link>
                                <button
                                    onClick={toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>


                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">

                                        <li className="nav-item">
                                            <Link href="#" >
                                                <a onClick={toggleNavbar} className="nav-link">แบบประกัน</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/about-us/`} >
                                                <a onClick={toggleNavbar} className="nav-link">เกี่ยวกับเรา</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/blog/`} >
                                                <a onClick={toggleNavbar} className="nav-link">บทความ</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/" >
                                                <a onClick={toggleNavbar} className="nav-link">ซื้อประกันออนไลน์</a>
                                            </Link>
                                        </li>

                                        <img src="/images/call.png" alt="logo" style={{ width: "15%", padding: 0, margin: 0 }} />

                                        <li className="nav-item" style={{ paddingLeft: 10 }}>
                                            <Link href={`${process.env.NEXT_PUBLIC_URL_ADMIN}`}  >
                                                <a onClick={toggleNavbar} className="nav-link">เข้าสู่ระบบ</a>
                                            </Link>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <style jsx global>
                {`
                      .header-area .top-header-area .header-content-right {
                        float: left;
                      }

                      .hero-slider-area {
                        padding-top: 0;
                      }

                      .navbar-area.is-sticky {
                        z-index: 100;
                      }

                        .navbar-area.is-sticky .main-nav nav .navbar-nav .nav-item a {
                            color: #000000;
                        }

                        .navbar-area .main-nav nav .navbar-nav .nav-item a {
                            font-size: 16px;
                        }

                        .navbar-brand {
                            margin-right: -26rem;
                        }

                        .main-nav nav .navbar-nav .nav-item {
                            padding-right: 10px;
                        }

                `}
            </style>
        </>
    );
}

export default NavbarThree;
