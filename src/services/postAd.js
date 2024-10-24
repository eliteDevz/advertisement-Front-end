import { apiClient, baseUrl } from "./config";

export const apiPostAd = async (payload)=> apiClient.post(`${baseUrl}/adverts`, payload)
