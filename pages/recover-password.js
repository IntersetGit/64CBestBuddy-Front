import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const RecoverPassword = () => {
    return (
        <>
            <NavbarTwo />
            
            <PageBanner 
                pageTitle="Recover Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Recover Password" 
            /> 

            <div className="user-area-all-style recover-password-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Reset Password!</h3>
                                    <p className="reset-desc">Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password <Link href="/contact"><a>contact us.</a></Link></p>
                                </div>

                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="name" placeholder="Enter Email Address" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link href="/log-in">
                                                <a className="now-log-in font-q">Log In</a>
                                            </Link>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <p className="now-register">
                                                Not a member?
                                                <Link href="/sign-up">
                                                    <a className="font-q">Sign Up</a>
                                                </Link>
                                            </p>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Reset Password
                                            </button>
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

export default RecoverPassword;