import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignIn = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
            /> 

            <div className="user-area-all-style log-in-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Log In to your account!</h3>
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

                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" type="password" name="password" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-6 form-condition">
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">Remember Me</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-6">
                                            <Link href="/recover-password">
                                                <a className="forget">Forgot my password?</a>
                                            </Link>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Log In Now
                                            </button>
                                        </div>

                                        <div className="col-12">
                                            <p className="account-desc">
                                                Not a member?
                                                <Link href="/sign-up"><a>Sign Up</a></Link>
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

export default SignIn;