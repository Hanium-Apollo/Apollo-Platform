import React, {useState} from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/SuccessPage.css';
import Button from "../../components/button/Button";




function Success() {

    return (
        <div>
            <img src={logo} className="slogo" alt="logo" />
            <p className="smessage">LET'S APOLLO !</p>
            <p className="sdone">배포 성공 !</p>
            <p className="scheck">모니터링 페이지에서 배포 현황을 확인하세요</p>
            <Button css={"shomebtn"} text={"home"}/>
            <Button css={"smonitorbtn"} text={"monitor"}/>
        </div>
      
    );
}

export default Success;
