import React from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/SuccessPage.css';
import { useNavigate } from "react-router-dom";




function Success() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    };
    const goToMonitoring = () => {
        navigate("/monitor");
    };
    return (
        <div>
            <img src={logo} className="slogo" alt="logo" />
            <p className="smessage">LET'S APOLLO !</p>
            <p className="sdone">배포 성공 !</p>
            <p className="scheck">모니터링 페이지에서 배포 현황을 확인하세요</p>
            <button className="shomebtn" onClick={goToMain}>홈으로</button>
            <button className="smonitorbtn" onClick={goToMonitoring}>모니터링</button>
        </div>
      
    );
}

export default Success;
