import React from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/FailPage.css';
import { useNavigate } from "react-router-dom";




function Fail() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    };
    return (
        <div>
            <img src={logo} className="flogo" alt="logo" />
            <p className="fmessage">FAILED !</p>
            <p className="fdone">배포에 실패하였습니다</p>
            <p className="fcheck">다시 시도해 주세요</p>
            <button className="fhomebtn" onClick={goToMain}>홈으로</button>
        </div>
      
    );
}

export default Fail;
