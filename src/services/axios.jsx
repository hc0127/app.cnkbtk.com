import axios from "axios";
axios.defaults.baseURL = process.env.SERVER_API_URL;

export default axios;