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
            <section className="review-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="review-left-side text-center">
                                <img src={require("../images/omega.png").default} alt="img"/>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="review-detail-rightside">
                                 <h2>WOW Life Science Omega-3 Fish Oil</h2>
                                 <h6><span>NUTRITION & FITNESS SUPPLEMENTS</span></h6>
                                 <h5><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><span><a href="/reviews">(1.2k reviews)</a></span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review-list-area">
                <div className="container">
                    <h3>Reviews</h3>
                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
                        </div>
                    </div>

                    <div className="media">
                        <img className="d-flex mr-3" src={require("../images/last_para.png").default} alt="image"/>
                        <div className="media-body">
                            <div className="d-flex">
                            <h5 className="mt-0">Jhon Smith</h5>
                            <span className="review-time">20 Min</span>
                            </div>
                            <h6><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></h6>
                            <p>If you’re looking for the supreme quality zinc supplement, HK Vitals Zinc is one of the best
                                options out there.</p>
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