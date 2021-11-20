import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "https://kms-gratibox.herokuapp.com" : "http://localhost:4000";

function postSignUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body)
}

export {
    postSignUp,
}