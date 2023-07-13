import React, {useState} from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/ResultPage.css';
import Button from "../../components/button/Button";




function Success() {

    return (
        <div className="result">
            <img src={logo} className="logo" alt="logo" />
            <p className="message">LET'S APOLLO !</p>
            <p className="done">배포 성공 !</p>
            <p className="check">모니터링 페이지에서 배포 현황을 확인하세요</p>
            <div>
            <Button css={"shomebtn"} text={"home"}/>
            <Button css={"smonitorbtn"} text={"monitor"}/>
            </div>
        </div>
      
    );
}

export default Success;
