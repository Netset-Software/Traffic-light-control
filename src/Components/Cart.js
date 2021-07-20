const Cart = () => {
    return(
        <>
        <section className="py-4">
            <div className="container">
                <div className="row">
                
                    <aside className="col-lg-9">
                    <h5 className="mb-4">Your Shoping Cart</h5>
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
                        <hr />
                    </aside>
                    <aside className="col-lg-3 summry">
                        <div className="card">
                            <div className="card-body">
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
                                <dl className="dlist-align">
                                    <dt>Total:</dt>
                                    <dd className="text-right b ml-3"><strong>$59.97</strong></dd>
                                </dl>
                                <hr /> <a href="/checkout" className="btn btn-out btn-success btn-square btn-main w-100 shadow">Checkout </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            </section>
        </>
    )   
}
export default Cart;