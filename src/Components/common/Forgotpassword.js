import React from 'react';
const Forgotpassword = () => {
    return (
        <>
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
                                                <input type="" name="" placeholder="Email Address" className="input103 w-100" />
                                            </div>
                                        </aside>
                                        <aside className="col-md-12 mt-3 sign_btn">
                                            <button className="btn">RESET MY PASSWORD</button>
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
        </>
    );
}

export default Forgotpassword;