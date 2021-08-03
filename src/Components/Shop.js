import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import SwiperCore, { Pagination, Navigation ,Autoplay} from 'swiper';
import {userService} from '../services';
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import { config } from '../config/config'



SwiperCore.use([Pagination, Navigation, Autoplay]);

const Shop = () => {

    const [categories, setCategories] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        setIsLoading(true);
        getCategories([]);
    }, []);

    function getCategories(searchTxt) {
        userService.getCategories(searchTxt).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200){
                setCategories(response.data.data);
              }else{
                setCategories([]);
                toast.error("Some Error Occur");
              } 
        }).catch((error) => {
            setIsLoading(false);
            setCategories([]);
            console.log("error ", error);
        });
    }

    function handleSearch(txt){
        setSearchText(txt);
        getCategories(txt);
    }

    function redirectToProducts(cat){
        localStorage.setItem('cat_name', cat.name);
        setTimeout(() => {
            window.location.href = `/product?id=${cat._id}`;
        }, 100);
    }

    return (
        <>
            {isLoading && <Loader/>}
            <section className="heading-search">
                <div className="container">
                    <h2>SHOP</h2>
                    {/* <div className="input-group search-box">
                        <input type="text" class="form-control" placeholder="Search by category name" aria-label="" aria-describedby="basic-addon1" onChange={(e) => handleSearch(e.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="banner pt-0 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-area-box">
                <div className="container">
                    <div className="row">
                        {categories.length > 0 && categories.map((cat) => {
                            return(<div className="col-md-3">
                                <a className="pointer" onClick={() => redirectToProducts(cat)}>
                                <div className="first-product text-center">
                                    <div className="product-image">
                                        <img src={cat.image ? config.imageUrl + cat.image : require("../images/no-image.png").default} alt="img" />
                                    </div>
                                    <p>{cat.name}</p>
                                </div>
                                </a>
                            </div>)
                        })}
                        {/* <div className="col-md-3">
                            <a href="/product">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/one.png").default} alt="img" />
                                </div>
                                <p>Covid Essentials</p>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/two.png").default} alt="img" />
                                </div>
                                <p>Devices</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/three.png").default} alt="img" />
                                </div>
                                <p>Nutrition & Fitness Supplement</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/four.png").default} alt="img" />
                                </div>
                                <p>Persnol Care</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/five.png").default} alt="img" />
                                </div>
                                <p>Baby & Mom Care</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="first-product text-center">
                                <div className="product-image">
                                    <img src={require("../images/six.png").default} alt="img" />
                                    <p>Diabetic Care</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {categories.length === 0 && !isLoading && <p className="no-categgory text-center">No Categories Available. </p>}
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


export default Shop;