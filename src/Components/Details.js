import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide, Navigation, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination, Autoplay, } from 'swiper';
import { userService } from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import { config } from '../config/config'
import Header from './common/Header'
import Footer from './common/Footer'

const Details = () => {
    const [lgShow, setLgShow] = useState(false);
    const [productDetail, setProductDetail] = useState('');
    const [productId, setProductId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isFavourite, setIsFavourite] = useState(false);
    const [userId, setUserId] = useState('');
    const [cartCount, setCartCount] = useState('');
    const [favCount, setFavCount] = useState('');

    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        if (user_id) setUserId(user_id);
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id) {
            setIsLoading(true);
            setProductId(id);
            getProductDetail(id);
        }
    }, []);

    function getProductDetail(id) {
        userService.getProductDetail(id).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200) {
                setProductDetail(response.data.data);
                setIsFavourite(response.data.data.is_favourite);
            } else {
                setProductDetail('');
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            setProductDetail('');
            console.log("error ", error);
        });
    }

    function handleFavourite(status) {
        if (userId) {
            var answer = true;
            if (status) answer = window.confirm("Are you sure want to remove it from your favouite list.");
            if (answer) {
                setIsLoading(true);
                let params = { user: userId, product: productId, is_favourite: !status }
                userService.updateFavourite(params).then((response) => {
                    setIsLoading(false);
                    if (response.data.status == 200) {
                        setFavCount(response.data.favCount);
                        setIsFavourite(!status);
                        toast.success("Product " + (!status ?  "added to" : "removed from") + " your favourite list successfully.");
                    } else {
                        toast.error("Some Error Occur");
                    }
                }).catch((error) => {
                    setFavCount('')
                    setIsLoading(false);
                    console.log("error ", error);
                });
            }
        } else {
            window.location.pathname = '/signin'
        }
    }

    function addToCart() {
        if (userId) {
            setIsLoading(true);
            let params = { user: userId, product: productId, qty: quantity }
            userService.addToCart(params).then((response) => {
                setIsLoading(false);
                if (response.data.status == 200) {
                    setCartCount(response.data.cartCount);
                    toast.success("Product added to cart successfully.")
                } else {
                    setCartCount('');
                    toast.error("Some Error Occur");
                }
            }).catch((error) => {
                setIsLoading(false);
                // setProducts([]);
                console.log("error ", error);
            });
        } else {
            window.location.pathname = '/signin'
        }
    }


    return (
        <>
            <Header cartCount={cartCount} favCount={favCount} />
            {isLoading && <Loader />}
            <section className="product-detials-page py-3">
                <div className="container">
                    <div className="col-md-12">
                        <div className="detail_head">
                            <h5 className="mb-0">Product Details</h5>
                            <div className="cancelorder_btn">
                                <button className="btn text-white" onClick={() => setLgShow(true)}>Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details_popup text-center my-4">
                    <marquee><p>Your order has been confirmed with us on "May 20,2021 & 10:30 AM".</p></marquee>
                </div>
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">
                            
                            <Swiper
                                spaceBetween={25}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                autoplay={{ delay: 3000 }}

                                navigation
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}

                            >
                                <SwiperSlide>
                                        <div className="slider_box_new text-center mt-0">
                                            <img src={require('../images/fish_oil1.png').default} alt="img" />
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                        <div className="slider_box_new text-center mt-0">
                                            <img src={require('../images/fish_oil1.png').default} alt="img" />
                                        </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-6">
                            <div className="product-detail-rightside mt-0">
                                <h5 className="mb-2 text-secondary mt-0">May 20,2021 & 10:15 AM</h5>
                                <h2>WOW Life Science Omega-3 Fish Oil</h2>
                                <h6><span>NUTRITION & FITNESS SUPPLEMENTS</span></h6>
                                <h5><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews">(1.2k reviews)</a></span></h5>
                                <h5 className="mt-2">PRICE:
                                    {/* <del>$15.50</del> */}
                                    <span> ${productDetail?.price?.toFixed(2)}
                                        {/* (10% Off) */}
                                    </span>
                                </h5>
                                <h5 className="mt-2 ">QUANTITY:
                                    {/* <del>$15.50</del> */}
                                    <span> 1
                                        {/* (10% Off) */}
                                    </span></h5>
                                <div className="border-top address_list pt-1">
                                <h5 className="mt-2 mb-2">ADDRESS:</h5>
                                    <div className="address" style={{padding:"6px 15px 5px 45px"}}>
                                        <span>
                                            <div class="form-check pl-0">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked />
                                            </div>
                                        </span>
                                        <h5 className="my-1">Alex Smith</h5>
                                        <h6 className="mt-2 mb-1">+1234567890</h6>
                                        <p className="m-0 py-1">1234 Address Min town, dolphin , USA 123434</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
            <section className="description-area my-4">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5 style={{fontSize:"17px"}}>ORDER SUMMARY</h5>
                        <div className="card mt-2">
                            <div className="card-body" style={{background: "#e0f8ff"}}>
                                <dl>
                                    <h6 className="mt-0">WOW Life Science Omega-3 Fish Oil</h6>
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
                        <div className="mt-4">
                        <h5 style={{fontSize:"17px"}}>PAYMENT VIA</h5>
                            <div className="cardbox mb-3 detailscard py-1 mt-2" style={{height:"unset"}}>
                                <div className="cardbox_header mb-1 pt-2">
                                    <img src={require('../../src/images/mastercard.png').default} />
                                </div>
                                <a className="car_btn">
                                    <h5>XXXX  XXXX  XXXX <span> 1234</span></h5>
                                    <h6 className="text-dark">Alex Smith</h6>
                                </a>
                            </div>              
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 subscribe_section">
                        <h5 style={{fontSize:"17px"}}>SUBSCRIPTION</h5>
                            <div className="subs_firstbox subscribe_list P-3 text-center px-0">
                                <h4>$12.50</h4>
                                <h5 style={{fontSize:"16px"}} className="mb-3 px-5">YOU HAVE SUBSCRIBED FOR THE PRODUCT TO GET IT "EVERY 30 DAYS"</h5>     
                                <div className="cancelsubs_btn">
                                    <button className="btn text-white mb-1">Cancel Subscription</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="downld_sec mt-4 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-9 mb-2 text-left">
                            <h5>DOWNLOAD THE BIG4 HEALTH APP NOW</h5>
                            <p>Enjoy best practices to reshape your health to maintain a healthy lifestyle. Lifestyle modification can be
                                painful or uncomfortable, the BIG4 Health app presents a seamless way to adapt to a healthier lifestyle.
                                No matter how your health condition is, the BIG4 Health app makes it easier for you to watch your blood
                                sugar, blood pressure, cholesterol and your BMI*. Let’s make it a day at a time!</p>
                        </div>
                        <div className="col-md-3">
                            <a className="" href="/#">
                                <img src={require("../images/ios.png").default} alt="img" />

                            </a>
                            <a className="pt-3 d-block" href="/#">
                                <img src={require("../images/playstore.png").default} alt="img" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />

            <Modal
            
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0 pt-0 mt-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="cancelorder_modal mb-4">
                            <h5>Cancel Order</h5>
                            <p>Are you sure, want to cancel your order <b>"WOW Life Science Omega"</b> ?</p>
                            <label className="mt-3">GIVE A REASON</label>
                            <textarea placeholder="Enter Reason"></textarea>
                            <a className="btn subbtn text-white" href="/my_orders">Submit</a>
                            <a className="btn nobtn text-white" href="/my_orders">No</a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
        </>
    )
}


export default Details;