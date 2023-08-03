import { apiClient } from "./ApiClient";

export const getRepoListService = (userLogin: String) => {
  return apiClient.get(`/api/repository/list/${userLogin}`, {});
};

export const postRepoCreateService = (repoName: String) => {
  return apiClient.post(
    `/api/cloudformation/client`,
    { repoName: repoName },
    { withCredentials: true }
  );
};
