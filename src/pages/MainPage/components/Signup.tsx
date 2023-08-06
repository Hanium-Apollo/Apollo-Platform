import "../../../assets/css/MainPage.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7600733c0c5ed7849ce6`;
    window.location.href = githubAuthUrl;
    localStorage.setItem("action", "userSignUp");
  };

  return (
    <p className="signup" onClick={handleSignup}>
      signup
    </p>
  );
};
