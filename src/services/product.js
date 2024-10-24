import { apiClient } from "./config";

export const apiGetProducts = async () => await apiClient.get("/adverts");

export const apiGetSingleProduct = async (id) =>
  apiClient.get(`/adverts/${id}`);

export const apiAddProduct = async (payload) =>
  apiClient.post("/adverts", payload);

export const apiEditProduct = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

// delete using id format

export const apiSearchProduct = async (searchTerm) =>
  apiClient.get(
    `/adverts?filter={"title":{"$regex":"${searchTerm}","$options":"i"}}`
  );
