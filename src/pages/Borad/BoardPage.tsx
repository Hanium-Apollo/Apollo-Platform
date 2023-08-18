import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tab } from "../../components/Board/Tab";

const Container = styled.div`
  position: absolute;
  width: 1400px;
  height: 730px;
  background-color: #151515;
  opacity: 0.75;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  @media (max-width: 1500px) {
    width: 1300px;
    height: 650px;
  }
`;

export const Board = () => {
  return (
    <Container>
      <Tab/>
    </Container>
  );
};
