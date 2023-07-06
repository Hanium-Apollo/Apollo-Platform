import React from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/FailPage.css';
import Button from "../../components/button/Button";




function Fail() {

    return (
        <div>
            <img src={logo} className="flogo" alt="logo" />
            <p className="fmessage">FAILED !</p>
            <p className="fdone">배포에 실패하였습니다</p>
            <p className="fcheck">다시 시도해 주세요</p>
            <Button css={"fhomebtn"} text={"home"}/>
        </div>
      
    );
}

export default Fail;
