import { apiClient } from "./ApiClient";

export const getAuthenticationService = (code: String) => {
  return apiClient.post(
    `/api/authenticate`,
    {
      auth: {
        username: "dlawjddn",
        password: "dlawjddn",
      },
    },
    { params: { code } }
  );
};
