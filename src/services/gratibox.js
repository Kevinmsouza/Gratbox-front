import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "https://kms-gratibox.herokuapp.com" : "http://localhost:4000";

function createConfig(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function postSignUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body)
}

function postLogin(body) {
    return axios.post(`${BASE_URL}/login`, body)
}

function postPlan(body, token){
    return axios.post(`${BASE_URL}/plans`, body, createConfig(token))
}

export {
    postSignUp,
    postLogin,
    postPlan,
}