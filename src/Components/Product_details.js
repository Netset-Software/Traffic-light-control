import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide,Navigation, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination,Autoplay,} from 'swiper';
import {userService} from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import { config } from '../config/config'


const Product_details = () => {
    
    const [productDetail, setProductDetail] = useState('');
    const [productId, setProductId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isFavourite, setIsFavourite] = useState(false);
    const [userId, setUserId] = useState('');


    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        if (user_id) setUserId(user_id);
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id){
            setIsLoading(true);
            setProductId(id);
            getProductDetail(id);
        }
    }, []);

    function getProductDetail(id) {
        userService.getProductDetail(id).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200){
                setProductDetail(response.data.data);
                setIsFavourite(response.data.data.is_favourite);
              }else{
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
        if (userId){
             setIsLoading(true);
             let params = {user: userId, product: productId, is_favourite: !status}
             userService.updateFavourite(params).then((response) => {
                 setIsLoading(false);
                 if (response.data.status == 200){
                    setIsFavourite(!status);
                    toast.success("Product added to favourite list successfully.");
                 }else{
                     toast.error("Some Error Occur");
                 } 
             }).catch((error) => {
                 setIsLoading(false);
                 console.log("error ", error);
             });
         }else{
             window.location.pathname = '/signin'
         }
     }

    function addToCart() {
        if (userId){
             setIsLoading(true);
             let params = {user: userId, product: productId, qty: quantity}
             userService.addToCart(params).then((response) => {
                 setIsLoading(false);
                 if (response.data.status == 200){
                    toast.success("Product added to cart successfully.")
                 }else{
                     toast.error("Some Error Occur");
                 } 
             }).catch((error) => {
                 setIsLoading(false);
                 // setProducts([]);
                 console.log("error ", error);
             });
         }else{
             window.location.pathname = '/signin'
         }
     }

     
    return (
        <>
            {isLoading && <Loader/>}
            <section className="product-detials-page">
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
                                {productDetail?.images?.map((image) => {
                                    return (<SwiperSlide>
                                        <div className="slider_box_new text-center">
                                                <img src={image.image ? config.imageUrl + image.image : ''} alt="img" />
                                        </div>
                                    </SwiperSlide>)
                                })}
                            </Swiper>


                        </div>
                        <div className="col-md-6">
                            <div className="product-detail-rightside">
                                <h2>{productDetail?.name}</h2>
                                 {/* <h2>WOW Life Science Omega-3 <br></br>Fish Oil</h2> */}
                                 <h6><span>{productDetail?.category?.name}</span></h6>
                                 {/* <h6><span>NUTRITION & FITNESS SUPPLEMENTS</span></h6> */}
                                 {/* <h5><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews">(1.2k reviews)</a></span></h5> */}
                                 <h5 className="mt-4">PRICE: 
                                 {/* <del>$15.50</del> */}
                                  <span> ${productDetail?.price?.toFixed(2)} 
                                 {/* (10% Off) */}
                                 </span></h5>
                                 <h5 className="select-quantity-box">SELECT QUANTITY </h5>
                                 <button type="button" class="btn add-minus mr-2" onClick={() => {if (quantity > 1 )  setQuantity(quantity -1)}}><i class="fa fa-minus" aria-hidden="true"></i></button> {quantity} <button type="button" class="btn add-minus ml-2" onClick={() => setQuantity(quantity + 1)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                 <p className="border-top">
                                    <a className="checkout-bt pointer" 
                                    // href="/checkout"
                                    >Checkout</a>
                                    <a className="favourite-bt" onClick={() => addToCart()}><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</a>
                                    <a className="heart_icon1 pointer" onClick={() => handleFavourite(isFavourite)} ><i class={isFavourite ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i></a>
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="description-area">
                <div className="container">
                    <h3>DESCRIPTION</h3>
                    {productDetail?.description}
                    {/* <p>WOW Life Science Omega 3 for healthy heart and body. Omega 3 in fish oil has Eicosapentaenoic acid (EPA) and
                        Docosahexaenoic acid (DHA). WOW Life Science OMEGA 3 has the optimal 3:2 EPA:DHA ratio. It gives you 1000mg 
                        of pure blend of Omega 3 – 550mg EPA, 350 mg DHA an 100 mg other Omega 3. It supports healthy heart and
                        joints.
                    </p>
                    <p>WOW Life Science Omega 3 for healthy heart and body. Omega 3 in fish oil has Eicosapentaenoic acid (EPA) and
                        Docosahexaenoic acid (DHA). WOW Life Science OMEGA 3 has the optimal 3:2 EPA:DHA ratio. It gives you 1000mg 
                        of pure blend of Omega 3 – 550mg EPA, 350 mg DHA an 100 mg other Omega 3. It supports healthy heart and
                        joints.
                    </p> */}
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
        </>
    )
}


export default Product_details;