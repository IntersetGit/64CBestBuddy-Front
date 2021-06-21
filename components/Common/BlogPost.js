import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div className="blog-area pb-70">
			<div className="container">
				<div className="section-title">
					<span>Blog</span>
					<h2>Latest News From Our Blog</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog/blog-details">
                                <a><img src="/images/blog/blog1.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>เขียนเมื่อวันที่ 23/02/2021</li>
									<li style={{marginLeft:'-3%', marginTop:'2%'}}>
                                        <Link href="#"><a>หมวดหมู่ ทุกเรื่องรถยนต์</a></Link>
									</li>
								</ul>

                                <Link href="/blog/blog-details">
                                    <a>
                                        <h3>BUDDY | Grab ปลอดภัยทุกปลายทาง ด้วยประกันชั้น 1</h3>
                                    </a>
                                </Link>

                                <Link href="/blog/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog/blog-details">
                                <a><img src="/images/blog/blog2.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>เขียนเมื่อวันที่ 25/08/2020</li>
									<li style={{marginLeft:'-3%' , marginTop:'2%'}}>
                                        <Link href="#"><a>หมวดหมู่ ทุกเรื่องรถยนต์</a></Link>
									</li>
								</ul>

                                <Link href="/blog/blog-details">
                                    <a>
                                        <h3>BUDDY | บิ๊กไบค์คู่ใจ ประกันแบบไหนคู่ควร</h3>
                                    </a>
                                </Link>

								<Link href="/blog/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-blog">
							<Link href="/blog/blog-details">
                                <a><img src="/images/blog/blog3.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>เขียนเมื่อวันที่ 17/06/2019</li>
									<li style={{marginLeft:'-3%' , marginTop:'2%'}}>
                                        <Link href="#"><a>หมวดหมู่ ทุกเรื่องรถยนต์</a></Link>
									</li>
								</ul>
							
								<Link href="/blog/blog-details">
                                    <a>
                                        <h3>เทคนิคเลือกซื้อประกันรถยนต์ ผ่านโบรกเกอร์อย่างไรให้รุ่ง!</h3>
                                    </a>
                                </Link>

								<Link href="/blog/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default BlogPost;