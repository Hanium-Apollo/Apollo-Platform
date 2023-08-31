// import React, { useEffect, useRef } from "react";
import "../../assets/css/monitoringPage.css";
import LineShapeChart from "../../components/monitoringChart/LineShapeChart";
import Button from "../../components/button/Button";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { UserInfo } from "../../apis/UserServiceType";
import React from "react";

export interface DataProps {
  id: string;
  label: string;
  timestamps: string[];
  values: number[];
  statusCode: string;
  messages: string[];
}

const Monitor = () => {
  const location = useLocation();
  const repoName = location.state?.repoName;
  const serviceId = location.state?.serviceId;
  let info = localStorage.getItem("userInfo");
  let parsedInfo = info ? (JSON.parse(info) as UserInfo) : null;
  let userId = parsedInfo?.id;
  const [Data, setData] = React.useState<DataProps[]>([]);
  useEffect(() => {
    const soket = new WebSocket(
      `${process.env.REACT_APP_SERVER_SOCEKT}/api/cloudwatch` +
        `?userId=${userId}&serviceId=${serviceId}`
    );
    soket.addEventListener("open", function (event) {
      console.log("open");
    });
    soket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
      setData(event.data);
    });
    soket.addEventListener("close", function (event) {
      console.log("close");
    });
    soket.addEventListener("error", function (event) {
      console.log("error");
    });
  });

  return (
    <div className="monitor">
      <div className="text-block">
        <div className="text">{repoName}</div>
      </div>
      {/* <div className="chart">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <div className="Data-block">
                <div className="NameBlock">{Data[0].id}</div>
                <LineShapeChart
                  id={Data[0].id}
                  label={Data[0].label}
                  timestamps={Data[0].timestamps}
                  values={Data[0].values}
                  statusCode={Data[0].statusCode}
                  messages={Data[0].messages}
                />
              </div>
            </Grid>
            <Grid item xs={6} md={12}>
              <div className="log-block">
                <div className="NameBlock">{Data[1].id}</div>
                <LineShapeChart
                  id={Data[1].id}
                  label={Data[1].label}
                  timestamps={Data[1].timestamps}
                  values={Data[1].values}
                  statusCode={Data[1].statusCode}
                  messages={Data[1].messages}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div> */}
      <div>
        <Button css={"mhomebtn"} text={"home"} />
        <Button css={"mbackbtn"} text={"back"} />
      </div>
    </div>
  );
};

export default Monitor;
