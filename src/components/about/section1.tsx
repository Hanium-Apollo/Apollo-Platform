import React from 'react';
import {Grid} from '@mui/material';
import styled from '@emotion/styled';
import { Fade } from "react-awesome-reveal";
import { Section1Inner } from './section1Inner';


const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #989898;
    border-radius: 20px;
    z-index: 1;
    padding: 50px 0 50px 0;
    transform: translateY(-8%);
    max-width: 1920px;

    @media (max-width: 768px) {
        width: 70%;
        margin: 20px 20px 20px 20px;
    }

    @media (max-width: 1280px) {
        width: 80%;
        margin: 20px 30px 30px 30px;
    }

    @media (max-width: 1920px) {
        width: 88vw;
        margin: 30px 30px 30px 30px;
    }  

    
`

const TextContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: 100%;
 `

const Text = styled.div`
    font-size: 7.8vw;
    color: inherit;
    letter-spacing: 4.8px;
    font-weight: bold;
    margin: 15px 0;
      @font-face {
          font-family: 'AppleBold';
          src: url('/fonts/AppleSDGothicNeoBold.ttf') format('truetype');
      }
    font-family: 'AppleBold';

    span.highlight {
        color: #F3F781;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
    }

    @media (max-width: 1280px) {
        font-size: 9vw;
    }
`

const InnerText = styled.div`
    font-size: 2vw;
    color: inherit;
    letter-spacing: 4.8px;
    padding: 15px 0;
    @font-face {
        font-family: 'Apple';
        src: url('/fonts/AppleSDGothicNeo.ttf') format('truetype');
      }
    font-family: 'Apple';
    
    @media (max-width: 768px) {
        font-size: 0.8vw;
        padding : 10px 0;
    }

    @media (max-width: 1280px) {
        font-size: 2.5vw;
    } 
`

const SubTitle = styled.div`
    font-size: 3.3vw;
    color: inherit;
    letter-spacing: 4.8px;
    font-family: 'Apple';
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 3vw;
    }

    @media (max-width: 1280px) {
        font-size: 4vw;
    }

`

interface Section1Props {
    children: React.ReactNode;
}


export const Section1: React.FC<Section1Props> = ({children}) => {
    
    return( 
        <SectionContainer>
            <TextContainer item xs={12}>
                <InnerContainer>
                    <Fade direction="up">
                        <Text>
                            {" Let's"}
                            <span className="highlight">{" APOLLO "}</span>
                        </Text>
                        <SubTitle>좀 더 빠르고, 좀 더 안전하게</SubTitle>
                        <InnerText> ✓ Github & Docker 이용으로 간편하게 </InnerText>
                        <InnerText> ✓ 실시간 모니터링으로 직관적이게</InnerText>
                        <InnerText> ✓ 자동화로 한걸음 더 편리하게</InnerText>
                    </Fade>
                </InnerContainer>
            </TextContainer>  
            <TextContainer item xs={12}>
                <Fade direction="up">
                    <Section1Inner>
                    </Section1Inner>
                </Fade>
            </TextContainer>
        </SectionContainer>  
    );
};