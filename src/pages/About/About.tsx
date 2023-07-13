import React from "react";
import { Grid } from "@mui/material";
import MainContainer from "../../components/about/MainContainer";
import { Section1 } from "../../components/about/section1";
import { Section2 } from "../../components/about/section2";


const About: React.FC = () => {
  return (
        <MainContainer container xs>
            <Grid item xs={12}>
                <Section1>
                </Section1>
            </Grid>
            <Grid item xs={12}>
                <Section2>
                </Section2>
            </Grid>
        </MainContainer>
  );
};

export default About;
