import { apiClient } from "./ApiClient";

export const getRepoListService = (userLogin: String) => {
  return apiClient.get(`/api/repository/list/${userLogin}`, {});
};

export const getDeployListService = (userLogin: String) => {
  return apiClient.get(`api/cloudformation/${userLogin}`, {});
};

export const clientRepoCreateService = (repoName: String) => {
  return apiClient.post(
    `/api/cloudformation/client`,
    { repoName: repoName },
    { withCredentials: true, headers: { "Content-Type": "application/json" } }
  );
};

export const serverRepoCreateService = (repoName: String) => {
  return apiClient.post(
    `/api/cloudformation/server`,
    { repoName: repoName },
    { withCredentials: true, headers: { "Content-Type": "application/json" } }
  );
};

export const clientRepoDeleteService = (repoName: string) => {
  return apiClient.delete(`/api/cloudformation/client`, {
    data: { repoName: repoName },
    withCredentials: true,
  });
};

export const serverRepoDeleteService = (repoName: string) => {
  return apiClient.delete(`/api/cloudformation/server`, {
    data: { repoName: repoName },
    withCredentials: true,
  });
};
