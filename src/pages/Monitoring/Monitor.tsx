import React from "react";
import '../../assets/css/monitoringPage.css';
import BarShapeChart from "../../components/monitoringChart/BarShapeChart";
import LineShapeChart from "../../components/monitoringChart/LineShapeChart";
import Button from "../../components/button/Button";

function Monitor() {

    return (
        <div>
            <div className="text-block">
                <p className="container-name">Container Name</p>
            </div>

            <div className="cpu-block">
                <div className="NameBlock">
                    <p className="text-match">CPU Utilization</p>
                </div>
                <LineShapeChart />
            </div>

            <div className="log-block">
                <div className="NameBlock">
                    <p className="text-match">Log Check</p>
                </div>
                <BarShapeChart />
            </div>

            <div className="memory-block">
                <div className="NameBlock">
                    <p className="text-match">Memory</p>
                </div>
                <LineShapeChart />
            </div>

            <div className="disk-block">
                <div className="NameBlock">
                    <p className="text-match">Disk I/O</p>
                </div>
                <LineShapeChart />
            </div>

            <div className="networkin-block">
                <div className="NameBlock">
                    <p className="text-match">Network In</p>
                </div>
                <LineShapeChart />
            </div>

            <div className="networkout-block">
                <div className="NameBlock">
                    <p className="text-match">Network Out</p>
                </div>
                <LineShapeChart />
            </div>
            <Button css={"mhomebtn"} text={"home"}/>
            <Button css={"mbackbtn"} text={"back"}/>
        </div>
      
    );
};

export default Monitor;
