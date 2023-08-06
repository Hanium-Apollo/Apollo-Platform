import { useNavigate } from "react-router-dom";
import {
  getUserSignInService,
  getUserSignUpService,
} from "../../apis/UserService";
import { useCallback, useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { apiClient } from "../../apis/ApiClient";
import useAuth from "../../hooks/authhook";
import useToken from "../../hooks/tokenhook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import { defaultAuth } from "../../contexts/AuthContext";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: gray;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    font-size: 30px;
    display: inline-block;
    padding: 20px 40px 20px 40px;
    white-space: nowrap;
  }
`;

const Wait = () => {
  const navigate = useNavigate();
  const action = localStorage.getItem("action");
  const [isFinish, SetFinish] = useState("");
  const { auth, setAuth } = useAuth();
  const { setToken } = useToken();
  const handleLogin = useCallback(() => {
    let userLogin = auth.login;
    let userId = auth.id;

    if (action === "userSignUp") {
      getUserSignUpService(auth)
        .then((response) => {
          console.log("success");
          console.log(response);
          localStorage.removeItem("action");
          localStorage.removeItem("userInfo");
          setAuth({ type: "SET_AUTH", payload: defaultAuth });
          SetFinish("signup");
          return "success";
        })
        .catch((error) => {
          console.log("error: ", error);
          alert("에러가 발생했습니다: " + error.response);
          navigate("/");
        });
    } else if (action === "userSignIn") {
      getUserSignInService(userLogin, userId)
        .then((response) => {
          console.log("success");
          console.log(response);
          apiClient.defaults.headers.common[
            "auth"
          ] = `Bearer ${response.data.result.accessToken}`;
          localStorage.removeItem("action");
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.result.accessToken)
          );
          setToken({
            type: "SET_TOKEN",
            payload: response.data.result.accessToken,
          });
          SetFinish("signin");
          return response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
          alert("에러가 발생했습니다: " + error.response);
          navigate("/");
          return error;
        });
    }
  }, [action, setAuth, auth, setToken, navigate]);

  useEffect(() => {
    const notify = (message: string) =>
      toast(message, {
        onClose: () => navigate("/"),
      });
    handleLogin();
    if (isFinish === "signup") {
      notify("회원가입이 완료되었습니다.");
    } else if (isFinish === "signin") {
      notify("로그인이 완료되었습니다.");
    }
  }, [handleLogin, isFinish, navigate]);

  return (
    <>
      <StyledToastContainer
        position="top-center"
        limit={1}
        closeOnClick
        autoClose={3000}
        hideProgressBar
        pauseOnHover
        closeButton={false}
      />
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
    </>
  );
};

export default Wait;
