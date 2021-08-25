import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { userService } from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import Paginate from './common/Pagination';
import { config } from '../config/config'
import Header from './common/Header'
import Footer from './common/Footer'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const [prices, setPrices] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState('');
    const [loadingStates, setLoadingStates] = useState(0);
    const [cartCount, setCartCount] = useState('');

    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        if (user_id) {
            setUserId(user_id);
            setIsLoading(true);
            getCartProducts();
        }
    }, []);


    function getCartProducts() {
        setIsLoading(true);
        userService.getCartProducts().then((response) => {
            setIsLoading(false);

            if (response.data.status == 200) {
                let tmpArry = [];
                setCartCount(response.data.cart.lineitems.length);
                response.data.cart.lineitems.map((product) => {
                    tmpArry.push({ price: product?.qty * product?.product?.price, qty: product?.qty });
                });
                setPrices(tmpArry);
                setCartProducts(response.data.cart.lineitems);
            } else {
                setCartCount('');
                setCartProducts([]);
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            setCartProducts([]);
            console.log("error ", error);
        });
    }

    function handleQuantity(i, type, qty, price, id) {
        var tmpArry = prices;
        let tmpQty
        if (type === 'INC') {
            tmpQty = qty + 1;
        } else {
            if (qty === 1) return;
            tmpQty = qty - 1;
        }
        tmpArry[i] = { qty: tmpQty, price: tmpQty * price };

        setPrices(tmpArry);
        setLoadingStates(loadingStates + 1);
        updateQuantity(type, id)
    }

    function updateQuantity(type, id) {
        setIsLoading(true);
        let params = { type: type, lineitem: id }
        userService.updateQuantity(params).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200) {
                if (type === 'DEL') getCartProducts();
            } else {
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            console.log("error ", error);
        });
    }

    function getTotalPrice() {
        let sum = 0;
        prices.map((item) => { sum += item.price; })
        return sum;
    }

    return (
        <>
            <Header cartCount={cartCount}/>
            {isLoading && <Loader />}
            <div className="main-div">
                <section className="py-4">
                    <div className="container">
                        <div className="row">

                            <aside className={cartProducts.length > 0 ? "col-lg-9" : "col-lg-12"}>
                                <h5 className="mb-4">Your Shoping Cart</h5>
                                {cartProducts.length > 0 ? cartProducts.map((cartProduct, i) => {
                                    return (<div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5 col-md-5 col-sm-6 mb-2">
                                                <figure className="itemside align-items-center mb-0">
                                                    <div className="aside1">
                                                        <img src={cartProduct.product?.images.length > 0 ? config.imageUrl + cartProduct.product.images[0].image : ''} alt="img" />
                                                    </div>
                                                    <figcaption className="info"> <a href="#" className="title text-dark">{cartProduct.product?.name}</a>
                                                        <p className="text-muted small mb-0">Qty: 1 <br /> Price: ${cartProduct.product?.price.toFixed(2)}</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                                <button type="button" class="btn add-minus mr-2" onClick={() => handleQuantity(i, 'DEC', prices[i]?.qty, cartProduct.product?.price, cartProduct._id)}><i class="fa fa-minus" aria-hidden="true"></i></button> {prices[i]?.qty} <button type="button" class="btn add-minus ml-2" onClick={() => handleQuantity(i, 'INC', prices[i]?.qty, cartProduct.product?.price, cartProduct._id)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                                <div className="price-wrap"> ${prices[i]?.price.toFixed(2)}</div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 mb-2 removebtn text-center">
                                                <button className="btn btn-light btn-round" onClick={() => updateQuantity('DEL', cartProduct._id)}><i className="fa fa-trash mr-1"></i> Remove</button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>)
                                }) :
                                    !isLoading ? <p className="no-categgory text-center">No Products Added Yet. </p> : ''
                                }
                                {/* <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 col-sm-6 mb-2">
                                    <figure className="itemside align-items-center mb-0">
                                        <div className="aside">
                                                <img src={require("../images/fish_oil6.png").default} alt="img" />
                                        </div>
                                        <figcaption className="info"> <a href="#" className="title text-dark">WOW Life Science Omega-3 Fish Oil</a>
                                            <p className="text-muted small mb-0">Qty: 1 <br /> Price: $123</p>
                                        </figcaption>
                                    </figure>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                <button type="button" class="btn add-minus mr-2"><i class="fa fa-minus" aria-hidden="true"></i></button> 1 <button type="button" class="btn add-minus ml-2"><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                    <div className="price-wrap"> $15</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 mb-2 removebtn text-center">
                                <a href="" className="btn btn-light btn-round"><i className="fa fa-trash mr-1"></i> Remove</a>
                            </div>
                        </div>
                        <hr /> */}
                                {/* <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 col-sm-6 mb-2">
                                    <figure className="itemside align-items-center mb-0">
                                        <div className="aside">
                                                <img src={require("../images/fish_oil6.png").default} alt="img" />
                                        </div>
                                        <figcaption className="info"> <a href="#" className="title text-dark">WOW Life Science Omega-3 Fish Oil</a>
                                            <p className="text-muted small mb-0">Qty: 1 <br /> Price: $123</p>
                                        </figcaption>
                                    </figure>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                <button type="button" class="btn add-minus mr-2"><i class="fa fa-minus" aria-hidden="true"></i></button> 1 <button type="button" class="btn add-minus ml-2"><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                    <div className="price-wrap"> $15</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 mb-2 removebtn text-center">
                                <a href="" className="btn btn-light btn-round"><i className="fa fa-trash mr-1"></i> Remove</a>
                            </div>
                        </div>
                        <hr />
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-5 col-sm-6 mb-2">
                                    <figure className="itemside align-items-center mb-0">
                                        <div className="aside">
                                                <img src={require("../images/fish_oil6.png").default} alt="img" />
                                        </div>
                                        <figcaption className="info"> <a href="#" className="title text-dark">WOW Life Science Omega-3 Fish Oil</a>
                                            <p className="text-muted small mb-0">Qty: 1 <br /> Price: $123</p>
                                        </figcaption>
                                    </figure>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                <button type="button" class="btn add-minus mr-2"><i class="fa fa-minus" aria-hidden="true"></i></button> 1 <button type="button" class="btn add-minus ml-2"><i class="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 mb-2">
                                    <div className="price-wrap"> $15</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 mb-2 removebtn text-center">
                                <a href="" className="btn btn-light btn-round"><i className="fa fa-trash mr-1"></i> Remove</a>
                            </div>
                        </div>
                        <hr /> */}
                            </aside>
                            {cartProducts.length > 0 &&
                                <aside className="col-lg-3 summry">
                                    <div className="card">
                                        <div className="card-body">
                                            <dl className="dlist-align">
                                                <dt>Total price:</dt>
                                                <dd className="text-right ml-3">${getTotalPrice().toFixed(2)}</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt>Tax:</dt>
                                                <dd className="text-right text-danger ml-3">- $0.00</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt>Shipping:</dt>
                                                <dd className="text-right ml-3">- $0.00</dd>
                                            </dl>
                                            <dl className="dlist-align">
                                                <dt>Total:</dt>
                                                <dd className="text-right b ml-3"><strong>${getTotalPrice().toFixed(2)}</strong></dd>
                                            </dl>
                                            <hr /> <a href="/checkout" className="btn chkoutbtn w-100 shadow">Checkout </a>
                                        </div>
                                    </div>

                                </aside>
                            }

                        </div>
                    </div>
                </section>

                <section className="product-page-area similar_products py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="mb-2">Similar Products</h5>
                        </div>
                        {/* <p className="like-favorite-box"><img src={require("../images/like.png").default} alt="img" /></p> */}
                         {/* <p className="like-favorite-box"><img src={require("../images/like.png").default} alt="img" /></p>  */}
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
            </div>
            <Footer />
        </>
    )
}
export default Cart;