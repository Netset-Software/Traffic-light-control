import React, { useState, useEffect } from 'react';
import { userService } from '../../services'
import { toast } from 'react-toastify';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function onLogIn() {
    if (email === '') {
      toast.error("Please Enter Email")
    } else if (password === '') {
      toast.error("Please Enter Password")
    } else {
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
          }, 2000);
        }else{
          toast.error("Incorrect Email or Password");
        }       
      }).catch((error) => {
      });
    }
  }

  return (
    <>
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
                        <input type="text" name="" placeholder="Email Address" className="input103 w-100" onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                    </aside>
                    <aside className="col-md-12 mb-3">
                      <div className="input_row">
                        <span><img src={require("../../../src/images/padlock.png").default} alt="img" /></span>
                        <input type="password" name="" placeholder="Password" className="input103 w-100" onChange={(e) => setPassword(e.target.value)}/>
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
                            <button className="btn">GOOGLE</button>
                          </span>
                        </aside>
                        <aside className="col-sm-6">
                          <span className="facebook_btn">
                            <button className="btn">FACEBOOK</button>
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