import { useEffect, useState } from "react";
import logoname from "../../assets/images/logoname.png";
import "../../assets/css/MainPage.css";
import LoginButton from "./components/LoginButton";
import { Button as MaterialButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import NumberList from "./components/RepoList";
import { apiClient } from "../../apis/ApiClient";

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
function Main() {
  const navigate = useNavigate();
  const [repoData, setRepoData] = useState([]);
  const storedUserInfo = localStorage.getItem('userInfo');

  let userInfo;
  try {
      userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  } catch (error) {
      console.error('Error parsing userInfo:', error);
      userInfo = null;
  }
  let userLogin;
  if (userInfo && userInfo.userLogin) {
      userLogin = userInfo.userLogin;
      console.log('userLogin:', userLogin);
  } else {
      console.log('Error: userLogin not found');
  }
  const url = `/api/repository/list/${userLogin}`;

  const getRepo = useCallback(() => {
    apiClient.get(url)
      .then(response => {
        console.log(response.data);
        setRepoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    getRepo();
  }, [getRepo]);

  return (
    <div className="main">
      <img src={logoname} className="logoname" alt="logoname" />
      {localStorage.getItem("isLogin") ? (
        <>
          <StyledButton
            variant="contained"
            startIcon={<DescriptionIcon />}
            onClick={() => navigate("/about")}
          >
            Learn More..
          </StyledButton>
          {repoData !== null && (
            <NumberList repo={repoData} />
          )}
        </>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default Main;
