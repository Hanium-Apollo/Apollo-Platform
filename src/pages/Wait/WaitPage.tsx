import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import { UserInfo } from "../../apis/UserServiceType";
import {
  getUserSignInService,
  getUserSignUpService,
} from "../../apis/UserService";

interface WaitProps {
  userInfo?: Partial<UserInfo>;
}

const Wait: React.FC<WaitProps> = ({ userInfo }) => {
  const navigate = useNavigate();

  const handleButtonClick = (action: string) => {
    let info = localStorage.getItem("userInfo");
    if (!info) return;
    let parsedInfo = JSON.parse(info) as UserInfo;
    let userLogin = parsedInfo.login;
    let userId = parsedInfo.id;
    if (action === "userSignUp") {
      if (parsedInfo) parsedInfo.id = parsedInfo.id.toString();
      getUserSignUpService(parsedInfo)
        .then((response) => {
          console.log("success");
          console.log(response);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    } else if (action === "userSignIn") {
      getUserSignInService(userLogin, userId)
        .then((response) => {
          console.log("success");
          console.log(response);
          navigate("/");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick("userSignIn")}>로그인</Button>
      <Button onClick={() => handleButtonClick("userSignUp")}>회원가입</Button>
    </div>
  );
};

export default Wait;
