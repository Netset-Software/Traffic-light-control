import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Navbar, Nav } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Loader from './Loader'

const Header = () => {

    const [isLoading, setIsLoading] = useState(false);

    const Language = [
        { label: "English", value: 355 },
        { label: "German", value: 54 },
        { label: "French", value: 43 },
    ];
    const [isUserPresent, setIsUserPresent] = useState(false);

    useEffect(() => {
        let isUser = localStorage.getItem('user_id');
        if (isUser) setIsUserPresent(true);
    }, []);

    function onLogOut() {
        setIsLoading(true);
        localStorage.clear();
        toast.success("Successfully Logout");
        setTimeout(() => {
            window.location.href = '/'
        }, 1000);
    }

    return (
        <>
            {isLoading && <Loader />}
            <header className="py-3">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3 col_mob1">
                            <a href="/#"> <img src={require("../../images/logo.png").default} alt="img" /></a>
                        </aside>
                        <aside className="col-md-9 m-auto">
                            <ul class="top_head">
                                <li>
                                    <a href="/#">SHOP</a>
                                </li>
                                <li>
                                    <a href="/offer">OFFERS</a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                                        <span className="notification_circle">
                                            2
                                </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </a>
                                </li>
                                {isUserPresent && <li className="signin_btn pl-2 pr-0">
                                    <a className="btn" onClick={() => onLogOut()}>LOG OUT</a>
                                </li>
                                }
                                {!isUserPresent && <li className="signin_btn pl-2 pr-0">
                                    <a className="btn" href="/signin">SIGN IN</a>
                                </li>}
                                {!isUserPresent && <li className="signup_btn pl-2 pr-0">
                                    <a className="btn" href="/signup">SIGN UP</a>
                                </li>}
                            </ul>
                        </aside>
                    </div>
                </div>
            </header>
            <section className="header py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="nav1">
                                <Navbar expand="lg" >
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="/#">HOME</Nav.Link>
                                            <Nav.Link href="/about">ABOUT</Nav.Link>
                                            <Nav.Link href="/#">BENIFITS</Nav.Link>
                                            <Nav.Link href="/#">FOUNDATIONS</Nav.Link>
                                            <Nav.Link href="/foodoption">FOOD OPTIONS</Nav.Link>
                                            <Nav.Link href="/faq">FAQ</Nav.Link>
                                            <Nav.Link href="/#">BLOGS</Nav.Link>
                                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>

                                </Navbar>
                                <div className="lng_box">
                                    <span className="lng-icon"><img src={require("../../images/lang.png").default} alt="img" /></span>
                                    <Select options={Language} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
