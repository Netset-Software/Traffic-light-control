import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Header from './common/Header'
import Footer from './common/Footer'

const Checkout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <section className="card_section py-4 checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 summry">
                            <div className="product-list-image text-left">
                                <img src={require("../images/fish_oil1.png").default} alt="img" />

                            </div>
                            <div className="card mt-3">
                                <div className="card-body">
                                    <dl>
                                        <h6>WOW Life Science Omega-3 Fish Oil</h6>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right ml-3">$69.97</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Tax:</dt>
                                        <dd className="text-right text-danger ml-3">- $10.00</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Shipping:</dt>
                                        <dd className="text-right ml-3">- $10.00</dd>
                                    </dl>
                                    <hr />
                                    <dl className="dlist-align mb-0">
                                        <dt style={{ fontSize: "17px", color: "black" }}>Total:</dt>
                                        <dd className="text-right ml-3"><strong>$59.97</strong></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="payment_modal">
                                <div className="row">
                                    <div className="col-md-12 text-left mb-0">
                                        <h6 className="mb-0">Enter Card Details</h6>
                                        <hr />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label>Card Number</label>
                                            <input type="" value="xxxx xxxx xxxx 1234" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label>Card Holder Name</label>
                                            <input type="" value="Alex Smith" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label>Expiry</label>
                                            <input type="" value="01/25" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label>CVV</label>
                                            <input type="" value="112" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 p-0 text-center mt-3 mb-4">
                                        <a href="/checkout" className="btn btn-out btn-success btn-square btn-main shadow" style={{ width: "150px", fontWeight: "500" }}>Pay </a>

                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div className="card_header mb-4 align-items-center">
                                <h6 className="mb-0">Select Cards</h6>

                                {/* <div className="newcard_btn">
                                        <button className="btn text-white shadow-sm">Add New Card</button>
                                    </div> */}
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="cardbox">
                                        <div className="cardbox_header mb-3">
                                            <img src={require('../../src/images/mastercard.png').default} />
                                            <a className="car_btn" onClick={handleShow}>
                                                <img src={require('../images/next1.svg').default} alt="" />
                                            </a>
                                        </div>
                                        <h5>XXXX  XXXX  XXXX <span> 1234</span></h5>
                                        <h6>Alex Smith</h6>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="cardbox">
                                        <div className="cardbox_header mb-3">
                                            <img src={require('../../src/images/visa.png').default} />
                                            <a className="car_btn" onClick={handleShow}>
                                                <img src={require('../images/next1.svg').default} alt="" />
                                            </a>
                                        </div>
                                        <h5>XXXX  XXXX  XXXX <span> 1234</span></h5>
                                        <h6>Alex Smith</h6>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="cardbox">
                                        <div className="cardbox_header mb-3">
                                            <img src={require('../../src/images/mastercard.png').default} />
                                            <a className="car_btn" onClick={handleShow}>
                                                <img src={require('../images/next1.svg').default} alt="" />
                                            </a>
                                        </div>
                                        <h5>XXXX  XXXX  XXXX <span> 1234</span></h5>
                                        <h6>Alex Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="pay_modal"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="payment_modal">
                        <div className="row">
                            <div className="col-md-12 text-center mb-4">
                                <img src={require('../images/mastercard1.png').default} alt="" />
                            </div>

                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Card Number</label>
                                    <input type="" value="xxxx xxxx xxxx 1234" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Card Holder Name</label>
                                    <input type="" value="Alex Smith" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Expiry</label>
                                    <input type="" value="01/25" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>CVV</label>
                                    <input type="" value="112" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-4">
                    <button className="dltebtn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button
                        className="paybtn" onClick={handleClose}>
                        PAY
                    </button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}
export default Checkout;