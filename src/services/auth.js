import { apiClient } from "./config"

export const apiSignup = async (payload) => {
    return apiClient.post("/dashboard/sign_up", payload);
}


export const apiLogin = async (payload) => apiClient.post("/dashboard/sign_up", payload);
//ask back end about the url


//logout
