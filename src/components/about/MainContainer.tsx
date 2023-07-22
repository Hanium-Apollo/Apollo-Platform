// import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 100px;
  background-color: #333333;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 80px 30px;
  }

  overflow: auto;
`;

export default MainContainer;
