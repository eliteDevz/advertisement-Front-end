import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return await apiClient.post("/vendors/register", payload);
};

export const apiProfile = async () => {
  return await apiClient.get("/vendors/me");
};

export const apiLogin = async (payload) =>
  apiClient.post("/vendors/login", payload);
//ask back end about the url

//logout
