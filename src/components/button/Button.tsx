import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/button.css';

interface ButtonProps {
    text: string;
    css: string;
  }

function Button({text, css}: ButtonProps) {
    const navigate = useNavigate();
    const set_context = () => {
        if (text === "home")
            return "홈으로";
        else if (text === "monitor")
            return "모니터링";
        else if (text === "back")
            return "이전으로";
    };
    const goTo = () => {
        if (text === "home")
            navigate("/");
        else if (text === "monitor")
            navigate("/monitor");
        else if (text === "back")
            navigate(-1);
    };
    return (
        <div>
            <button className={css} type="submit" onClick={goTo}>{set_context()}</button>
        </div>
    );
}

export default Button;
