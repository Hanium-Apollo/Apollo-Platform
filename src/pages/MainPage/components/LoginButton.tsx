import github from "../../../assets/images/github_logo.png";
import "../../../assets/css/button.css";
import { Dispatch, SetStateAction } from "react";

type SetActionType = Dispatch<SetStateAction<string>>;


export function handleLogout() {
  localStorage.removeItem("userInfo");
  window.location.href = "/";
}

const LoginButton = ({ setAction }: { setAction: SetActionType }) =>{
  const handleLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7600733c0c5ed7849ce6`;
    window.location.href = githubAuthUrl;
    setAction('userSignIn');
  };

  return (
    <button className="login" onClick={handleLogin}>
      <img src={github} className="github" alt="github" />
      Log in with GitHub
    </button>
  );
}

export default LoginButton;
