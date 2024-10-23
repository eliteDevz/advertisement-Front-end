import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return await apiClient.post("/vendors/register", payload);
};

export const apiLogin = async (payload) =>
  apiClient.post("/users/login", payload);
//ask back end about the url

//logout
