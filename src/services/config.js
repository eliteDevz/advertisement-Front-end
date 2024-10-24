import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;

//bringing in your access Token to authenticate
//access token from local storage
const token = localStorage.getItem("token");
//access authoration
//put token in an "if" 
if (token) {
    
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    // token is taken from local storage
    };

export const apiClient = axios.create({
    baseURL: baseUrl,
   
});

