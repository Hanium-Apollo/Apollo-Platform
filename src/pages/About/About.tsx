import React from "react";
import styled from '@emotion/styled';
import { Grid } from "@mui/material";
import MainContainer from "../../components/about/MainContainer";
import {Section1} from "../../components/about/section1";


const About: React.FC = () => {
  return (
        <MainContainer container xs >
            <Grid item xs={12}>
                <Section1>
                    <h1>Section1</h1>
                </Section1>
            </Grid>
        </MainContainer>
  );
};

export default About;
