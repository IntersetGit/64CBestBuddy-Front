import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignUp = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
            /> 

            <div className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Create an account!</h3>
                                    <p className="form-desc">With your social network.</p>
                                </div>

                                <form method="post">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Google
                                            </button>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Facebook
                                            </button>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Twitter
                                            </button>
                                        </div>

                                        <div className="col-lg-6 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Enter your Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="password" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="password" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">
                                                    I agree with flexa 
                                                    <Link href="/privacy-policy">
                                                        <a>Privacy Policy</a>
                                                    </Link>
                                                </label>
                                            </div>
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb2" />
                                                <label htmlFor="chb2">
                                                    I agree with flexa 
                                                    <Link href="/terms-conditions">
                                                        <a>Terms & Conditions</a>
                                                    </Link>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                        
                                        <div className="col-12">
                                            <p className="account-desc">
                                                Already have an account?
                                                <Link href="/log-in"><a>Log In</a></Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default SignUp;