import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination, Navigation ,Autoplay} from 'swiper';
import {userService} from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'



SwiperCore.use([Pagination, Navigation, Autoplay]);

const Product = () => {

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
            <section className="heading-search">
                <div className="container">
                    <h2>NUTRITION & FITNESS SUPLMENT</h2>
                    <div className="input-group search-box">
                        <input type="text" class="form-control" placeholder="Search any category or product here" aria-label="" aria-describedby="basic-addon1"/>
                        <div className="input-group-append">
                            <button className="btn" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/like.png").default} alt="img" /></p>
                            <a href="/product_detail">
                            <div className="product-list-box">
                                <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil1.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil2.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil3.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                  <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil4.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil5.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil6.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil7.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil8.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="like-favorite-box"><img src={require("../images/unlike.png").default} alt="img" /></p>
                            <div className="product-list-box">
                                 <div className="product-list-image text-center">
                                    <img src={require("../images/fish_oil9.png").default} alt="img" />
                                </div>
                                <div className="product-list-details">
                                    <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                    <h6><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <span className="total-review ml-1">(1.2k reviews)</span></h6>
                                    <h5>Price: <del className="orginal-amount">$15.50</del> <span className="discount-amount">$13.95</span></h5>
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
        </>
    )
}


export default Product;