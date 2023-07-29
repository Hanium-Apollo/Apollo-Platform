import { useEffect, useCallback } from "react";
import { getAuthenticationService } from "../../../apis/UserService";
import { useNavigate } from "react-router-dom";

export function handleLogout() {
  localStorage.removeItem("userInfo");
  window.location.href = "/";
}

function Signup() {
  const navigate = useNavigate();
  const handleSignin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7600733c0c5ed7849ce6`;
    window.location.href = githubAuthUrl;
  };

  const handleCallback = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log(code);
      getAuthenticationService(code)
        .then((res) => {
          console.log(res);
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          navigate("/wait", { state: { action: 'userSignUp' } });
        })
        .catch((err) => {
          console.log("here");
          console.log(err);
        });
    } else {
      console.log("Error: code not found");
    }
  }, [navigate]);

  useEffect(() => {
    handleCallback();
  }, [handleCallback]);

  return (
    <p style={{color: "white" ,margin: "10px", cursor: "pointer" }} onClick={handleSignin}>signup</p>
  );
}

export default Signup;
