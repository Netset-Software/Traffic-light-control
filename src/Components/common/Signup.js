import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { userService } from '../../services';
import Loader from './Loader';


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
  const [recieveNotificationAndPromotions, setRecieveNotificationAndPromotions] = useState(false);
  const [acceptPrivacyTerms, setAcceptPrivacyTerms] = useState(false);
  const [isFormValidate, setIsFormValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpType, setSignUpType] = useState("Standard");
  const [fbId, setFbId] = useState("");
  const [isEmailAlreadyExist, setIsEmailAlreadyExist] = useState(false);

  const heightList = ["4", "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", "5", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "6", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", "7"];

  useEffect(() => {
    let socialLogin = localStorage.getItem('socialLogin');
    if (socialLogin !== null && socialLogin.length > 0){
      socialLogin = JSON.parse(socialLogin);
      if (socialLogin.signUpType === 'Facebook' || socialLogin.signUpType === 'Google'){
        setSignUpType(socialLogin.signUpType);
        setEmail(socialLogin.email);
        setFbId(socialLogin.fbId);
        setPassword(Math.floor(Math.random() * 1000000000));
        setIsEmailAlreadyExist(socialLogin.email.length > 0 ? true : false);
      }
      // else{
      //   toast.error("Something went Wrong");
      // }
    }
  }, []);

  function validateStep1() {
    var emailRegrex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (firstName === ''){
      toast.error('Please Enter First Name');
    }else if (lastName === ''){
      toast.error('Please Enter Last Name');
    }else if (phoneNumber === '' || phoneNumber === undefined){
      toast.error('Please Enter Phone Number');
    }else if (!/^\d+$/.test(phoneNumber.slice(1,))){
      toast.error('Invalid Phone Number');
    }else if (email === ''){
      toast.error('Please Enter Email');
    }else if(!emailRegrex.test(email)){
      toast.error("Invalid Email");
    }else if (password === ''){
      toast.error('Please Enter Password');
    }else if (address === ''){
      toast.error('Please Enter Address');
    }else if (zip === ''){
      toast.error('Please Enter Zip');
    }else if (profilePic === ''){
      toast.error('Please Select Profile Picture');
    }else{
     setTimeout(() => {
          setCurrentStep(2);
        }, 100);
    }
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
    }else if (highBP <= lowBP ) {
      toast.error('Invalid High and Low BP ');
    } else if (glucose === '') {
      toast.error('Please Enter Glucose');
    }else if (!/^\d+(\.\d+)?$/.test(glucose) || /^[0.]+$/.test(glucose)) {
      toast.error('Invalid Glucose');
    }else if (cholesterol === '') {
      toast.error('Please Enter Cholesterol');
    }else if (!/^\d+(\.\d+)?$/.test(cholesterol) || /^[0.]+$/.test(cholesterol)) {
      toast.error('Invalid Cholesterol');
    }else if (!acceptPrivacyTerms){
      toast.error('Please Accept Terms and Condtions');
    }else {
      if (bmi === '' || bmi === 'null'){
        toast.error('we are calculating a BMI. Please wait...');
      }else{
        createProfile();
      }
    }
  }

  function handleProfilePicData(e) {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
      setProfilePicURL(URL.createObjectURL(e.target.files[0]))
    }
  }

  function getParams() {
    var date = new Date().getDate(); //Current Date
        var year = new Date().getFullYear(); //Current Year
        var month = new Date().getMonth() + 1
        var day = new Date().getDay() + 1
        // this.setState({ offset: (new Date().getTimezoneOffset() / 60) * -1 }, () => {
        //     console.log(this.state.offset)
        // })
        // this.setState({ Currentdate: month + '-' + date + '-' + year, dayNumber: day })
    var formData = new FormData();
    formData.append('firstName',firstName);
    formData.append('middleName',middleName);
    formData.append('lastName',lastName);
    formData.append('mobileNumber',phoneNumber);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('address',address);
    formData.append('zipCode',zip);
    formData.append('profilePicture',profilePic);
    formData.append('age',age);
    formData.append('gender',gender);
    formData.append('height',height);
    formData.append('weight',weight);
    formData.append('bloodPressureMin',lowBP);
    formData.append('bloodPressureMax',highBP);
    formData.append('glucose',glucose);
    formData.append('cholesterol',cholesterol);
    formData.append('bmi',bmi);
    formData.append('recieveNotificationAndPromotions',recieveNotificationAndPromotions ? 1 : 0);
    formData.append('signUpType',signUpType);
    formData.append('userOffSet','');
    formData.append('dayNumber','');
    formData.append('metricsDate',month + '-' + date + '-' + year);
    formData.append('screenNumber','');
    formData.append('numberOfPrescribeMedications','');
    formData.append('reminderForMedicines','');
    formData.append('reminderForMedicinesTime','');
    formData.append('fbId',fbId);
    formData.append('medicationTimers','');
    formData.append('weightMeasurement','');
    formData.append('appleId','');
    formData.append('deviceInfo','');
    formData.append('doctorAppointment','');
    
    return formData;
  }

  function createProfile() {
    setIsLoading(true);
    userService.signUp(getParams()).then((response) => {
      let status = response.data.status;
      if (status == 200){
        localStorage.setItem('user_id', response.data.data[0]._id);
        toast.success("Profile Created Successfully");
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }else if(status == 202){
        setIsLoading(false);
        toast.error("Profile Already Exist");
      }else{
        setIsLoading(false);
        toast.error("Some Error Occur");
      }
      
    }).catch((error) => {
      setIsLoading(false);
      toast.error("Some Error Occur");
      // userService.handleError(error);
      console.log("error ", error);
    });
  }

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  function handleHeightWeight(val, typ){
    setBmi('');
    if (typ === 'Weight'){
      setWeight(val);
      if (height !== 'Height') calculateBMI(height, val);
    }else{
      setHeight(val);
      if (weight !== 'Weight') calculateBMI(val, weight);
    }
  }

  function calculateBMI(h, w) {
    setIsLoading(true);
    let arry = h.split("'");
    let params = new URLSearchParams({
      'foot': arry[0],
      'inch': arry[1] ? arry[1] : 0,
      'weight': w,
    });
    userService.calculateBMI(params).then((response) => {
      setIsLoading(false);
      setBmi(response.data.data);
    }).catch((error) => {
      setBmi('');
      // userService.handleError(error);
      console.log("error ", error);
    });
  }

  return (
    <>
      {isLoading && <Loader/>}
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
                    <div className="row frist_step  ">
                      <aside className="col-md-6 mb-3 text-left">
                      <label>First Name</label>
                        <div className="input_row">
                         
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="First Name" className="input103 w-100" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Middle Name</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Middle Name" className="input103 w-100" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Last Name</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/user.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Last Name" className="input103 w-100" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                      </aside>
                      {/* <aside className="col-md-6 mb-3">
                          <div className="input_row">
                          <span><img src={require("../../../src/images/telephone.png").default} alt="img" /></span>
                            <input type="" name="" placeholder="000-000-0000" className="input103 w-100" onChange={(e) => setPhoneNumber(e.target.value)}/>
                          </div>
                      </aside> */} 
                      <aside className="col-md-6 mb-3 text-left" >
                      <label>Phone Number</label>
                      <div className="input_row">
                        <PhoneInput
                          placeholder="Phone Number"
                          value={phoneNumber}
                          maxLength="15"
                          className="custom-phone-input"
                          onChange={(value) => setPhoneNumber(value)}
                        />
                      </div>
                      </aside>
                      {!isEmailAlreadyExist && 
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Email Address</label>
                        <div className="input_row">
                          <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                          <input type="" name="" placeholder="Email Address" className="input103 w-100" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </aside>}
                      {!isEmailAlreadyExist && 
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Password</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/padlock.png").default} alt="img" /></span>
                          <input type="password" name="" placeholder="Password" className="input103 w-100" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </aside>
                      }
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Address</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/state.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Address" className="input103 w-100" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>ZIP Code</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/zip.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Enter ZIP Code" className="input103 w-100" value={zip} onChange={(e) => setZip(e.target.value)} />
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
                  <a className="btn" onClick={() => validateStep1()}>NEXT</a>
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
                    <div className="row frist_step">
                      <aside className="col-md-6 mb-3 text-left">
                        <label>Age</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/age.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select" value={age} onChange={(e) => setAge(e.target.value)}>
                                <option default className="dflt">Age</option>
                                {range(18, 100).map((val) => {
                                  return (<option>{val}</option>)
                                })}

                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Gender</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/gender.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Height</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/height.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select" value={height} onChange={(e) => handleHeightWeight(e.target.value, 'Height')}>
                                <option>Height</option>
                                {heightList.map((val) => {
                                  return (<option>{val}</option>)
                                })}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Weight</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/weight.png").default} alt="img" /></span>
                          <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" className="input103">
                              <Form.Control as="select"  value={weight} onChange={(e) => handleHeightWeight(e.target.value, 'Weight')}>
                                <option>Weight</option>
                                {range(40, 400).map((val) => {
                                  return (<option>{val}</option>)
                                })}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                        <div className="row">
                        
                          <aside className="col-md-6">
                          <label>Low BP</label>
                            <div className="input_row">
                              <span><img src={require("../../../src/images/bp.png").default} alt="img" /></span>
                              <input type="" name="" placeholder="Low BP" className="input103 w-100" value={lowBP} onChange={(e) => setLowBP(e.target.value)}/>
                            </div>
                          </aside>
                          <aside className="col-md-6 text-left">
                          <label>High BP</label>
                            <div className="input_row">
                              <span></span>
                              <input type="" name="" placeholder="High BP" className="input103 w-100" value={highBP} onChange={(e) => setHighBP(e.target.value)}/>
                            </div>
                          </aside>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Glucose</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/glucose.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Glucose" className="input103 w-100" value={glucose} onChange={(e) => setGlucose(e.target.value)}/>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>Cholesterol</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/cholesterol.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="Cholesterol" className="input103 w-100" value={cholesterol} onChange={(e) => setCholesterol(e.target.value)}/>
                        </div>
                      </aside>
                      <aside className="col-md-6 mb-3 text-left">
                      <label>BMI</label>
                        <div className="input_row">
                          <span><img src={require("../../../src/images/bmi.png").default} alt="img" /></span>
                          <input type="" name="" placeholder="BMI" className="input103 w-100" value={bmi ? Number(bmi).toFixed(2) : ''} />
                        </div>
                      </aside>
                      <aside className="col-md-12 axxpt_row mt-3">
                        <label className="d-flex align-items-center">
                          <input type="checkbox" name="remember" className="remem mr-2" defaultChecked={recieveNotificationAndPromotions} onClick={() => setRecieveNotificationAndPromotions(!recieveNotificationAndPromotions)} />Receive Health Related News Promotions
                        </label>
                        <label className="d-flex align-items-center">
                          <input type="checkbox" name="remember" className="remem mr-2" defaultChecked={acceptPrivacyTerms} onClick={() => setAcceptPrivacyTerms(!acceptPrivacyTerms)}/> Accept Our <a className="mx-1"> Privacy Policy</a>  and  <a className="ml-1"> Terms And Conditions</a>
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
                    <a className="btn"  onClick={() => validateStep2()}>SIGN UP</a>
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