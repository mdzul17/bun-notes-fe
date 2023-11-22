import Axios from "axios"
import cookieCutter from "cookie-cutter"

const http = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})