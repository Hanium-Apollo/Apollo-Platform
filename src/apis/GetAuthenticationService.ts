import { apiClient } from "./ApiClient";

export const getAuthenticationService = (code: String) => {
  return apiClient.post(`/api/authenticate`, {}, { params: { code } });
};
