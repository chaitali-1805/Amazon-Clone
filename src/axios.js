import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-6a438/us-central1/api' //The API cloud function
});
export default instance;