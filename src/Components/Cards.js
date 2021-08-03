import React, {useState} from 'react'
import { Button, Modal} from 'react-bootstrap';
import { toast } from 'react-toastify';

const Cards = () => {

    const [show, setShow] = useState(false);
    const [showAddaCardModal, setShowAddaCardModal] = useState(false);
    const [cardNo, setCardNo] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const userId = localStorage.getItem('user_id')

  const handleClose = () =>{
      setShow(false);
      setShowAddaCardModal(false);
  }

  const handleShow = () => setShow(true);

  function openAddCardModal(){
    setCardNo('');
    setCardHolderName('');
    setExpiryDate('');
    setExpiryDate('');
    setShowAddaCardModal(true);
  }

  function validateForm(){
    if(!/^[0-9]{12,16}$/.test(cardNo)){
        toast.error("Invalid Card No");
    }else if(!/^[a-zA-Z][a-zA-Z ]*$/.test(cardHolderName)){
        toast.error("Invalid Card Holder Name");
    }else if(!/^[0-9]{3,4}$/.test(cvv)){
        toast.error("Invalid CVV Number");
    }else{
            setIsLoading(true);
            let params = {user: userId, card_number: cardNo, exp_month: expiryDate, exp_year: expiryDate, cvv: cvv}
            // userService.updateQuantity(params).then((response) => {
            //     setIsLoading(false);
            //     if (response.data.status == 200){
            //         if (type === 'DEL') getCartProducts();
            //     }else{
            //         toast.error("Some Error Occur");
            //     } 
            // }).catch((error) => {
            //     setIsLoading(false);
            //     console.log("error ", error);
            // });
    }
  }

    return(
            <>
                <section className="card_section py-4">
                    <div className="container">
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
                    Delete Card
                </button>
                <button
                 className="paybtn" onClick={handleClose}>
                    PAY
                </button>
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
                                    <input type="" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>Expiry</label>
                                    <input type="" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div>
                                    <label>CVV</label>
                                    <input type="" value={cvv} maxLength={4} onChange={(e) => setCvv(e.target.value)}/>
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
                 className="paybtn" style={{width: "100%"}} onClick={() => validateForm()}>
                    Add
                </button>
                </Modal.Footer>
            </Modal>
            </>
    )
}
export  default Cards;