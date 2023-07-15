import React from "react";
import { Grid } from "@mui/material";
import MainContainer from "../../components/about/MainContainer";
import { Section1 } from "../../components/about/section1";
import { Section2 } from "../../components/about/section2";
import { Section3 } from "../../components/about/section3";


const About: React.FC = () => {
  return (
        <MainContainer>
            <Grid item xs={12}>
                <Section1>
                </Section1>
            </Grid>
            <Grid item xs={12}>
                <Section2>
                </Section2>
            </Grid>
            <Grid item xs={12}>
                <Section3>
                </Section3>
            </Grid>
        </MainContainer>
  );
};

export default About;
