import { useEffect, useState } from 'react';
import Link from '../../utils/ActiveLink';

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
                        <nav id="navbar-top" className="navbar" style={{ padding: 0, margin: 0, backgroundColor: "#fff !important" }}>
                            <div className="container">
                                <Link href="/">
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img src="/images/logo-bestbuddy.png" alt="logo" style={{ width: "27%", padding: 0, margin: 0 }} />
                                    </a>
                                </Link>

                            </div>
                        </nav>

                        <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: 0, margin: 0, backgroundColor: "#31abfc !important" }}>
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
                                        <Link href="/" activeClassName="active">
                                            <li className="nav-item">
                                                <a className="nav-link">ซื้อแผนประกัน</a>
                                            </li>
                                        </Link>

                                        <Link href="https://bestbuddy.diabetescru.com/" activeClassName="active">
                                            <li className="nav-item">
                                                <a li className="nav-link">บทความ</a>
                                            </li>
                                        </Link>

                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <li className="nav-item">
                                                <a className="nav-link">โปรโมชั่น</a>
                                            </li>
                                        </Link>

                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <li className="nav-item">

                                                <a className="nav-link">เกี่ยวกับเรา</a>

                                            </li>
                                        </Link>

                                        <Link href="https://bestbuddy.diabetescru.com/">
                                            <li className="nav-item">
                                                <a className="nav-link">ติดต่อเรา</a>
                                            </li>
                                        </Link>

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
