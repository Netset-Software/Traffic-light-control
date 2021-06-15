import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={require("../../images/logo.png").default} alt="img" />
                            <div className="my-4">
                                <ul className="m-0 p-0">
                                    <li>
                                        <a href="/#">
                                            HOME
                                </a>
                                    </li>
                                    <li>
                                        <a href="/about">
                                            ABOUT
                                </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            BENEFITS
                                </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            FOUNDATIONS
                                </a>
                                    </li>
                                    <li>
                                        <a href="/faq">
                                            FAQ
                                </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            BLOGS
                                </a>
                                    </li>
                                    <li>
                                        <a href="/contact">
                                            CONTACT
                                </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <ul className="m-0 p-0">
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="bg-secondary my-4" />
                        </div>
                    </div>
                    <div className="row footer_btm pb-4">
                        <div className="col-md-6">
                            <p>Copyright © 2021 Health App. All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="m-0 p-0">
                                <li>
                                    <a href="/#">
                                        <p> Privacy Policy</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <p>Copyright Notice</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <p>Copyright Notice</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
