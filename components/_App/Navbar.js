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

    useEffect(() => {
        let elementId = document.getElementById("navbar-top");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-hide");
            } else {
                elementId.classList.remove("is-hide");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <header className="header-area header-area-three fixed-top">


                <div id="navbar" className="navbar-area navbar-three is-sticky">

                    <div className="main-nav">
                        <div className="top-header-area" id="navbar-top">
                            <div className="container">
                                <div className="row align-items-center" style={{ padding: "0 0 0 67px" }}>
                                    <div className="col-md-4">
                                        <div className="header-content-left">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`}>
                                                <a onClick={toggleNavbar} className="navbar-brand">
                                                    <img src="/images/logo-bestbuddy.png" alt="logo" style={{ width: "50%", padding: 0, margin: 0 }} />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <ul className="header-content-right">
                                            <li>
                                                <img src="/images/call-icon.png" alt="logo" style={{ width: "30%", padding: 5, margin: 0 }} />
                                                <span><b>Call:</b> 02 276 2245-47</span>
                                            </li>

                                            <li>
                                                <img src="/images/mail-icon.png" alt="logo" style={{ width: "21%", padding: 5, margin: 0 }} />
                                                <span><b>Email:</b> admin@buddydbroker.co.th</span>
                                            </li>

                                            <li>
                                                <Link href={`${process.env.NEXT_PUBLIC_URL_ADMIN}`} >
                                                    <Button type="dashed"><UserOutlined /> เข้าสู่ระบบ</Button>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: 0, margin: 0, backgroundColor: "#1b36dc !important" }}>
                            <div className="container">
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
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                <a onClick={toggleNavbar} className="nav-link">หน้าแรก</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    ผลิตภัณฑ์ <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ประกันโรคร้ายแรง</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ประกันมะเร็ง</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ประกันชีวิต</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ประกันรถยนต์</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about" >
                                                <a onClick={toggleNavbar} className="nav-link">โปรโมชั่น</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    ข่าวสาร/บทความ <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/blogall/`} >
                                                        <a onClick={toggleNavbar} className="nav-link">บทความ</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                        <a onClick={toggleNavbar} className="nav-link">กิจกรรมบริษัท</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}`} >
                                                <a onClick={toggleNavbar} className="nav-link">บริการลูกค้า</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/เกี่ยวกับเรา/`} >
                                                <a onClick={toggleNavbar} className="nav-link">เกี่ยวกับเรา</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    ติดต่อเรา <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/contact/`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ติดต่อเรา</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WORDPRESS}/ร่วมงานกับเรา/`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ร่วมงานกับเรา</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    ซื้อประกันออนไลน์ <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link href={`/`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ซื้อประกัน Falcon</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href={`https://www.falconinsurance.co.th/index.php`} >
                                                        <a onClick={toggleNavbar} className="nav-link">ซื้อประกัน Cigna</a>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
}

export default NavbarThree;
