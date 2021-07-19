import React from 'react'

const Profile = () => {
    return (
        <>
        <section className="py-5 profile_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">


                        <div className="text-center profile_img2">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"  />
                            <h6>Alex Smith</h6>
                            <p>Joined 2021-05-09</p>
                            <div className="text-center">
                                <input type="file" className="text-center center-block file-upload" />
                            </div>
                        </div>

                        <ul className="list-group mt-4">
                            <h6>Share with your doctor:</h6>
                            <li className="list-group-item text-left">
                                    <span className="bp"><strong>BLOOD PRESURE</strong></span>
                                    <p className="mb-0">90/120</p>
                            </li>
                            <li className="list-group-item text-left">
                                    <span className="gl"><strong>GLUCOSE</strong></span>
                                    <p className="mb-0">12 mg/dl</p>
                            </li>
                            <li className="list-group-item text-left">
                                    <span className="ch"><strong>CHOLESTEROL</strong></span>
                                    <p className="mb-0">12 mg/dl</p>
                            </li>
                            <li className="list-group-item text-left">
                                    <span className="bmi"><strong>BMI</strong></span>
                                    <p className="mb-0">9.31243124</p>
                            </li>
                        </ul>

                        <ul className="list-group mt-4">
                            <li className="list-group-item text-right">
                                <a className="" href="/#">
                                    <span className="pull-left"><strong>Settings</strong></span> <i className="fa fa-cog"></i>
                                </a> 
                            </li>
                            <li className="list-group-item text-right">
                                <a className="" href="/#">
                                    <span className="pull-left"><strong>Subscriptions</strong></span> <i className="fa fa-dollar"></i> 
                                </a>
                            </li>
                            <li className="list-group-item text-right">
                                <a className="" href="/#">
                                    <span className="pull-left"><strong>Reset Password</strong></span> <i className="fa fa-lock"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-9">
                        <div className="info_head">
                            <h5 className="mb-0">Information</h5>
                            <button className="edit_btn btn">Edit</button>
                        </div>
                            <div className="inforbox py-2 container-fluid mt-2">
                                <div className="row">
                                    <aside className="col-md-6 text-left my-2">
                                        <div className="input_row">
                                            <label>Email Address</label>
                                            <input type="text" name="" placeholder="Email Address" className="input103 w-100" value="info@gmail.com" disabled />
                                        </div>
                                    </aside>
                                    <aside className="col-md-6 text-left my-2">
                                        <div className="input_row">
                                        <label>Address</label>
                                        <input type="text" name="" placeholder="Address" className="input103 w-100" value="Mohali" disabled/>
                                        </div>
                                    </aside>
                                    <aside className="col-md-6 text-left my-2">
                                        <div className="input_row">
                                        <label>Height</label>
                                        <input type="text" name="" placeholder="Height" className="input103 w-100" value="5'4" disabled/>
                                        </div>
                                    </aside>
                                    <aside className="col-md-6 text-left my-2">
                                        <div className="row">
                                            <aside className="col-md-6">
                                                <div className="input_row">
                                                    <label>Weight</label>
                                                    <div class="">
                                                        <select class="form-control" id="exampleFormControlSelect1" disabled>
                                                        <option>kg</option>
                                                        <option>lbs</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </aside>
                                            <aside className="col-md-6">
                                                <div className="input_row">
                                                    <label style={{opacity:0}}>Weight</label>
                                                    <input type="text" name="" placeholder="Weight" className="input103 w-100" value="54" disabled/>
                                                </div>
                                            </aside>
                                        </div>
                                    </aside>

                                </div>
                            </div>
                    </div>

                </div>
            </div>
            </section>
        </>
            )
}
 export default Profile;