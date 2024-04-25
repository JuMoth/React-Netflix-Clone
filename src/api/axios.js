import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.REACT_APP_api_key,
        language: "ko-KR",
    },
    headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_api_key}`
    },
});

export default instance;