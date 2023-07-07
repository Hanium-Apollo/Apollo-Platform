import React, {useState, useEffect} from "react";
import logoname from '../../assets/images/logoname.png';
import github from '../../assets/images/github_logo.png';
import '../../assets/css/MainPage.css';
import Button from "../../components/button/Button";
import { Button as MaterialButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const buttonStyles = css`
  background-color: gray;
  padding: 10px 20px;
  border: none;
  border-radius: 1000px;
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: 63%;
  right: 2%;
  weight: 17%;

  @font-face {
    font-family: Inter';
    src: url(../../fonts/Inter-Bold.ttf) format('truetype');
  }

  font-family: 'Inter';
  `;

const StyledButton = styled(MaterialButton)`
 ${buttonStyles}
 `

export function handleLogout() {
    localStorage.removeItem("isLogin");
    window.location.href = "/";
}

function Main() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const navigate = useNavigate();


    const handleLogin = () => {
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=eb98b73d98c77c524840&redirect_uri=http://localhost:3000/`;
        window.location.href = githubAuthUrl;
        localStorage.setItem("isLogin", JSON.stringify(true));
    };
    const [accessToken, setAccessToken] = useState('');
    const handleCallback = () => {
        const urlParams = new URLSearchParams(window.location.search);

        const code = urlParams.get('code');
        if (code) {
          setAccessToken(code);
          console.log(code);
        } else {
          console.log('Error: No access code found.');
        }
      };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 서버로 입력값 전송하기
    console.log(inputValue1, inputValue2); // 예시: 콘솔에 입력값 출력
    // 서버로 전송 후 필요한 로직을 추가해야 합니다.
  };
    
    return (
        <div>
            <img src={logoname} className="logoname" alt="logoname" />
            {localStorage.getItem("isLogin") ? (
                <form onSubmit={handleLogin}>
                <input className="inputname" type="text" value={inputValue1} onChange={handleInputChange1} placeholder="서비스 이름을 입력해주세요"/>
                <input className="inputURL" type="text" value={inputValue2} onChange={handleInputChange2} placeholder="Github URL을 입력해주세요"/>
                <Button css={"startbtn"} text={"start"}/>
                <StyledButton variant="contained" startIcon= {<DescriptionIcon/> }onClick={() => navigate("/about")}>
                  Learn More..
                </StyledButton>
                </form>
            ) : (
                <button className="login" onClick={handleLogin}>
                <img src={github} className="github" alt="github" />Log in with GitHub
                </button>
            )}
        </div>
      
    );
}

export default Main;