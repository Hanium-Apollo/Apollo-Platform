import React from "react";
import '../../assets/css/monitoringPage.css';
import { useNavigate } from "react-router-dom";
import CPUChart from "../../components/monitoringChart/CpuChart";
import LogChart from "../../components/monitoringChart/LogChart";
import MemoryChart from "../../components/monitoringChart/MemoryChart";
import DiskChart from "../../components/monitoringChart/DiskChart";
import NetworkInChart from "../../components/monitoringChart/NetworkInChart";
import NetworkOutChart from "../../components/monitoringChart/NetworkOutChart";

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
                <p className="container-name">Container Name</p>
            </div>

            <div className="cpu-block">
                <div className="NameBlock">
                    <p className="text-match">CPU Utilization</p>
                </div>
                <CPUChart />
            </div>

            <div className="log-block">
                <div className="NameBlock">
                    <p className="text-match">Log Check</p>
                </div>
                <LogChart />
            </div>

            <div className="memory-block">
                <div className="NameBlock">
                    <p className="text-match">Memory</p>
                </div>
                <MemoryChart />
            </div>

            <div className="disk-block">
                <div className="NameBlock">
                    <p className="text-match">Disk I/O</p>
                </div>
                <DiskChart />
            </div>

            <div className="networkin-block">
                <div className="NameBlock">
                    <p className="text-match">Network In</p>
                </div>
                <NetworkInChart />
            </div>

            <div className="networkout-block">
                <div className="NameBlock">
                    <p className="text-match">Network Out</p>
                </div>
                <NetworkOutChart />
            </div>

            <button className="home-button" onClick={goToMain}>
                <p className="button-text">홈으로</p>
            </button>

            <button className="back-button" onClick={goToBack}>
                <p className="button-text">이전으로</p>
            </button>

        </div>
      
    );
};

export default Monitor;
