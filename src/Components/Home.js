import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination, Navigation ,Autoplay} from 'swiper';
import {userService} from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import Geocode from "react-geocode";



SwiperCore.use([Pagination, Navigation, Autoplay]);

const Home = () => {

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

    function setCurrentLocation() {
        if (navigator.geolocation) {
            setIsLoading(true);
            console.log("gelocation----");
            navigator.geolocation.getCurrentPosition(showPosition, error_location);
        } else {
        //   openModalverifilocation();
        }
      }
    


      function showPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        // console.log(lat, lng);
        // Geocode.setApiKey("AIzaSyBsv-OafO1eNJncye_hAAAlAvE--OjmmJ8");
        // Geocode.fromLatLng(lat, lng).then(
        //   response => {
        //       debugger
        //     // const address = response.results[0].formatted_address;
        //     let state = response.results[0].address_components[3].long_name
        //     // verifyState(state.toLowerCase());
        //   },
        //   error => {
        //     // openModalverifilocation();
        //     console.error("errorrrr geocode", error);
        //   }
        // );

        userService.getCurrentLocation(lat, lng).then((response) => {
            let city = response.data.results[0].address_components[0].long_name;
            // getAllQuizes(city);
            getAllQuizes("Sahibzada Ajit Singh Nagar");
        }).catch((error) => {
            setIsLoading(false);
            // setAllQuizes([]);
            toast.error("We can't locate your position, please try again!");
            console.log("error ", error);
        });

      }
    
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

    function handleModalShowHide(id, status) {
        if (status === 'NEW'){
            setSelectedQuizId(id);
            setShowHide(!showHide);
        }else if(status === 'QUIT'){
            toast.warning("You have Already Quited that Quiz")
        }else if(status === 'COM'){
            window.location.href = "/result?id=" + id;
            // toast.warning("You have Already Completed that Quiz")
        }else{
            toast.error("Something Went Wrong");
        }
    }

    function startQuiz(){
        if (localStorage.getItem('user_id')){
            localStorage.setItem('done', false);
            window.location.href = "/quiz?id=" + selectedQuizId;
        }else{
            toast.error("Please sign-up before to get participate into quiz")
        }
    }

    return (
        <>
            {isLoading && <Loader/>}
            { isUserLogin && allQuizes.length > 0 &&
            <section className="quiz_slider py-4">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-12 col-sm-12 mb-2">
                            <div className="quiz_section_title">
                                <h2 className="">BIG4 QUIZ</h2>
                                { isPlayedFirstTime ? 
                                    <p>Play the BIG4 Quiz in Your Location! By answering the questions in a given time and get a chance to win the rewards.</p>
                                :
                                    <p>Do you want to play more ?We will get back to you soon with new challenges</p>
                                }
                            </div>

                        </aside>
                        <aside className="col-md-12">
                            <Swiper className="mySwiper"
                                navigation
                                autoplay={{ delay: 2500 }}
                                spaceBetween={20}
                                slidesPerView={6}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1366: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {allQuizes.length > 0 && allQuizes.map((quiz, i) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="quiz_section_box">
                                                <h6>{quiz.name}</h6>
                                                <div className="quiz_footer mt-3">
                                                    <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide(quiz._id, quiz.quiz_done_status)}><u>{quiz.quiz_done_status === 'COM' ? "Check your answers" : "Answer this quiz"}</u></button>
                                                    <span className="qstn"> {quiz.questions.length} Questions</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );

                                })}
                                {/* <SwiperSlide>
                                    <div className="quiz_section_box">
                                        <h6>What are some things you can do to help support your brain health?</h6>
                                        <div className="quiz_footer mt-3">
                                            <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide()}><u>Answer this quiz</u></button>
                                            <span className="qstn"> 5 Questions</span>
                                        </div>
                                    </div>
                                </SwiperSlide> */}
                                {/* <SwiperSlide>
                                    <div class="quiz_section_box">
                                        <h6>What are some things you can do to help support your brain health?</h6>
                                        <div className="quiz_footer mt-3">
                                            <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide()}><u>Answer this quiz</u></button>
                                            <span className="qstn"> 5 Questions</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quiz_section_box">
                                        <h6>What are some things you can do to help support your brain health?</h6>
                                        <div className="quiz_footer mt-3">
                                            <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide()}><u>Answer this quiz</u></button>
                                            <span className="qstn"> 5 Questions</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="quiz_section_box">
                                        <h6>What are some things you can do to help support your brain health?</h6>
                                        <div className="quiz_footer mt-3">
                                            <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide()}><u>Answer this quiz</u></button>
                                            <span className="qstn"> 5 Questions</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="quiz_section_box">
                                        <h6>What are some things you can do to help support your brain health?</h6>
                                        <div className="quiz_footer mt-3">
                                            <button className="ans bg-transparent border-0" onClick={() => handleModalShowHide()}><u>Answer this quiz</u></button>
                                            <span className="qstn"> 5 Questions</span>
                                        </div>
                                    </div>
                                </SwiperSlide> */}
                            </Swiper>

                        </aside>
                    </div>
                </div>
            </section>
            }
            <section className="banner pt-0 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                autoplay={{ delay: 3000 }}
                            >
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                                <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                                <button className="btn  mt-3">SHOP NOW</button>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={require("../images/med1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                                <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                                <button className="btn  mt-3">SHOP NOW</button>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={require("../images/med1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                                <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                                <button className="btn  mt-3">SHOP NOW</button>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={require("../images/med1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider_box">
                                        <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                                <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                                <button className="btn  mt-3">SHOP NOW</button>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={require("../images/med1.png").default} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mobile_sec my-4 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require("../images/mob1.png").default} alt="img" />
                        </div>
                        <div className="col-md-6">
                            <p>Dreaming of a mobile companion to help you and your family enjoy a healthier lifestyle?</p>
                            <h4>Think BIG4 Health App!</h4>

                            <div className="mt-4">
                                <p>Just download it.</p>
                                <a className="" href="/#">
                                    <img src={require("../images/ios.png").default} alt="img" />

                                </a>
                                <a className="ml-2" href="/#">
                                    <img src={require("../images/playstore.png").default} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mobile_sec1 my-4 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h5>Know your BIG4</h5>
                            <p className="mt-4">The BIG4 Health App empowers you and your loved
                            ones to take control of your health while enjoying the
                                    pleasure of life.</p>
                            <p className="mb-2 mt-4">It’s your true addition to your health care providers’ recommendations to prevent and control the BIG4:</p>
                            <h6>Diabetes – High Cholesterol – High Blood Pressure – BMI.</h6>
                        </div>
                        <div className="col-md-7">
                            <img src={require("../images/mob2.png").default} alt="img" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="benifits_section my-4 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center mb-5">
                            <h2>Benefits of the BIG4 Health App?</h2>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="icon_box">
                                    <img src={require("../images/dummy.png").default} alt="img" />
                                </div>
                                <div className="ml-3">
                                    <p>Track your blood pressure and learn how to improve it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="icon_box">
                                    <img src={require("../images/bloodglucose.png").default} alt="img" />
                                </div>
                                <div className="ml-3">
                                    <p>Track your blood glucose and learn how it can affect your health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="icon_box">
                                    <img src={require("../images/chl.png").default} alt="img" />
                                </div>
                                <div className="ml-3">
                                    <p>Track your cholesterol and learn the benefits of maintaining a healthy level.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex align-items-center">
                                <div className="icon_box">
                                    <img src={require("../images/bmi1.png").default} alt="img" />
                                </div>
                                <div className="ml-3">
                                    <p>Track your BMI and learn how to reach or maintain a healthy BMI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="built_sec my-4 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 mb-5 text-center">
                            <h5>BUILT ON THE SOLID</h5>
                            <h5>FOUNDATIONS OF HOLISTIC HEALTH</h5>
                        </div>
                        <div className="col-md-6 mb-3">

                            <img src={require("../images/built.png").default} alt="img" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <ul className="m-0 p-0">
                                <li>EAT HEALTHY FOODS</li>
                                <li>EXERCISE 30 MINUTES DAILY</li>
                                <li>SLEEP FOR 7-8 HOURS A DAY</li>
                                <li>MANAGE YOUR STRESS</li>
                                <li>DEVELOP HEALTHY RELATIONSHIPS</li>
                                <li>AVOID TOBACCO AND RISKY SUBSTANCE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="connected_sec my-4 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-left">
                            <h5>You win by staying connected</h5>
                        </div>
                        <div className="col-md-12 mb-3">
                            <ul className="m-0 p-0">
                                <li>You can volunteer to share your numbers and graphs with your doctor, nurses, PA, or counselor.</li>
                                <li>One click to call the National Suicide Prevention Lifeline (logo).</li>
                                <li>FREE weekly or monthly recipes for healthy breakfast, healthy lunch, and healthy dinner.</li>
                                <li>Get constant health news.</li>
                                <li>Celebrate with your network as you improve your lifestyle.</li>
                            </ul>
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


            <Modal show={showHide} className="quizmodal"
             aria-labelledby="contained-modal-title-vcenter"
             centered
            >
                <Modal.Header className="border-0 mb-1 pb-1">
                    <Modal.Title>Are you ready to start the BIG4 Quiz?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row pb-2">
                            <div className="col-md-12">
                                <p>You have 2 minutes to complete the quiz.</p>
                                <p>There is no way to comeback if you quit the quiz in the middle.</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <aside className="col-sm-6">
                                <span className="not_btn">
                                    <button className="btn" onClick={() => handleModalShowHide('', 'NEW')}>NOT NOW</button>
                                </span>
                            </aside>
                            <aside className="col-sm-6">
                                <span className="start_btn">
                                    <a className="btn" onClick={() => startQuiz()} >START QUIZ</a>
                                </span>
                            </aside>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>

        </>
    )
}


export default Home;