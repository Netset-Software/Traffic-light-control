import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap';
import Header from './common/Header'
import Footer from './common/Footer'

const Checkout = () => {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />
            <section className="card_section pt-4 pb-5 checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 summry">
                            <div className="product-list-image text-center">
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
                                        <dt style={{ fontSize: "20px", color: "black" }}>Total:</dt>
                                        <dd className="text-right ml-3" style={{ fontSize: "20px"}}><strong>$59.97</strong></dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="make_payment">
                                <a className="btn text-white" href="/payment">Make Payment</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="rightside_checkout">
                            <div className="address_box">
                                <div className="add_head">
                                    <h6 className="mb-0" style={{fontSize:"17px"}}>Delivery Address</h6>
                                    <button className="btn text-white" onClick={() => setLgShow(true)}><i className="fa fa-plus mr-2"></i>ADD NEW ADDRESS</button>
                                </div>
                               <hr className="my-2" />
                            <div className="add_address text-center py-5">
                                <img src={require('../images/no_address.svg').default} alt="" />
                                <p className="text-center text-secondary mb-2 pb-1 mt-2" style={{fontSize:"18px"}}>No delivery address added yet.</p>
                            </div>
                            <div className="col-md-12">
                                <div className="address_list row">
                                    <div className="col-md-6 mb-3">
                                        <div className="address">
                                            <span>
                                                <div class="form-check pl-0">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                                                </div>
                                            </span>
                                            <h5>Alex Smith</h5>
                                            <h6 className="mb-1">+1234567890</h6>
                                            <p>1234 Address Min town, dolphin , USA 123434</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="address">
                                            <span>
                                                <div class="form-check pl-0">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                                                </div>
                                            </span>
                                            <h5>Alex Smith</h5>
                                            <h6 className="mb-1">+1234567890</h6>
                                            <p>1234 Address Min town, dolphin , USA 123434</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="address">
                                            <span>
                                                <div class="form-check pl-0">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                                                </div>
                                            </span>
                                            <h5>Alex Smith</h5>
                                            <h6 className="mb-1">+1234567890</h6>
                                            <p>1234 Address Min town, dolphin , USA 123434</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="address">
                                            <span>
                                                <div class="form-check pl-0">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"/>
                                                </div>
                                            </span>
                                            <h5>Alex Smith</h5>
                                            <h6 className="mb-1">+1234567890</h6>
                                            <p>1234 Address Min town, dolphin , USA 123434</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* <div className="payment_modal">
                                <div className="row">
                                    <div className="col-md-12 text-left mb-0">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0" style={{fontSize:"17px"}}>Enter Card Details</h6>
                                            <h6 className="new_card_add mb-0"><i className="fa fa-plus mr-2"></i> Add New Card</h6>
                                        </div>
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
                                    <div className="col-md-12 p-0 text-center mt-3 mb-4 btn_pay">
                                        <a href="/checkout" className="btn  btn-success btn-square btn-main shadow">Pay </a>

                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            <div className="card_header mb-4 align-items-center">
                                <h6 className="mb-0" style={{fontSize:"17px"}}>Select Cards</h6>
                            </div>
                            <div className="row selectcard_checkout">
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
                            </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
            
            <section className="product-page-area similar_products py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="mb-2">Similar Products</h5>
                        </div>
                        
                            <div className="col-lg-3 col-md-4 mb-3">
                                <div className="product-list-box">
                                    <a href="/#">
                                        <div className="product-list-image text-center">
                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                        </div>
                                        <div className="product-list-details">
                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                            <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                            <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>   
                                        </div>
                                    </a>
                                    <div className="product-details">
                                        <div className="buttons d-flex flex-row">
                                            <a className="cart shadow pb-3" href="/my_favorites"><i className="fa fa-heart-o"></i></a>
                                            <a className="btn btn-success cart-button btn-block shadow pointer"><i className="fa fa-shopping-cart mr-2" style={{ fontSize: "19px" }}></i> ADD TO CART </a>
                                        </div>
                                        <div class="weight"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                                <div className="product-list-box">
                                    <a href="/#">
                                        <div className="product-list-image text-center">
                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                        </div>
                                        <div className="product-list-details">
                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                            <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                            <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>   
                                        </div>
                                    </a>
                                    <div className="product-details">
                                        <div className="buttons d-flex flex-row">
                                            <a className="cart shadow pb-3" href="/my_favorites"><i className="fa fa-heart-o"></i></a>
                                            <a className="btn btn-success cart-button btn-block shadow pointer"><i className="fa fa-shopping-cart mr-2" style={{ fontSize: "19px" }}></i> ADD TO CART </a>
                                        </div>
                                        <div class="weight"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="pay_modal card_modal"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="payment_modal px-3">
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
                <Modal.Footer className="border-0 pb-4 px-4">
                    <button className="dltebtn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button
                        className="paybtn" onClick={handleClose}>
                        PAY
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className="address_modal"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                   Add New Address
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="payment_modal px-3">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Full Name</label>
                                    <input type="" placeholder="Enter Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Phone Number</label>
                                    <input type="" placeholder="Enter Phone Number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label>ZIP Code</label>
                                    <input type="" placeholder="Enter ZIP Code" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label>Country</label>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                                            <Form.Control as="select">
                                                <option value="-1">Select Country</option>
                                            </Form.Control>
                                        </Form.Group>
                                        </Form>
                                </div>
                            </div>
                            <div className="col-md-12 mb-1">
                                <div>
                                    <label>Address</label>
                                    <input type="" placeholder="Enter Address" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-4 px-4">
                    <button
                        className="paybtn w-100 py-3" onClick={handleClose}>
                        Save Address
                    </button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}
export default Checkout;