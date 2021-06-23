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
                            <Link href="/blog-details">
                                <a><img src="/images/blog/blog1.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>10 April 2020</li>
									<li>
                                        <Link href="#"><a>By Admin</a></Link>
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>2020 Insurance Trends And Possible Challenge</h3>
                                    </a>
                                </Link>

                                <Link href="/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-blog">
                            <Link href="/blog-details">
                                <a><img src="/images/blog/blog2.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>11 April 2020</li>
									<li>
                                        <Link href="#"><a>By Admin</a></Link>
									</li>
								</ul>

                                <Link href="/blog-details">
                                    <a>
                                        <h3>Global Trends In The Life Insurance Industry</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-blog">
							<Link href="/blog-details">
                                <a><img src="/images/blog/blog3.jpg" alt="Image" /></a>
                            </Link>

							<div className="blog-content">
								<ul>
									<li>13 April 2020</li>
									<li>
                                        <Link href="#"><a>By Admin</a></Link>
									</li>
								</ul>
							
								<Link href="/blog-details">
                                    <a>
                                        <h3>Where And How To Watch Live Stream Today</h3>
                                    </a>
                                </Link>

								<Link href="/blog-details">
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