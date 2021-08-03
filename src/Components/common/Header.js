import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Loader from './Loader';
import {userService} from '../../services';

const Header = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [countData, setCountData] = useState('');
    const Language = [
        { label: "English", value: 355 },
        { label: "German", value: 54 },
        { label: "French", value: 43 },
    ];
    const [isUserPresent, setIsUserPresent] = useState(false);

    useEffect(() => {
        let isUser = localStorage.getItem('user_id');
        if (isUser) setIsUserPresent(true);
        getProductCount();
    }, []);

    function getProductCount() {
        userService.getProductCount().then((response) => {
            if (response.data.status == 200){
                setCountData(response.data);
              }else{
              } 
        }).catch((error) => {
            console.log("error ", error);
        });
    }

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
                                    <a href="/shop">SHOP</a>
                                </li>
                                <li>
                                    <a href="/offer">OFFERS</a>
                                </li>
                                <li>
                                    <a href={isUserPresent ? '/' : '/signin'}>
                                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                                        <span className="notification_circle">
                                            2
                                </span>
                                    </a>
                                </li>
                                <li>
                                    <a href={isUserPresent ? '/my_favorites' : '/signin'}>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        <span className="notification_circle">
                                        {countData?.favCount}
                                </span>
                                    </a>
                                </li>
                               
                                {isUserPresent && <li className="signin_btn pl-2 pr-0">
                                    {/* <a className="btn" onClick={() => onLogOut()}>LOG OUT</a> */}
                                    <Dropdown  className="user_dropdown">
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>
                                            <img src={require('../../images/placeholder.png').default} alt="" width="100" />
                                            </span>
                                            <i className="fa fa-angle-down"></i>
                                        </Dropdown.Toggle>
                                       
                                        <Dropdown.Menu className="py-0 mt-1 dropdown-menu-right">
                                            <Dropdown.Item href="/profile" className="py-2">Profile</Dropdown.Item>
                                            <Dropdown.Item onClick={() => onLogOut()} className="py-2">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
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
                                            <Nav.Link href="#benifits_section">BENIFITS</Nav.Link>
                                            <Nav.Link href="#foundation">FOUNDATIONS</Nav.Link>
                                            <Nav.Link href="/foodoption">FOOD OPTIONS</Nav.Link>
                                            <Nav.Link href="/faq">FAQ</Nav.Link>
                                            <Nav.Link href="/blog">BLOGS</Nav.Link>
                                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>

                                </Navbar>
                                {/* <div className="lng_box text-right">
                                       <span className="lng-icon"><img src={require("../../images/lang.png").default} alt="img" width="14px" /></span>
                                    <Select options={Language} placeholder='Select Language' />
                                </div> */}
                                <div className="text-right carticon_row">
                                    <a href={isUserPresent ? "/cart" : "/signin"}>
                                        <span className="cart_count">{countData?.cartCount}</span>
                                        <i className="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                                    </a>
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
