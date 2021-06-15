import React from 'react';
import { Form } from 'react-bootstrap';
const Signup2 = () => {
  return (
    <>
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
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                            <Form.Control as="select">
                              <option default>Select Gender</option>
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
                              <option default>Height</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                              <option default>Weight</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                            <input type="" name="" placeholder="BP" className="input103 w-100" />
                          </div>
                        </aside>
                        <aside className="col-md-6">
                          <div className="input_row">
                            <span></span>
                            <input type="" name="" placeholder="80" className="input103 w-100" />
                          </div>
                        </aside>
                      </div>
                    </aside>
                    <aside className="col-md-6 mb-3">
                      <div className="input_row">
                        <span><img src={require("../../../src/images/glucose.png").default} alt="img" /></span>
                        <input type="" name="" placeholder="Glucose" className="input103 w-100" />
                      </div>
                    </aside>
                    <aside className="col-md-6 mb-3">
                      <div className="input_row">
                        <span><img src={require("../../../src/images/cholesterol.png").default} alt="img" /></span>
                        <input type="" name="" placeholder="Cholesterol" className="input103 w-100" />
                      </div>
                    </aside>
                    <aside className="col-md-6 mb-3">
                      <div className="input_row">
                        <span><img src={require("../../../src/images/bmi.png").default} alt="img" /></span>
                        <input type="" name="" placeholder="BMI" className="input103 w-100" />
                      </div>
                    </aside>
                    <aside className="col-md-12 axxpt_row mt-3">
                      <label className="d-flex align-items-center">
                        <input type="checkbox" name="remember" className="remem mr-2" />Receive Health Related News Promotions
                        </label>
                      <label className="d-flex align-items-center">
                        <input type="checkbox" name="remember" className="remem mr-2" /> Accept Our <a href="/#" className="mx-1"> Privacy Policy</a>  and  <a href="/#" className="ml-1"> Terms And Conditions</a>
                      </label>
                    </aside>
                  </div>
                </form>
              </div>
              <div className="step2btn">
                <div className="back_btn text-center mt-4">
                  <a className="btn" href="/signup">BACK</a>
                </div>
                <div className="next_btn text-center mt-4">
                  <a className="btn" href="/#" >SIGN UP</a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}

export default Signup2;