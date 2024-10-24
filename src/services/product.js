import { apiClient } from "./config";

export const apiGetProducts = async () => apiClient.get("/products");

export const apiGetSingleProduct = async (id) => apiClient.get(`/products/${id}`);

export const apiAddProduct = async (payload) => apiClient.post("/products", payload);

export const apiEditProduct = async (payload) => {
    return apiClient.post("dashboard/edit_ad",payload)
}

// delete using id format