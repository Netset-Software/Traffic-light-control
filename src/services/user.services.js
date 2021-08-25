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
    forgotPassword,
    getQuizes,
    getQuiz,
    calculateBMI,
    submitQuiz,
    getQuizResult,
    getCurrentLocation,
    socialLogin,
    getBlogs,
    getBlog,
    getCategories,
    getProducts,
    updateFavourite,
    getFavourites,
    getProductDetail,
    addToCart,
    getCartProducts,
    updateQuantity,
    addCard,
    getCards,
    deleteCard,
    getProductCount

};


function logIn(params) {
    let url = `${config.apiUrl}/userLogin`;
    return axios.post(url, params, configJsonHeaders)
}

function socialLogin(params) {
    let url =  `${config.apiUrl}/userSignUp`;
    return axios.post(url, params, configFormDataHeaders)
}

function signUp(params) {
    let url = `${config.apiUrl}/userSignUp`;
    return axios.post(url, params, configFormDataHeaders)
}

function forgotPassword(params) {
    let url = `${config.apiUrl}/forgotPassword`;
    return axios.post(url, params, configJsonHeaders)
}

function getQuizes(city) {
    let url = `${config.apiUrl}/quiz?userId=${user_id ? user_id : ''}&location=${city}`;
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

function getCurrentLocation(lat, lng) {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=administrative_area_level_2&sensor=true&key=AIzaSyAyiC-K1_Bxfbh6jCaG3zs_Y_5PxrsXUGE`;
    return axios.get(url, jsonHeaders);   
}

function getBlogs(page) {
    let url = `${config.apiUrl}/blog?page=${page}`;
    return axios.get(url, configJsonHeaders);
}

function getBlog(id) {
    let url = `${config.apiUrl}/blog/${id}`;
    return axios.get(url, configJsonHeaders);
}

function getCategories(searchTxt) {
    let url = `${config.apiUrl}/product/category?search=${searchTxt}`;
    return axios.get(url, configJsonHeaders);
}

function getProducts(categoryId, searchTxt, pageNo) {
    let url = `${config.apiUrl}/product/all/list?category=${categoryId}&search=${searchTxt}&page=${pageNo}&userId=${user_id}`;
    return axios.get(url, configJsonHeaders);
}

function updateFavourite(params) {
    let url = `${config.apiUrl}/product/favourites`;
    return axios.post(url, params, configJsonHeaders);
}

function getFavourites() {
    let url = `${config.apiUrl}/favourites/products?user=${user_id}`;
    return axios.get(url, configJsonHeaders);
}

function getProductDetail(productId) {
    let url = `${config.apiUrl}/product/${productId}/details/product?userId=${user_id}`;
    return axios.get(url, configJsonHeaders);
}

function addToCart(params) {
    let url = `${config.apiUrl}/cart`;
    return axios.post(url, params, configJsonHeaders);
}

function getCartProducts(){
    let url = `${config.apiUrl}/cart?user=${user_id}`;
    return axios.get(url, configJsonHeaders);
}

function updateQuantity(params) {
    let url = `${config.apiUrl}/cart`;
    return axios.put(url, params, configJsonHeaders);
}

function addCard(params) {
    let url = `${config.apiUrl}/card`;
    return axios.post(url, params, configJsonHeaders);
}

function getCards() {
    let url = `${config.apiUrl}/card?userId=${user_id}`;
    return axios.get(url, configJsonHeaders);
}

function deleteCard(id) {
    let url = `${config.apiUrl}/card/${id}`;
    return axios.delete(url, configJsonHeaders);
}

function getProductCount(){
    let url = `${config.apiUrl}/count?userId=${user_id}`;
    return axios.get(url, configJsonHeaders);
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