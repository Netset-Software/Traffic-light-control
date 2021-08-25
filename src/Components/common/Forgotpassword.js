import React, { useState } from 'react';
import { userService } from '../../services';
import { toast } from 'react-toastify';
import Loader from './Loader';
import Header from './Header'
import Footer from './Footer'

const Forgotpassword = () => {

    const [forgotEmail, setForgotEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onForgotPassword() {
        var emailRegrex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (forgotEmail.trim() == '') {
            toast.error("Please Enter Email")
        }
        else if (!emailRegrex.test(forgotEmail)) {
            toast.error("Invalid Email")
        }
        else {
            setIsLoading(true);
            let params = {
                'email': forgotEmail,
            };
            userService.forgotPassword(params).then((response) => {
                if (response.data.status === 200) {
                    console.log("forgot==>", response);
                    setForgotEmail("")
                    toast.success("Password is send to your registered email");
                    setTimeout(() => {
                        window.location.href = '/signin'
                    }, 500)
                } else {
                    setIsLoading(false);
                    toast.error("Some Error Occur");
                }
            })
                .catch((error) => {
                    setIsLoading(false);
                    console.log("error======>", error, error.response);
                })
        }
    }

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            <section className="bg_section py-5">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-12 col-sm-12 pt-4">
                            <div className="Signup_box text-center">
                                <h5>FORGOT PASSWORD</h5>
                                <p className="text-secondary">Enter your registered email address in the field below. We will send you a link to reset your password.</p>
                                <form className="py-4">
                                    <div className="row">
                                        <aside className="col-md-12 mb-3">
                                            <div className="input_row">
                                                <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                                <input type="" name="" placeholder="Email Address" className="input103 w-100" onChange={(e) => setForgotEmail(e.target.value)} />
                                            </div>
                                        </aside>
                                        <aside className="col-md-12 mt-3 sign_btn">
                                            <a className="btn" onClick={() => onForgotPassword()}>RESET MY PASSWORD</a>
                                        </aside>
                                        <aside className="col-md-12">
                                            <h6 className="back mt-4">
                                                Back to <a href="/signin">Login</a>
                                            </h6>
                                        </aside>

                                    </div>
                                </form>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Forgotpassword;