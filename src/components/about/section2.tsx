import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { JackInTheBox } from 'react-awesome-reveal';

const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    background-color: #989898;
    border-radius: 20px;
    z-index: 1;
    padding: 50px 0 30px 0;

    @media (max-width: 1280px) {
        width: 80vw;
        margin: 100px 30px 60px 30px;
    }

    @media (max-width: 1920px) {
        width: 90vw;
        margin: 100px 50px 60px 50px;
    }  

`

const Text = styled.div`
    font-size: 8rem;
    color: inherit;
    letter-spacing: 4.8px;
    font-weight: bold;
    margin: 30px 0;
      @font-face {
          font-family: 'AppleBold';
          src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
      }
    font-family: 'AppleBold';

    span.highlight {
        color: #F3F781;
    }
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`

interface Section2Props {
    children: React.ReactNode;
}

export const Section2: React.FC<Section2Props> = ({ children }) => { 
    return (
    <SectionContainer container xs id='how'>
        <Grid item xs={6}>
            <JackInTheBox>
                <Text>
                    {"How to use "}
                </Text>
            </JackInTheBox>
        </Grid>
        <Grid item xs={6}>
            <JackInTheBox>
                <Text>
                    {"설명 듣고 적기"}
                </Text>  
            </JackInTheBox>      
        </Grid>
    </SectionContainer>
    );
};