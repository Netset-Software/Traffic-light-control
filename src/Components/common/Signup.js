import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { userService } from '../../services'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

const Signup = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [showHide, setShowHide] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zip, setZip] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [profilePicURL, setProfilePicURL] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('Age');
  const [gender, setGender] = useState('Gender');
  const [height, setHeight] = useState('Height');
  const [weight, setWeight] = useState('Weight');
  const [lowBP, setLowBP] = useState('');
  const [highBP, setHighBP] = useState('');
  const [glucose, setGlucose] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [bmi, setBmi] = useState('');

  const heightList = ["4", "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", "5", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "6", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", "7"];

  // const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // alert('ew');
  }, []);

  function gotToStep2() {
    // (!/^\d+(\.\d+)?$/.test(value) || /^[0.]+$/.test(value))
    var emailRegrex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    // if (firstName === ''){
    //   toast.error('Please Enter First Name');
    // }else if (lastName === ''){
    //   toast.error('Please Enter Last Name');
    // }else if (phoneNumber === ''){phoneNumber.slice(1,)
    //   toast.error('Please Enter Phone Number');
    // }else if (!/^\d+$/.test(phoneNumber.slice(1,))){
    //   toast.error('Invalid Phone Number');
    // }else if (email === ''){
    //   toast.error('Please Enter Email');
    // }else if(!emailRegrex.test(email)){
    //   toast.error("Invalid Email");
    // }else if (password === ''){
    //   toast.error('Please Enter Password');
    // }else if (address === ''){
    //   toast.error('Please Enter Address');
    // }else if (zip === ''){
    //   toast.error('Please Enter Zip');
    // }else if (profilePic === ''){
    //   toast.error('Please Select Profile Picture');
    // }else{

     setTimeout(() => {
          setCurrentStep(2);
        }, 100);
    // }
  }

  function validateStep2() {
    if (age === 'Age') {
      toast.error('Please Select Age');
    } else if (gender === 'Gender') {
      toast.error('Please Select Gender');
    } else if (height === 'Height') {
      toast.error('Please Select Height');
    } else if (weight === 'Weight') {
      toast.error('Please Select Weight');
    } else if (lowBP === '') {
      toast.error('Please Enter Low BP');
    } else if (highBP === '') {
      toast.error('Please Enter High BP');
    } else if (!/^\d+(\.\d+)?$/.test(lowBP) || /^[0.]+$/.test(lowBP)) {
      toast.error('Invalid Low BP');
    } else if (!/^\d+(\.\d+)?$/.test(highBP) || /^[0.]+$/.test(highBP)) {
      toast.error('Invalid High BP');
    } else if (glucose === '') {
      toast.error('Please Enter Glucose');
    }else if (!/^\d+(\.\d+)?$/.test(glucose) || /^[0.]+$/.test(glucose)) {
      toast.error('Invalid Glucose');
    }else if (cholesterol === '') {
      toast.error('Please Enter Cholesterol');
    }else if (!/^\d+(\.\d+)?$/.test(cholesterol) || /^[0.]+$/.test(cholesterol)) {
      toast.error('Invalid Cholesterol');
    }else {
      createProfile(2);
    }
  }

  function handleProfilePicData(e) {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
      setProfilePicURL(URL.createObjectURL(e.target.files[0]))
    }
  }

  function getParams() {
    var formData = new FormData();
    formData.append('',);
    return formData;
  }

  function createProfile() {
    userService.signUp(getParams()).then((response) => {
      // setTimeout(() => {
      //     window.location.href = '/';
      //   }, 300);
    }).catch((error) => {
      userService.handleError(error);
      console.log("error ", error);
    });
  }

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  function setDropdownData(){
    if (age !== 'Age' && weight !== 'Weight' && height !== 'Height'){

    } 
  }

  return (
    <>
      {currentStep === 1 ?
        <section className="bg_section py-5 signup_section">
          <div className="container">
            <div className="row">
              <aside className="col-lg-3 col-md-4 col-sm-12 pt-4">
                <div className="Signup_box text-center w-100">
                  <h5>UPLOAD IMAGE</h5>
                  <div className="camera_box mt-3" style={{ position: 'relative' }}>
                    <input type="file" accept='image/*' onChange={(e) => handleProfilePicData(e)} onClick={e => (e.target.value = null)} />
                    {!profilePicURL ?
                      <a><i className="fa fa-camera"></i></a>
                      :
                      <img src={profilePicURL} />
                    }
                  </div>
                </div>
              </aside>
              <aside className="col-lg-9 col-md-8 col-sm-12 pt-4">
                <div className="Signup_box text-center w-100">
                  <h5>SIGN UP</h5>
                  <p className="text-secondary">Please fill with your details</p>
                  <form className="py-4">
                    <div className="row">
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="First Name" className="input103 w-100" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Middle Name" className="input103 w-100" onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Last Name" className="input103 w-100" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                      </aside>
                      {/* <aside className="col-md-6 mb-3">
                          <div className="input_row">
                          <span><img src={require("../../../src/images/telephone.png").default} alt="img" /></span>
                            <input type="" name="" placeholder="000-000-0000" className="input103 w-100" onChange={(e) => setPhoneNumber(e.target.value)}/>
                          </div>
                      </aside> */}
                      <aside className="col-md-6 mb-3">
                        <PhoneInput
                          placeholder="Phone Number"
                          value={phoneNumber}
                          maxLength="15"
                          className="custom-phone-input"
                          onChange={(value) => setPhoneNumber(value)}
                        />

                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                          <input type="" name="" placeholder="Email Address" className="input103 w-100" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/padlock.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Password" className="input103 w-100" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/state.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Address" className="input103 w-100" onChange={(e) => setAddress(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/zip.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Enter ZIP Code" className="input103 w-100" onChange={(e) => setZip(e.target.value)} />
                        </div>
                      </aside>

                      {/* <aside className="col-md-6 mb-3">
                          <div className="input_row">
                          <span><img src={require("../../../src/images/city.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                                <Form.Control as="select">
                                <option default>City</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>
                          </div>
                      </aside> */}



                      {/* <aside className="col-md-6 mb-3">
                          <div className="input_row">
                          <span><img src={require("../../../src/images/state.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                                <Form.Control as="select">
                                <option default>State</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            </Form>
                          </div>
                      </aside> */}

                      {/* <aside className="col-md-12">
                      <div className="input_row">
                          <span><img src={require("../../../src/images/zip.png").default} alt="img" /></span>
                            <input type="" name="" placeholder="Enter ZIP Code" className="input103 w-100" onChange={(e) => setZip(e.target.value)}/>
                          </div>
                      </aside> */}

                    </div>
                  </form>
                </div>
                <div className="next_btn text-center mt-4">
                  {/* <a className="btn" href="/signup2">NEXT</a> */}
                  <a className="btn" onClick={() => gotToStep2()}>NEXT</a>
                </div>
              </aside>

            </div>
          </div>
        </section>
        :
        <section className="bg_section py-5 signup_section2">
          <div className="container">
            <div className="row">
              <aside className="col-md-12 col-sm-12 pt-4">
                <div className="Signup_box text-center w-100">
                  <h5>SIGN UP</h5>
                  <p className="text-secondary">Please fill with your details</p>
                  <form className="pt-4 pb-2">
                    <div className="row">
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/age.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select">
                                <option default>Age</option>
                                {range(18, 100).map((val) => {
                                  return (<option>{val}</option>)
                                })}

                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/gender.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select" onChange={(e) => setGender(e.target.value)}>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/height.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select">
                                <option>Height</option>
                                {heightList.map((val) => {
                                  return (<option>{val}</option>)
                                })}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/weight.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select">
                                <option>Weight</option>
                                {range(40, 400).map((val) => {
                                  return (<option>{val}</option>)
                                })}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="row">
                          <aside className="col-md-6">
                            <div className="input_row">
                              <span><img src={require("../../../src/images/bp.png").default} alt="img" /></span>
                              <input type="" name="" placeholder="Low BP" className="input103 w-100" onChange={(e) => setLowBP(e.target.value)}/>
                            </div>
                          </aside>
                          <aside className="col-md-6">
                            <div className="input_row">
                              <span></span>
                              <input type="" name="" placeholder="High BP" className="input103 w-100" onChange={(e) => setHighBP(e.target.value)}/>
                            </div>
                          </aside>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/glucose.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Glucose" className="input103 w-100" onChange={(e) => setGlucose(e.target.value)}/>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/cholesterol.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Cholesterol" className="input103 w-100" onChange={(e) => setCholesterol(e.target.value)}/>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3">
                        <div className="input_row">
                          <span><img src={require("../../../src/images/bmi.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="BMI" className="input103 w-100" value={bmi} />
                        </div>
                      </aside>
                      <aside className="col-md-12 axxpt_row mt-3">
                        <label className="d-flex align-items-center">
                          <input type="checkbox" name="remember" className="remem mr-2" />Receive Health Related News Promotions
                        </label>
                        <label className="d-flex align-items-center">
                          <input type="checkbox" name="remember" className="remem mr-2" /> Accept Our <a className="mx-1"> Privacy Policy</a>  and  <a className="ml-1"> Terms And Conditions</a>
                        </label>
                      </aside>
                    </div>
                  </form>
                </div>
                <div className="step2btn">
                  <div className="back_btn text-center mt-4">
                    <a className="btn" onClick={() => setCurrentStep(1)} >BACK</a>
                  </div>
                  <div className="next_btn text-center mt-4">
                    <a className="btn"  >SIGN UP</a>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      }
    </>
  );
}

export default Signup;