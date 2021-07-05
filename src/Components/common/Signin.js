import React, { useState, useEffect } from 'react';
import { userService } from '../../services'
import { toast } from 'react-toastify';
import Loader from './Loader'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {config} from '../../config/config'


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  function onLogIn() {
    if (email === '') {
      toast.error("Please Enter Email")
    } else if (password === '') {
      toast.error("Please Enter Password")
    } else {
      setIsLoading(true);
      let params = {
        'email': email,
        'password': password,
        'loginType': 'Standard',
        'deviceInfo': { "token": '', "deviceType": 'web' }
      };
      userService.logIn(params).then((response) => {
        if (response.data.status == 200){
          localStorage.setItem('user_id', response.data.data[0]._id);
          localStorage.setItem('remember_me', rememberMe);
          toast.success("Successfully Signed-In");
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
        }else{
          setIsLoading(false);
          toast.error("Incorrect Email or Password");
        }       
      }).catch((error) => {
      });
    }
  }

   //for facebook Login 
   const responseFacebook = (response) => {
    console.log("response fackbook", response);
    if (!response.status) {
      const formData = new FormData();
      formData.append('signUpType', "Facebook");
      formData.append('screenNumber', 5);
      formData.append('email', response.email);
      formData.append('fbId', response.id);
      formData.append('deviceInfo', "{ token: '', deviceType: 'web' }");
      formData.append('appleId', "");
      formData.append('metricsDate', getDate());
      let socialLoginData = {signUpType: "Facebook", screenNumber: 5, email: response.email, fbId: response.id}
      socialLogin(formData, socialLoginData);
    }

  }

  function getDate(){
    var date = new Date().getDate(); //Current Date
        var year = new Date().getFullYear(); //Current Year
        var month = new Date().getMonth() + 1
        var day = new Date().getDay() + 1
        return month + '-' + date + '-' + year;
  }

  function responseGoogle(response) {
    console.log("google response",response);
    if(response.profileObj){
      const formData = new FormData();
      formData.append('signUpType', "Google");
      formData.append('screenNumber', 5);
      formData.append('email', response.profileObj.email);
      formData.append('fbId', '');
      formData.append('deviceInfo', "{ token: '', deviceType: 'web' }");
      formData.append('appleId', "");
      formData.append('metricsDate', getDate());
      let socialLoginData = {signUpType: "Google", screenNumber: 5, email: response.profileObj.email, fbId: ''}

      socialLogin(formData, socialLoginData);
    }
  }
  //for social login
  const socialLogin = (params, socialLoginData) => {
    setIsLoading(true);
    userService.socialLogin(params).then(function (response) {
      localStorage.clear();
      if (response.data.status == 200){
        localStorage.setItem('user_id', response.data.data[0]._id);
        toast.success("Successfully Signed-In");
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }else if(response.data.status === 202){
        setIsLoading(false);
        localStorage.setItem('socialLogin', JSON.stringify(socialLoginData));
        // toast.error("Profile Already Exist");
        window.location.href = '/signup'
      }else{
        setIsLoading(false);
        toast.error("Some Error Occur");
      }
    }).catch(function (error) {
      console.log("social loginn error", error);
    })
  }

  const handleKeypress = e => {
    if (e.charCode === 13) onLogIn();
  }

  return (
    <>
    {isLoading && <Loader/>}
      <section className="bg_section py-5">
        <div className="container">
          <div className="row">
            <aside className="col-md-12 col-sm-12 pt-4">
              <div className="Signup_box text-center">
                <h5>SIGN IN</h5>
                <p className="text-secondary">Sign in with your email and password</p>
                <form className="py-4">
                  <div className="row">
                    <aside className="col-md-12 mb-3">
                      <div className="input_row">
                        <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                        <input onKeyPress={handleKeypress} type="text" name="" placeholder="Email Address" className="input103 w-100" onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                    </aside>
                    <aside className="col-md-12 mb-3">
                      <div className="input_row">
                        <span><img src={require("../../../src/images/padlock.png").default} alt="img" /></span>
                        <input onKeyPress={handleKeypress} type="password" name="" placeholder="Password" className="input103 w-100" onChange={(e) => setPassword(e.target.value)}/>
                      </div>
                    </aside>
                    <aside className="col-md-12 my-2">
                      <div className="d-flex justify-content-between">
                        <label className="d-flex align-items-center">
                          <input type="checkbox" name="remember" className="remem mr-1" onClick={() => setRememberMe(!rememberMe)}/> Remember me
                                </label>
                        <h6 className="psw"> <a href="/forgotpassword">Forgot Password?</a></h6>
                      </div>
                    </aside>
                    <aside className="col-md-12 mt-3 sign_btn">
                      <a className="btn" onClick={() => onLogIn()}>SIGN IN</a>
                    </aside>
                    <aside className="col-md-12">
                      <div className="login_footer my-4 p-0 text-center ">
                        <div className="or_line mb-2">
                          OR
                        </div>
                        <div>
                          <h6 className="text-secondary">Sign in with your social account below</h6>
                        </div>

                      </div>
                    </aside>
                    <aside className="col-sm-12">
                      <div className="row">
                        <aside className="col-sm-6">
                          <span className="google_btn">
                            {/* <button className="btn">GOOGLE</button> */}
                            <GoogleLogin
                              clientId={config.googleClientId}
                              render={renderProps => (
                                <a onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn" >GOOGLE</a>
                              )}
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                            />
                          </span>
                        </aside>
                        <aside className="col-sm-6">
                          <span className="facebook_btn">
                            {/* <button className="btn">FACEBOOK</button> */}
                            <FacebookLogin
                              appId={config.fbAppId}
                              cssClass="btn"
                              fields="name,email,picture"
                              callback={responseFacebook}
                              textButton="FACEBOOK"
                            />
                          </span>
                        </aside>
                      </div>
                    </aside>
                  </div>
                </form>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;