import React, {useState, useEffect} from "react";
import github from '../../../assets/images/github_logo.png';
import '../../../assets/css/button.css';

export function handleLogout() {
    localStorage.removeItem("isLogin");
    window.location.href = "/";
}

function LoginButton() {
    const handleLogin = () => {
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=eb98b73d98c77c524840&redirect_uri=http://localhost:3000/`;
        window.location.href = githubAuthUrl;
        localStorage.setItem("isLogin", JSON.stringify(true));
    };
    return (
        <button className="login" onClick={handleLogin}>
                <img src={github} className="github" alt="github" />Log in with GitHub
                </button>
    );

}

export default LoginButton;
