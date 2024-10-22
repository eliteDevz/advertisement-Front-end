import { apiClient } from "./config";

export const apiPostAd = async => apiClient.post("dasboard/post_ad",payload)
