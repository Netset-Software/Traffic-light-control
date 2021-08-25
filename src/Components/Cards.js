import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userService } from '../services';
import Loader from './common/Loader'
import Header from './common/Header'
import Footer from './common/Footer'

const Cards = () => {

    const [show, setShow] = useState(false);
    const [showAddaCardModal, setShowAddaCardModal] = useState(false);
    const [cardNo, setCardNo] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardId, setCardId] = useState('');

    const userId = localStorage.getItem('user_id')

    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        if (user_id) {
            getCards();
        }
    }, []);


    const handleClose = () => {
        setShow(false);
        setShowAddaCardModal(false);
    }

    const handleShow = (card) => {
        setCardId(card._id)
        setCardNo(card.last4);
        setCardHolderName(card.card_holder_name);
        setExpiryDate(card.exp_month + "/" + card.exp_year);
        setCvv('');
        setShow(true);
    };

    function openAddCardModal() {
        setCardNo('');
        setCardHolderName('');
        setExpiryDate('');
        setCvv('');
        setShowAddaCardModal(true);
    }

    function getCards() {
        setIsLoading(true);
        userService.getCards().then((response) => {
            setIsLoading(false);
            if (response.data.status == 200) {
                setCards(response.data.data);
            } else {
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            console.log("error ", error);
        });
    }

    function deleteCard() {
        setIsLoading(true);
        userService.deleteCard(cardId).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200) {
                handleClose();
                getCards();
            } else {
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            console.log("error ", error);
        });
    }

    function validateForm() {
        if (!/^[0-9]{12,16}$/.test(cardNo)) {
            toast.error("Invalid Card No");
        } else if (!/^[a-zA-Z][a-zA-Z ]*$/.test(cardHolderName)) {
            toast.error("Invalid Card Holder Name");
        } else if (!expiryDate) {
            toast.error("Please Select Expiry Date");
        } else if (!/^[0-9]{3,4}$/.test(cvv)) {
            toast.error("Invalid CVV Number");
        } else {
            setIsLoading(true);
            let params = { user: userId, card_number: cardNo, exp_month: expiryDate.getMonth(), exp_year: expiryDate.getFullYear() + 1, cvv: cvv, card_holder_name: cardHolderName }
            userService.addCard(params).then((response) => {
                setIsLoading();
                if (response.data.status == 200) {
                    handleClose();
                    getCards();
                    toast.success("Card Added Successfully");
                } else {
                    toast.error("Some Error Occur");
                }
            }).catch((error) => {
                setIsLoading(false);
                console.log("error ", error);
            });
        }
    }

    const handleExpiryDate = (date) => {
        setExpiryDate(date);
    }

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            <section className="card_section py-4">
                <div className="container" style={{ minHeight: "450px" }}>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="card_header mb-4">
                                <h5 className="mb-0">My Cards</h5>
                                <div className="newcard_btn">
                                    <button className="btn text-white shadow-sm" onClick={() => openAddCardModal()}>Add New Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        {cards.length > 0 && cards.map((card) => {
                            return (<div className="col-md-4 mb-3">
                                <div className="cardbox">
                                    <div className="cardbox_header mb-3">
                                        <img src={require('../../src/images/visa.png').default} />
                                        <a className="car_btn" onClick={() => handleShow(card)}>
                                            <img src={require('../images/next1.svg').default} alt="" />
                                        </a>
                                    </div>
                                    <h5>XXXX  XXXX  XXXX <span> {card.last4}</span></h5>
                                    {/* <h6>Alex Smith</h6> */}
                                </div>
                            </div>)
                        })}
                        {/* <div className="col-md-4 mb-3">
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
                        </div> */}


                        {/* <div className="col-md-4 mb-3">
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
                        </div> */}
                    </div>
                    {cards.length === 0 && !isLoading && <section className="product-area-box"><p className="no-categgory text-center">No Cards Added Yet. </p></section>}

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
                                    <input type="" value={"xxxx xxxx xxxx " + cardNo} disabled />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Card Holder Name</label>
                                    <input type="" value={cardHolderName} disabled />
                                </div>
                            </div>
                            <div className="col-md-12 mb-6">
                                <div>
                                    <label>Expiry</label>
                                    <input type="" value={expiryDate} disabled />
                                </div>
                            </div>
                            {/* <div className="col-md-6 mb-3">
                                <div>
                                    <label>CVV</label>
                                    <input type="" value="112" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-4">
                    <button className="dltebtn" style={{ width: "100%" }} onClick={() => deleteCard()}>
                        Delete Card
                    </button>
                    {/* <button
                 className="paybtn" onClick={handleClose}>
                    PAY
                </button> */}
                </Modal.Footer>
            </Modal>

            <Modal show={showAddaCardModal} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="pay_modal"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Add Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="payment_modal">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Card Number</label>
                                    <input type="" value={cardNo} maxLength={16} onChange={(e) => setCardNo(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Card Holder Name</label>
                                    <input type="" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Expiry</label>
                                    <DatePicker
                                        selected={expiryDate}
                                        minDate={new Date()}
                                        showMonthYearPicker
                                        dateFormat={"MM/yyyy"}
                                        placeholderText="MM/YYYY"
                                        onChange={handleExpiryDate}
                                    />
                                    {/* <input type="" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}/> */}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>CVV</label>
                                    <input type="" value={cvv} maxLength={4} onChange={(e) => setCvv(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 pb-4">
                    {/* <button className="dltebtn" onClick={() => handleClose()}>
                    Delete
                </button> */}
                    <button
                        className="paybtn" style={{ width: "100%" }} onClick={() => validateForm()}>
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    )
}
export default Cards;