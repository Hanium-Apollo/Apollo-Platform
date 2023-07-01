import React from "react";
import logoname from '../../assets/images/logoname.png';
import github from '../../assets/images/github_logo.png';
import '../../assets/css/MainPage.css';



function Main() {
    return (
        <div>
            <img src={logoname} className="logoname" alt="logoname" />
            <button className="login">
                <img src={github} className="github" alt="github" />Log in with GitHub
            </button>
        </div>
      
    );
}

export default Main;
