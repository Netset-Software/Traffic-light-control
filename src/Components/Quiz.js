import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, fieldset } from 'react-bootstrap';
import Timer from './common/Timer'
import { userService } from '../services'

const Quiz = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [showHide, setShowHide] = useState(false);
    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 120);
    const [quizId, setQuizId] = useState({});
    const [quizData, setQuizData] = useState({});
    const [quizTime, setQuizTime] = useState('');
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [collectedAnswer, setCollectedAnswer] = useState([]);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [showhowResultWithAnswer, setShowResultWithAnswer] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);



    useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        setQuizId(query.get('id'));
        getQuizData(query.get('id'));
    }, []);

    function getQuizData(id) {
        userService.getQuiz(id).then((response) => {
            let data = response.data.data;
            let tmpArry = [];
            setQuizData(data);
            setTotalQuestions(data.questions.length);
            for(let i = 0; i < data.questions.length; i++){
                tmpArry.push({isRight: false, answerIndex: -1});
            }
            setCollectedAnswer(tmpArry);
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
        setCurrentStep(currentStep >= totalQuestions - 1 ? totalQuestions : currentStep + 1);
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
                    {/* <a className="btn" onClick={() => calculateResult()}>SUBMIT</a> */}
                    <a className="btn" onClick={() => submitQuiz()}>SUBMIT</a>
                </div>)
        }
    }


    function submitQuiz() {
        // userService.submitQuiz().then((response) => {
            
        // }).catch((error) => {
        // });
    }

    function onTimeExpire() {
        calculateResult();
    }

    function calculateResult() {
        setIsSubmit(true);
        let tmpArry = [];
        collectedAnswer.map((item, i) => {if (item.isRight) tmpArry.push(true)});
        setRightAnswers(tmpArry.length);
        handleModalShowHide1();
    }

    function handleAnswerOptions(isRight, questionNo, answerIndex) {
        let tmpArry = collectedAnswer;
        tmpArry[questionNo] = {isRight: isRight, answerIndex: answerIndex};
        setCollectedAnswer(tmpArry);
    }


    const Result = () => {
        return (
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 reuslt_title">
                            <h1 className="mb-0 ">BIG4 Quiz Results</h1>
                            <h2 className="mb-0 mt-3">Score {rightAnswers} of {totalQuestions}</h2>
                            <p>You have won 5% discount on your next purchase.</p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div className="signin_btn">
                                <a className="btn" href="/redeem">REDEEM</a>
                            </div>
                        </div>
                    </div>
                    {quizData.questions && quizData.questions.length > 0 && quizData.questions.map((question, i) => {


                        return (<div className="row mb-4">
                            <div className="col-sm-12">
                                <label className="qstn_label">Question {i + 1}</label>
                            </div>
                            <div className="col-sm-12 text-left">
                                <div className="qstns_box">
                                    <h4>{question.title}</h4>
                                    <div className="answer_box1 mt-1 py-2">
                                        <ul className="m-0 p-0">
                                            {question.answers.map((answer, j) => {
                                                    let ansClass = collectedAnswer[i] ? "correct_ans" : "wrong_ans";
                                                    let imageSrc = require(collectedAnswer[i] ? "../images/check.png" : "../images/remove.png").default
                                                return (<li className={ansClass}>
                                                    <span><img src={imageSrc} className="mr-2" alt="img" />{answer.value}.</span>
                                                    <span><label class="qstn_label">YOUR ANSWER</label></span>
                                                </li>)
                                            })}


                                            {/* <li className="correct_ans">
                                                <span><img src={require("../images/check.png").default} className="mr-2" alt="img" />Dreaming of a mobile companion.</span>
                                                <span><label class="qstn_label">CORRECT ANSWER</label></span>
                                            </li>
                                            <li className="wrong_ans">
                                                <span><img src={require("../images/remove.png").default} className="mr-2" alt="img" />Dreaming of a mobile companion.</span>
                                                <span> <label class="wrong_label">YOUR ANSWER</label></span>
                                            </li>
                                            <li><span><img src={require("../images/uncheck.png").default} className="mr-2" alt="img" />Dreaming of a mobile companion. </span></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </section>

        );
    }

    function showResultsWithAnswer() {
        setTimeout(() => {
            setShowResultWithAnswer(true);
        }, 1500);
    }

    return (
        <div>
            {showhowResultWithAnswer ? <Result /> :
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
                                                    {quizTime && <Timer expiryTimestamp={quizTime} onTimeExpire={() => onTimeExpire()} isSubmit={isSubmit}/>}
                                                    {/* <h6>00 : 00</h6> */}
                                                </div>
                                            </div>
                                        </div>
                                        <form>
                                            {quizData.questions && quizData.questions.length > 0 && quizData.questions.map((question, i) => {
                                                return (<Steps questionInfo={question} step={i + 1} />)
                                            })}
                                           
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
                                        <p>{rightAnswers} of {totalQuestions}</p>
                                    </div>
                                    <div className="col-md-6 result">
                                        <h6>Time Spent</h6>
                                        <p>1:23</p>
                                    </div>
                                </div>
                                <div className="row pb-2 mt-3">
                                    <div className="col-md-6 mb-3 redeem_btn">
                                        <a className="btn" onClick={() => showResultsWithAnswer()}>REDEEM</a>
                                        {/* <a className="btn" href="/result">REDEEM</a>showResultsWithAnswer */}

                                    </div>
                                    <div className="col-md-6 mb-3 share_btn">
                                        <button className="btn">SHARE</button>
                                    </div>
                                    <div className="col-md-12 mb-2 home_btn">
                                        <a className="btn" href="/">GO TO HOME</a>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>

                </React.Fragment>
            }
        </div>

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
                            {props.questionInfo.answers.map((option, i) => {
                                return (<Form.Check
                                    type="radio"
                                    label={option.value}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onClick={() => handleAnswerOptions(option.isRight, props.step - 1, i)}
                                />)
                            })}
                        </Form.Group>
                    </fieldset>
                </div>
            </div>
        );
    }

}
export default Quiz;