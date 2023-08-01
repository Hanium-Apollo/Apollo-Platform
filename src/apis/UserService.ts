import { apiClient } from "./ApiClient";
import { UserInfo } from "./UserServiceType";

export const getAuthenticationService = (code: String) => {
  return apiClient.post(`/api/authenticate`, {}, { params: { code } });
};

export const getUserSignUpService = (parsedInfo: UserInfo) => {
  return apiClient.post(`/api/save/user`, JSON.stringify(parsedInfo), {
    headers: { "Content-Type": "application/json" },
  });
};

export const getUserSignInService = (userLogin: String, userId: String) => {
  return apiClient.post(
    `/api/login/user`,
    {
      userLogin: userLogin,
      userId: userId,
    },
    { withCredentials : true }
  );
};
