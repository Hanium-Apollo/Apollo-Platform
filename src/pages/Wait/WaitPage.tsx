import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

interface WaitProps {
  userInfo: UserInfo;
}

interface UserInfo {
  id: number;
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
      axios
        .post("http://localhost:8080/api/save/user", userInfo)
        .then((response) => {
          console.log("성공띠");
        })
        .catch((error) => {
          console.error("땡:", error);
        });
    }
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick("home")}>눌러줘잉~</Button>
    </div>
  );
}

export default Wait;

