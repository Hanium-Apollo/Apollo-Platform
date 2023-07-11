import React from 'react';
import {Grid} from '@mui/material';
import styled from '@emotion/styled';
import { Fade } from "react-awesome-reveal";
import { Section1Inner } from './section1Inner';


const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    height: 90vh;
    weight: 90vw;
    background-color: #5A5A5A;
    opacity: 1;
    border-radius: 20px;
    z-index: 1;
    margin: 20px 30px 20px 30px;
    transform: translateY(-10%);
`

const TextContainer = styled(Grid)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InnerContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 `

const Text = styled.div`
    font-size: 6rem;
    color: inherit;
    letter-spacing: 4.8px;
    font-weight: bold;
      @font-face {
          font-family: 'AppleBold';
          src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
      }
    font-family: 'AppleBold';

    span.highlight {
        color: #F3F781;
    }
`

const SubTitle = styled.div`
    font-size: 3rem;
    padding: 10px 0;
    color: inherit;
    letter-spacing: 4.8px;
    font-family: 'AppleBold';
`

const InnerText = styled.div`
    font-size: 2.3rem;
    color: inherit;
    letter-spacing: 4.8px;
    padding: 10px 0;
    @font-face {
        font-family: 'Apple';
        src: url('/fonts/AppleSDGothicNeo.ttf') format('truetype');
      }
    font-family: 'Apple';
`

interface Section1Props {
    children: React.ReactNode;
}


export const Section1: React.FC<Section1Props> = ({children}) => {
    
    return( 
        <SectionContainer>
            <TextContainer item xs={12} sm={6}>
                <Fade direction="left">
                    <Section1Inner>
                        {"Get Started"}
                    </Section1Inner>
                </Fade>
            </TextContainer>
            <TextContainer item xs={12}>
                <InnerContainer>
                    <Fade direction="up">
                        <Text>
                            {"Let's"}
                            <span className="highlight">{" APOLLO"}</span>
                        </Text>
                        <SubTitle>좀 더 빠르고, 좀 더 안전하게</SubTitle>
                        <InnerText> ✓ Github & Docker 이용으로 간편하게 </InnerText>
                        <InnerText> ✓ 실시간 모니터링으로 직관적이게</InnerText>
                        <InnerText> ✓ 자동화로 한걸음 더 편리하게</InnerText>
                    </Fade>
                </InnerContainer>
            </TextContainer>
        </SectionContainer>  
    );
};