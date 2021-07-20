import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide,Navigation, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination,Autoplay,} from 'swiper';
import {userService} from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'







const Product_details = () => {

    const [showHide, setShowHide] = useState(false);
    const [allQuizes, setAllQuizes] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [isPlayedFirstTime, setIsPlayedFirstTime] = useState(true);


    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        if (user_id){
            setIsUserLogin(true);
            getAllQuizes();
            // setCurrentLocation();
        }
    }, []);

 

    
      function error_location(err) {
        setIsLoading(false);
        console.warn(`ERROR(${err.code}): ${err.message}`);
        if (err.message == "User denied Geolocation") {
          alert("Please enable location settings");
        }
        if (err.code == 2 || err.code == "2") {
          alert("We can't locate your position, please try again!");
        }
      }

    function getAllQuizes(city) {
        setIsLoading(true);
        userService.getQuizes(city).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200){
                let quizesData = response.data.data;
                setAllQuizes(quizesData);
                for(let i = 0; i < quizesData; i++ ){
                    if (quizesData[i] === 'COM'){
                        setIsPlayedFirstTime(true);
                        break;
                    }
                }
              }else{
                toast.error("Some Error Occur");
              } 
        }).catch((error) => {
            setIsLoading(false);
            setAllQuizes([]);
            console.log("error ", error);
        });
    }


    return (
        <>
            {isLoading && <Loader/>}
            <section className="product-detials-page">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">
                        <Swiper
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                autoplay={{ delay: 3000 }}

                                navigation
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                  
                            >
                                <SwiperSlide>
                                    <div className="slider_box_new text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-12">
                                                <img src={require("../images/slider_1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box_new text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-12">
                                                <img src={require("../images/slider_1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box_new text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-12">
                                                <img src={require("../images/slider_1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box_new text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-12">
                                                <img src={require("../images/slider_1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>


                        </div>
                        <div className="col-md-6">
                            <div className="product-detail-rightside">
                                 <h2>WOW Life Science Omega-3 <br></br>Fish Oil</h2>
                                 <h6><span>NUTRITION & FITNESS SUPPLEMENTS</span></h6>
                                 <h5><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews">(1.2k reviews)</a></span></h5>
                                 <h5 className="mt-4">PRICE: <del>$15.50</del> <span>$13.95 (10% Off)</span></h5>
                                 <h5 className="select-quantity-box">SELECT QUANTITY </h5>
                                 <button type="button" class="btn add-minus mr-2"><i class="fa fa-minus" aria-hidden="true"></i></button> 1 <button type="button" class="btn add-minus ml-2"><i class="fa fa-plus" aria-hidden="true"></i></button>
                                 <p className="border-top">
                                    <a className="checkout-bt" href="/checkout">Checkout</a>
                                    <a className="favourite-bt" href="/cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</a>
                                    <a className="heart_icon1" href="/my_favorites"><i class="fa fa-heart" aria-hidden="true"></i></a>
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="description-area">
                <div className="container">
                    <h3>DESCRIPTION</h3>
                    <p>WOW Life Science Omega 3 for healthy heart and body. Omega 3 in fish oil has Eicosapentaenoic acid (EPA) and
                        Docosahexaenoic acid (DHA). WOW Life Science OMEGA 3 has the optimal 3:2 EPA:DHA ratio. It gives you 1000mg 
                        of pure blend of Omega 3 – 550mg EPA, 350 mg DHA an 100 mg other Omega 3. It supports healthy heart and
                        joints.
                    </p>
                    <p>WOW Life Science Omega 3 for healthy heart and body. Omega 3 in fish oil has Eicosapentaenoic acid (EPA) and
                        Docosahexaenoic acid (DHA). WOW Life Science OMEGA 3 has the optimal 3:2 EPA:DHA ratio. It gives you 1000mg 
                        of pure blend of Omega 3 – 550mg EPA, 350 mg DHA an 100 mg other Omega 3. It supports healthy heart and
                        joints.
                    </p>
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