import React, { useEffect, useRef } from "react";
import '../../assets/css/monitoringPage.css';
import BarShapeChart from "../../components/monitoringChart/BarShapeChart";
import LineShapeChart from "../../components/monitoringChart/LineShapeChart";
import Button from "../../components/button/Button";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Monitor() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        const buttonRef = useRef<HTMLButtonElement>(null);
        
    return (
        <div>
            <div className="text-block">
                Container Name
            </div>
            <div className="chart">
                <Slider {...settings} className="slider">
                    <div className="cpu-block">
                        <div className="NameBlock">
                            CPU Utilization
                        </div>
                        <LineShapeChart />
                    </div>

                    <div className="log-block">
                        <div className="NameBlock">
                            Log Check
                        </div>
                        <BarShapeChart />
                    </div>

                    <div className="memory-block">
                        <div className="NameBlock">
                            Memory
                        </div>
                        <LineShapeChart />
                    </div>

                    <div className="disk-block">
                        <div className="NameBlock">
                            Disk I/O
                        </div>
                        <LineShapeChart />
                    </div>

                    <div className="networkin-block">
                        <div className="NameBlock">
                            Network In
                        </div>
                        <LineShapeChart />
                    </div>

                    <div className="networkout-block">
                        <div className="NameBlock">
                            Network Out
                        </div>
                        <LineShapeChart />
                    </div>
                </Slider>
            </div>
            <div>
                <Button css={"mhomebtn"} text={"home"}/>
                <Button css={"mbackbtn"} text={"back"}/>
            </div>
        </div>
      
    );
};

export default Monitor;
