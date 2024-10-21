import { apiClient } from "./config";

export const apiGetProducts = async () => apiClient.get("/products");

export const apiGetSingleProduct = async (slug) => apiClient.get(`/products/${slug}`);

export const apiAddProduct = async (payload) => apiClient.post("/products", payload);

export const apiEditProduct = async (payload) => {
    return apiClient.post("dashboard/edit_ad",payload)
}

// delete using id format