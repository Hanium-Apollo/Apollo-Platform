// import React, {useState, useEffect} from "react";
import logoname from "../../assets/images/logoname.png";
import "../../assets/css/MainPage.css";
import LoginButton from "./components/LoginButton";
import { Button as MaterialButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
// import StartForm from "./components/StartForm";
import NumberList from "./components/RepoList";

const buttonStyles = css`
  background-color: gray;
  padding: 10px 20px;
  border: none;
  border-radius: 1000px;
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: 63.2%;
  right: 5%;
  weight: 19vw;
  height: 5vh;

  @font-face {
    font-family: Inter';
    src: url(../../fonts/Inter-Bold.ttf) format('truetype');
  }

  font-family: 'Inter';
  `;

const StyledButton = styled(MaterialButton)`
  ${buttonStyles}
`;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function Main() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <img src={logoname} className="logoname" alt="logoname" />
      {/* {localStorage.getItem("isLogin") ? ( */}
        <>
          <StyledButton
            variant="contained"
            startIcon={<DescriptionIcon />}
            onClick={() => navigate("/about")}
          >
            Learn More..
          </StyledButton>
          <NumberList numbers={numbers} />
        </>
      {/* ) : (
        <div>
          <LoginButton />
        </div>
      )} */}
    </div>
  );
}

export default Main;
