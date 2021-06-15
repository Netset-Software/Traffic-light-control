import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, fieldset } from 'react-bootstrap';
import Timer from './common/Timer'
import {userService} from '../services'

const Quiz = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [showHide, setShowHide] = useState(false);
    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 120);
    const [quizId, setQuizId] = useState({});
    const [quizData, setQuizData] = useState({});
    const [quizTime, setQuizTime] = useState('');
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [answersList, setAnswersList] = useState([]);


    useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        setQuizId(query.get('id'));
        getQuizData(query.get('id'));
    }, []);

    function getQuizData(id) {
        userService.getQuiz(id).then((response) => {
            let data = response.data.data;
            setQuizData(data);
            setTotalQuestions(data.questions.length);
            setAnswersList(Array.from(Array(data.questions.length), () => false))
            setTimeout(() => {
                let time = new Date();
                setQuizTime(time.setSeconds(time.getSeconds() + 120));
              }, 300);
        }).catch((error) => {
            setQuizData({});
            setQuizTime(0);
            console.log("error ", error);
        });
    }

    function handleModalShowHide1() {
        setShowHide(true);
    }

    
    const _next = () => {
        setCurrentStep(currentStep >= totalQuestions-1 ? totalQuestions : currentStep + 1);
    }

    // const _next = () => {
    //     setCurrentStep(currentStep >= 4 ? 5 : currentStep + 1)
    // }

    //const_prev = () => {  
    // setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1)
    // }

    //   function previousButton() {
    //     if(currentStep !== 1){
    //       return (
    //         <button 
    //           className="btn btn-secondary" 
    //           type="button" onClick={_prev}>
    //         Previous
    //         </button>
    //       )
    //     }
    //     return null;
    //   }

    function nextButton() {
        if (currentStep < totalQuestions) {
            return (
                <div className="next_btn text-center my-4">
                    <a className="btn" type="button" onClick={_next}>Next</a>
                </div>
            )
        } else {
            return (
                <div className="next_btn text-center my-4">
                    <a className="btn" onClick={() => handleModalShowHide1()}>SUBMIT</a>
                </div>)
        }
    }

    
    function handleSubmit() {

    }

    function onTimeExpire(){
        // alert('hello');
    }

    function calculateResult(){


    }


    return (
        <React.Fragment>
            <section className="quiz_section py-4">
                <div className="container">
                    {quizData.questions && quizData.questions.length > 0 && 
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row mb-3 align-items-center">
                                    <div className="col-sm-6 mob_col1">
                                    {/* {<h1 className="mb-0">Question <span>{currentStep}</span> of 5</h1>} */}

                                        <h1 className="mb-0">Question <span>{currentStep}</span> of {totalQuestions}</h1>
                                    </div>
                                    <div className="col-sm-6 mob_col">
                                        <div className="time_box">
                                            <p>Time Left</p>
                                            {quizTime && <Timer expiryTimestamp={quizTime} onTimeExpire={() => onTimeExpire()} />}
                                            {/* <h6>00 : 00</h6> */}
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    {quizData.questions && quizData.questions.length > 0 && quizData.questions.map((question, i) => {
                                        return( <Steps questionInfo={question} step={i + 1}/> )
                                    })}
                                    {/* <Step1
                                        currentStep={currentStep}

                                    />
                                    <Step2
                                        currentStep={currentStep}

                                    />
                                    <Step3
                                        currentStep={currentStep}

                                    />
                                    <Step4
                                        currentStep={currentStep}

                                    />
                                    <Step5
                                        currentStep={currentStep}


                                    /> */}
                                    {/* {previousButton()} */}
                                    {nextButton()}

                                </form>
                            </div>
                        </div>
                    }
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
                            <a className="" href="">
                                <img src={require("../images/ios.png").default} alt="img" />
                            </a>
                            <a className="pt-3 d-block" href="">
                                <img src={require("../images/playstore.png").default} alt="img" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            <Modal show={showHide} className="quizmodal1"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="border-0 mb-1 pb-1">
                    <Modal.Title>
                        <div className="check_box">
                            <img src={require("../images/check2.png").default} alt="img" />
                        </div>
                        <h4 className="mt-3">Congratulations!</h4>
                        <p className="pb-0 mb-3">You have won 5% discount on your next purchase.</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-md-6 result">
                                <h6>Result</h6>
                                <p>3 of 5</p>
                            </div>
                            <div className="col-md-6 result">
                                <h6>Time Spent</h6>
                                <p>1:23</p>
                            </div>
                        </div>
                        <div className="row pb-2 mt-3">
                            <div className="col-md-6 mb-3 redeem_btn">
                                <a className="btn" href="/result">REDEEM</a>
                            </div>
                            <div className="col-md-6 mb-3 share_btn">
                                <button className="btn">SHARE</button>
                            </div>
                            <div className="col-md-12 mb-2 home_btn">
                                <a className="btn" href="/">GO TO HOME</a>
                            </div>
                        </div>
                        {/* <div className="row mt-4">
                            <aside className="col-sm-6">
                                <span className="not_btn">
                                    <button className="btn" onClick={() => handleModalShowHide(false)}>NOT NOW</button>
                                </span>
                            </aside>
                            <aside className="col-sm-6">
                                <span className="start_btn">
                                    <a className="btn" href="/quiz">START QUIZ</a>
                                </span>
                            </aside>
                        </div> */}
                    </div>

                </Modal.Body>
            </Modal>

        </React.Fragment>

    );

    function Steps(props) {
        if (currentStep !== props.step) {
            return null
        }
        return (
            <div className="qstns_box">
                <h4>{props.questionInfo.title}</h4>
                <p className="mb-0 text-secondary mt-3">Choose Answer</p>
                <div className="answer_box mt-2">
                    <fieldset>
                        <Form.Group>
                            <Form.Label as="legend">
                            </Form.Label>
                            <Form.Check
                                type="radio"
                                label="Dreaming of a mobile companion."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={(e) => alert(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="Dreaming of a mobile."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Dreaming of a mobile companion."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                label="All of the Above."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                            <Form.Check
                                type="radio"
                                label="None."
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                            />
                        </Form.Group>
                    </fieldset>
                </div>
            </div>
        );
    }

    // function Step1(props) {
    //     // if (props.currentStep !== 1) {
    //     //     return null
    //     // }
    //     return (
    //         <div className="qstns_box">
    //             <h4>What are some things you can do to help support your brain health?</h4>
    //             <p className="mb-0 text-secondary mt-3">Choose Answer</p>
    //             <div className="answer_box mt-2">
    //                 <fieldset>
    //                     <Form.Group>
    //                         <Form.Label as="legend">
    //                         </Form.Label>
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile companion."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios1"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios2"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile companion."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios3"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="All of the Above."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios4"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="None."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios5"
    //                         />
    //                     </Form.Group>
    //                 </fieldset>
    //             </div>
    //         </div>
    //     );
    // }

    // function Step2(props) {
    //     if (props.currentStep !== 2) {
    //         return null
    //     }
    //     return (
    //         <div className="qstns_box">
    //             <h4>What are some things you can do to help support your brain health?</h4>
    //             <p className="mb-0 text-secondary mt-3">Choose Answer</p>
    //             <div className="answer_box mt-2 py-4">
    //                 <div className="row">
    //                     <div className="col-sm-4 text-center">
    //                         <div className="select_image">
    //                             <img src={require("../images/quizimg.png").default} alt="img" />
    //                             <span> <Form.Check
    //                                 type="radio"
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios1"
    //                             /></span>
    //                         </div>
    //                     </div>
    //                     <div className="col-sm-4 text-center">
    //                         <div className="select_image">
    //                             <img src={require("../images/quizimg2.png").default} alt="img" />
    //                             <span> <Form.Check
    //                                 type="radio"
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios1"
    //                             /></span>
    //                         </div>
    //                     </div>
    //                     <div className="col-sm-4 text-center">
    //                         <div className="select_image">
    //                             <img src={require("../images/quizimg3.png").default} alt="img" />
    //                             <span> <Form.Check
    //                                 type="radio"
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios1"
    //                             /></span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // function Step3(props) {
    //     if (props.currentStep !== 3) {
    //         return null
    //     }
    //     return (
    //         <div className="qstns_box">
    //             <h4>What are some things you can do to help support your brain health?</h4>
    //             <p className="mb-0 text-secondary mt-3">Choose Answer</p>
    //             <div className="answer_box mt-2">
    //                 <fieldset>
    //                     <Form.Group>
    //                         <Form.Label as="legend">
    //                         </Form.Label>
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile companion."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios1"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios2"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile companion."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios3"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="All of the Above."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios4"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="None."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios5"
    //                         />
    //                     </Form.Group>
    //                 </fieldset>
    //             </div>
    //         </div>
    //     );
    // }

    // function Step4(props) {
    //     if (props.currentStep !== 4) {
    //         return null
    //     }
    //     return (
    //         <div className="qstns_box">
    //             <h4>What are some things you can do to help support your brain health?</h4>
    //             <p className="mb-0 text-secondary mt-3">Choose Answer</p>
    //             <div className="answer_box mt-2">
    //                 <fieldset>
    //                     <Form.Group>
    //                         <Form.Label as="legend">
    //                         </Form.Label>
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios1"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios2"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="Dreaming of a mobile companion."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios3"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="All of the Above."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios4"
    //                         />
    //                         <Form.Check
    //                             type="radio"
    //                             label="None."
    //                             name="formHorizontalRadios"
    //                             id="formHorizontalRadios5"
    //                         />
    //                     </Form.Group>
    //                 </fieldset>
    //             </div>
    //         </div>
    //     );
    // }


    // function Step5(props) {
    //     if (props.currentStep !== 5) {
    //         return null
    //     }
    //     return (
    //         <React.Fragment>
    //             <div className="qstns_box">
    //                 <h4>What are some things you can do to help support your brain health?</h4>
    //                 <p className="mb-0 text-secondary mt-3">Choose Answer</p>
    //                 <div className="answer_box mt-2">
    //                     <fieldset>
    //                         <Form.Group>
    //                             <Form.Label as="legend">
    //                             </Form.Label>
    //                             <Form.Check
    //                                 type="radio"
    //                                 label="Dreaming of a mobile companion."
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios1"
    //                             />
    //                             <Form.Check
    //                                 type="radio"
    //                                 label="Dreaming of a mobile."
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios2"
    //                             />
    //                             <Form.Check
    //                                 type="radio"
    //                                 label="Dreaming of a mobile companion."
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios3"
    //                             />
    //                             <Form.Check
    //                                 type="radio"
    //                                 label="All of the Above."
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios4"
    //                             />
    //                             <Form.Check
    //                                 type="radio"
    //                                 label="None."
    //                                 name="formHorizontalRadios"
    //                                 id="formHorizontalRadios5"
    //                             />
    //                         </Form.Group>
    //                     </fieldset>
    //                 </div>
    //                 <div className="next_btn text-center my-4">
    //                     <button className="btn" onClick={() => handleModalShowHide1()}>SUBMIT </button>
    //                 </div>
    //             </div>
    //         </React.Fragment>
    //     );
    // }
}
export default Quiz;