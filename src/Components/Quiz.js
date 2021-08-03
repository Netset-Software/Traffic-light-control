
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, fieldset } from 'react-bootstrap';
import Timer from './common/Timer'
import { userService } from '../services'
import { toast } from 'react-toastify';
import Loader from './common/Loader'
import { config } from '../config/config'
import ShareOnSocialMedia from './common/ShareOnSocialMedia'

const Quiz = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [showHide, setShowHide] = useState(false);
    const [quizId, setQuizId] = useState({});
    const [quizData, setQuizData] = useState({});
    const [quizTime, setQuizTime] = useState('');
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [collectedAnswer, setCollectedAnswer] = useState({});
    const [answerList, setAnswerList] = useState([]);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isAutoSubmit, setIsAutoSubmit] = useState(true);
    const [quizCompletionTime, setQuizCompletionTime] = useState('');
    const [maxQuizTime, setMaxQuizTime] = useState(0);



    useEffect(() => {
        if (localStorage.getItem('done') === "true") window.location.href = '/';
        localStorage.setItem('done', true);
        let query = new URLSearchParams(window.location.search);
        setQuizId(query.get('id'));
        getQuizData(query.get('id'));
    }, []);

    function getQuizData(id) {
        setIsLoading(true);
        userService.getQuiz(id).then((response) => {
            if (response.data.status === 200){
                let data = response.data.data;
                let tmpArry = [];
                let tmpArry2 = [];
                setQuizData(data);
                setTotalQuestions(data.questions.length);
                for(let i = 0; i < data.questions.length; i++){
                    tmpArry.push({quesId: data.questions[i]._id, answer: 0});
                    tmpArry2.push(false);
                }
                setAnswerList(tmpArry2);
                setCollectedAnswer({quizId: id, questions:tmpArry});
                setIsLoading(false);
                setTimeout(() => {
                    let time = new Date();
                    setMaxQuizTime(120);
                    setQuizTime(time.setSeconds(time.getSeconds() + 120));
                }, 300);
            }else{
                setIsLoading(false);
                setQuizData({});
                setQuizTime(0);
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            setQuizData({});
            setQuizTime(0);
            toast.error("Some Error Occur");
            console.log("error ", error);
        });
    }

    function handleModalShowHide1() {
        setShowHide(true);
    }


    const _next = () => {
        if (collectedAnswer.questions[currentStep-1].answer === 0){
            toast.error("Please choose the answer")
        }else{
            setCurrentStep(currentStep >= totalQuestions - 1 ? totalQuestions : currentStep + 1);
        }
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
                    <a className="btn" onClick={() => onSubmitBeforeTimeout()}>SUBMIT</a>
                </div>)
        }
    }

    function getFormatedTime(timeInSeconds){
        let diff = maxQuizTime - timeInSeconds;
        let tmpTime = (diff/60).toFixed(0) + ':' + (diff%60).toFixed(0);
        setQuizCompletionTime(tmpTime);
       return tmpTime;
    }

    function onTimeExpire() {
        if (collectedAnswer.questions[0].answer === 0){
            alert("Your Time is Up.")
            window.location.href = '/';
        }else{
            if (isAutoSubmit) calculateResult(getFormatedTime(0));
        }
        // if (isAutoSubmit) calculateResult(getFormatedTime(0));
    }

    function onSubmitBeforeTimeout(){
        if (collectedAnswer.questions[currentStep-1].answer === 0){
            toast.error("Please choose the answer")
        }else{
            document.getElementById("pause-timer").click();
            let leftSeconds = Number(document.getElementById('pause-timer').innerHTML);
            setIsAutoSubmit(false);
            calculateResult(getFormatedTime(leftSeconds));
        }
    }

    function calculateResult(completionTime){
        setIsLoading(true);
        let tmpArry = [];
        answerList.map((item, i) => {if (item) tmpArry.push(true)});
        setRightAnswers(tmpArry.length);
        submitQuiz(tmpArry.length, completionTime);
    }

    function submitQuiz(score, timeToComplete) {
        collectedAnswer.score = score;
        collectedAnswer.timeToComplete = timeToComplete;
        collectedAnswer.userId = localStorage.getItem('user_id');
        userService.submitQuiz(collectedAnswer).then((response) => {
            setIsLoading(false);
            if (response.data.status === 200){
                handleModalShowHide1();
            }else{
                toast.error("Some Error Occur");
            }  
        }).catch((error) => {
            setIsLoading(false);
            toast.error("Some Error Occur");
        });
    }

    function handleAnswerOptions(answerId, questionId, index, isRight) {
        let tmp = collectedAnswer
        let tmp2 = answerList;
        tmp.questions[index] = {quesId: questionId, answer: answerId};
        tmp2[index] = isRight;
        setCollectedAnswer(tmp);
        setAnswerList(tmp2);
    }

    return (
        <div>
            {isLoading && <Loader/>}
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
                                <p className="pb-0 mb-3">You have won {rightAnswers === totalQuestions ? 10 : 5}% discount on your next purchase.</p>
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
                                        <p>{quizCompletionTime}</p>
                                    </div>
                                </div>
                                <div className="row pb-2 mt-3">
                                    <div className="col-md-6 mb-3 redeem_btn">
                                        <a className="btn" href="/offer">REDEEM</a>

                                    </div>
                                    <div className="col-md-6 mb-3 share_btn">
                                    <a className="btn" href="/">GO TO HOME</a>
                                    </div>
                                    <div className="col-md-12 mb-2 share_btn">
                                        <a className="btn"  href={"/result?id="+ quizId}>Check your Answers</a>
                                    </div>
                                    {/* <div className="col-md-12 mb-2 home_btn">
                                        <a className="btn" href="/">GO TO HOME</a>
                                    </div> */}
                                    <ShareOnSocialMedia url={window.location.href} text="Big4Health - Quiz" quizClass="share-Quiz"/>
                                </div>
                            </div>

                        </Modal.Body>
                    </Modal>

                </React.Fragment>
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
                {(props.questionInfo.answers[0].type === 'text') ?
                <div className="answer_box mt-2">
                    <fieldset>
                        <Form.Group>
                            <Form.Label as="legend">
                            </Form.Label>
                            {props.questionInfo.answers.map((option, i) => {
                            //     if (option.type && option.type === 'image'){
                                    
                            //        return (
                            //            <div className="col-sm-4 row" style={{ margin: '20px 0px 10px -15px' }}>
                            //                <Form.Check
                            //                    type="radio"
                            //                    name="formHorizontalRadios"
                            //                    id="formHorizontalRadios1"
                            //                 //    defaultChecked={status}
                            //                    onClick={() => handleAnswerOptions(option._id, props.questionInfo._id, props.step - 1, option.isRight)}
                            //                />
                            //                <div className="select_image" style={{ margin: '0px 8px' }}>
                            //                    <img src={config.imageUrl + option.value} alt="img" className="img-type-answer-option" style={{ margin: '-34px ​0px 12px 28px !important' }} />
                            //                </div>
                            //            </div>
                            // )
                            //     }else{
                                    return (<Form.Check
                                        type="radio"
                                        label={option.value}
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        // defaultChecked={status}
                                        onClick={() => handleAnswerOptions(option._id, props.questionInfo._id, props.step -1, option.isRight)}
                                    />)

                                // }
                            })}      
                        </Form.Group>
                    </fieldset>
            </div>
            :
            <div className="answer_box mt-2 py-4">
                <div className="row">
                {props.questionInfo.answers.map((option, i) => {
                    return(<div className="col-sm-3 text-center">
                        <div className="select_image">
                            <img src={config.imageUrl + option.value} alt="img" style={{objectFit: 'cover'}}/>
                            <span> <Form.Check
                                type="radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onClick={() => handleAnswerOptions(option._id, props.questionInfo._id, props.step - 1, option.isRight)}
                            /></span>
                        </div>
                    </div>)
                    })}
                </div>
            </div>
           }
       </div>
        );     
    }

}
export default Quiz;


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
