//import React from "react";
import logo from "../../assets/images/logo.png";
import "../../assets/css/ResultPage.css";
import Button from "../../components/button/Button";

function Fail() {
  return (
    <div className="result">
      <img src={logo} className="flogo" alt="logo" />
      <p className="message">FAILED !</p>
      <p className="done">배포에 실패하였습니다</p>
      <p className="check">다시 시도해 주세요</p>
      <Button css={"fhomebtn"} text={"home"} />
    </div>
  );
}

export default Fail;
