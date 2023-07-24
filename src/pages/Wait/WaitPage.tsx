import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

interface WaitProps {
  userInfo?: Partial<UserInfo>;
}

interface UserInfo {
  id: string;
  login: string;
  username: string;
  email: string;
  profileUrl: string;
}

const Wait: React.FC<WaitProps> = ({ userInfo }) => {
  const navigate = useNavigate();

  const handleButtonClick = (action: string) => {
    if (action === "home") {
      navigate("/");
    } else if (action === "saveUser") {
      let info = localStorage.getItem("userInfo");
      if (!info) return;
      let parsedInfo = JSON.parse(info) as UserInfo;
      if (parsedInfo) parsedInfo.id = parsedInfo.id.toString();

      axios
        .post(
          "http://localhost:8080/api/save/user",
          JSON.stringify(parsedInfo),
          {
            headers: { "Content-Type": `application/json` },
          }
        )
        .then((response) => {
          console.log("성공띠");
          navigate("/");
        })
        .catch((error) => {
          console.error("땡:", error);
        });
    }
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick("saveUser")}>눌러줘잉~</Button>
    </div>
  );
};

export default Wait;
