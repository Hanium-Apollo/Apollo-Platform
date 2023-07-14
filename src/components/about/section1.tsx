import React from 'react';
import {Grid} from '@mui/material';
import styled from '@emotion/styled';
import { Fade } from "react-awesome-reveal";
import { Section1Inner } from './section1Inner';


const SectionContainer = styled(Grid)`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #5A5A5A;
    border-radius: 20px;
    width: 85vw;
    z-index: 1;
    padding: 50px 0 30px 0;
    transform: translateY(-5%);
    
    @media (max-width: 1920px) {
        width: 100vw;
    }
    
`

const TextContainer = styled(Grid)`
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
    white-space: nowrap;
    margin: 20px 0;
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

const InnerText = styled.div`
    font-size: 2.3rem;
    color: inherit;
    letter-spacing: 4.8px;
    padding: 20px 0;
    @font-face {
        font-family: 'Apple';
        src: url('/fonts/AppleSDGothicNeo.ttf') format('truetype');
      }
    font-family: 'Apple';
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

const SubTitle = styled.div`
    font-size: 3.5rem;
    padding: 20px 0;
    color: inherit;
    letter-spacing: 4.8px;
    font-family: 'Apple';
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.6rem;
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