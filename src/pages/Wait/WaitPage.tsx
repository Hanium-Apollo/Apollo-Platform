import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../apis/UserServiceType";
import {
  getUserSignInService,
  getUserSignUpService,
} from "../../apis/UserService";
import { useCallback, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

interface WaitProps {
  action?: string;
}

const Wait: React.FC<WaitProps> = ({ action }) => {
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
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
          navigate("/");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [navigate, action]);
  useEffect(() => {
    handleLogin();
  }, [handleLogin]);
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
