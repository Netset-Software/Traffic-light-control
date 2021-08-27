import React, {useState} from 'react';
import Header from './common/Header'
import Footer from './common/Footer'
import { Tab, Nav, Modal } from 'react-bootstrap';

const Payment =() =>{

    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
        <Header />
        <section className="card_section pt-4 pb-5 checkout paymentsection1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 summry">
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
                                <button className="btn text-white" onClick={() => setLgShow(true)}>Make Payment</button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="rightside_checkout payment_section">
                                <div className="add_head justify-content-center d-block mb-3 text-center">
                                    <h6 className="mb-0" style={{fontSize:"17px"}}>Select Payment Method</h6>
                                </div>
                                <div className="pt-2">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <div>
                                        <Nav variant="pills" className="flex-row">
                                            <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <img src={require('../images/credit-cards.png').default} alt="" />
                                                <h5>Debit/Credit Card</h5>
                                            </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <img src={require('../images/wallet.png').default} alt="" />
                                                <h5>Wallet</h5>
                                            </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                            <div className="mt-4">
                                            <div className="row selectcard_checkout">
                                                <div className="col-md-12 mb-3">
                                                    <div className="add_head">
                                                        <h6 className="mb-0" style={{fontSize:"17px"}}>Select Card</h6>
                                                        <h6 className="new_card_add mb-0"><i className="fa fa-plus mr-1"></i> Add New Card</h6>
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
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="mt-4">
                                                    <div className="row selectcard_checkout">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="add_head">
                                                                <h6 className="mb-0" style={{fontSize:"17px"}}>Total Balance</h6>
                                                                <h6 className="new_card_add mb-0" style={{fontSize:"20px"}}>$12345</h6>
                                                            </div>

                                                            <div className="text-center pt-4">
                                                                <p className="text-center text-secondary mb-0 pb-1 mt-2" style={{fontSize:"18px"}}>Not Sufficient balance.</p>
                                                            </div>
                                                            <div className="add_payment text-center">
                                                                <a className="btn text-center mt-0" href="/payment"><i className="fa fa-plus"></i> Add Money</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        <Footer />

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
                    <button
                        className="paybtn" onClick={handleClose}>
                        PAY
                    </button>
                </Modal.Footer>
            </Modal>


            
            <Modal
            
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton className="border-0">
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="border-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="success_payment my-4">
                            <img src={require('../images/check_icon.png').default} alt="" />
                            <h1>Order completed successfully!</h1>
                            <p>Thanks for purchase with us.</p>
                            <p>Now you can track your order in “My Orders” tab. </p>
                            <a className="btn text-white" href="/my_orders">Go to My Orders</a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default Payment;