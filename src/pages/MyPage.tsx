import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { UserInfo } from "../apis/UserServiceType";
import Image from "../assets/images/github_logo.png";

const Container = styled.div`
  min-height: 750px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
`;

const MyPageBox = styled(Grid)`
  display: block;
  width: 60%;
  height: 85vh;
  margin-top: 50px;
  background-color: gray;
  opacity: 0.8;
  border-radius: 20px;
  padding: 20px 0 10px 0;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled(Grid)`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const TextBox = styled(Grid)`
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const MyPage = () => {
  let info = localStorage.getItem("userInfo");
  let parsedInfo = info ? (JSON.parse(info) as UserInfo) : null;
  let userLogin = parsedInfo?.login;
  let profile = parsedInfo?.avatar_url;
  let name = parsedInfo?.username;

  return (
    <Container>
      <MyPageBox>
        <h1>마이페이지</h1>
        <ImageBox>
          <ProfileImage src={Image} alt="Profile" />
        </ImageBox>
        <TextBox>
          {name} {" 님 반갑습니다."}
        </TextBox>
        <TextBox>Wow</TextBox>
      </MyPageBox>
    </Container>
  );
};
