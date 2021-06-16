import { config } from '../config/config'
import axios from 'axios';
import { authHeader } from '../helpers';

var configHeaders = {
    headers: authHeader()
}

var formDataHeaders ={
    headers: {
        'deviceType': 'w',
        'appVersion': '1.0',
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*',
        // 'token': accessToken,
        'timezone': 'Asia/Kolkata'
    }
}
export const userService = {
    logIn,
    signUp,
    getQuizes,
    getQuiz,
    // logout,
    calculateBMI,
    submitQuiz,
    // verifyOtp,
    // createProfile,
    // getNewContest,
    // getCategoriesList,
    // getSubCategoriesList,
    // getLiveContest,
    // getOldContest,
    // getExpireSoonContest,
    // getContestDetail,
    // addPost,
    // pinPost,
};


function logIn(params) {
    let url = `${config.apiUrl}/userLogin`;
    return axios.post(url, params, configHeaders)
}

function signUp(params) {
    let url = `${config.apiUrl}/userSignUp`;
    return axios.post(url, params, configHeaders)
}

// function logout() {
//     let url = `${config.apiUrl}/users/logout`;
//     return GET(url, true)
// }

function getQuizes() {
    let url = `${config.apiUrl}/quiz`;
    return axios.get(url, configHeaders);
}

function getQuiz(quizeId) {
    let url = `${config.apiUrl}/quiz/${quizeId}`;
    return axios.get(url, configHeaders);
}

function calculateBMI(params) {
    let url = `${config.apiUrl}/calculateBMI`;
    return axios.post(url, params, configHeaders);
}

function submitQuiz(params) {
    let url = `${config.apiUrl}/quiz/submit`;
    return axios.post(url, params, configHeaders);
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