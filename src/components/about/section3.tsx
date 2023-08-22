import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Docker_py from "../../assets/images/Docker_Py.png";

const SectionContainer = styled(Grid)`
  display: flex;
  position: absolute;
  background-color: #313131;
  z-index: 1;
  padding: 20px;
  max-width: 1440px;
  width: 100vw;
  top: 2100px;
  justify-content: center;
  align-items: center;
  left: 0;
`;

const Text = styled.div`
  font-size: 25px;
  color: lightgray;
  letter-spacing: 4.8px;
  font-weight: bold;
  margin: 30px 0;
  @font-face {
    font-family: "One";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/ONE-Mobile-Regular.ttf")
      format("truetype");
  }
  font-family: "One";

  span.highlight {
    color: #f3f781;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Section3Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  padding: 50px;
`;

interface Section3Props {
  children: React.ReactNode;
}

export const Section3: React.FC<Section3Props> = ({ children }) => {
  return (
    <SectionContainer container xs id="docker">
      <Grid item xs={12}>
        <Text>
          {
            "Apollo는 더 안전하고 편리한 배포 서비스를 위해 Docker & AWS 사용을 권장합니다."
          }
        </Text>
        <Text>
          {"Docker 파일 생성이 처음이시라구요? 가이드만 천천히 따라해주세요!"}
        </Text>
        <Section3Inner>
          <img src={Docker_py} alt="" width={"50%"} />
          <Text>{" Python 배포시 Dockerfile 작성요령 "}</Text>
        </Section3Inner>
      </Grid>
    </SectionContainer>
  );
};
