import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticationService } from "../../../apis/UserService";


const Signup = () => {
    const navigate = useNavigate();
    let action = '';
    const handleSignup = () => {
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7600733c0c5ed7849ce6`;
      window.location.href = githubAuthUrl;
      action = 'userSignUp';
    };
    const handleCallback = useCallback(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (code && action === 'userSignUp') {
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
    }, [navigate, action]);
  
    useEffect(() => {
      handleCallback();
    }, [handleCallback]);

  return (
    <p style={{color: "white" ,margin: "10px", cursor: "pointer" }} onClick={handleSignup}>signup</p>
  );
}

export default Signup;
