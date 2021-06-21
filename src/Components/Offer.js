import React from 'react';

const Offer = () => {
    return (
        <>

<section className="offer_sction py-4">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                            <div><h5>Offers</h5></div>
                       </div>
                   </div>
                   <div className="row  mt-4">
                       <div className="col-lg-6 col-md-12 mb-3">
                       <div className="slider_box">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                    <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                    <button className="btn  mt-3">SHOP NOW</button>
                                </div>
                                <div className="col-md-6">
                                    <img src={require("../images/med1.png").default} alt="img"/>
                                </div>
                            </div>
                            </div>
                       </div>
                       <div className="col-lg-6 col-md-12 mb-3">
                       <div className="slider_box">
                            <div className="row align-items-center">
                                <div className="col-md-12 text-center">
                                    <img src={require("../images/offer1.png").default} alt="img"/>
                                </div>
                            </div>
                            </div>
                       </div>
                       <div className="col-lg-6 col-md-12 mb-3">
                       <div className="slider_box">
                            <div className="row align-items-center">
                                <div className="col-md-12 text-center">
                                    <img src={require("../images/offer2.png").default} alt="img"/>
                                </div>
                            </div>
                            </div>
                       </div>
                       <div className="col-lg-6 col-md-12 mb-3">
                       <div className="slider_box">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h1>WOW Life Science Omega-3 Fish Oil</h1>
                                    <p className="Price mt-2">Price: <span class="old">$15.50</span> <span className="ml-1 orignl">$12.60</span></p>
                                    <button className="btn  mt-3">SHOP NOW</button>
                                </div>
                                <div className="col-md-6">
                                    <img src={require("../images/med1.png").default} alt="img"/>
                                </div>
                            </div>
                            </div>
                       </div>
                   </div>
               </div>
           </section>
        </>
    )
}

export default Offer;