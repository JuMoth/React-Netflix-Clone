import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.ort/3",
    params: {
        api_key: process.env.api_key,
        language: "ko-KR",
    },
});

export default instance;