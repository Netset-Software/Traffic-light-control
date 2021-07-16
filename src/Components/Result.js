import React, { useState, useEffect } from 'react';
import { userService } from '../services'
import { toast } from 'react-toastify';
import { config } from '../config/config'
import Loader from './common/Loader'

const Result = () => {

    const [quizId, setQuizId] = useState({});
    const [quizData, setQuizData] = useState({});
    const [quizResult, setQuizResult] = useState({});
    const [rightAnswers, setRightAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [score, setScore] = useState('');

    useEffect(() => {
        let query = new URLSearchParams(window.location.search);
        setQuizId(query.get('id'));
        let userId = localStorage.getItem('user_id');
        if (userId) {
            getQuizResult(query.get('id'));
        } else {
            window.location.href = '/'
        }
    }, []);

    function getQuizResult(id) {
        setIsLoading(true);
        userService.getQuizResult(id).then((response) => {
            if (response.data.status === 200) {
                setQuizResult(response.data.data);
                setData(response.data.data);
                setScore(response.data.data.score);
            } else {
                setIsLoading(false);
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            toast.error("Some Error Occur");
            console.log("error ", error);
        });
    }

    function setData(result) {
        let questionArry = [];
        let answerArry = [];
        result.questions.map((question) => {
            questionArry.push(question.quesId);
            answerArry.push(question.answer);
        });
        let tmpQuizData = result.quizId;
        tmpQuizData.questions.map((question, i) => {
            if (question._id === questionArry[i]) {
                question.answers.map((answer, j) => {
                    // console.log(answer._id === answerArry[i], answer._id, answerArry[i]);
                    if (answer._id === answerArry[i]) {
                        if (answer.isRight) setRightAnswers(rightAnswers + 1);
                        tmpQuizData.questions[i].answers[j].userAnswer = true;
                    } else {
                        tmpQuizData.questions[i].answers[j].userAnswer = false;
                    }
                })
            }
        })
        setTotalQuestions(tmpQuizData.questions.length);
        setQuizData(tmpQuizData);
        setIsLoading(false);
    }
    return (
        <>
        {isLoading && <Loader/>}
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 reuslt_title">
                        <h1 className="mb-0 ">BIG4 Quiz Results</h1>
                        {/* <h2 className="mb-0 mt-3">Score {rightAnswers} of {totalQuestions} </h2> */}
                        <h2 className="mb-0 mt-3">Score {score} of {totalQuestions} </h2>

                        {/* <p>You have won {rightAnswers === totalQuestions ? 10 : 5}% discount on your next purchase.</p> */}
                        <p>{quizData.questions && quizData.questions.length > 0 && "You have won " + (Number(score) === totalQuestions ? 10 : 5) + "% discount on your next purchase."}</p>

                    </div>
                    {/* <div className="col-sm-6 text-right">
                        <div className="signin_btn">
                            <a className="btn" href="/redeem">REDEEM</a>
                        </div>
                    </div> */}
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
                                            let ansClass = (answer.isRight && answer.userAnswer) || (answer.isRight && !answer.userAnswer) ? "correct_ans" : !answer.isRight && answer.userAnswer ? 'wrong_ans' : "";
                                            let checkImageSrc = require((answer.isRight && answer.userAnswer) || (answer.isRight && !answer.userAnswer) ? "../images/check.png" : !answer.isRight && answer.userAnswer ? "../images/remove.png" : "../images/uncheck.png").default
                                            let sideLable = (answer.isRight && answer.userAnswer) || (!answer.isRight && answer.userAnswer) ? "YOUR ANSWER" : answer.isRight && !answer.userAnswer ? "CORRECT ANSWER" : '';
                                            let sideLableClass = (answer.isRight && answer.userAnswer) || (answer.isRight && !answer.userAnswer) ? "qstn_label" : "wrong_label";
                                            // return (<li className={ansClass}>
                                            //     <span>
                                            //         <img src={checkImageSrc} className="mr-2" alt="img" />
                                            //         {answer.type && answer.type === 'image' ?
                                            //             <div className="select_image" style={{ margin: '0px 8px' }}>
                                            //                 <img src={config.imageUrl + answer.value} alt="img" className="img-type-answer-option" style={{ margin: '-34px ​0px 12px 28px !important' }} />
                                            //             </div>
                                            //             : answer.value}</span>

                                            //     {(answer.isRight || answer.userAnswer) && <span><label class={sideLableClass}>{sideLable}</label></span>}
                                            // </li>)
                                            return (<li className={ansClass}>
                                                <span>
                                                    <img src={checkImageSrc} className="mr-2" alt="img" />
                                                    {answer.type && answer.type === 'image' ?
                                                        <div className="select_image" style={{ margin: '0px 8px' }}>
                                                            <img src={config.imageUrl + answer.value} alt="img" className="img-type-answer-option" style={{ margin: '-34px ​0px 12px 28px !important' }} />
                                                        </div>
                                                        : answer.value}</span>

                                                {(answer.isRight || answer.userAnswer) && <span><label class={sideLableClass}>{sideLable}</label></span>}
                                            </li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
        </>

    );

    //   return (
    //     <> 
    //       <section className="py-4">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-sm-6 reuslt_title">
    //                         <h1 className="mb-0 ">BIG4 Quiz Results</h1>
    //                         <h2 className="mb-0 mt-3">Score 3 of 5</h2>
    //                         <p>You have won 5% discount on your next purchase.</p>
    //                     </div>
    //                     <div className="col-sm-6 text-right">
    //                         <div className="signin_btn">
    //                             <a className="btn" href="/redeem">REDEEM</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="row mb-4">
    //                     <div className="col-sm-12">
    //                         <label className="qstn_label">Question 1</label>
    //                     </div>
    //                     <div className="col-sm-12 text-left">
    //                     <div className="qstns_box">
    //                         <h4>What are some things you can do to help support your brain health?</h4>
    //                         <div className="answer_box1 mt-1 py-2">
    //                             <ul className="m-0 p-0">
    //                                 <li className="correct_ans">
    //                                     <span>
    //                                         <img src={require("../images/check.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="qstn_label">YOUR ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>

    //                                 </li>
    //                                 <li>
    //                                      <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         All of the Above
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         None
    //                                     </span>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 <div className="row mb-4">
    //                     <div className="col-sm-12">
    //                         <label className="qstn_label">Question 2</label>
    //                     </div>
    //                     <div className="col-sm-12 text-left">
    //                     <div className="qstns_box">
    //                         <h4>What are some things you can do to help support your brain health?</h4>
    //                         <div className="answer_box1 mt-1 py-2">
    //                             <ul className="m-0 p-0">
    //                                 <li className="correct_ans">
    //                                     <span>
    //                                         <img src={require("../images/check.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="qstn_label">YOUR ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>

    //                                 </li>
    //                                 <li>
    //                                      <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         All of the Above
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         None
    //                                     </span>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 <div className="row mb-4">
    //                     <div className="col-sm-12">
    //                         <label className="qstn_label">Question 3</label>
    //                     </div>
    //                     <div className="col-sm-12 text-left">
    //                     <div className="qstns_box">
    //                         <h4>What are some things you can do to help support your brain health?</h4>
    //                         <div className="answer_box1 mt-1 py-2">
    //                             <ul className="m-0 p-0">
    //                                 <li className="correct_ans">
    //                                     <span>
    //                                         <img src={require("../images/check.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="qstn_label">YOUR ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>

    //                                 </li>
    //                                 <li>
    //                                      <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         All of the Above
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         None
    //                                     </span>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 <div className="row mb-4">
    //                     <div className="col-sm-12">
    //                         <label className="qstn_label">Question 4</label>
    //                     </div>
    //                     <div className="col-sm-12 text-left">
    //                     <div className="qstns_box">
    //                         <h4>What are some things you can do to help support your brain health?</h4>
    //                         <div className="answer_box1 mt-1 py-2">
    //                             <ul className="m-0 p-0">
    //                                 <li className="correct_ans">
    //                                     <span>
    //                                         <img src={require("../images/check.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="qstn_label">CORRECT ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li className="wrong_ans">
    //                                     <span>
    //                                         <img src={require("../images/remove.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="wrong_label">YOUR ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>

    //                                 </li>
    //                                 <li>
    //                                      <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         All of the Above
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         None
    //                                     </span>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 <div className="row mb-4">
    //                     <div className="col-sm-12">
    //                         <label className="qstn_label">Question 5</label>
    //                     </div>
    //                     <div className="col-sm-12 text-left">
    //                     <div className="qstns_box">
    //                         <h4>What are some things you can do to help support your brain health?</h4>
    //                         <div className="answer_box1 mt-1 py-2">
    //                             <ul className="m-0 p-0">
    //                                 <li className="correct_ans">
    //                                     <span>
    //                                         <img src={require("../images/check.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                     <label class="qstn_label">CORRECT ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li className="wrong_ans">
    //                                     <span>
    //                                         <img src={require("../images/remove.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>
    //                                     <span>
    //                                         <label class="wrong_label">YOUR ANSWER</label>
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         Dreaming of a mobile companion.
    //                                     </span>

    //                                 </li>
    //                                 <li>
    //                                      <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         All of the Above
    //                                     </span>
    //                                 </li>
    //                                 <li>
    //                                     <span>
    //                                         <img src={require("../images/uncheck.png").default} className="mr-2" alt="img"/>
    //                                         None
    //                                     </span>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //      </>
    //);
}

export default Result;
