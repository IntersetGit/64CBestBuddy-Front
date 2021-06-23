import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_search">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>April 20, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        Where And How To Watch Live Stream Today
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>April 21, 2020</span>
                            
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        The Five Devices You Need To Work Anytime
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>April  22, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        Blackpool Polices Hunt For David Schwinger
                                    </a> 
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                    
                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg4" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>April 23, 2020</span>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        Do You Do The Fixing And The Execution Of Yourselves?
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>
  
            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Mother border <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tweezers <span>(20)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Cotton Swabs <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Grounding Strap <span>(12)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Prebuilt Tool Kits <span>(16)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Hex Driver <span>(17)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
  
            <div className="widget widget_tag_cloud">
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
            </div>       
        </div>
    )
}

export default BlogSidebar;