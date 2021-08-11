import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // 
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
    }
});

export default instance;