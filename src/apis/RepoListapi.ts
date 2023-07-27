import { apiClient } from "./ApiClient";

export const getRepoList = (userLogin: String) => {
  return apiClient.post(
    `/api/repository/list/${userLogin}`,
    {
      userLogin: userLogin,
    },
    { headers: { "Content-Type": "application/json" } }
  );
};
