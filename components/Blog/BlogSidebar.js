import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <h3 className="widget-title">ค้นหา</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="ค้นหา..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">โพสต์เป็นที่นิยม</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="/blog/blog-detailsblog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>กุมภาพันธ์ 23 2564</span>
                            <h4 className="title usmall">
                                <Link href="/blog/blog-details">
                                    <a>
                                        BUDDY | Grab ปลอดภัยทุกปลายทาง ด้วยประกันชั้น 1
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>กุมภาพันธ์ 23 2564</span>

                            <h4 className="title usmall">
                                <Link href="/blog/blog-details">
                                    <a>
                                        ไขข้อสงสัย คำถามคาใจที่พบบ่อยกับประกันเดินทาง
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>กุมภาพันธ์ 23 2564</span>
                            <h4 className="title usmall">
                                <Link href="/blog/blog-details">
                                    <a>
                                    ประกันคอนโดเรื่องสำคัญที่ชาวคอนโดต้องรู้
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg4" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>กุมภาพันธ์ 23 2564</span>
                            <h4 className="title usmall">
                                <Link href="/blog/blog-details">
                                    <a>
                                    เบี้ยต่ำกว่าแสน ให้ค่าตรวจสุขภาพ เหมาจ่ายแผนไหนให้สูงสุด ?
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">หมวดหมู่</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>ทุกเรื่องรถยนต์ <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>เรื่องบ้านน่ารู้ <span>(20)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>สุขภาพ<span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>การเดินทาง <span>(12)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="post-wrap">
                    <div className="tagcloud">
                        <Link href="#">
                            <a>Auto (3)</a>
                        </Link>

                        <Link href="#">
                            <a>Home (03)</a>
                        </Link>

                        <Link href="#">
                            <a>Car (02)</a>
                        </Link>

                        <Link href="#">
                            <a>Health (02)</a>
                        </Link>

                        <Link href="#">
                            <a>Life (01)</a>
                        </Link>

                        <Link href="#">
                            <a>Help (10)</a>
                        </Link>
                    </div>
                </div>
            </div>        */}
        </div>
    )
}

export default BlogSidebar;