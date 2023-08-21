import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tab } from "../../components/Board/Tab";

const Container = styled.div`
  position: absolute;
  max-width: 1440px;
  width: 90vw;
  height: 90vh;
  background-color: #151515;
  opacity: 0.75;
  border-radius: 20px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export const Board = () => {
  return (
    <Container>
      <Tab />
    </Container>
  );
};
