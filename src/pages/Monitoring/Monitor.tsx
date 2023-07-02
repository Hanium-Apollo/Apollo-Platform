import React from "react";
import '../../assets/css/monitoringPage.css';
import { useNavigate } from "react-router-dom";




function Monitor() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    };

    const goToBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className="text-block">
                <p className="container-name">우와요기이츠라이더스</p>
            </div>

            <div className="cpu-block">
                <div className="NameBlock">
                    <p className="text-match">CPU Utilization</p>
                </div>
            </div>

            <div className="log-block">
                <div className="NameBlock">
                    <p className="text-match">Log Check</p>
                </div>
            </div>

            <div className="memory-block">
                <div className="NameBlock">
                    <p className="text-match">Memory</p>
                </div>
            </div>

            <div className="disk-block">
                <div className="NameBlock">
                    <p className="text-match">Disk I/O</p>
                </div>
            </div>

            <div className="networkin-block">
                <div className="NameBlock">
                    <p className="text-match">Network In</p>
                </div>
            </div>

            <div className="networkout-block">
                <div className="NameBlock">
                    <p className="text-match">Network Out</p>
                </div>
            </div>

            <button className="home-button" onClick={goToMain}>
                <p className="button-text">홈으로</p>
            </button>

            <button className="back-button" onClick={goToBack}>
                <p className="button-text">이전으로</p>
            </button>

        </div>
      
    );
}

export default Monitor;
