import { config } from '../config/config'
import axios from 'axios';
import { formDataHeader, jsonHeaders } from '../helpers';

var configFormDataHeaders = {
    headers: formDataHeader()
}

var configJsonHeaders = {
    headers: jsonHeaders()
}

var user_id = localStorage.getItem('user_id');

export const userService = {
    logIn,
    signUp,
    getQuizes,
    getQuiz,
    calculateBMI,
    submitQuiz,
    getQuizResult,

};


function logIn(params) {
    let url = `${config.apiUrl}/userLogin`;
    return axios.post(url, params, configJsonHeaders)
}

function signUp(params) {
    let url = `${config.apiUrl}/userSignUp`;
    return axios.post(url, params, configFormDataHeaders)
}

function getQuizes() {
    let url = `${config.apiUrl}/quiz?userId=${user_id}`;
    return axios.get(url, configFormDataHeaders);
}

function getQuiz(quizeId) {
    let url = `${config.apiUrl}/quiz/${quizeId}?userId=${user_id}`;
    return axios.get(url, configFormDataHeaders);
}

function calculateBMI(params) {
    let url = `${config.apiUrl}/calculateBMI`;
    return axios.post(url, params, configFormDataHeaders);
}

function submitQuiz(params) {
    let url = `${config.apiUrl}/quiz/submit`;
    return axios.post(url, params, configJsonHeaders);
}

function getQuizResult(quizeId) {
    let url = `${config.apiUrl}/quiz/${quizeId}/user/${user_id}`;
    return axios.get(url, configFormDataHeaders);
}

function handleError(error) {
    console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr", error);
    // console.log("response",error.response);
    // console.log("response",error.response.status);
    // console.log("response",error.response.data.message);
    if (error.response && error.response.status == 401) {
        alert(error.response.data.message);
        console.log("redirectionnnn");
        localStorage.clear();
        window.location.href = "/";
    } else {

        if (error.name == 'NetworkError') {
            alert('Please check you network');
        } else if (error.response) {
            alert(error.response.data.message);
        }
        else {
            alert("Something went wrong")
        }


    }
}