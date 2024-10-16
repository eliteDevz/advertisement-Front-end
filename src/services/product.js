import { apiClient } from "./config";

export const apiGetProducts = async () => apiClient.get("/products");

export const apiGetSingleProduct = async (slug) => apiClient.get(`/products/${slug}`);

export const apiAddProduct = async (payload) => apiClient.get("/products", payload);

