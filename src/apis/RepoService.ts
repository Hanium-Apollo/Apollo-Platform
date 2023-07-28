import { apiClient } from "./ApiClient";

export const getRepoListService = (userLogin: String) => {
  return apiClient.get(`/api/repository/list/${userLogin}`, {});
};
