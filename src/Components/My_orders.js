import React,{useState} from  'react'
import Header from './common/Header'
import { Swiper, SwiperSlide, Navigation, } from 'swiper/react';
import { Modal } from 'react-bootstrap';
import Footer from './common/Footer'
import {Nav, Tab, Row, Col} from 'react-bootstrap'


const My_orders =() => {
    const [lgShow, setLgShow] = useState(false);

    return(
        <>
        <Header />
            <section className="py-4 orders_section"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="add_head justify-content-center d-block mb-3 text-left">
                                    <h6 className="mb-0" style={{fontSize:"20px"}}>My Orders</h6>
                            </div>
                        </div>
                        <div className="col-md-12">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                            <Col sm={12}>
                                <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Past</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Cancelled</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        {/* <div className="no_data text-center">
                                            <img src={require('../images/nodata.png').default} alt="" />
                                            <h4>No data found.</h4>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/details">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                     </a>
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <a className="btn cancelorder_btn shadow pointer mt-3 mb-2 text-white" onClick={() => setLgShow(true)}>Cancel Order </a>   
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/details">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                    </a>
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <a className="btn cancelorder_btn shadow pointer mt-3 mb-2 text-white" onClick={() => setLgShow(true)}>Cancel Order </a>   
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/details">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/dlvry.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <a className="btn cancelorder_btn shadow pointer mt-3 mb-2 text-white" onClick={() => setLgShow(true)}>Cancel Order </a>   
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/details">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                            <img src={require('../images/dlvry.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <a className="btn cancelorder_btn shadow pointer mt-3 mb-2 text-white" onClick={() => setLgShow(true)}>Cancel Order </a>   
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/details">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                               <img src={require('../images/dlvry.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <a className="btn cancelorder_btn shadow pointer mt-3 mb-2 text-white" onClick={() => setLgShow(true)}>Cancel Order </a>   
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        {/* <div className="no_data text-center">
                                            <img src={require('../images/nodata.png').default} alt="" />
                                            <h4>No data found.</h4>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/past_order">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/past.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <h5 className="my-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews"></a></span></h5>  
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/past_order">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/past.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                       
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <h5 className="my-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews"></a></span></h5>  
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/past_order">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/past.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                             <h5 className="my-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews"></a></span></h5>  
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/past_order">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/past.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            <h5 className="my-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><span><a href="/reviews"></a></span></h5>    
                                                        </div>
                                                        </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                        {/* <div className="no_data text-center">
                                            <img src={require('../images/nodata.png').default} alt="" />
                                            <h4>No data found.</h4>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/cancelled">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/cancellation.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/cancelled">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/cancellation.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                       
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                          
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/cancelled">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/cancellation.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                           
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 mb-3">
                                                <div className="product-list-box mt-0">
                                                    <a href="/cancelled">
                                                        <div className="product-list-image text-center">
                                                            <img src={require("../images/fish_oil1.png").default} alt="img" />
                                                            <span className="confirmed">
                                                                <img src={require('../images/cancellation.svg').default} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <div className="product-list-details">
                                                            <h4>WOW Life Science Omega-3 Fish Oil</h4>
                                                            <h6 className="my-2">May 20,2021 & 10:15 AM</h6>
                                                            <h5><span className="discount-amount mr-1">$13.95</span> | <span className="ml-1">Qty: 1</span></h5>
                                                            
                                                        </div>
                                                        </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Tab.Pane>
                                </Tab.Content>
                            </Col>
                            </Row>
                            </Tab.Container>
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
export default My_orders;