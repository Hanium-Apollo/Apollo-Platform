import { useNavigate } from "react-router-dom";
import {
  getUserSignInService,
  getUserSignUpService,
} from "../../apis/UserService";
import { useCallback, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { apiClient } from "../../apis/ApiClient";
import useAuth from "../../hooks/authhook";
import { defaultAuth } from "../../contexts/AuthContext";
import useToken from "../../hooks/tokenhook";

const Wait = () => {
  const navigate = useNavigate();
  const action = localStorage.getItem("action");
  const {auth, setAuth} = useAuth();
  const {setToken} = useToken();
  const handleLogin = useCallback(() => {
    let userLogin = auth.login;
    let userId = auth.id;
    if (action === "userSignUp") {
      getUserSignUpService(auth)
        .then((response) => {
          console.log("success");
          console.log(response);
          localStorage.removeItem("action");
          setAuth(defaultAuth);
          navigate("/");
          })
        .catch((error) => {
          console.log("error: ", error);
        });
    } else if (action === "userSignIn") {
      getUserSignInService(userLogin, userId)
        .then((response) => {
          console.log("success");
          console.log(response);
          apiClient.defaults.headers.common[
            "auth"
          ] = `${response.data.result.grantType} ${response.data.result.accessToken}`;
          localStorage.removeItem("action");
          setToken(response.data.result.accessToken);
          navigate("/");
          return response.data;
        })
          .catch((e) => {
            console.log(e.response.data);
            return "error";
        });

    }
  }, [navigate, action, auth, setAuth, setToken]);
  useEffect(() => {
    handleLogin();
  }, [handleLogin, action]);
  return (
    <div className="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FadeLoader
          color="white"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
};

export default Wait;
