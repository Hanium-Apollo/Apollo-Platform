import React from 'react';
import {Grid} from '@mui/material';
import styled from '@emotion/styled';
import { SectorProps } from 'recharts';

const SectionContainer = styled(Grid)`
    display: block;
    position: relative;
    height: 90vh;
    background-color: #BDBDBD;
    opacity: 0.9;
    border-radius: 20px;
    z-index: 1;
    margin: 20px 20px 20px 20px;
    transform: translateY(-10%);
`

const TextContainer = styled(Grid)`
    height: 100%;
    display: flex;
    justify-content: center;
`
const InnerContainer = styled.div`
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
`
interface Section1Props {
    children: React.ReactNode;
}


export const Section1: React.FC<Section1Props> = ({children}) => {
    return(
        <SectionContainer>
            <TextContainer item xs={4} sm={6}>
                <InnerContainer>
                    <h1>Section1</h1>
                </InnerContainer>
            </TextContainer>
            <TextContainer item xs={6} sm={6}>
                <InnerContainer>
                    <h1>Section2</h1>
                </InnerContainer>
            </TextContainer>
</SectionContainer>   
    );
};