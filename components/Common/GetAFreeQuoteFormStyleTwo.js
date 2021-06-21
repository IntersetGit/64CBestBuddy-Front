import React, { Component } from 'react'
import Link from 'next/link'

export default class GetAFreeQuoteFormStyleTwo extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="get-quat-area get-quat-area-three ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="get-quat-content">
                                <div className="section-title">
                                    <h2>Get A Free Quote</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum.</p>
                                </div>
                                <ul>
                                    <li>
                                        <i className="flaticon-maps-and-flags"></i>
                                        <h3>Head Office Address</h3>
                                        <p>123, Western Road, Melbourne Australia</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <h3>Head Office Address</h3>
                                        <p>+822456974</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <h3>Mail Us For Information</h3>
                                        <p>hello@flexa.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="quat-form">
                                <div className="tab">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            <div className="dot"></div> Car
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >
                                            <div className="dot"></div> Home
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab3')}
                                        >
                                            <div className="dot"></div> Life
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab4')}
                                        >
                                            <div className="dot"></div> Health
                                        </li>
                                    </ul>

                                    <div className="tab_content">
                                        <div id="tab1" className="tabs_item">
                                            <p>Start with your zip code to compare car insurance</p>
                                            
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name" placeholder="Your Name" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email" placeholder="Your Email" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number" placeholder="Your Number" />
                                                </div>

                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar"></i>

                                                        <select className="form-control">
                                                            <option value="5">Property Type</option>
                                                            <option value="1">Home Property</option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Life Insurance</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="default-btn">
                                                    Start Saving Today
                                                </button>

                                                <ul className="ratings">
                                                    <li>45 Ratings</li>

                                                    <li className="right">
                                                        Already Member? 
                                                        <Link href="/sign-in">
                                                            <a>SIGN IN</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div id="tab2" className="tabs_item">
                                            <p>Start with your zip code to compare home insurance</p>
        
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name2" placeholder="Your Name" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email2" placeholder="Your Email" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number2" placeholder="Your Number" />
                                                </div>

                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar"></i>

                                                        <select className="form-control">
                                                            <option value="5">Home Property</option>
                                                            <option value="1">Property Type </option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Life Insurance</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="default-btn">
                                                    Start Saving Today
                                                </button>

                                                <ul>
                                                    <li>45 Ratings</li>

                                                    <li className="right">
                                                        Already Member? 
                                                        <Link href="/sign-in">
                                                            <a>SIGN IN</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div id="tab3" className="tabs_item">
                                            <p>Start with your zip code to compare life insurance</p>
        
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name3" placeholder="Your Name" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email3" placeholder="Your Email" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number3" placeholder="Your Number" />
                                                </div>

                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar"></i>

                                                        <select className="form-control">
                                                            <option value="5">Life Insurance</option>
                                                            <option value="1">Home Property</option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Property Type</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="default-btn">
                                                    Start Saving Today
                                                </button>

                                                <ul>
                                                    <li>45 Ratings</li>

                                                    <li className="right">
                                                        Already Member? 
                                                        <Link href="/sign-in">
                                                            <a>SIGN IN</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="tab4" className="tabs_item">
                                            <p>Start with your zip code to compare health insurance</p>
        
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name4" placeholder="Your Name" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email4" placeholder="Your Email" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number4" placeholder="Your Number" />
                                                </div>

                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar"></i>

                                                        <select className="form-control">
                                                            <option value="5">Property Health</option>
                                                            <option value="1">Home Property</option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Life Insurance</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="default-btn">
                                                    Start Saving Today
                                                </button>

                                                <ul>
                                                    <li>45 Ratings</li>

                                                    <li className="right">
                                                        Already Member? 
                                                        <Link href="/sign-in">
                                                            <a>SIGN IN</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}